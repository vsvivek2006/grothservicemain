/**
 * Formats and normalizes AI generated content into rich semantic HTML for Tiptap editor.
 * Ensures H2, H3, paragraphs, lists, bold, italic, and blockquotes are preserved or converted.
 */
import DOMPurify from "isomorphic-dompurify";

// Allowlist shared by both normalizeContentToHtml and cleanHtml.
// Only tags and attributes the formatter itself can produce are allowed.
const DOMPURIFY_CONFIG: Parameters<typeof DOMPurify.sanitize>[1] = {
  ALLOWED_TAGS: [
    "h2", "h3",
    "p", "br",
    "ul", "ol", "li",
    "strong", "em", "code", "blockquote",
    "a", "hr",
  ],
  ALLOWED_ATTR: ["href", "target", "rel"],
  // Force safe link targets — prevent javascript: href XSS
  ALLOW_DATA_ATTR: false,
};

DOMPurify.addHook("afterSanitizeAttributes", (node) => {
  // Enforce target=_blank links get rel=noopener
  if (node.tagName === "A") {
    if (node.getAttribute("target") === "_blank") {
      node.setAttribute("rel", "noopener noreferrer");
    }
  }
});

export function normalizeContentToHtml(raw: string): string {
  if (!raw || typeof raw !== "string") return "";

  // 1. Strip code block fences
  let text = raw
    .trim()
    .replace(/^```(?:html|markdown)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();

  // 2. Normalize existing HTML heading tags (h1 -> h2, h4/h5/h6 -> h3)
  text = text
    .replace(/<h1\b([^>]*)>([\s\S]*?)<\/h1>/gi, "<h2$1>$2</h2>")
    .replace(/<h[4-6]\b([^>]*)>([\s\S]*?)<\/h[4-6]>/gi, "<h3$1>$2</h3>");

  // 3. Normalize markdown headings
  text = text.replace(/(?:^|\n)#{1,2}\s+([^\n]+)/g, "\n<h2>$1</h2>\n");
  text = text.replace(/(?:^|\n)#{3,6}\s+([^\n]+)/g, "\n<h3>$1</h3>\n");

  // 4. Normalize inline markdown (bold, italic, code, links)
  // Links: [text](url) -> <a href="$2">$1</a> (supporting both https:// and internal /paths)
  text = text.replace(/\[([^\]]+)\]\(((?:https?:\/\/|\/|#)[^\s)]+)\)/g, '<a href="$2">$1</a>');
  // Bold: **text** -> <strong>$1</strong>
  text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  // Italic: *text* -> <em>$1</em> (avoiding ** which is already replaced)
  text = text.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "<em>$1</em>");
  // Italic: _text_ -> <em>$1</em>
  text = text.replace(/(?<![a-zA-Z0-9])_([^_]+)_(?![a-zA-Z0-9])/g, "<em>$1</em>");
  // Code: `code` -> <code>$1</code>
  text = text.replace(/`([^`]+)`/g, "<code>$1</code>");

  // 5. Line-by-line block processing for lists, blockquotes, and unwrapped text
  const lines = text.split(/\r?\n/);
  const result: string[] = [];

  let currentListType: "ul" | "ol" | null = null;
  let inBlockquote = false;
  let blockquoteBuffer: string[] = [];

  const flushList = () => {
    if (currentListType) {
      result.push(`</${currentListType}>`);
      currentListType = null;
    }
  };

  const flushBlockquote = () => {
    if (inBlockquote) {
      const quoteContent = blockquoteBuffer.join(" ").trim();
      if (quoteContent) {
        const inner = quoteContent.startsWith("<p>") ? quoteContent : `<p>${quoteContent}</p>`;
        result.push(`<blockquote>${inner}</blockquote>`);
      }
      inBlockquote = false;
      blockquoteBuffer = [];
    }
  };

  const flushAll = () => {
    flushList();
    flushBlockquote();
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    if (!trimmed) {
      flushAll();
      continue;
    }

    // Markdown blockquote line: > quote
    const bqMatch = trimmed.match(/^>\s*(.*)$/);
    if (bqMatch) {
      flushList();
      inBlockquote = true;
      if (bqMatch[1]) {
        blockquoteBuffer.push(bqMatch[1]);
      }
      continue;
    } else {
      flushBlockquote();
    }

    // Markdown bullet list line: - item, * item, • item, + item
    const ulMatch = trimmed.match(/^[-*•+]\s+(.*)$/);
    if (ulMatch) {
      if (currentListType === "ol") flushList();
      if (!currentListType) {
        result.push("<ul>");
        currentListType = "ul";
      }
      result.push(`<li>${ulMatch[1]}</li>`);
      continue;
    }

    // Markdown ordered list line: 1. item
    const olMatch = trimmed.match(/^\d+\.\s+(.*)$/);
    if (olMatch) {
      if (currentListType === "ul") flushList();
      if (!currentListType) {
        result.push("<ol>");
        currentListType = "ol";
      }
      result.push(`<li>${olMatch[1]}</li>`);
      continue;
    }

    // If it was a list and now it's something else, flush list
    flushList();

    // Check if line is already an HTML block element
    const isHtmlBlock =
      /^<\/?(?:h[1-6]|p|ul|ol|li|blockquote|div|hr|pre|table|thead|tbody|tr|th|td|section|article)\b/i.test(
        trimmed
      ) ||
      /<\/(?:h[1-6]|p|ul|ol|li|blockquote|div|pre|table|section|article)>$/i.test(
        trimmed
      );

    if (isHtmlBlock) {
      result.push(trimmed);
    } else {
      // Naked text line -> wrap in paragraph
      result.push(`<p>${trimmed}</p>`);
    }
  }

  flushAll();

  let finalHtml = result.join("\n");

  // 6. Cleanup empty or duplicate paragraphs
  finalHtml = finalHtml
    .replace(/<p>\s*<\/p>/gi, "")
    .replace(/<p>&nbsp;<\/p>/gi, "")
    .replace(/<p><br\s*\/?><\/p>/gi, "");

  return cleanHtml(finalHtml);
}

export function cleanHtml(html: string): string {
  if (!html) return "";
  return DOMPurify.sanitize(html, DOMPURIFY_CONFIG) as string;
}
