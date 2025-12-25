import Hero from "./components/Home/Hero";
import Features from "./components/Home/Features";
import InfoCards from "./components/Home/InfoCards";
import Tournaments from "./components/Home/Tournaments";
import CTASection from "./components/Home/CTASection";

export default function Home() {
  return (
    <div>
      <Hero
        badge="GAMERS LEAGUE"
        title={
          <>
            Your Gateway
            <br />
            to Professional
            <br />
            Esports
          </>
        }
        subtitle="A ecosystem where talent meets structure — and underdogs evolve into pros."
        ctaText="Register Now"
        ctaLink="/register"
        heroImage="/Hero.webp"
      />

      <Features
        badge="About EVOLVE"
        heading={
          <>
            We&apos;re building India&apos;s first free-to-compete, pro-led national
            esports league — a structured, story-driven ecosystem for the
            next generation of competitive talent.
          </>
        }
        items={[
          {
            width: 40,
            icon: "/Free.svg",
            title: "Free Access",
            description: (
              <>
                Free, skill-based entry — <strong>no paywalls</strong>
              </>
            ),
          },
          {
            icon: "/structure.svg",
            title: "Structure",
            description: (
              <>
                Climb through structured tiers — progress earned{" "}
                <strong>purely by performance.</strong>
              </>
            ),
          },
          {
            width: 60,
            icon: "/movie.svg",
            title: (
              <>
                Your Journey, <span>Tracked</span>
              </>
            ),
            description: (
              <>
                Every match and milestone shapes your legacy — your grind{" "}
                <strong>tells the story.</strong>
              </>
            ),
          },
          {
            icon: "/integrity.svg",
            title: "Integrity",
            description: (
              <>
                Transparent format, anti-cheat systems,{" "}
                <strong>verified performance</strong>
              </>
            ),
          },
        ]}
      />

      {/* Why EVOLVE - Dark background with WhyBG overlay */}
      <InfoCards
        badge="Why EVOLVE ?"
        heading={
          <>
            Because every gamer deserves more than just matches — they deserve growth, recognition, and a real path forward, EVOLVE is built to fix :
          </>
        }
        darkBg={true}
        bgOverlay="/WhyBG.svg"
        items={[
          {
            title: "Community",
            image: "/community.svg",
          },
          {
            title: "Compete",
            image: "/compete.svg",
          },
          {
            title: "Visibility",
            image: "/visiblity.svg",
          },
        ]}
      />

      {/* How EVOLVE Works - Card mode with steps */}
      <InfoCards
        badge="How EVOLVE Works ?"
        heading={
          <>
            A clear, performance-based path where your grind, wins, and
            milestones guide your rise to the top.
          </>
        }
        card={true}
        darkBg={true}
        items={[
          {
            image: "/create.svg",
            title: "Create Your Account",
          },
          {
            image: "/competeandclimb.svg",
            title: "Compete and Climb",
          },
          {
            image: "/risetothetop.svg",
            title: "Rise to the Top",
          },
        ]}
      />

      {/* Upcoming Tournaments */}
      <Tournaments
        badge={
          <>
            Upcoming <span>Tournaments</span>
          </>
        }
        heading={
          <>
            Every tournament is a new stage to prove your skill, make your
            mark, and move closer to the pros.
          </>
        }
        tournament={{
          image: "/tournaments.webp",
          tag: "BGMI",
          dateRange: "24 Apr - 30 Apr",
          title: "Premium Showdown Week 1",
          description:
            "EGL tournaments are the backbone of the EVOLVE ecosystem — structured, recurring, and performance-based competitions that let players compete, improve, and rise through clear tiers (C → B → A → S).",
          detailsLink: "/tournaments/1",
          registerLink: "/register",
        }}
      />

      <CTASection
        badge="EGL Community"
        heading={
          <>
            Find teammates, get tournament updates, and access exclusive
            coaching content on Discord.
          </>
        }
        ctaText="Join Our Discord"
        ctaLink="https://discord.gg/your-invite"
        ctaIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="20"
            height="20"
          >
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
        }
      />
    </div>
  );
}


