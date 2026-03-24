import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-void border-t border-smoke">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left */}
          <div>
            <p
              className="font-display text-2xl font-bold uppercase tracking-wide text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Theo Mayer
            </p>
            <p className="text-white-tertiary text-sm mt-1">
              Forward / Midfielder — Glen Ellyn Lakers FC
            </p>
          </div>

          {/* Center links */}
          <div className="flex gap-8">
            <Link
              href="/"
              className="text-sm text-white-secondary hover:text-white uppercase tracking-wider transition-colors"
            >
              Home
            </Link>
            <Link
              href="/story"
              className="text-sm text-white-secondary hover:text-white uppercase tracking-wider transition-colors"
            >
              The Story
            </Link>
            <Link
              href="/why"
              className="text-sm text-white-secondary hover:text-white uppercase tracking-wider transition-colors"
            >
              Why This Site
            </Link>
          </div>

          {/* Right CTA */}
          <Link
            href="/#contact"
            className="bg-volt text-void text-sm font-semibold uppercase tracking-wider px-6 py-2.5 hover:bg-volt-hover transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-smoke flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white-tertiary text-xs">
            &copy; {new Date().getFullYear()} Theo Mayer Soccer. All rights
            reserved.
          </p>
          <p className="text-white-tertiary text-xs">
            Built by{" "}
            <a
              href="https://wrkstream.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-secondary hover:text-volt transition-colors"
            >
              WRKSTREAM
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
