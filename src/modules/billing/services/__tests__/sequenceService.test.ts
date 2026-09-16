import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { type SupabaseClient } from "@supabase/supabase-js";
import {
  getFinancialYear,
  generateDraftInvoiceNumber,
  allocateNextInvoiceNumber,
} from "../sequenceService";

describe("Invoice Sequence & Numbering Engine", () => {
  describe("Financial Year Calculation", () => {
    it("handles April 1st fiscal boundaries correctly", () => {
      // Last day of FY 25-26 (March 31)
      assert.equal(getFinancialYear(new Date(2026, 2, 31)), "25-26");

      // First day of FY 26-27 (April 1)
      assert.equal(getFinancialYear(new Date(2026, 3, 1)), "26-27");

      // Mid-year FY 26-27 (September 16)
      assert.equal(getFinancialYear(new Date(2026, 8, 16)), "26-27");

      // Q4 of FY 26-27 (January 15)
      assert.equal(getFinancialYear(new Date(2027, 0, 15)), "26-27");

      // Boundary into FY 27-28 (April 1)
      assert.equal(getFinancialYear(new Date(2027, 3, 1)), "27-28");
    });
  });

  describe("Draft Invoice Number Generation", () => {
    it("generates correctly formatted, non-colliding draft numbers", () => {
      const draft1 = generateDraftInvoiceNumber("26-27");
      const draft2 = generateDraftInvoiceNumber("26-27");

      assert.match(draft1, /^DRAFT\/26-27\/[A-Z0-9]+-[A-Z0-9]+$/);
      assert.match(draft2, /^DRAFT\/26-27\/[A-Z0-9]+-[A-Z0-9]+$/);
      assert.notEqual(draft1, draft2, "Subsequent draft IDs must be unique");
    });
  });

  describe("Atomic Allocation via PostgreSQL RPC", () => {
    it("calls RPC function and formats sequential invoice number with padding", async () => {
      let capturedArgs: any = null;

      const mockSupabase = {
        rpc: async (functionName: string, args: any) => {
          assert.equal(functionName, "allocate_next_invoice_number");
          capturedArgs = args;
          return { data: 1, error: null };
        },
      } as unknown as SupabaseClient;

      const result = await allocateNextInvoiceNumber(
        mockSupabase,
        "GS",
        new Date("2026-09-16")
      );

      assert.deepEqual(capturedArgs, {
        p_fy: "26-27",
        p_series: "GS",
      });
      assert.equal(result.sequenceNumber, 1);
      assert.equal(result.financialYear, "26-27");
      assert.equal(result.invoiceNumber, "GS/26-27/000001");
    });

    it("handles arbitrary sequences and custom series correctly", async () => {
      const mockSupabase = {
        rpc: async () => ({ data: 42, error: null }),
      } as unknown as SupabaseClient;

      const result = await allocateNextInvoiceNumber(
        mockSupabase,
        "INV",
        new Date("2026-09-16")
      );

      assert.equal(result.sequenceNumber, 42);
      assert.equal(result.invoiceNumber, "INV/26-27/000042");
    });
  });

  describe("Optimistic Concurrency Fallback Path", () => {
    it("initializes new sequence when table is empty and RPC is absent", async () => {
      const mockSupabase = {
        rpc: async () => ({ data: null, error: { message: "function not found" } }),
        from: (table: string) => {
          assert.equal(table, "invoice_sequences");
          return {
            select: () => ({
              eq: () => ({
                eq: () => ({
                  maybeSingle: async () => ({ data: null, error: null }), // empty
                }),
              }),
            }),
            insert: (payload: any) => {
              assert.equal(payload.last_number, 1);
              return {
                select: () => ({
                  single: async () => ({
                    data: { last_number: 1 },
                    error: null,
                  }),
                }),
              };
            },
          };
        },
      } as unknown as SupabaseClient;

      const result = await allocateNextInvoiceNumber(
        mockSupabase,
        "GS",
        new Date("2026-09-16")
      );

      assert.equal(result.sequenceNumber, 1);
      assert.equal(result.invoiceNumber, "GS/26-27/000001");
    });

    it("increments existing sequence with optimistic lock guard", async () => {
      let updatedLastNumber: number | null = null;

      const mockSupabase = {
        rpc: async () => ({ data: null, error: { message: "RPC offline" } }),
        from: (table: string) => {
          assert.equal(table, "invoice_sequences");
          return {
            select: () => ({
              eq: () => ({
                eq: () => ({
                  maybeSingle: async () => ({
                    data: { id: "seq-123", last_number: 14 },
                    error: null,
                  }),
                }),
              }),
            }),
            update: (payload: any) => {
              updatedLastNumber = payload.last_number;
              return {
                eq: (_field1: string, _val1: any) => ({
                  eq: (_field2: string, prevNumber: any) => {
                    assert.equal(prevNumber, 14, "Must enforce optimistic lock on current last_number");
                    return {
                      select: () => ({
                        maybeSingle: async () => ({
                          data: { last_number: 15 },
                          error: null,
                        }),
                      }),
                    };
                  },
                }),
              };
            },
          };
        },
      } as unknown as SupabaseClient;

      const result = await allocateNextInvoiceNumber(
        mockSupabase,
        "GS",
        new Date("2026-09-16")
      );

      assert.equal(updatedLastNumber, 15);
      assert.equal(result.sequenceNumber, 15);
      assert.equal(result.invoiceNumber, "GS/26-27/000015");
    });
  });
});
