import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Why This Site — Theo Mayer Soccer",
  description:
    "Why we built theomayersoccer.com: a recruiting tool, a father-son project, and a first step into tech.",
};

export default function WhyPage() {
  return (
    <>
      {/* ============================================
          PAGE HERO
          ============================================ */}
      <section className="relative bg-void noise-bg pt-32 pb-20 md:pb-32 overflow-hidden">
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
          ?
        </div>

        <div className="relative z-10 max-w-[800px] mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[3px] text-white-tertiary mb-6">
            Behind the Build
          </p>
          <h1
            className="uppercase font-bold leading-[0.9]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 8vw, 96px)",
              letterSpacing: "-2px",
            }}
          >
            Why This
            <br />
            <span className="text-volt">Site Exists</span>
          </h1>
          <p className="text-white-secondary text-lg mt-8 max-w-[32rem]">
            This is a recruiting tool, a learning project, and a father-son
            build. Here&apos;s the full story behind the site.
          </p>
        </div>
      </section>

      {/* ============================================
          THE RECRUITING PURPOSE
          ============================================ */}
      <section className="bg-snow py-20 md:py-32">
        <div className="max-w-[800px] mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-pitch flex items-center justify-center">
                <span
                  className="text-white text-lg font-bold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  1
                </span>
              </div>
              <p className="text-xs font-medium uppercase tracking-[3px] text-stone">
                The Primary Purpose
              </p>
            </div>
            <h2
              className="text-ink text-3xl md:text-4xl font-semibold uppercase leading-tight mb-8"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-1px",
              }}
            >
              A Recruiting Tool
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-charcoal text-base leading-relaxed space-y-6">
              <p>
                Tryout season for elite travel soccer clubs in the greater
                Chicago area runs from late spring through early summer. Coaches
                and program directors evaluate hundreds of players during a
                compressed window. Standing out in a 90-minute tryout is one
                thing. Giving someone a reason to remember your name is another.
              </p>
              <p>
                This site exists so that when a coach Googles &ldquo;Theo Mayer
                soccer,&rdquo; they find a professional player profile, not a
                blank page. It presents Theo&apos;s stats, progression, playing
                style, and coach testimonials in the format that serious
                programs expect to see, modeled after the player profile pages
                used by professional clubs and agencies.
              </p>
              <p>
                The target audience is coaches, scouts, and program directors at
                clubs like the Chicago Fire Academy pathway programs, Eclipse
                Select, Sockers FC, FC United, and similar elite-level
                organizations.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
          THE FATHER-SON PROJECT
          ============================================ */}
      <section className="bg-cloud py-20 md:py-32">
        <div className="max-w-[800px] mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-pitch flex items-center justify-center">
                <span
                  className="text-white text-lg font-bold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  2
                </span>
              </div>
              <p className="text-xs font-medium uppercase tracking-[3px] text-stone">
                The Bigger Story
              </p>
            </div>
            <h2
              className="text-ink text-3xl md:text-4xl font-semibold uppercase leading-tight mb-8"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-1px",
              }}
            >
              A Father-Son Build
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-charcoal text-base leading-relaxed space-y-6">
              <p>
                Theo&apos;s dad is a product developer and technologist. When
                the idea for a player profile site came up, it wasn&apos;t just
                about recruiting. It was an opportunity to build something real
                together.
              </p>
              <p>
                Theo contributed to the content direction, participated in a
                recorded interview about his playing style and goals, selected
                the professional players he models his game after, and reviewed
                the visual direction. The content on this site is his story told
                in his voice (with a little editorial polish from dad).
              </p>
              {/* Father-son photo */}
              <div className="relative aspect-[4/3] overflow-hidden my-2">
                <Image
                  src="/images/theo-and-his-dad-justin-chicago-fire-match-july-2023.jpg"
                  alt="Theo and his dad at a Chicago Fire match, Soldier Field, July 2023"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
              <p className="text-stone text-xs italic mb-6">
                Theo and his dad at a Chicago Fire match, Soldier Field, July
                2023. The Fire Academy is the long-term goal.
              </p>

              <p>
                The project gave father and son a shared creative endeavor that
                sits at the intersection of Theo&apos;s world (soccer) and his
                dad&apos;s world (product and technology). The conversation
                about how to present yourself, how to tell a story, and how to
                build something with intention, those are lessons that extend
                well beyond a website.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
          THE TECH LEARNING ANGLE
          ============================================ */}
      <section className="bg-snow py-20 md:py-32">
        <div className="max-w-[800px] mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-pitch flex items-center justify-center">
                <span
                  className="text-white text-lg font-bold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  3
                </span>
              </div>
              <p className="text-xs font-medium uppercase tracking-[3px] text-stone">
                Looking Ahead
              </p>
            </div>
            <h2
              className="text-ink text-3xl md:text-4xl font-semibold uppercase leading-tight mb-8"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-1px",
              }}
            >
              A First Step Into Tech
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-charcoal text-base leading-relaxed space-y-6">
              <p>
                Theo has expressed interest in learning technology and
                understanding how things on the internet actually work. This
                site is his first real-world project, something he can point to
                and say &ldquo;I was part of building that.&rdquo;
              </p>
              <p>
                The same strategic thinking that makes him a good soccer player
                (seeing patterns, anticipating what comes next, making decisions
                under pressure) maps directly to how technology works. As the
                site evolves, Theo will take on more of the hands-on work:
                updating his stats, writing content, and eventually learning the
                basics of how code turns into the pages you see on screen.
              </p>
              <p>
                Whether he becomes a professional athlete, a technologist, or
                something entirely different, having built something real at age
                10 is a head start that compounds.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
          THE TECH STACK (for the nerds)
          ============================================ */}
      <section className="bg-carbon noise-bg py-20 md:py-32">
        <div className="max-w-[800px] mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-medium uppercase tracking-[3px] text-white-tertiary mb-4">
              For the Technically Curious
            </p>
            <h2
              className="text-white text-3xl md:text-4xl font-semibold uppercase leading-tight mb-8"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-1px",
              }}
            >
              How It&apos;s Built
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Framework", value: "Next.js (React)" },
                { label: "Styling", value: "Tailwind CSS" },
                { label: "Hosting", value: "Vercel" },
                { label: "Domain", value: "theomayersoccer.com" },
                { label: "Fonts", value: "Oswald, Geist Sans, Geist Mono" },
                { label: "Contact Form", value: "Formspree" },
                { label: "Analytics", value: "Privacy-first (no tracking cookies)" },
                { label: "Built By", value: "WRKSTREAM" },
              ].map((item) => (
                <div key={item.label} className="bg-graphite p-4">
                  <p className="text-xs font-medium uppercase tracking-[1.5px] text-white-tertiary">
                    {item.label}
                  </p>
                  <p
                    className="text-white text-base mt-1"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
          CTA
          ============================================ */}
      <section className="bg-snow py-20 md:py-32">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <ScrollReveal>
            <h2
              className="text-ink text-3xl md:text-4xl font-semibold uppercase leading-tight mb-6"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-1px",
              }}
            >
              Ready to Connect?
            </h2>
            <p className="text-charcoal text-base max-w-[28rem] mx-auto mb-8">
              If you&apos;re a coach, scout, or program director interested in
              Theo, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="bg-void text-white text-sm font-semibold uppercase tracking-wider px-8 py-4 hover:bg-graphite transition-colors inline-block"
              >
                Contact Theo&apos;s Family
              </Link>
              <Link
                href="/story"
                className="border border-ink text-ink text-sm font-semibold uppercase tracking-wider px-8 py-4 hover:bg-ink hover:text-white transition-colors inline-block"
              >
                Read the Full Story
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
