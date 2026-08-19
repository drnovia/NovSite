import React from "react";

export default function Navbar() {
  return (
    <header data-nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-line/80 bg-surface/90 px-4 py-3 shadow-panel backdrop-blur-md sm:px-5">
        <a href="#top" className="font-display text-lg font-bold tracking-[-.04em]" aria-label="Novsite home">
          nov<span className="text-accent">site</span>
        </a>

        <div className="hidden items-center gap-7 text-sm text-muted md:flex">
          <a className="transition-colors hover:text-ink" href="#work">Work</a>
          <a className="transition-colors hover:text-ink" href="#about">About</a>
          <a className="transition-colors hover:text-ink" href="#services">Services</a>
          <a className="transition-colors hover:text-ink" href="#contact">Contact</a>
        </div>

        <a
          href="#contact"
          className="rounded-full bg-darkaccent px-4 py-2 text-xs font-semibold text-surface transition-transform hover:-translate-y-0.5"
        >
          Start a project
        </a>
      </nav>
    </header>
  );
}