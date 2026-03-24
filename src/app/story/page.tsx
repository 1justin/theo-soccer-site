import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "The Story — Theo Mayer Soccer",
  description:
    "From zero goals in house league to captain of the Elite squad. The progression story of Theo Mayer.",
};

export default function StoryPage() {
  return (
    <>
      {/* ============================================
          STORY HERO
          ============================================ */}
      <section className="relative bg-void noise-bg pt-32 pb-20 md:pb-32 overflow-hidden">
        {/* Background number */}
        <div
          className="absolute right-[-5%] top-1/2 -translate-y-1/2 select-none pointer-events-none z-0"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(200px, 30vw, 400px)",
            fontWeight: 700,
            color: "rgba(255, 255, 255, 0.03)",
            lineHeight: 1,
          }}
        >
          5
        </div>

        <div className="relative z-10 max-w-[800px] mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[3px] text-white-tertiary mb-6">
            The Full Story
          </p>
          <h1
            className="uppercase font-bold leading-[0.9]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 8vw, 96px)",
              letterSpacing: "-2px",
            }}
          >
            From Zero
            <br />
            <span className="text-volt">to Captain</span>
          </h1>
          <p className="text-white-secondary text-lg mt-8 max-w-lg">
            He started with zero goals. By the time he was 10, he was playing up
            a year, holding his own against older, stronger kids, and his coach
            had already made him captain.
          </p>
        </div>
      </section>

      {/* ============================================
          THE ARC
          ============================================ */}
      <section className="bg-snow py-20 md:py-32">
        <div className="max-w-[800px] mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-medium uppercase tracking-[3px] text-stone mb-4">
              The Arc That Matters
            </p>
            <h2
              className="text-ink text-3xl md:text-4xl font-semibold uppercase leading-tight mb-8"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-1px",
              }}
            >
              The Pattern
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-6 text-charcoal text-base leading-relaxed">
              <p>
                Most kids Theo&apos;s age are still figuring out which foot is
                their strong one. Theo was already rewinding training videos on
                his own, ball at his feet before school, studying the game the
                way other kids study their favorite subject. Because for him, it
                is.
              </p>
              <p>
                He started in house league. Zero goals all season. Then, in the
                final game, he scored twice.
              </p>
              <p className="text-ink font-medium text-lg">
                That quiet start before the takeover. That has been his signature
                ever since.
              </p>
            </div>
          </ScrollReveal>

          {/* House league celebration photo */}
          <ScrollReveal>
            <div className="mt-10 mb-6">
              <div className="relative aspect-[3/4] max-w-sm mx-auto overflow-hidden">
                <Image
                  src="/images/theo-goal-celebration-house-league.jpg"
                  alt="Young Theo celebrating a goal in his first house league season, arms outstretched, pure joy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 384px"
                />
              </div>
              <p className="text-stone text-xs text-center mt-3 italic">
                The final game. Zero goals all season, then two. The pattern
                begins.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-6 text-charcoal text-base leading-relaxed">
              <p>
                His coaches at Glen Ellyn Lakers noticed early. He was invited to
                Lakers Academy, a coach-run development program that serves as a
                feeder to the competitive teams. He did not just fit in. He stood
                out. He was promoted directly to Lakers Select (Tier 3) for Fall
                2023 without a formal tryout.
              </p>
            </div>
          </ScrollReveal>

          {/* Timeline */}
          <ScrollReveal>
            <div className="mt-16 space-y-0">
              {[
                {
                  period: "House League (2021-2022)",
                  title: "The Beginning",
                  desc: "Glen Ellyn Park District. Zero goals all season. Two in the final game. Named 'Most Improved Player' by Coach James Reiman, who still comes to Theo's travel games years later.",
                },
                {
                  period: "Lakers Academy",
                  title: "Noticed",
                  desc: "Invited to the development program. Stood out immediately. Promoted to Lakers Select (Tier 3) without a formal tryout.",
                },
                {
                  period: "Fall 2023",
                  title: "First Competitive Season",
                  desc: "Made the Lakers Select team. Learning the speed and structure of competitive play.",
                },
                {
                  period: "2023-2024",
                  title: "The Swiss Army Knife",
                  desc: "Became the go-to player for anything the coach needed. Wing and midfield. Named team captain for the 2024-2025 season by Coach Will Segovia, Director of Coaching.",
                },
                {
                  period: "Spring 2025",
                  title: "The Breakout",
                  desc: "25+ goals in one season (we stopped counting). Top player on the team. Won the championship. Earned promotion to Elite.",
                },
                {
                  period: "Fall 2025",
                  title: "New Level, New Start",
                  desc: "Promoted to Tier 1 Elite. Playing up against 5th graders as a 4th grader. Shifted to facilitator: all assists, no goals. Absorbing the new speed.",
                },
                {
                  period: "Winter/Spring 2026",
                  title: "The Takeover Begins Again",
                  desc: "Goals returning. Building momentum at the highest club level. The pattern repeats.",
                },
              ].map((item) => (
                <div
                  key={item.period}
                  className="relative pl-8 pb-12 last:pb-0 border-l-2 border-mist last:border-l-0"
                >
                  {/* Dot */}
                  <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 bg-pitch" />
                  <p className="text-xs font-medium uppercase tracking-[2px] text-stone">
                    {item.period}
                  </p>
                  <h3
                    className="text-ink text-xl font-semibold mt-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-charcoal text-sm leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
          WHO HE IS AS A PLAYER
          ============================================ */}
      <section className="bg-void noise-bg py-20 md:py-32">
        <div className="max-w-[800px] mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-medium uppercase tracking-[3px] text-white-tertiary mb-4">
              Scouting Report
            </p>
            <h2
              className="text-white text-3xl md:text-4xl font-semibold uppercase leading-tight mb-12"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-1px",
              }}
            >
              The Player
            </h2>
          </ScrollReveal>

          {/* Action photo — winger shot */}
          <ScrollReveal>
            <div className="mb-12">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/theo-action-winger-nov-2024.jpg"
                  alt="Theo Mayer on the wing, MAYER #5 jersey visible, attacking past a defender during a Lakers FC friendly"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <ScrollReveal stagger={1}>
              <div className="bg-graphite p-6">
                <p className="text-xs font-medium uppercase tracking-[1.5px] text-white-tertiary mb-3">
                  Position
                </p>
                <p className="text-white text-base">
                  Left and right winger, equally comfortable on both sides.
                  Occasionally striker or midfielder.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal stagger={2}>
              <div className="bg-graphite p-6">
                <p className="text-xs font-medium uppercase tracking-[1.5px] text-white-tertiary mb-3">
                  Style
                </p>
                <p className="text-white text-base">
                  Creative playmaker. Technical, vision-led. Two-footed passer
                  and dribbler. Not a power forward. A thinker who can beat a
                  defender 1v1 and find the pass nobody else saw.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* What he brings */}
          <ScrollReveal>
            <div className="bg-graphite p-8 mb-8">
              <h3
                className="text-volt text-lg font-semibold uppercase mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                What He Brings
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Soccer IQ that coaches consistently describe as rare for his age",
                  "First touch rated above average to elite at his level",
                  "Full skill set with both feet: Maradona turns, tick-tacks, step-overs, rainbow flicks",
                  "Exceptional vision and passing, he makes teammates better",
                  "Named team captain for 2024-2025 by Coach Will Segovia",
                  "Craves coaching feedback, processes it, and gets better in the same session",
                  "Self-directed learner: watches training videos independently",
                  "Celebrates an assist with the same energy as a goal",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-volt text-sm mt-0.5">■</span>
                    <p className="text-white-secondary text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* What he's working on */}
          <ScrollReveal>
            <div className="bg-graphite p-8">
              <h3
                className="text-white text-lg font-semibold uppercase mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                What He&apos;s Working On
              </h3>
              <div className="space-y-3">
                {[
                  "First-step explosiveness and attacking with more urgency",
                  "Decision speed: he can overthink, which is a high-ceiling problem to have",
                  "Using his frame more effectively in 50/50 duels",
                  "Juggling (the only technical gap relative to his overall level)",
                  "Curving the ball: has the technique, building the power for distance",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-white-tertiary text-sm mt-0.5">
                      ▸
                    </span>
                    <p className="text-white-secondary text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
          TRAINING & DEVELOPMENT
          ============================================ */}
      <section className="bg-cloud py-20 md:py-32">
        <div className="max-w-[800px] mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-medium uppercase tracking-[3px] text-stone mb-4">
              Off the Field
            </p>
            <h2
              className="text-ink text-3xl md:text-4xl font-semibold uppercase leading-tight mb-8"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-1px",
              }}
            >
              Training &amp; Development
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/theo-mike-hohensee-athletics-coaching-session.jpg"
                  alt="Theo training with Mike Hohensee Jr. in an indoor turf facility, working on general athleticism"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div>
                <h3
                  className="text-ink text-xl font-semibold uppercase"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Private Training with Mike Hohensee Jr.
                </h3>
                <p className="text-charcoal text-sm leading-relaxed mt-4">
                  Theo has trained with Mike Hohensee Jr. in sessions focused on
                  general athleticism, physicality, winning 50/50 duels, and
                  attacking with more urgency, areas identified as growth
                  opportunities for his game.
                </p>
                <p className="text-charcoal text-sm leading-relaxed mt-3">
                  Hohensee Jr. is a former Northwest Missouri State quarterback
                  who was invited to the Dallas Cowboys&apos; 2024 rookie
                  minicamp, where head coach Mike McCarthy singled him out for
                  his command of the huddle. His father, Mike Hohensee Sr., is
                  an AFL Hall of Famer, University of Minnesota Hall of Famer,
                  and former NFL/CFL/USFL quarterback.
                </p>
                <p className="text-stone text-xs mt-4 italic">
                  Hohensee Jr. now trains young athletes in the Chicago area,
                  bringing a pro-level lens to youth athletic development.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
          TOURNAMENT HISTORY
          ============================================ */}
      <section className="bg-snow py-20 md:py-32">
        <div className="max-w-[800px] mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-medium uppercase tracking-[3px] text-stone mb-4">
              Competition
            </p>
            <h2
              className="text-ink text-3xl md:text-4xl font-semibold uppercase leading-tight mb-8"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-1px",
              }}
            >
              Tournament History
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal stagger={1}>
              <div className="bg-white border border-mist p-6">
                <p
                  className="text-ink font-semibold text-base uppercase"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Puma Cup
                </p>
                <p className="text-stone text-xs uppercase tracking-wider mt-1">
                  Aurora, IL
                </p>
                <p className="text-charcoal text-sm leading-relaxed mt-3">
                  Multiple appearances. Competed against clubs from across the
                  region.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal stagger={2}>
              <div className="bg-white border border-mist p-6">
                <p
                  className="text-ink font-semibold text-base uppercase"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  USA Cup
                </p>
                <p className="text-stone text-xs uppercase tracking-wider mt-1">
                  Minneapolis, MN
                </p>
                <p className="text-charcoal text-sm leading-relaxed mt-3">
                  One of the largest and most well-organized youth tournaments
                  in the country. Theo&apos;s first USA Cup was with a mixed
                  team, top players blended with Tier 2. He stood out with
                  goals, assists, and leadership.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <p className="text-stone text-xs mt-6 italic">
              Additional tournament details and photos to come.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
          ROLE MODELS
          ============================================ */}
      <section className="bg-cloud py-20 md:py-32">
        <div className="max-w-[800px] mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-medium uppercase tracking-[3px] text-stone mb-4">
              In His Own Words
            </p>
            <h2
              className="text-ink text-3xl md:text-4xl font-semibold uppercase leading-tight mb-8"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-1px",
              }}
            >
              Role Models
            </h2>
            <p className="text-charcoal text-base leading-relaxed mb-12">
              Ask Theo who he plays like and he does not say Messi. He says
              Michael Olise. Desir&eacute; Dou&eacute;. Lamine Yamal.
            </p>
          </ScrollReveal>

          <div className="space-y-8">
            <ScrollReveal>
              <div className="border-l-[3px] border-pitch pl-6">
                <p className="text-charcoal text-lg italic leading-relaxed">
                  &ldquo;They all have flair and changes of pace. That&apos;s
                  what I try to do, bring unpredictability.&rdquo;
                </p>
                <p className="text-stone text-sm mt-3">
                  — On his playing style
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="border-l-[3px] border-pitch pl-6">
                <p className="text-charcoal text-lg italic leading-relaxed">
                  &ldquo;Yamal isn&apos;t as quick from a standstill but he
                  builds up speed and maintains it. More top-end speed than
                  explosive acceleration. His balance of goals and assists as a
                  winger is similar to mine this season.&rdquo;
                </p>
                <p className="text-stone text-sm mt-3">— On Lamine Yamal</p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="border-l-[3px] border-pitch pl-6">
                <p className="text-charcoal text-lg italic leading-relaxed">
                  &ldquo;His positioning makes him feel like an extra player. A
                  three becomes a four or five.&rdquo;
                </p>
                <p className="text-stone text-sm mt-3">— On Pedri</p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <p className="text-charcoal text-sm leading-relaxed mt-12 italic">
              This is a 10-year-old talking. A kid who can articulate why he
              plays like those specific players, not just name-dropping, is a
              detail that will stick with any serious reader.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
          A DEFINING MOMENT
          ============================================ */}
      <section className="bg-snow py-20 md:py-32">
        <div className="max-w-[800px] mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-medium uppercase tracking-[3px] text-stone mb-4">
              A Moment That Defines Him
            </p>
            <h2
              className="text-ink text-3xl md:text-4xl font-semibold uppercase leading-tight mb-8"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-1px",
              }}
            >
              The Goal
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-charcoal text-base leading-relaxed space-y-6">
              <p className="text-lg italic border-l-[3px] border-pitch pl-6">
                &ldquo;I received the ball on the wing. I zigzagged through
                multiple defenders, used my speed to beat a player to the ball,
                and finished with a powerful shot into the bottom right
                corner.&rdquo;
              </p>
              <p>
                The goal was scored late in the game, effectively sealing the
                result, after a solo run from his own half, dribbling past four
                opponents.
              </p>
              <p>
                It was not the most technically difficult thing he has done. But
                it was the moment that felt most like him: a long run, a problem
                to solve, and the ball in the net at the end of it.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
          THE MINDSET
          ============================================ */}
      <section className="bg-carbon noise-bg py-20 md:py-32">
        <div className="max-w-[800px] mx-auto px-6">
          {/* Jersey shot as visual accent */}
          <ScrollReveal>
            <div className="mb-12">
              <div className="relative aspect-[3/4] max-w-sm mx-auto overflow-hidden">
                <Image
                  src="/images/theo-back-of-jersey-summer-2025-9-years-old.jpg"
                  alt="Theo Mayer from behind, MAYER #5 jersey, looking out at the field, Summer 2025"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 384px"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-xs font-medium uppercase tracking-[3px] text-white-tertiary mb-4">
              Off the Pitch
            </p>
            <h2
              className="text-white text-3xl md:text-4xl font-semibold uppercase leading-tight mb-8"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-1px",
              }}
            >
              The Mindset
            </h2>
            <div className="text-white-secondary text-base leading-relaxed space-y-6">
              <p>
                While working toward elite-level soccer, Theo was simultaneously
                chasing placement in his school&apos;s advanced math program,
                putting the same locked-in, self-imposed pressure on himself in
                the classroom as on the pitch.
              </p>
              <p className="text-white text-lg font-medium">He got in.</p>
              <p>
                The pressure does not break him. It just takes him a minute to
                settle. Then he runs.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
          WHERE HE IS HEADED
          ============================================ */}
      <section className="bg-snow py-20 md:py-32">
        <div className="max-w-[800px] mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-medium uppercase tracking-[3px] text-stone mb-4">
              What&apos;s Next
            </p>
            <h2
              className="text-ink text-3xl md:text-4xl font-semibold uppercase leading-tight mb-8"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-1px",
              }}
            >
              The Road Ahead
            </h2>
            <div className="text-charcoal text-base leading-relaxed space-y-6">
              <p>
                Theo is 10 years old, in 4th grade, and playing U11-level soccer
                against kids a year older on the top team at Glen Ellyn Lakers.
                His long-term goal is the Chicago Fire Academy, which accepts
                players at U13.
              </p>
              <p>
                The next two years are about finding the right elite club
                environment, participating in the Chicago Fire Discovery Center
                talent identification program, and continuing to develop at the
                highest level available to him.
              </p>
              <p className="text-ink font-medium text-lg">
                He is not a finished product. That is the point. The trajectory
                is the story.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="bg-void text-white text-sm font-semibold uppercase tracking-wider px-8 py-4 hover:bg-graphite transition-colors inline-block"
              >
                Contact Theo&apos;s Family
              </Link>
              <Link
                href="/"
                className="border border-ink text-ink text-sm font-semibold uppercase tracking-wider px-8 py-4 hover:bg-ink hover:text-white transition-colors inline-block"
              >
                Back to Home
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
