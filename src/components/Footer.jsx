import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-8 text-sm sm:px-8 md:flex-row md:items-end md:justify-between lg:px-10">
        <div>
          <div className="font-display text-lg font-bold tracking-[-.04em]">nov<span className="text-accent">site</span></div>
          <p className="mt-2 text-xs text-muted">Independent digital studio.</p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted">
          <a href="#work" className="hover:text-ink">Work</a>
          <a href="#about" className="hover:text-ink">About</a>
          <a href="#services" className="hover:text-ink">Services</a>
          <a href="#contact" className="hover:text-ink">Contact</a>
          <a href="#contact" className="hover:text-ink">Instagram</a>
          <a href="#contact" className="hover:text-ink">LinkedIn</a>
        </div>

        <p className="text-xs text-muted">© 2026 Novsite</p>
      </div>
    </footer>
  );
}