import type { Metadata } from "next";
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
              <p>
                His coaches at Glen Ellyn Lakers noticed early. He was invited to
                Lakers Academy, a coach-run development program that serves as a
                feeder to the competitive teams. He did not just fit in. He stood
                out. He was promoted directly to the tier 3 competitive team
                without a formal tryout.
              </p>
            </div>
          </ScrollReveal>

          {/* Timeline */}
          <ScrollReveal>
            <div className="mt-16 space-y-0">
              {[
                {
                  period: "House League",
                  title: "The Beginning",
                  desc: "Zero goals all season. Two in the final game. The pattern begins.",
                },
                {
                  period: "Lakers Academy",
                  title: "Noticed",
                  desc: "Invited to the development program. Stood out immediately. Promoted to Tier 3 without a tryout.",
                },
                {
                  period: "Year One (2024)",
                  title: "Finding His Footing",
                  desc: "Contributing as a wing. Added midfield halfway through the year. Learning the competitive game.",
                },
                {
                  period: "Spring 2025",
                  title: "The Breakout",
                  desc: "25 goals in one season. Top player on the team. Earned promotion to Elite.",
                },
                {
                  period: "Fall 2025",
                  title: "New Level, New Start",
                  desc: "Promoted to Tier 1 Elite. Playing up against 5th graders as a 4th grader. Zero goals as he absorbed the new speed. Named team captain.",
                },
                {
                  period: "Winter 2026",
                  title: "The Takeover Begins Again",
                  desc: "Six goals and counting. The pattern repeats.",
                },
              ].map((item, i) => (
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
                  Creative playmaker. Technical, vision-led, two-footed. Not a
                  power forward. A thinker who can beat a defender 1v1 and find
                  the pass nobody else saw.
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
                  "Football IQ that coaches consistently describe as rare for his age",
                  "First touch rated above average to elite at his level",
                  "Full skill set with both feet: Maradona turns, tick-tacks, step-overs, rainbow flicks",
                  "Exceptional vision and passing, he makes teammates better",
                  "Named team captain by his coach in fall 2024",
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
                <p className="text-stone text-sm mt-3">
                  — On Lamine Yamal
                </p>
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
              <p className="text-white text-lg font-medium">
                He got in.
              </p>
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
