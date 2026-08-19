import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  { number: "01", title: "Forma", category: "Brand / Digital", year: "2026", description: "A quieter identity for a design-led workspace." },
  { number: "02", title: "Noma", category: "Web / Strategy", year: "2025", description: "Turning a complex service into a simple path forward." },
  { number: "03", title: "Arc", category: "Product / UI", year: "2025", description: "A focused product system for teams moving fast." },
  { number: "04", title: "Field Notes", category: "Editorial / Web", year: "2024", description: "An editorial platform built around curiosity." }
];

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div data-reveal className="mb-12 flex items-end justify-between gap-6 border-b border-line pb-5">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[.18em] text-accent">Selected work</p>
          <h2 className="font-display text-4xl font-semibold tracking-[-.055em] sm:text-5xl">A few things we’ve made.</h2>
        </div>
        <span className="hidden text-xs text-muted sm:block">04 / 04</span>
      </div>

      <div data-stagger className="grid gap-x-6 gap-y-14 md:grid-cols-2">
        {projects.map((project) => <ProjectCard key={project.number} {...project} />)}
      </div>
    </section>
  );
}