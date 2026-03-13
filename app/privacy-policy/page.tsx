import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Privacy policy for the Pristine Barbers website and analytics usage.",
    alternates: {
        canonical: "/privacy-policy",
    },
};

export default function PrivacyPolicyPage() {
    return (
        <main
            style={{
                maxWidth: "900px",
                margin: "0 auto",
                padding: "80px 20px",
                color: "#e8e8e8",
            }}
        >
            <h1 style={{ marginBottom: "24px" }}>Privacy Policy</h1>

            <p style={{ opacity: 0.85 }}>
                Pristine Barbers is committed to protecting your privacy. This
                policy explains how we collect, use, and protect any information
                you provide when using this website.
            </p>

            <h2 style={{ marginTop: "40px" }}>Information We Collect</h2>
            <p style={{ opacity: 0.85 }}>
                We collect limited, anonymised information about how visitors
                use our website. This includes data such as page visits, time
                spent on pages, and general location (city-level only).
            </p>

            <h2 style={{ marginTop: "32px" }}>How We Use Your Information</h2>
            <p style={{ opacity: 0.85 }}>
                This information is used solely to understand how our website is
                used and to improve its performance and content. We do not use
                this data for advertising or marketing purposes.
            </p>

            <h2 style={{ marginTop: "32px" }}>Cookies</h2>
            <p style={{ opacity: 0.85 }}>
                This website uses analytics cookies provided by Google Analytics.
                These cookies help us understand website traffic and usage
                patterns. The data collected does not identify you personally.
            </p>

            <h2 style={{ marginTop: "32px" }}>Third-Party Services</h2>
            <p style={{ opacity: 0.85 }}>
                We use Google Analytics to collect anonymised usage statistics.
                Google may process this data in accordance with their own
                privacy policy.
            </p>

            <h2 style={{ marginTop: "32px" }}>Data Retention</h2>
            <p style={{ opacity: 0.85 }}>
                Analytics data is retained for a limited period in line with
                Google Analytics default retention settings and is used only for
                statistical purposes.
            </p>

            <h2 style={{ marginTop: "32px" }}>Your Rights</h2>
            <p style={{ opacity: 0.85 }}>
                You have the right to request access to, correction of, or
                deletion of any personal data that may relate to you. To exercise
                these rights, please contact Pristine Barbers directly.
            </p>

            <h2 style={{ marginTop: "32px" }}>Contact</h2>
            <p style={{ opacity: 0.85 }}>
                If you have any questions about this privacy policy or how your
                data is handled, please contact:
            </p>

            <p style={{ marginTop: "12px", opacity: 0.85 }}>
                <strong>Pristine Barbers</strong><br />
                164 Charminster Rd<br />
                Bournemouth BH8 8UX<br />
                United Kingdom
            </p>

            <p style={{ marginTop: "40px", fontSize: "0.9rem", opacity: 0.6 }}>
                Last updated: {new Date().getFullYear()}
            </p>
        </main>
    );
}
