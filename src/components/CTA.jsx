import React from "react";

export default function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
      <div data-reveal className="relative overflow-hidden rounded-[30px] bg-darkaccent px-6 py-16 text-surface sm:px-10 lg:px-16 lg:py-24">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-surface/10" />
        <div className="absolute -bottom-40 right-16 h-96 w-96 rounded-full border border-surface/10" />
        <div className="relative max-w-4xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[.18em] text-surface/55">Have something in mind?</p>
          <h2 className="font-display text-[clamp(3rem,7vw,7rem)] font-semibold leading-[.9] tracking-[-.07em]">
            Let’s make it <span className="text-[#D4A27F]">clear.</span>
          </h2>
          <a href="mailto:hello@novsite.studio" className="mt-9 inline-flex rounded-full bg-surface px-6 py-3 text-sm font-semibold text-darkaccent transition-transform hover:-translate-y-1">
            hello@novsite.studio ↗
          </a>
        </div>
      </div>
    </section>
  );
}