import Link from "next/link";
import StatCard from "@/components/StatCard";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative min-h-screen flex items-center bg-void noise-bg overflow-hidden">
        {/* Oversized jersey number texture */}
        <div
          className="absolute right-[-5%] top-1/2 -translate-y-1/2 select-none pointer-events-none z-0"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(200px, 35vw, 400px)",
            fontWeight: 700,
            color: "rgba(255, 255, 255, 0.04)",
            lineHeight: 1,
          }}
        >
          5
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-24 pb-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[3px] text-white-tertiary mb-6 hero-fade">
                Forward / Midfielder — #5
              </p>

              <h1
                className="uppercase font-bold leading-[0.9] tracking-tight hero-fade"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(60px, 10vw, 140px)",
                  letterSpacing: "-2px",
                }}
              >
                Theo
                <br />
                Mayer
              </h1>

              <p className="text-white-secondary text-lg mt-6 max-w-md hero-fade">
                Two-footed winger with elite football IQ. Team captain.
                Student-athlete. Glen Ellyn Lakers FC Elite.
              </p>

              {/* Quick coach quote */}
              <div className="mt-8 border-l-[3px] border-pitch pl-6 hero-fade">
                <p className="text-white-secondary italic text-base">
                  &ldquo;His style is elegant.&rdquo;
                </p>
                <p className="text-white-tertiary text-sm mt-2">
                  — Coach, Glen Ellyn Lakers FC
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-10 hero-fade">
                <Link
                  href="#contact"
                  className="bg-volt text-void text-sm font-semibold uppercase tracking-wider px-8 py-4 hover:bg-volt-hover transition-colors inline-block"
                >
                  Contact Theo&apos;s Family
                </Link>
                <Link
                  href="/story"
                  className="border border-white text-white text-sm font-semibold uppercase tracking-wider px-8 py-4 hover:bg-white/10 transition-colors inline-block"
                >
                  Read the Story
                </Link>
              </div>
            </div>

            {/* Right: Hero Image Placeholder */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-[3/4] bg-graphite border border-smoke flex items-center justify-center">
                <div className="text-center px-8">
                  <div
                    className="text-white-tertiary text-6xl mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    5
                  </div>
                  <p className="text-white-tertiary text-sm uppercase tracking-wider">
                    Hero photo coming soon
                  </p>
                  <p className="text-white-tertiary text-xs mt-2">
                    Theo in full kit, golden hour
                  </p>
                </div>

                {/* When real image is ready, replace the above div with:
                <Image
                  src="/images/theo-hero.webp"
                  alt="Theo Mayer in Glen Ellyn Lakers FC kit"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                /> */}
              </div>
            </div>
          </div>
        </div>

        {/* Hero fade-in animation */}
        <style>{`
          .hero-fade {
            animation: heroFadeUp 0.6s ease-out both;
          }
          .hero-fade:nth-child(1) { animation-delay: 0ms; }
          .hero-fade:nth-child(2) { animation-delay: 100ms; }
          .hero-fade:nth-child(3) { animation-delay: 200ms; }
          .hero-fade:nth-child(4) { animation-delay: 300ms; }
          .hero-fade:nth-child(5) { animation-delay: 400ms; }
          .hero-fade:nth-child(6) { animation-delay: 500ms; }

          @keyframes heroFadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      {/* ============================================
          QUICK STATS SECTION
          ============================================ */}
      <section className="bg-carbon py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-medium uppercase tracking-[3px] text-white-tertiary mb-8">
              By the Numbers
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard value="31" label="Goals Scored" stagger={0} />
            <StatCard value="3" label="Competitive Seasons" stagger={1} />
            <StatCard value="10" label="Years Old" stagger={2} />
            <StatCard value="1" label="Team Captain" stagger={3} />
          </div>
        </div>
      </section>

      {/* ============================================
          ABOUT PREVIEW SECTION
          ============================================ */}
      <section className="bg-snow py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image placeholder */}
            <ScrollReveal>
              <div className="aspect-[4/3] bg-mist flex items-center justify-center">
                <p className="text-stone text-sm uppercase tracking-wider">
                  Action photo coming soon
                </p>
              </div>
            </ScrollReveal>

            {/* Text */}
            <ScrollReveal>
              <p className="text-xs font-medium uppercase tracking-[3px] text-stone mb-4">
                The Player
              </p>
              <h2
                className="text-ink text-4xl md:text-5xl font-semibold uppercase leading-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  letterSpacing: "-1px",
                }}
              >
                A Strategizer
                <br />
                on the Pitch
              </h2>
              <p className="text-charcoal text-base leading-relaxed mt-6">
                Theo is a creative playmaker who sees the field like a player
                twice his age. Two-footed, technically sharp, and wired to find
                the pass nobody else saw. He models his game after Michael Olise,
                Desir&eacute; Dou&eacute;, and Lamine Yamal, not because
                they&apos;re famous, but because he can tell you exactly why
                their style matches his.
              </p>
              <p className="text-charcoal text-base leading-relaxed mt-4">
                Promoted from house league to the Lakers Elite squad in under
                two seasons. Named team captain at age 10. The kind of kid who
                makes everyone around him better because he&apos;s thinking two
                moves ahead.
              </p>
              <Link
                href="/story"
                className="inline-block mt-8 text-field text-sm font-semibold uppercase tracking-wider border-b-2 border-pitch pb-1 hover:text-pitch transition-colors"
              >
                Read the Full Story →
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================
          SEASON STATS SECTION
          ============================================ */}
      <section className="bg-cloud py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-medium uppercase tracking-[3px] text-stone mb-4">
              Season by Season
            </p>
            <h2
              className="text-ink text-4xl md:text-5xl font-semibold uppercase leading-tight mb-12"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-1px",
              }}
            >
              The Progression
            </h2>
          </ScrollReveal>

          <div className="space-y-4">
            {[
              {
                season: "Winter 2026",
                team: "Lakers FC Elite (Tier 1)",
                level: "Playing Up — U11",
                goals: "6",
                note: "Building momentum at the highest club level",
              },
              {
                season: "Fall 2025",
                team: "Lakers FC Elite (Tier 1)",
                level: "Playing Up — U11",
                goals: "0",
                note: "Promoted to top team. Absorbing the speed. Named captain.",
              },
              {
                season: "Spring 2025",
                team: "Lakers FC (Tier 3)",
                level: "U10",
                goals: "25",
                note: "Breakout season. Top scorer. Earned Elite promotion.",
              },
              {
                season: "2024",
                team: "Lakers FC (Tier 3)",
                level: "U10",
                goals: "—",
                note: "First competitive season. Finding his footing at wing and midfield.",
              },
              {
                season: "House League",
                team: "Glen Ellyn Lakers",
                level: "Recreational",
                goals: "2",
                note: "Zero goals all season. Then scored twice in the final game.",
              },
            ].map((row) => (
              <ScrollReveal key={row.season}>
                <div className="bg-white border border-mist p-6 grid grid-cols-1 md:grid-cols-[180px_1fr_80px_1fr] gap-4 items-center">
                  <div>
                    <p
                      className="text-ink font-semibold text-base"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {row.season}
                    </p>
                    <p className="text-stone text-xs mt-1">{row.level}</p>
                  </div>
                  <p className="text-charcoal text-sm">{row.team}</p>
                  <div className="text-center">
                    <p
                      className="text-pitch text-2xl font-bold"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {row.goals}
                    </p>
                    <p className="text-stone text-[10px] uppercase tracking-wider">
                      Goals
                    </p>
                  </div>
                  <p className="text-stone text-sm italic">{row.note}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          COACH QUOTES SECTION
          ============================================ */}
      <section className="bg-snow py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-medium uppercase tracking-[3px] text-stone mb-4">
              What Coaches Say
            </p>
            <h2
              className="text-ink text-4xl md:text-5xl font-semibold uppercase leading-tight mb-12"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-1px",
              }}
            >
              Coach Testimonials
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal stagger={1}>
              <div className="border-l-[3px] border-pitch pl-6 py-2">
                <p className="text-charcoal text-lg italic leading-relaxed">
                  &ldquo;His style is elegant. He sees passes other kids his
                  age don&apos;t even think about.&rdquo;
                </p>
                <p className="text-stone text-sm mt-4">
                  — Coach, Glen Ellyn Lakers FC
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal stagger={2}>
              <div className="border-l-[3px] border-mist pl-6 py-2">
                <p className="text-stone text-lg italic leading-relaxed">
                  Additional coach testimonials will be added as they are
                  collected.
                </p>
                <p className="text-stone text-sm mt-4">
                  — More coming soon
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================
          MULTI-SPORT / CHARACTER SECTION
          ============================================ */}
      <section className="bg-cloud py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-medium uppercase tracking-[3px] text-stone mb-4">
              The Complete Athlete
            </p>
            <h2
              className="text-ink text-4xl md:text-5xl font-semibold uppercase leading-tight mb-12"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-1px",
              }}
            >
              More Than Soccer
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal stagger={1}>
              <div className="bg-white border border-mist p-8">
                <p className="text-3xl mb-1">⚽</p>
                <h3
                  className="text-ink text-xl font-semibold mt-4 uppercase"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Soccer
                </h3>
                <p className="text-charcoal text-sm leading-relaxed mt-3">
                  Creative winger with elite vision. Team captain. 31+ goals
                  across competitive play. Goal: Chicago Fire Academy.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal stagger={2}>
              <div className="bg-white border border-mist p-8">
                <p className="text-3xl mb-1">🏀</p>
                <h3
                  className="text-ink text-xl font-semibold mt-4 uppercase"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Basketball
                </h3>
                <p className="text-charcoal text-sm leading-relaxed mt-3">
                  Competitive basketball player. The footwork, court vision,
                  and lateral quickness translate directly to the pitch.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal stagger={3}>
              <div className="bg-white border border-mist p-8">
                <p className="text-3xl mb-1">📚</p>
                <h3
                  className="text-ink text-xl font-semibold mt-4 uppercase"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Academics
                </h3>
                <p className="text-charcoal text-sm leading-relaxed mt-3">
                  Advanced math program. Avid reader. The same discipline and
                  strategic thinking he brings to the field, he brings to the
                  classroom.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================
          CONTACT SECTION
          ============================================ */}
      <section
        id="contact"
        className="relative bg-carbon py-20 md:py-32 noise-bg"
      >
        {/* Oversized number texture */}
        <div
          className="absolute left-[-5%] top-1/2 -translate-y-1/2 select-none pointer-events-none z-0"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(150px, 25vw, 300px)",
            fontWeight: 700,
            color: "rgba(255, 255, 255, 0.03)",
            lineHeight: 1,
          }}
        >
          5
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-medium uppercase tracking-[3px] text-white-tertiary mb-4">
              Get in Touch
            </p>
            <h2
              className="text-white text-4xl md:text-5xl font-semibold uppercase leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-1px",
              }}
            >
              Contact
            </h2>
            <p className="text-white-secondary mt-4 max-w-md mx-auto">
              Interested in Theo as a player? Reach out directly. All
              communication is handled through his parent.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
