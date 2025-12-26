import Image from "next/image";
import "./InfoCards.css";

interface InfoCardItem {
    image: string;
    title: string;
}

interface InfoCardsProps {
    badge?: string;
    heading: React.ReactNode;
    items: InfoCardItem[];
    card?: boolean;
    bgOverlay?: string;
    darkBg?: boolean;
}

export default function InfoCards({
    badge,
    heading,
    items,
    card = false,
    bgOverlay,
    darkBg = false,
}: InfoCardsProps) {
    return (
        <section className={`info-section ${darkBg ? "info-section--dark" : ""}`}>
            {bgOverlay && (
                <div className="info-bg-overlay">
                    <Image src={bgOverlay} alt="" fill style={{ objectFit: "cover" }} />
                </div>
            )}

            <div className={`info-container ${card ? "info-container--card" : ""}`}>
                <div className="info-header">
                    {badge && <span className="info-badge">{badge}</span>}
                    <h2 className="info-heading">{heading}</h2>
                </div>

                <div className="info-cards">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`info-card`}
                        >
                            <Image src={item.image} alt={item.title} width={280} height={280} className="info-card-img" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
