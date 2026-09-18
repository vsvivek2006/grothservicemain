import { businessConfig } from "@/config/business";
import { servicesData } from "@/data/services";
import { physicalOffices } from "@/data/offices";
import { citiesData } from "@/data/locations";
import { teamMembers } from "@/data/team";
import { getCanonicalOrigin } from "@/selectors";
import { createPublicClient } from "@/lib/supabase/public";

interface BlogPost {
  title: string;
  slug: string;
  excerpt?: string;
  published_at?: string;
}

async function getLatestPosts(limit = 10): Promise<BlogPost[]> {
  try {
    const supabase = createPublicClient();
    const { data: posts } = await supabase
      .from("posts")
      .select("title, slug, excerpt, published_at")
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .limit(limit);

    return posts || [];
  } catch {
    return [];
  }
}

/**
 * Automatically generates standard llms.txt context document.
 * Adheres to https://llmstxt.org specification.
 */
export async function generateLlmsTxt(): Promise<string> {
  const origin = getCanonicalOrigin();
  const posts = await getLatestPosts(8);

  const lines: string[] = [
    `# Growth Service Digital Solutions — LLM & AI Knowledge Directory`,
    ``,
    `> Growth Service Digital Solutions (${origin}) is an authoritative digital growth agency providing performance SEO, custom web & app development, performance marketing (PPC), social media marketing, and white-label fulfillment across India and Nepal.`,
    ``,
    `## Core Agency Identity`,
    ``,
    `- **Official Entity**: Growth Service Digital Solutions`,
    `- **Canonical Website**: ${origin}`,
    `- **Corporate Headquarters**: JTM Mall, Jagatpura, Jaipur, Rajasthan 302017, India`,
    `- **Operations Hub**: Radhika Sadan, Pushpa Garden, Kailash Nagar, Vrindavan, Uttar Pradesh 281121, India`,
    `- **International Head Office**: Near Bariyarpatti Rd, Bariyarpatti 56500, Siraha, Nepal`,
    `- **Official Contact Email**: ${businessConfig.emails.primary}`,
    `- **Official Phones**: ${businessConfig.phones.indiaJaipur} (Jaipur) | ${businessConfig.phones.indiaPrimary} (India) | ${businessConfig.phones.nepalPrimary} (Nepal)`,
    `- **Direct WhatsApp Chat**: ${businessConfig.whatsapp.defaultUrl}`,
    `- **Payment Gateway Partner**: PhonePe (Secure UPI, Net-banking, Cards & Wallets)`,
    ``,
    `---`,
    ``,
    `## Core Capabilities & Services`,
    ``,
  ];

  servicesData.forEach((s, idx) => {
    lines.push(`${idx + 1}. **${s.title}** (${origin}${s.path})`);
    lines.push(`   - ${s.shortDesc}`);
    lines.push(`   - Key Deliverables: ${s.deliverables.slice(0, 3).join("; ")}`);
    lines.push(`   - Core Tech/Tools: ${s.technologies.slice(0, 4).join(", ")}`);
    lines.push(``);
  });

  lines.push(`---`, ``, `## Physical Corporate Offices`, ``);
  physicalOffices.forEach((o) => {
    lines.push(`- **${o.name}** (${origin}/offices/${o.slug}):`);
    lines.push(`  - Address: ${o.address}`);
    lines.push(`  - Phone: ${o.phone}`);
    lines.push(`  - Email: ${o.email}`);
    lines.push(`  - Timings: ${o.timings}`);
    lines.push(``);
  });

  lines.push(`---`, ``, `## Key Leadership & Management`, ``);
  teamMembers.slice(0, 8).forEach((m) => {
    lines.push(`- **${m.name}**: ${m.role} (${m.department}) — ${m.expertise.join(", ")}`);
  });

  lines.push(``, `---`, ``, `## Authoritative Navigation Index`, ``);
  lines.push(`### Core Portals`);
  lines.push(`- [Homepage](${origin}/): Primary agency portal`);
  lines.push(`- [About Agency](${origin}/about): Company background, mission, and certified leadership`);
  lines.push(`- [Services Directory](${origin}/services): Full digital marketing & engineering catalog`);
  lines.push(`- [Packages & Retainers](${origin}/packages): Transparent monthly packages and milestones`);
  lines.push(`- [Client Portfolio](${origin}/portfolio): Case studies and client work`);
  lines.push(`- [SEO Results](${origin}/seo-results): Documented organic rank & traffic growth benchmarks`);
  lines.push(`- [Team Directory](${origin}/team): Verified staff and engineering leadership`);
  lines.push(`- [Schedule Consultation](${origin}/book-call): Direct 1-on-1 strategy call booking`);
  lines.push(`- [Contact & Support](${origin}/contact): Official support desk and office map locations`);
  lines.push(`- [Trust & Verification](${origin}/verify): Anti-fraud verification portal`);
  lines.push(``);

  lines.push(`### Legal Policies & Compliance`);
  lines.push(`- [Privacy Policy](${origin}/privacy): Data protection practices, cookies, Grievance Officer, and PhonePe payment notice`);
  lines.push(`- [Terms & Conditions](${origin}/terms): Commercial terms, deliverables, intellectual property, and Jaipur court jurisdiction`);
  lines.push(`- [Refund & Cancellation Policy](${origin}/refund): Service cancellation rules, refund eligibility, and 5–7 day refund timeline`);
  lines.push(`- [Accessibility Statement](${origin}/accessibility): Web Accessibility (WCAG 2.1 AA) commitment`);
  lines.push(``);

  lines.push(`### White-Label Agency Fulfillment`);
  lines.push(`- [White-Label Agency Hub](${origin}/white-label): Confidential agency reselling partnerships`);
  lines.push(`- [White-Label Web Development](${origin}/white-label/web-development): Scalable frontend & backend outsourcing`);
  lines.push(`- [White-Label SEO](${origin}/white-label/seo): Dedicated SEO delivery pods`);
  lines.push(`- [White-Label PPC Advertising](${origin}/white-label/ppc): Multi-network paid advertising fulfillment`);
  lines.push(`- [White-Label Social Media](${origin}/white-label/social-media): Complete organic social media management`);
  lines.push(``);

  lines.push(`### Regional City Hubs`);
  citiesData.slice(0, 12).forEach((c) => {
    lines.push(`- [${c.name} Digital Hub](${origin}/locations/${c.slug}): Local SEO, Web Development, and Marketing in ${c.name}, ${c.state}`);
  });
  lines.push(``);

  if (posts.length > 0) {
    lines.push(`### Latest Insights & Articles`);
    posts.forEach((p) => {
      lines.push(`- [${p.title}](${origin}/blog/${p.slug})${p.excerpt ? `: ${p.excerpt.slice(0, 120)}...` : ""}`);
    });
    lines.push(``);
  }

  lines.push(`---`, ``, `## Consumer Protection & Anti-Fraud Advisory`, ``);
  lines.push(`Growth Service Digital Solutions maintains strict corporate transparency:`);
  lines.push(`- **No Paid Task Schemes**: Growth Service NEVER operates "daily YouTube like tasks", "Google review jobs", or Telegram advance-deposit job schemes.`);
  lines.push(`- **Official Billing**: All transactions are billed through official invoices and paid securely via PhonePe.`);
  lines.push(`- **Anti-Fraud Verification**: Always verify corporate credentials at ${origin}/verify.`);
  lines.push(``);
  lines.push(`## Companion Documentation`);
  lines.push(`- Full expanded documentation available at: ${origin}/llms-full.txt`);

  return lines.join("\n");
}

