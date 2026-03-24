"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="text-center py-12">
        <p
          className="text-volt text-4xl font-bold uppercase"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Message Sent
        </p>
        <p className="text-white-secondary mt-4">
          Thank you for reaching out. We&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-[36rem] mx-auto space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-xs font-medium uppercase tracking-[1.5px] text-white-tertiary mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full bg-graphite border border-smoke text-white px-4 py-3 text-base focus:border-volt transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-xs font-medium uppercase tracking-[1.5px] text-white-tertiary mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full bg-graphite border border-smoke text-white px-4 py-3 text-base focus:border-volt transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="organization"
          className="block text-xs font-medium uppercase tracking-[1.5px] text-white-tertiary mb-2"
        >
          Organization / Club
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          className="w-full bg-graphite border border-smoke text-white px-4 py-3 text-base focus:border-volt transition-colors"
          placeholder="Club or organization name"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-medium uppercase tracking-[1.5px] text-white-tertiary mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full bg-graphite border border-smoke text-white px-4 py-3 text-base focus:border-volt transition-colors resize-none"
          placeholder="Your message"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className={`w-full py-4 text-sm font-semibold uppercase tracking-wider transition-colors ${
          status === "sending"
            ? "bg-volt-muted text-void/50 cursor-wait"
            : "bg-volt text-void hover:bg-volt-hover cursor-pointer"
        }`}
      >
        {status === "sending" ? "Sending..." : "Get in Touch"}
      </button>

      {status === "error" && (
        <p className="text-red-400 text-sm text-center">
          Something went wrong. Please try again or email directly.
        </p>
      )}
    </form>
  );
}
