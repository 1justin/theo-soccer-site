import Link from "next/link";
import Image from "next/image";
import StatCard from "@/components/StatCard";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative bg-void noise-bg overflow-hidden">
        {/* Oversized jersey number texture — positioned behind the photo */}
        <div
          className="absolute right-[5%] top-[15%] select-none pointer-events-none z-0"
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

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-20 pb-12 w-full">
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

              <p className="text-white-secondary text-lg mt-6 max-w-[28rem] hero-fade">
                Creative winger and midfielder with elite soccer IQ. Two-footed
                passer and dribbler. Comfortable on either wing. Captain
                &apos;24-&apos;25. Student-athlete. Glen Ellyn Lakers FC Elite.
              </p>

              {/* Quick coach quote */}
              <div className="mt-8 border-l-[3px] border-pitch pl-6 hero-fade">
                <p className="text-white-secondary italic text-base">
                  &ldquo;His style is elegant.&rdquo;
                </p>
                <p className="text-white-tertiary text-sm mt-2">
                  — Coach Will Segovia, Director of Coaching, Glen Ellyn Lakers
                  FC
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

            {/* Right: Hero Image — Studio shot */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-[28rem] aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/theo-hero-studio-ball-on-shoulder.png"
                  alt="Theo Mayer in Lakers FC jersey, pointing at camera with soccer ball on shoulder"
                  fill
                  className="object-contain object-bottom"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
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
              Selected Stats
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <StatCard value="25+" label="Goals (Spring '25)" stagger={0} />
            <StatCard value="~1:1" label="Goal-to-Assist Ratio" stagger={1} />
            <StatCard value="3" label="Competitive Seasons" stagger={2} />
            <StatCard value="10" label="Years Old" stagger={3} />
            <StatCard value="'24-'25" label="Team Captain" stagger={4} />
          </div>
          <ScrollReveal>
            <p className="text-white-secondary text-sm mt-8 max-w-[36rem]">
              We don&apos;t obsess over stats or wins. We focus on development,
              growth, and playing the right way. These numbers tell one part of
              the story.
            </p>
            <p className="text-white-tertiary text-xs mt-4 italic">
              — Miranda &amp; Justin Mayer
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
          ABOUT PREVIEW SECTION
          ============================================ */}
      <section className="bg-snow py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Action photo */}
            <ScrollReveal>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/theo-action-dribbling-nov-2024.jpg"
                  alt="Theo Mayer dribbling past a defender during a Lakers FC friendly, November 2024"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
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
                twice his age. Comfortable on either wing. Two-footed passer and
                dribbler, wired to find the pass nobody else saw. He models his
                game after Michael Olise, Desir&eacute; Dou&eacute;, and Lamine
                Yamal, not because they&apos;re famous, but because he can tell
                you exactly why their style matches his.
              </p>
              <p className="text-charcoal text-base leading-relaxed mt-4">
                Promoted from house league to the Lakers Elite squad in under
                two seasons. Named team captain for the 2024-2025 season by
                Coach Tyler Birt. The kind of kid who makes everyone around him
                better because he&apos;s thinking two moves ahead.
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
          PROGRESSION TIMELINE
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
                season: "Winter 2025-2026",
                team: "Lakers FC Elite",
                level: "Playing Up — U11",
                beat: "6 goals and counting. Building momentum at the highest club level.",
              },
              {
                season: "Fall 2025",
                team: "Lakers FC Elite",
                level: "Playing Up — U11",
                beat: "Promoted to top team. Playing up a year. Shifted to facilitator. All assists, no goals. Absorbing the new speed.",
              },
              {
                season: "Spring 2025",
                team: "Lakers FC Select",
                level: "U10",
                beat: "Breakout season. 25+ goals (we stopped counting). Won the championship. Earned promotion to Elite.",
              },
              {
                season: "2023-2024",
                team: "Lakers FC Select",
                level: "U10",
                beat: "Became the go-to player for anything the coach needed. Wing and midfield. Named team captain.",
              },
              {
                season: "Fall 2023",
                team: "Lakers FC Select",
                level: "U10",
                beat: "Made the Lakers Select team. First competitive season.",
              },
              {
                season: "2021-2022",
                team: "Glen Ellyn Park District",
                level: "House League (2 seasons)",
                beat: "First season: zero goals until the final game, then scored twice. Second season: scored constantly. Forced an early move to Lakers Academy.",
              },
            ].map((row) => (
              <ScrollReveal key={row.season}>
                <div className="bg-white border border-mist p-6 grid grid-cols-1 md:grid-cols-[180px_200px_1fr] gap-4 items-center">
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
                  <p className="text-stone text-sm italic">{row.beat}</p>
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
                  &ldquo;His style is elegant. He sees passes other kids his age
                  don&apos;t even think about.&rdquo;
                </p>
                <p className="text-stone text-sm mt-4">
                  — Coach Will Segovia, Director of Coaching, Glen Ellyn Lakers
                  FC
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal stagger={2}>
              <div className="border-l-[3px] border-mist pl-6 py-2">
                <p className="text-stone text-lg italic leading-relaxed">
                  Additional coach testimonials will be added as they are
                  collected.
                </p>
                <p className="text-stone text-sm mt-4">— More coming soon</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================
          MORE THAN SOCCER SECTION
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Row 1: Tournament Experience + Academics */}
            <ScrollReveal stagger={1}>
              <div className="bg-white border border-mist p-8 h-full">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🏆</span>
                  <h3
                    className="text-ink text-xl font-semibold uppercase"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Tournament Experience
                  </h3>
                </div>
                <div className="space-y-4 mt-4">
                  <div>
                    <p
                      className="text-ink font-semibold text-sm"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Puma Cup (Aurora, IL)
                    </p>
                    <p className="text-charcoal text-sm leading-relaxed mt-1">
                      3 appearances. Competed against clubs from across the
                      region.
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-ink font-semibold text-sm"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      USA Cup (Minneapolis, MN)
                    </p>
                    <p className="text-charcoal text-sm leading-relaxed mt-1">
                      3 appearances. One of the largest youth tournaments in the
                      country. Theo&apos;s first USA Cup was on a mixed team. He
                      stood out with goals, assists, and leadership.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal stagger={2}>
              <div className="bg-white border border-mist p-8 h-full">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">📚</span>
                  <h3
                    className="text-ink text-xl font-semibold uppercase"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Academics
                  </h3>
                </div>
                <p className="text-charcoal text-sm leading-relaxed mt-3">
                  Advanced math program. Avid reader. The same discipline and
                  strategic thinking he brings to the field, he brings to the
                  classroom.
                </p>
              </div>
            </ScrollReveal>

            {/* Row 2: Basketball MVP — full width */}
            <ScrollReveal stagger={3} className="md:col-span-2">
              <div className="bg-white border border-mist p-8">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🏀</span>
                  <h3
                    className="text-ink text-xl font-semibold uppercase"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    On The Court
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
                  <div>
                    <p className="text-charcoal text-sm leading-relaxed">
                      Named YMCA basketball league MVP, Spring 2026. In the
                      championship game, Theo scored 20 of his team&apos;s 28
                      points while leading in assists, rebounds, and steals
                      across both teams. Lost by 1 point.
                    </p>
                  </div>
                  <div>
                    <p className="text-charcoal text-sm leading-relaxed">
                      The opposing coach, who had coached Theo the previous
                      season, told him after the game: &ldquo;I love you. You
                      almost beat us all by yourself.&rdquo; His team had spent
                      a third of their practice watching film of Theo to scout
                      him. It didn&apos;t matter.
                    </p>
                    <p className="text-stone text-xs mt-3 italic">
                      Invited to play up 2 years for summer league after a coach
                      saw what he could do against older competition.
                    </p>
                  </div>
                </div>
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
            <p className="text-white-secondary mt-4 max-w-[28rem] mx-auto">
              Interested in Theo as a player? Reach out directly.
              <br />
              All communication is handled through his parent.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
