import test from "node:test";
import assert from "node:assert/strict";
import { type User } from "@supabase/supabase-js";
import {
  verifyAdminRole,
  assertPermission,
  AuthorizationError,
} from "../index";

test("Authorization Security Suite", async (t) => {
  await t.test("1. Unauthenticated request throws UNAUTHENTICATED (401)", () => {
    assert.throws(
      () => {
        verifyAdminRole(null);
      },
      (err: unknown) => {
        assert.ok(err instanceof AuthorizationError);
        assert.equal(err.status, 401);
        assert.equal(err.code, "UNAUTHENTICATED");
        return true;
      }
    );
  });

  await t.test("2. User with no app_metadata.role is rejected with FORBIDDEN (403)", () => {
    // Regular authenticated customer account with no admin role assigned
    const regularUser = {
      id: "user-regular-1",
      email: "visitor@example.com",
      app_metadata: {},
      user_metadata: {},
    } as unknown as User;

    assert.throws(
      () => {
        verifyAdminRole(regularUser);
      },
      (err: unknown) => {
        assert.ok(err instanceof AuthorizationError);
        assert.equal(err.status, 403);
        assert.equal(err.code, "FORBIDDEN");
        assert.match(err.message, /authorized administrator role/i);
        return true;
      }
    );
  });

  await t.test("3. Client role spoofing via user_metadata is completely blocked (403)", () => {
    // Malicious attacker setting user_metadata via client SDK
    const attackerUser = {
      id: "user-attacker-1",
      email: "attacker@example.com",
      app_metadata: {}, // server role is absent
      user_metadata: { role: "superadmin" }, // forged client metadata
    } as unknown as User;

    assert.throws(
      () => {
        verifyAdminRole(attackerUser);
      },
      (err: unknown) => {
        assert.ok(err instanceof AuthorizationError);
        assert.equal(err.status, 403);
        assert.equal(err.code, "FORBIDDEN");
        return true;
      }
    );
  });

  await t.test("4. Invalid/unknown app_metadata.role is rejected (403)", () => {
    const unknownRoleUser = {
      id: "user-unknown-role",
      email: "client@example.com",
      app_metadata: { role: "client_user" },
    } as unknown as User;

    assert.throws(
      () => {
        verifyAdminRole(unknownRoleUser);
      },
      (err: unknown) => {
        assert.ok(err instanceof AuthorizationError);
        assert.equal(err.status, 403);
        assert.equal(err.code, "FORBIDDEN");
        return true;
      }
    );
  });

  await t.test("5. Valid app_metadata.role returns verified admin context", () => {
    const validAdmin = {
      id: "admin-verified-1",
      email: "admin@growthservice.in",
      app_metadata: { role: "admin" },
    } as unknown as User;

    const context = verifyAdminRole(validAdmin);
    assert.equal(context.id, "admin-verified-1");
    assert.equal(context.email, "admin@growthservice.in");
    assert.equal(context.role, "admin");
    assert.ok(context.permissions.has("billing:write"));
    assert.ok(context.permissions.has("content:write"));
  });

  await t.test("6. Role permission boundaries enforced (assertPermission)", () => {
    const editorUser = {
      id: "editor-1",
      email: "editor@growthservice.in",
      app_metadata: { role: "editor" },
    } as unknown as User;

    const editorContext = verifyAdminRole(editorUser);

    // Editor has content:write
    assert.doesNotThrow(() => {
      assertPermission(editorContext, "content:write");
    });

    // Editor is denied billing:write
    assert.throws(
      () => {
        assertPermission(editorContext, "billing:write");
      },
      (err: unknown) => {
        assert.ok(err instanceof AuthorizationError);
        assert.equal(err.status, 403);
        assert.equal(err.code, "PERMISSION_DENIED");
        return true;
      }
    );
  });
});
