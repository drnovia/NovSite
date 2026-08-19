import React from "react";

const services = [
  ["01", "Strategy", "Positioning, product thinking, content structure, and a clear route from idea to outcome."],
  ["02", "Identity", "Visual systems, art direction, verbal identity, and the pieces that make a brand feel coherent."],
  ["03", "Digital", "Websites, interfaces, prototypes, and product experiences designed to be useful first."],
  ["04", "Build", "A considered handoff or a complete implementation — fast, responsive, and built to last."]
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div data-reveal className="grid gap-12 lg:grid-cols-[.35fr_1fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-accent">Services / 03</p>
        </div>

        <div data-stagger className="border-t border-line">
          {services.map(([num, title, copy]) => (
            <div data-stagger-item key={num} className="group grid gap-4 border-b border-line py-6 sm:grid-cols-[60px_220px_1fr] sm:items-start">
              <span className="text-xs text-muted">{num}</span>
              <h3 className="font-display text-2xl font-semibold tracking-[-.04em]">{title}</h3>
              <p className="max-w-xl text-sm leading-6 text-muted transition-colors group-hover:text-ink">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}