import Image from "next/image";
import Link from "next/link";
import "./Hero.css";

interface HeroProps {
    badge?: string;
    title: React.ReactNode;
    subtitle?: string;
    ctaText?: string;
    ctaLink?: string;
    heroImage?: string;
}

export default function Hero({
    badge = "GAMERS LEAGUE",
    title,
    subtitle = "A ecosystem where talent meets structure — and underdogs evolve into pros.",
    ctaText = "Register Now",
    ctaLink = "/register",
    heroImage = "/Hero.webp",
}: HeroProps) {
    return (
        <section className="hero">
            <div className="hero-container">
                {/* Left Content */}
                <div className="hero-content">
                    {/* {badge && <span className="hero-badge">{badge}</span>} */}
                    <h1 className="hero-title">{title}</h1>
                    {subtitle && <p className="hero-subtitle">{subtitle}</p>}
                    {ctaText && (
                        <Link href={ctaLink} className="hero-cta">
                            {ctaText}
                        </Link>
                    )}
                </div>

                {/* Right Image */}
                <div className="hero-image">
                    <Image
                        src={heroImage}
                        alt="Professional Esports"
                        width={600}
                        height={700}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
