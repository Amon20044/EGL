import "./legal.css";

export const metadata = {
    title: "Privacy Policy",
    description: "EVOLVE Gamer League Privacy Policy - Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
    return (
        <section className="legal-page">
            <div className="legal-container">
                <h1 className="legal-title">Privacy Policy</h1>
                <p className="legal-date">Effective Date: 26 December 2025 | Last Updated: 26 December 2025</p>

                <div className="legal-content">
                    <h2>1. Introduction</h2>
                    <p>
                        Evolve (&quot;EGL&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy and handling personal data responsibly.
                    </p>
                    <p>
                        This Privacy Policy explains how we collect, use, store, disclose, and protect your information when you access or use our website, mobile application, Discord server, or related services (collectively, the &quot;Platform&quot;).
                    </p>
                    <p>By using the Platform, you agree to the practices described in this Privacy Policy.</p>

                    <h2>2. Information We Collect</h2>

                    <h3>2.1 Information You Provide Directly</h3>
                    <p>We may collect the following information during registration or usage:</p>
                    <ul>
                        <li>Name or display name</li>
                        <li>Email address or login credentials (OTP-based)</li>
                        <li>Gamer tag / IGN</li>
                        <li>Team details (team name, role, region)</li>
                        <li>Social media links (optional)</li>
                        <li>Uploaded content (images, clips, screenshots)</li>
                        <li>Communications with admins or support</li>
                    </ul>

                    <h3>2.2 Identity Verification Information (Aadhaar)</h3>
                    <p>For uniqueness, anti-fraud, and fair-play enforcement, we may collect or process:</p>
                    <ul>
                        <li>Aadhaar verification status (via OTP or upload)</li>
                        <li>Masked Aadhaar reference data (where applicable)</li>
                    </ul>
                    <p><strong>Important clarifications:</strong></p>
                    <ul>
                        <li>EGL does not store full Aadhaar numbers</li>
                        <li>Aadhaar data is not used for payments or financial verification</li>
                        <li>Aadhaar is used only to prevent duplicate accounts, smurfing, and ban evasion</li>
                    </ul>

                    <h3>2.3 Automatically Collected Information</h3>
                    <p>We may automatically collect:</p>
                    <ul>
                        <li>Device information (device type, OS)</li>
                        <li>App usage data (screens visited, actions taken)</li>
                        <li>IP address (for security and abuse prevention)</li>
                        <li>Logs related to match results, submissions, and admin actions</li>
                    </ul>

                    <h2>3. How We Use Your Information</h2>
                    <p>We use collected information to:</p>
                    <ul>
                        <li>Create and manage user accounts</li>
                        <li>Verify identity and ensure fair participation</li>
                        <li>Enable team formation and tournament operations</li>
                        <li>Maintain leaderboards, tiers, and recognition systems</li>
                        <li>Moderate content and enforce platform rules</li>
                        <li>Prevent cheating, abuse, or fraud</li>
                        <li>Communicate updates, announcements, and support messages</li>
                        <li>Improve platform performance and experience</li>
                    </ul>

                    <h2>4. Community & Under-15 Users</h2>
                    <ul>
                        <li>Users below 15 years of age may participate only in community spaces (e.g., Discord).</li>
                        <li>They are not permitted to participate in tournaments, rankings, or competitive features.</li>
                        <li>Minimal data is collected for community-only participation.</li>
                    </ul>

                    <h2>5. Data Sharing & Disclosure</h2>
                    <p>EGL does not sell or rent personal data.</p>
                    <p>Data may be shared only:</p>
                    <ul>
                        <li>With internal admins and moderators for platform operations</li>
                        <li>With service providers (hosting, analytics, verification APIs)</li>
                        <li>When required by law or regulatory authorities</li>
                        <li>To investigate violations or enforce platform rules</li>
                    </ul>
                    <p>All partners are required to maintain reasonable data protection standards.</p>

                    <h2>6. Third-Party Platforms & Services</h2>
                    <p>The Platform may integrate or link to third-party services such as:</p>
                    <ul>
                        <li>Discord</li>
                        <li>Game publishers (e.g., Krafton)</li>
                        <li>Social media platforms</li>
                    </ul>
                    <p>EGL is not responsible for third-party privacy practices. Users should review their respective policies independently.</p>

                    <h2>7. Data Storage & Security</h2>
                    <p>We use reasonable technical and organizational safeguards including:</p>
                    <ul>
                        <li>Secure infrastructure and access controls</li>
                        <li>Role-based admin permissions</li>
                        <li>Limited access to sensitive data</li>
                        <li>Monitoring for unauthorized access</li>
                    </ul>
                    <p>No system is completely secure; absolute security cannot be guaranteed.</p>

                    <h2>8. Data Retention</h2>
                    <ul>
                        <li>Data is retained only as long as necessary for operations, compliance, and dispute resolution</li>
                        <li>Inactive or banned accounts may retain limited data for audit and anti-fraud purposes</li>
                        <li>Users may request account deletion, subject to legal and operational requirements</li>
                    </ul>

                    <h2>9. User Rights</h2>
                    <p>Subject to applicable laws, users may request:</p>
                    <ul>
                        <li>Access to their personal data</li>
                        <li>Correction of inaccurate information</li>
                        <li>Deletion of their account</li>
                        <li>Withdrawal from non-essential communications</li>
                    </ul>
                    <p>Requests can be made via the contact details below.</p>

                    <h2>10. Platform Communications & Marketing</h2>
                    <p>EGL may use registered contact information (such as email or in-app notifications) to send:</p>
                    <ul>
                        <li>Platform updates and announcements</li>
                        <li>Tournament and event-related communications</li>
                        <li>Reward drops, giveaways, or opportunities in collaboration with partner brands</li>
                    </ul>
                    <p><strong>Important clarifications:</strong></p>
                    <ul>
                        <li>All communications are sent by EGL, not directly by third-party brands</li>
                        <li>EGL does not share or sell user contact details with partners</li>
                        <li>Partner-related messages are limited to relevant gaming, esports, or platform activities</li>
                    </ul>
                    <p>Users may opt out of non-essential marketing communications at any time.</p>

                    <h2>11. No Payments or Financial Data</h2>
                    <ul>
                        <li>EGL currently does not collect or process payments</li>
                        <li>No bank, card, wallet, or financial data is stored</li>
                        <li>Any future paid features will be governed by updated policies and explicit consent</li>
                    </ul>

                    <h2>12. Changes to This Privacy Policy</h2>
                    <p>This Privacy Policy may be updated from time to time. Continued use of the Platform constitutes acceptance of the revised policy.</p>

                    <h2>13. Governing Law & Jurisdiction</h2>
                    <p>This Privacy Policy is governed by the laws of India.</p>
                    <p>All disputes shall be subject to the exclusive jurisdiction of courts located in Bangalore, Karnataka.</p>

                    <h2>14. Contact Information</h2>
                    <p>For privacy-related queries or requests:</p>
                    <p>📧 <a href="mailto:privacy@evolvegg.in">privacy@evolvegg.in</a></p>
                    <p>📧 <a href="mailto:support@evolvegg.in">support@evolvegg.in</a></p>
                </div>
            </div>
        </section>
    );
}
