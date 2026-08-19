import React from "react";

export default function About() {
  return (
    <section id="about" className="border-y border-line bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.35fr_1fr] lg:px-10 lg:py-28">
        <div data-reveal>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-accent">About / 02</p>
        </div>
        <div data-reveal>
          <p className="max-w-4xl font-display text-[clamp(2rem,4.5vw,4.5rem)] font-medium leading-[1.03] tracking-[-.06em]">
            We believe good digital work should feel obvious in hindsight — <span className="text-muted">clear enough to understand, distinct enough to remember.</span>
          </p>
          <div className="mt-10 grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
            <p className="max-w-md text-sm leading-6 text-muted">
              Novsite is a small independent studio working across strategy, identity, product, and digital experience.
            </p>
            <p className="max-w-md text-sm leading-6 text-muted">
              We partner closely, ask better questions, and remove what doesn’t need to be there.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}