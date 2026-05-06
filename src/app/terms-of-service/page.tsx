import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing your use of the Full Deck Agency website and our digital marketing services.",
};

const EFFECTIVE_DATE = "May 6, 2026";

const styles = {
  page: {
    backgroundColor: "#ffffff",
    color: "#333333",
    paddingTop: "80px",
    paddingBottom: "96px",
  } as const,
  container: {
    maxWidth: "780px",
    margin: "0 auto",
    padding: "0 24px",
  } as const,
  eyebrow: {
    color: "#c0392b",
    fontSize: "13px",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    marginBottom: "12px",
  } as const,
  h1: {
    fontSize: "44px",
    lineHeight: 1.15,
    fontWeight: 800,
    color: "#1a1a1a",
    margin: "0 0 12px 0",
    letterSpacing: "-0.02em",
  } as const,
  divider: {
    display: "block",
    width: "60px",
    height: "3px",
    background: "#c0392b",
    margin: "16px 0 28px",
  } as const,
  meta: {
    color: "#6b6b6b",
    fontSize: "14px",
    marginBottom: "40px",
  } as const,
  h2: {
    fontSize: "24px",
    fontWeight: 700,
    color: "#1a1a1a",
    margin: "40px 0 12px 0",
    letterSpacing: "-0.01em",
  } as const,
  p: {
    fontSize: "16px",
    lineHeight: 1.75,
    color: "#444444",
    margin: "0 0 16px 0",
  } as const,
  ul: {
    margin: "0 0 16px 0",
    paddingLeft: "22px",
    color: "#444444",
    fontSize: "16px",
    lineHeight: 1.75,
  } as const,
  li: { marginBottom: "6px" } as const,
  link: {
    color: "#c0392b",
    textDecoration: "none",
    fontWeight: 600,
  } as const,
  callout: {
    fontSize: "15px",
    lineHeight: 1.7,
    color: "#1a1a1a",
    background: "#f5f5f5",
    borderLeft: "3px solid #c0392b",
    padding: "16px 20px",
    margin: "0 0 24px 0",
    borderRadius: "4px",
  } as const,
  contactBox: {
    marginTop: "48px",
    padding: "24px 28px",
    background: "#f5f5f5",
    borderLeft: "3px solid #c0392b",
    borderRadius: "4px",
  } as const,
  contactTitle: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#1a1a1a",
    margin: "0 0 8px 0",
  } as const,
  contactLine: {
    fontSize: "15px",
    color: "#444444",
    margin: "4px 0",
    lineHeight: 1.6,
  } as const,
};

