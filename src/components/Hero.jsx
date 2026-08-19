import React from "react";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-7xl px-5 pb-20 pt-36 sm:px-8 lg:px-10 lg:pb-28 lg:pt-44">
      <div className="grid items-end gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div data-hero-kicker className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.18em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Independent digital studio
          </div>

          <h1 data-hero-title className="max-w-4xl overflow-hidden font-display text-[clamp(3.5rem,8vw,8.25rem)] font-semibold leading-[.88] tracking-[-.075em]">
            <span className="block">Ideas,</span>
            <span className="block">made <em className="font-normal not-italic text-accent">clear.</em></span>
          </h1>

          <p data-hero-copy className="mt-7 max-w-xl text-base leading-7 text-muted sm:text-lg">
            Novsite builds thoughtful digital identities, interfaces, and experiences for teams who care about how their work feels.
          </p>

          <div data-hero-actions className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="rounded-full bg-darkaccent px-5 py-3 text-sm font-semibold text-surface transition-transform hover:-translate-y-1">
              Explore our work
            </a>
            <a href="#about" className="rounded-full border border-line bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:border-darkaccent">
              How we think
            </a>
          </div>
        </div>

        <div data-console className="relative">
          <div className="console-grid overflow-hidden rounded-[28px] border border-line bg-surface p-3 shadow-soft">
            <div className="rounded-[20px] border border-line bg-cream p-4 sm:p-5">
              <div className="mb-5 flex items-center justify-between border-b border-line pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span className="text-xs font-bold uppercase tracking-[.12em]">Novsite / Console</span>
                </div>
                <span className="text-[10px] uppercase tracking-[.12em] text-muted">Live / 01</span>
              </div>

              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-8 rounded-xl border border-line bg-surface p-4">
                  <div className="mb-12 text-[10px] uppercase tracking-[.12em] text-muted">Current focus</div>
                  <div className="font-display text-2xl font-semibold tracking-[-.04em] sm:text-3xl">Make it useful.</div>
                  <div className="mt-2 max-w-xs text-xs leading-5 text-muted">Less noise. Better decisions. Interfaces that earn their space.</div>
                </div>
                <div className="col-span-4 flex min-h-40 flex-col justify-between rounded-xl bg-darkaccent p-4 text-surface">
                  <span className="text-[10px] uppercase tracking-[.12em] text-surface/60">Signal</span>
                  <span className="text-4xl font-semibold tracking-[-.06em]">94%</span>
                </div>
                <div className="col-span-5 rounded-xl border border-line bg-sand p-4">
                  <span className="text-[10px] uppercase tracking-[.12em] text-muted">System</span>
                  <div className="mt-8 flex gap-1">
                    <span className="h-1.5 flex-1 rounded-full bg-accent" />
                    <span className="h-1.5 flex-1 rounded-full bg-accent/50" />
                    <span className="h-1.5 flex-1 rounded-full bg-accent/20" />
                  </div>
                </div>
                <div className="col-span-7 rounded-xl border border-line bg-surface p-4">
                  <span className="text-[10px] uppercase tracking-[.12em] text-muted">Next move</span>
                  <div className="mt-8 flex items-center justify-between text-sm font-semibold">
                    <span>Shape → Ship</span><span>↗</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-parallax className="absolute -bottom-4 -left-4 rounded-full border border-line bg-surface px-4 py-2 text-[10px] font-semibold uppercase tracking-[.12em] text-muted shadow-panel">
            Strategy / Design / Build
          </div>
        </div>
      </div>
    </section>
  );
}