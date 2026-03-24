"use client";

import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  value: string;
  label: string;
  variant?: "dark" | "light";
  stagger?: number;
}

export default function StatCard({
  value,
  label,
  variant = "dark",
  stagger = 0,
}: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateValue();
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  });

  function animateValue() {
    // Check if value is a number
    const numericValue = parseInt(value);
    if (isNaN(numericValue)) {
      // Non-numeric: just reveal it
      setTimeout(() => setDisplayValue(value), stagger * 100);
      return;
    }

    const duration = 800;
    const startTime = performance.now() + stagger * 100;

    function tick(now: number) {
      if (now < startTime) {
        requestAnimationFrame(tick);
        return;
      }
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * numericValue);
      setDisplayValue(String(current));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  const isDark = variant === "dark";

  return (
    <div
      ref={ref}
      className={`p-6 ${isDark ? "bg-graphite" : "bg-white border border-mist"}`}
    >
      <p
        className={`stat-value text-5xl font-bold leading-none ${
          isDark ? "text-volt" : "text-pitch"
        }`}
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {displayValue}
      </p>
      <p
        className={`text-xs font-medium uppercase tracking-[1.5px] mt-3 ${
          isDark ? "text-white-tertiary" : "text-stone"
        }`}
      >
        {label}
      </p>
    </div>
  );
}