export default function TermsOfServicePage() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.eyebrow}>Legal</div>
        <h1 style={styles.h1}>Terms of Service</h1>
        <span style={styles.divider} aria-hidden="true" />
        <p style={styles.meta}>Effective date: {EFFECTIVE_DATE}</p>

        <p style={styles.callout}>
          Please read these Terms of Service carefully. By using
          fulldeckagency.com or engaging Full Deck Agency for services, you
          agree to be bound by these terms. If you do not agree, do not use
          the Site or our services.
        </p>

        <p style={styles.p}>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to
          and use of the website at{" "}
          <Link href="/" style={styles.link}>
            fulldeckagency.com
          </Link>{" "}
          (the &ldquo;Site&rdquo;) and any digital marketing services
          provided by Full Deck Agency (&ldquo;Full Deck Agency,&rdquo;
          &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). They
          form a binding agreement between you (&ldquo;Client,&rdquo;
          &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and Full Deck Agency.
        </p>

        <h2 style={styles.h2}>1. Services</h2>
        <p style={styles.p}>
          Full Deck Agency provides digital marketing services for home
          service contractors and small businesses, which may include:
          website design and development, search engine optimization (SEO),
          Google Ads and other paid media management, social media
          management, content creation, and local listings management. The
          specific scope, deliverables, timelines, and fees for any
          engagement will be set out in a separate proposal, statement of
          work, or order form (each, an &ldquo;Order&rdquo;). In the event
          of a conflict between these Terms and an Order, the Order
          controls for that engagement.
        </p>

        <h2 style={styles.h2}>2. Eligibility and Accounts</h2>
        <p style={styles.p}>
          You represent that you are at least 18 years old, are authorized
          to enter into agreements on behalf of any business you represent,
          and that all information you provide is accurate and current. You
          are responsible for keeping login credentials and authorized
          third-party access secure.
        </p>

        <h2 style={styles.h2}>3. Acceptable Use</h2>
        <p style={styles.p}>You agree not to:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Use the Site or our services for any unlawful, deceptive, or
            abusive purpose;
          </li>
          <li style={styles.li}>
            Attempt to gain unauthorized access to the Site, any related
            systems, or another user&rsquo;s account;
          </li>
          <li style={styles.li}>
            Interfere with or disrupt the Site, our infrastructure, or our
            service providers;
          </li>
          <li style={styles.li}>
            Provide content that infringes intellectual property rights,
            violates privacy or publicity rights, or is defamatory, obscene,
            or otherwise objectionable;
          </li>
          <li style={styles.li}>
            Engage in practices that violate the policies of platforms we
            use on your behalf (Google, Meta, etc.) or that would reasonably
            place those accounts at risk of suspension.
          </li>
        </ul>

        <h2 style={styles.h2}>4. Client Responsibilities</h2>
        <p style={styles.p}>
          To deliver our services effectively, we rely on you to:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Provide accurate business information, brand assets, photos,
            and other content in a timely manner;
          </li>
          <li style={styles.li}>
            Grant us appropriate access to platforms, accounts, hosting,
            domains, and analytics tools required for the work;
          </li>
          <li style={styles.li}>
            Review and approve deliverables within agreed timeframes —
            unreasonable delays may extend timelines or affect results;
          </li>
          <li style={styles.li}>
            Ensure that all content you supply is lawful and that you have
            all necessary rights to use it.
          </li>
        </ul>

        <h2 style={styles.h2}>5. Fees and Payment</h2>
        <p style={styles.p}>
          Fees are set out in your Order. Unless stated otherwise:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Recurring services (e.g., SEO, Google Ads management, social
            media management, content) are billed monthly in advance;
          </li>
          <li style={styles.li}>
            Project-based work (e.g., websites) is billed according to the
            milestone schedule in the Order, typically with an initial
            deposit before work begins;
          </li>
          <li style={styles.li}>
            Invoices are payable within the terms shown on the invoice
            (default: net 7 days);
          </li>
          <li style={styles.li}>
            Late payments may accrue interest at 1.5% per month (or the
            maximum allowed by law, whichever is less) and may result in a
            pause or suspension of services after written notice;
          </li>
          <li style={styles.li}>
            Third-party costs — including ad spend, hosting, domains,
            premium plugins, stock media, and platform fees — are your
            responsibility and are billed separately or passed through at
            cost;
          </li>
          <li style={styles.li}>
            Fees do not include applicable sales, use, or other taxes,
            which will be added where required;
          </li>
          <li style={styles.li}>
            Except where required by law, all fees are non-refundable once
            services have been performed.
          </li>
        </ul>

        <h2 style={styles.h2}>6. Term, Renewal, and Termination</h2>
        <p style={styles.p}>
          Recurring service engagements continue on a month-to-month basis
          unless your Order states otherwise. Either party may terminate
          a recurring engagement with at least 30 days&rsquo; written
          notice (email is sufficient). Either party may terminate
          immediately for material breach that is not cured within 10 days
          of written notice, or for non-payment. On termination, you
          remain responsible for fees and pass-through costs incurred
          through the effective date of termination, and we will provide a
          reasonable handoff of your accounts and assets.
        </p>

        <h2 style={styles.h2}>7. Intellectual Property</h2>
        <p style={styles.p}>
          <strong>Our IP.</strong> The Site, our methodologies, internal
          processes, templates, proprietary tools, software, and any
          pre-existing materials we use to deliver services are owned by
          Full Deck Agency or our licensors and are protected by copyright,
          trademark, and other laws. Nothing in these Terms transfers
          ownership of our pre-existing IP.
        </p>
        <p style={styles.p}>
          <strong>Your IP.</strong> You retain ownership of the content,
          trademarks, logos, photos, and other materials you provide to us
          (&ldquo;Client Materials&rdquo;). You grant Full Deck Agency a
          non-exclusive, worldwide, royalty-free license to use Client
          Materials as necessary to deliver the services and to operate
          campaigns on your behalf.
        </p>
        <p style={styles.p}>
          <strong>Deliverables.</strong> Upon receipt of full payment for
          a deliverable (such as a website, written content, or
          campaign creative), Full Deck Agency assigns to you the
          ownership of that deliverable, excluding our pre-existing IP,
          third-party components, and tools used to create or maintain it
          (which remain licensed under their respective terms).
        </p>
        <p style={styles.p}>
          <strong>Portfolio rights.</strong> Unless you tell us otherwise
          in writing, Full Deck Agency may reference your name, logo, and
          non-confidential project work in our portfolio, case studies,
          and marketing materials.
        </p>

        <h2 style={styles.h2}>8. Third-Party Services and Platforms</h2>
        <p style={styles.p}>
          Our services often depend on third-party platforms (e.g., Google,
          Meta, hosting providers, analytics tools, scheduling tools, CRM
          and email providers). Your use of those platforms is subject to
          their own terms and policies. Full Deck Agency is not responsible
          for outages, policy changes, account suspensions, algorithm
          updates, ad disapprovals, or pricing changes by third parties,
          even when those events affect campaign performance or
          deliverables.
        </p>

        <h2 style={styles.h2}>9. Advertising and Performance</h2>
        <p style={styles.p}>
          We work hard to deliver strong results, but digital marketing
          outcomes depend on many factors outside our control — including
          market conditions, seasonality, competitor behavior, search and
          ad-platform algorithms, your operations and sales follow-up, and
          the quality and quantity of your creative and content. We do
          not guarantee specific rankings, lead volume, conversion rates,
          revenue, or return on ad spend. Any forecasts, projections, or
          examples we share are illustrative and not promises of results.
        </p>

        <h2 style={styles.h2}>10. Confidentiality</h2>
        <p style={styles.p}>
          Each party agrees to keep the other party&rsquo;s non-public
          business information confidential and to use it only for
          purposes of performing or receiving services. This obligation
          does not apply to information that is publicly available, was
          known prior to disclosure, is independently developed, or is
          required to be disclosed by law (with reasonable notice where
          permitted).
        </p>

        <h2 style={styles.h2}>11. Privacy</h2>
        <p style={styles.p}>
          Our handling of personal information is governed by our{" "}
          <Link href="/privacy-policy" style={styles.link}>
            Privacy Policy
          </Link>
          , which is incorporated into these Terms by reference.
        </p>

        <h2 style={styles.h2}>12. Disclaimers</h2>
        <p style={styles.p}>
          The Site and the services are provided &ldquo;as is&rdquo; and
          &ldquo;as available.&rdquo; To the fullest extent permitted by
          law, Full Deck Agency disclaims all warranties, whether express
          or implied, including warranties of merchantability, fitness for
          a particular purpose, non-infringement, accuracy, and
          uninterrupted availability. We do not warrant that the Site or
          services will be error-free, secure, or that defects will be
          corrected.
        </p>

        <h2 style={styles.h2}>13. Limitation of Liability</h2>
        <p style={styles.p}>
          To the fullest extent permitted by law, Full Deck Agency and its
          owners, employees, and contractors will not be liable for any
          indirect, incidental, special, consequential, exemplary, or
          punitive damages, or for lost profits, lost revenue, lost data,
          or business interruption, arising out of or related to these
          Terms, the Site, or our services, even if advised of the
          possibility of such damages. Our total aggregate liability for
          any claim arising out of or related to these Terms or the
          services will not exceed the fees paid by you to Full Deck
          Agency for the services giving rise to the claim during the
          three (3) months immediately preceding the event giving rise to
          the claim.
        </p>

        <h2 style={styles.h2}>14. Indemnification</h2>
        <p style={styles.p}>
          You agree to defend, indemnify, and hold harmless Full Deck
          Agency from and against any claims, damages, liabilities, losses,
          and expenses (including reasonable attorneys&rsquo; fees) arising
          out of: (a) your breach of these Terms or any Order; (b) Client
          Materials or content you provide; (c) your products, services,
          or business operations; or (d) your violation of any law or
          third-party right.
        </p>

        <h2 style={styles.h2}>15. Governing Law and Disputes</h2>
        <p style={styles.p}>
          These Terms are governed by the laws of the State of North
          Carolina, without regard to conflict-of-laws principles. The
          parties agree that any dispute arising out of or related to
          these Terms or our services will be resolved exclusively in the
          state or federal courts located in Wake County, North Carolina,
          and each party consents to personal jurisdiction and venue
          there. The parties first agree to attempt in good faith to
          resolve any dispute through informal discussion before filing a
          claim.
        </p>

        <h2 style={styles.h2}>16. Changes to These Terms</h2>
        <p style={styles.p}>
          We may update these Terms from time to time. When we do, we will
          revise the &ldquo;Effective date&rdquo; above and post the
          updated version on the Site. Material changes will take effect
          30 days after posting (or sooner if required by law). Your
          continued use of the Site or services after changes take effect
          constitutes acceptance of the updated Terms.
        </p>

        <h2 style={styles.h2}>17. Miscellaneous</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Entire agreement.</strong> These Terms, together with
            any Order and our Privacy Policy, are the entire agreement
            between the parties on this subject and supersede prior
            agreements.
          </li>
          <li style={styles.li}>
            <strong>Severability.</strong> If any provision is held
            unenforceable, the remaining provisions will remain in full
            force and effect.
          </li>
          <li style={styles.li}>
            <strong>No waiver.</strong> Failure to enforce any right is
            not a waiver of that right.
          </li>
          <li style={styles.li}>
            <strong>Assignment.</strong> You may not assign these Terms
            without our prior written consent. We may assign these Terms
            in connection with a merger, acquisition, or sale of assets.
          </li>
          <li style={styles.li}>
            <strong>Independent contractor.</strong> Full Deck Agency is
            an independent contractor; nothing in these Terms creates a
            partnership, joint venture, employment, or agency
            relationship.
          </li>
          <li style={styles.li}>
            <strong>Force majeure.</strong> Neither party is liable for
            delays or failures caused by events beyond reasonable control.
          </li>
        </ul>

        <h2 style={styles.h2}>18. Contact Us</h2>
        <p style={styles.p}>
          Questions about these Terms? Reach out:
        </p>

        <div style={styles.contactBox}>
          <p style={styles.contactTitle}>Full Deck Agency</p>
          <p style={styles.contactLine}>Attn: Gabe Andersen</p>
          <p style={styles.contactLine}>Apex, NC</p>
          <p style={styles.contactLine}>
            <a href="mailto:gabe@fulldeckagency.com" style={styles.link}>
              gabe@fulldeckagency.com
            </a>
          </p>
          <p style={styles.contactLine}>
            <Link href="/" style={styles.link}>
              fulldeckagency.com
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