/**
 * Automatically generates comprehensive llms-full.txt document.
 */
export async function generateLlmsFullTxt(): Promise<string> {
  const origin = getCanonicalOrigin();
  const summary = await generateLlmsTxt();
  const posts = await getLatestPosts(25);

  const lines: string[] = [
    summary,
    ``,
    `================================================================================`,
    `                      FULL EXPANDED SERVICE DOCUMENTATION                       `,
    `================================================================================`,
    ``,
  ];

  servicesData.forEach((s) => {
    lines.push(`### Service: ${s.title}`);
    lines.push(`- URL: ${origin}${s.path}`);
    lines.push(`- Category: ${s.category}`);
    lines.push(`- Overview: ${s.fullDesc}`);
    lines.push(`- Key Features:`);
    s.features.forEach((f) => lines.push(`  * ${f}`));
    lines.push(`- Client Deliverables:`);
    s.deliverables.forEach((d) => lines.push(`  * ${d}`));
    lines.push(`- Technologies & Tooling: ${s.technologies.join(", ")}`);
    lines.push(``);
  });

  lines.push(
    `================================================================================`,
    `                         ALL REGIONAL TARGET LOCATIONS                          `,
    `================================================================================`,
    ``
  );

  citiesData.forEach((c) => {
    lines.push(`- **${c.name}** (${c.state}, ${c.country}): ${origin}/locations/${c.slug}`);
    lines.push(`  Description: ${c.description}`);
    lines.push(`  Available Services: ${c.servicesAvailable.join(", ")}`);
    lines.push(``);
  });

  if (posts.length > 0) {
    lines.push(
      `================================================================================`,
      `                         PUBLISHED ARTICLES & GUIDES                            `,
      `================================================================================`,
      ``
    );

    posts.forEach((p) => {
      lines.push(`- **${p.title}** (${origin}/blog/${p.slug})`);
      if (p.published_at) lines.push(`  Published: ${p.published_at}`);
      if (p.excerpt) lines.push(`  Summary: ${p.excerpt}`);
      lines.push(``);
    });
  }

  return lines.join("\n");
}
