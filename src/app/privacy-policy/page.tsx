import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Full Deck Agency collects, uses, and protects information from visitors and clients.",
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
  h3: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#1a1a1a",
    margin: "24px 0 8px 0",
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

export default function PrivacyPolicyPage() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.eyebrow}>Legal</div>
        <h1 style={styles.h1}>Privacy Policy</h1>
        <span style={styles.divider} aria-hidden="true" />
        <p style={styles.meta}>Effective date: {EFFECTIVE_DATE}</p>

        <p style={styles.p}>
          Full Deck Agency (&ldquo;Full Deck Agency,&rdquo; &ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This
          Privacy Policy explains what information we collect when you visit{" "}
          <Link href="/" style={styles.link}>
            fulldeckagency.com
          </Link>{" "}
          (the &ldquo;Site&rdquo;), contact us, or engage us for digital
          marketing services, and how we use and share that information. By
          using the Site or our services, you agree to the practices described
          here.
        </p>

        <h2 style={styles.h2}>1. Information We Collect</h2>

        <h3 style={styles.h3}>a. Information you provide</h3>
        <p style={styles.p}>
          We collect information you submit directly through forms, email, or
          phone, including:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Name, business name, email address, phone number, and mailing
            address;
          </li>
          <li style={styles.li}>
            Project details, marketing goals, current website URLs, and other
            information you choose to share when requesting a quote or audit;
          </li>
          <li style={styles.li}>
            Account credentials and access tokens you grant us for platforms
            such as Google Ads, Google Business Profile, Google Analytics, Meta
            Business Suite, or your website CMS, solely to deliver the
            services you have engaged us for;
          </li>
          <li style={styles.li}>
            Billing and payment information (processed by our third-party
            payment processor — we do not store full card numbers).
          </li>
        </ul>

        <h3 style={styles.h3}>b. Information collected automatically</h3>
        <p style={styles.p}>
          When you visit the Site, we and our service providers may
          automatically collect:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Device and browser information (IP address, browser type,
            operating system, device identifiers);
          </li>
          <li style={styles.li}>
            Usage data (pages viewed, links clicked, time on page, referring
            URL, approximate location based on IP);
          </li>
          <li style={styles.li}>
            Cookie and similar tracking-technology data (see Section 6).
          </li>
        </ul>

        <h2 style={styles.h2}>2. How We Use Your Information</h2>
        <p style={styles.p}>We use the information we collect to:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Respond to inquiries, schedule consultations, and provide quotes,
            audits, or proposals;
          </li>
          <li style={styles.li}>
            Deliver, manage, and improve our services — including websites,
            SEO, Google Ads, social media management, local listings, and
            content creation;
          </li>
          <li style={styles.li}>
            Process payments, send invoices, and maintain billing records;
          </li>
          <li style={styles.li}>
            Communicate with you about projects, performance reports,
            renewals, and service changes;
          </li>
          <li style={styles.li}>
            Send occasional marketing emails about our services (you can
            unsubscribe at any time);
          </li>
          <li style={styles.li}>
            Operate, secure, and improve the Site and detect or prevent
            fraud and abuse;
          </li>
          <li style={styles.li}>
            Comply with legal obligations and enforce our agreements.
          </li>
        </ul>

        <h2 style={styles.h2}>3. How We Share Information</h2>
        <p style={styles.p}>
          We do not sell your personal information. We share information only
          as described below:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Service providers and subprocessors</strong> who perform
            work on our behalf — including hosting (e.g., Vercel), email and
            CRM (e.g., Resend, Supabase), analytics, advertising platforms,
            scheduling, and payment processing;
          </li>
          <li style={styles.li}>
            <strong>Advertising and marketing platforms</strong> (e.g.,
            Google, Meta, Microsoft) when we manage campaigns on your behalf
            or when you interact with our Site;
          </li>
          <li style={styles.li}>
            <strong>Professional advisors</strong> such as accountants and
            attorneys, under confidentiality obligations;
          </li>
          <li style={styles.li}>
            <strong>Legal and safety</strong> reasons — to comply with law,
            respond to lawful requests, or protect the rights, property, or
            safety of Full Deck Agency, our clients, or others;
          </li>
          <li style={styles.li}>
            <strong>Business transfers</strong> — in connection with a merger,
            acquisition, financing, or sale of assets, subject to standard
            confidentiality protections.
          </li>
        </ul>

        <h2 style={styles.h2}>4. SMS / Text Messaging Consent</h2>
        <p style={styles.p}>
          Full Deck Agency operates an internal SMS program for field crew
          members to submit jobsite photos. Mobile phone numbers and any
          information obtained as part of this SMS program will not be shared
          with or sold to third parties or affiliates for marketing or
          promotional purposes. Message frequency varies. Message and data
          rates may apply. Reply STOP to opt out at any time, or HELP for
          assistance.
        </p>

        <h2 style={styles.h2}>5. Client Account Access</h2>
        <p style={styles.p}>
          When you grant us access to third-party platforms (Google Ads,
          Google Business Profile, Google Analytics, Search Console, Meta
          Business Suite, your CMS, hosting, or domain registrar), we use
          that access only to perform the services you have engaged us for.
          We will not use those credentials for any unrelated purpose, and
          you may revoke access at any time. We recommend granting account
          access through built-in delegation features rather than sharing
          passwords.
        </p>

        <h2 style={styles.h2}>6. Cookies and Tracking Technologies</h2>
        <p style={styles.p}>
          The Site uses cookies, pixels, and similar technologies to operate
          the Site, remember preferences, measure performance, and support
          advertising. This may include first-party analytics cookies and
          third-party cookies from providers such as Google Analytics,
          Google Ads, and Meta. You can control cookies through your browser
          settings; disabling them may affect Site functionality. Where
          required by law, we will request your consent before placing
          non-essential cookies.
        </p>

        <h2 style={styles.h2}>7. Third-Party Services and Links</h2>
        <p style={styles.p}>
          The Site and the services we deliver may include links to or
          integrations with third-party platforms (for example, Google,
          Meta, YouTube, scheduling tools, or hosting providers). Their use
          of your information is governed by their own privacy policies.
          We are not responsible for the practices of third parties.
        </p>

        <h2 style={styles.h2}>8. Data Retention</h2>
        <p style={styles.p}>
          We retain personal information for as long as needed to provide
          our services, maintain business records, comply with legal,
          accounting, or reporting obligations, and resolve disputes.
          Inquiry records and prospect data are typically retained for up
          to 24 months unless you ask us to delete them sooner.
        </p>

        <h2 style={styles.h2}>9. Data Security</h2>
        <p style={styles.p}>
          We use reasonable administrative, technical, and physical
          safeguards to protect personal information. However, no method
          of transmission or storage over the internet is 100% secure, and
          we cannot guarantee absolute security. You are responsible for
          keeping your account credentials confidential.
        </p>

        <h2 style={styles.h2}>10. Your Choices and Rights</h2>
        <p style={styles.p}>
          Depending on where you live, you may have the right to access,
          correct, delete, or receive a copy of your personal information,
          or to object to or restrict certain processing. To exercise these
          rights, email{" "}
          <a href="mailto:gabe@fulldeckagency.com" style={styles.link}>
            gabe@fulldeckagency.com
          </a>
          . You may also unsubscribe from marketing emails by using the
          unsubscribe link in any such email. We will respond within the
          time required by applicable law.
        </p>

        <h2 style={styles.h2}>11. Children&rsquo;s Privacy</h2>
        <p style={styles.p}>
          The Site and our services are intended for businesses and adults.
          We do not knowingly collect personal information from children
          under 13. If you believe a child has provided us information,
          contact us and we will delete it.
        </p>

        <h2 style={styles.h2}>12. International Visitors</h2>
        <p style={styles.p}>
          Full Deck Agency is based in the United States. If you access the
          Site from outside the U.S., you understand that your information
          will be processed in the United States, where data protection
          laws may differ from those in your jurisdiction.
        </p>

        <h2 style={styles.h2}>13. Changes to This Policy</h2>
        <p style={styles.p}>
          We may update this Privacy Policy from time to time. When we do,
          we will revise the &ldquo;Effective date&rdquo; above. Material
          changes will be communicated through the Site or by email where
          appropriate. Your continued use of the Site or our services after
          changes take effect constitutes acceptance of the updated policy.
        </p>

        <h2 style={styles.h2}>14. Contact Us</h2>
        <p style={styles.p}>
          Questions, requests, or concerns about this Privacy Policy or our
          handling of your information? Reach out:
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
