import Image from "next/image";
import Link from "next/link";
import "./TournamentCard.css";

interface TournamentCardProps {
    image: string;
    tag: string;
    dateRange: string;
    title: string;
    description: string;
    detailsLink?: string;
    registerLink?: string;
}

export default function TournamentCard({
    image,
    tag,
    dateRange,
    title,
    description,
    detailsLink,
    registerLink,
}: TournamentCardProps) {
    return (
        <div className="tcard-wrapper">
            <div className="tcard">
                {/* Image Section */}
                <div className="tcard-image">
                    <Image src={image} alt={title} width={600} height={280} className="tcard-img" />
                    <div className="tcard-tags">
                        <span className="tcard-tag">{tag}</span>
                        <span className="tcard-date">{dateRange}</span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="tcard-content">
                    <h3 className="tcard-title">{title}</h3>
                    <p className="tcard-desc">{description}</p>

                    {/* Gradient Overlay */}
                    <div className="tcard-gradient" />

                    {/* Actions */}
                    <div className="tcard-actions">
                        {detailsLink && (
                            <Link href={detailsLink} className="tcard-btn-outline">
                                View Details
                            </Link>
                        )}
                        {registerLink && (
                            <Link href={registerLink} className="tcard-btn-primary">
                                Register Now
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
