import Image from "next/image";
import "./Features.css";

interface FeatureItem {
    icon: string;
    title: React.ReactNode;
    description: React.ReactNode;
    width?: number; // Percentage 0-100, default 50
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
    // Group items into rows of 2
    const rows: FeatureItem[][] = [];
    for (let i = 0; i < items.length; i += 2) {
        rows.push(items.slice(i, i + 2));
    }

    return (
        <section id="features" className="features-section">
            <div className="features-card">
                {/* Header */}
                {badge && <span className="features-badge">{badge}</span>}
                <h2 className="features-heading">{heading}</h2>

                {/* Rows */}
                <div className="features-rows">
                    {rows.map((row, rowIndex) => (
                        <div key={rowIndex} className="features-row">
                            {row.map((item, itemIndex) => {
                                // Calculate width: if width is set, use it; otherwise 50%
                                // For second item, calculate remaining width
                                let itemWidth = item.width ?? 50;

                                if (row.length === 2 && itemIndex === 1) {
                                    // Second item gets remaining width
                                    const firstItemWidth = row[0].width ?? 50;
                                    itemWidth = 100 - firstItemWidth;
                                } else if (row.length === 1) {
                                    // Single item takes full width
                                    itemWidth = 100;
                                }

                                return (
                                    <div
                                        key={itemIndex}
                                        className="feature-item"
                                        style={{ width: `${itemWidth}%` }}
                                    >
                                        <div className="feature-icon">
                                            <Image src={item.icon} alt="" width={60} height={60} />
                                        </div>
                                        <div className="feature-content">
                                            <h3 className="feature-title">{item.title}</h3>
                                            <p className="feature-description">{item.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
