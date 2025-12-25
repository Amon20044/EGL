import Image from "next/image";
import Link from "next/link";
import "./Footer.css";

interface FooterLink {
    label: string;
    href: string;
}

interface FooterProps {
    heading?: string;
    links?: FooterLink[];
    copyright?: string;
}

export default function Footer({
    heading = "Ready to elevate your Esports Journey?",
    links = [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms & Conditions", href: "/terms" },
    ],
    copyright = "All copyright reserve @2025",
}: FooterProps) {
    return (
        <footer className="footer">
            <div className="footer-bg">
                <Image
                    src="/Footer.svg"
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>

            <div className="footer-content">
                {/* Logo */}
                <div className="footer-logo">
                    <Image
                        src="/EGL.svg"
                        alt="Evolve Gamers League"
                        width={180}
                        height={80}
                    />
                </div>

                {/* Heading */}
                <h2 className="footer-heading">{heading}</h2>

                {/* Links */}
                <nav className="footer-nav">
                    {links.map((link, index) => (
                        <Link key={index} href={link.href} className="footer-link">
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Copyright */}
                <p className="footer-copyright">{copyright}</p>
            </div>
        </footer>
    );
}
