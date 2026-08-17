import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Field Crew SMS Program | Full Deck Agency" },
  description:
    "How Full Deck Agency's internal field crew SMS program works and how crew members consent to receive operational text messages.",
};

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
    fontSize: "clamp(32px, 7vw, 44px)",
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
  consentBox: {
    marginTop: "32px",
    marginBottom: "8px",
    padding: "24px 28px",
    background: "#f5f5f5",
    border: "1px solid #e0e0e0",
    borderLeft: "3px solid #c0392b",
    borderRadius: "4px",
  } as const,
  consentTitle: {
    fontSize: "13px",
    fontWeight: 700,
    color: "#c0392b",
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    margin: "0 0 10px 0",
  } as const,
  consentText: {
    fontSize: "16px",
    lineHeight: 1.75,
    color: "#333333",
    margin: 0,
    fontWeight: 500,
  } as const,
};

export default function CrewSmsPage() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.eyebrow}>SMS Program</div>
        <h1 style={styles.h1}>Field Crew SMS Program</h1>
        <span style={styles.divider} aria-hidden="true" />

        <p style={styles.p}>
          Full Deck Agency operates an internal SMS program that allows our
          field crew members to submit jobsite photos. This page describes how
          the program works and how crew members consent to receive messages.
        </p>

        <h2 style={styles.h2}>How it works</h2>
        <p style={styles.p}>
          A crew member texts a jobsite photo to the company phone number. They
          receive automated text replies asking which job the photo is for, and
          confirming that the photo was saved. Messages are exchanged only
          between Full Deck Agency and its own field crew — no marketing or
          promotional messages are sent, and no consumer messaging is involved.
        </p>

        <h2 style={styles.h2}>How consent is given</h2>
        <p style={styles.p}>
          Crew members consent to receive these operational text messages as
          part of employee onboarding, and by texting a jobsite photo to the
          company number to begin the exchange. Participation is voluntary.
          Consent is given actively by the crew member — it is never assumed or
          pre-selected by default.
        </p>

        <div style={styles.consentBox}>
          <p style={styles.consentTitle}>Consent Statement</p>
          <p style={styles.consentText}>
            By participating in the Full Deck Agency crew SMS program, you agree
            to receive operational SMS messages from Full Deck Agency related to
            jobsite photo submission. Message frequency varies. Message and data
            rates may apply. Reply STOP to opt out at any time. Reply HELP for
            help.
          </p>
        </div>

        <h2 style={styles.h2}>More information</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <Link href="/privacy-policy" style={styles.link}>
              Privacy Policy
            </Link>
          </li>
          <li style={styles.li}>
            <Link href="/terms-of-service" style={styles.link}>
              Terms of Service
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
