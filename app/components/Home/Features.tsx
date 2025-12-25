import Image from "next/image";
import "./Features.css";

interface FeatureItem {
    icon: string;
    title: React.ReactNode;
    description: React.ReactNode;
    span?: 1 | 2; // 1 = half width, 2 = full width
}

interface FeaturesProps {
    badge?: string;
    heading: React.ReactNode;
    items: FeatureItem[];
}

export default function Features({
    badge = "About EVOLVE",
    heading,
    items,
}: FeaturesProps) {
    return (
        <section className="features-section">
            <div className="features-card">
                {/* Header */}
                {badge && <span className="features-badge">{badge}</span>}
                <h2 className="features-heading">{heading}</h2>

                {/* Grid */}
                <div className="features-grid">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`feature-item ${item.span === 2 ? "feature-item--full" : ""}`}
                        >
                            <div className="feature-icon">
                                <Image src={item.icon} alt="" width={60} height={60} />
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-title">{item.title}</h3>
                                <p className="feature-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
