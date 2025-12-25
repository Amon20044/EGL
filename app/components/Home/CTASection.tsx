import Link from "next/link";
import "./CTASection.css";

interface CTASectionProps {
    badge?: string;
    heading: React.ReactNode;
    ctaText?: string;
    ctaLink?: string;
    ctaIcon?: React.ReactNode;
}

export default function CTASection({
    badge = "EGL Community",
    heading,
    ctaText = "Join Our Discord",
    ctaLink = "https://discord.gg/your-invite",
    ctaIcon,
}: CTASectionProps) {
    return (
        <section className="cta-section">
            <div className="cta-card">
                {badge && <span className="cta-badge">{badge}</span>}
                <h2 className="cta-heading">{heading}</h2>
                <Link href={ctaLink} className="cta-button" target="_blank" rel="noopener noreferrer">
                    {ctaIcon && <span className="cta-icon">{ctaIcon}</span>}
                    {ctaText}
                </Link>
            </div>
        </section>
    );
}
