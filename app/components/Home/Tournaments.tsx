import TournamentCard from "./TournamentCard";
import "./Tournaments.css";

interface TournamentData {
    image: string;
    tag: string;
    dateRange: string;
    title: string;
    description: string;
    detailsLink?: string;
    registerLink?: string;
}

interface TournamentsProps {
    badge?: React.ReactNode;
    heading: React.ReactNode;
    tournament: TournamentData;
}

export default function Tournaments({
    badge = (
        <>
            Upcoming <span>Tournaments</span>
        </>
    ),
    heading,
    tournament,
}: TournamentsProps) {
    return (
        <section className="tournaments-section">
            <div className="tournaments-container">
                <div className="tournaments-header">
                    <span className="tournaments-badge">{badge}</span>
                    <h2 className="tournaments-heading">{heading}</h2>
                </div>

                <TournamentCard {...tournament} />
            </div>
        </section>
    );
}
