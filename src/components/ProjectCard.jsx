import React from "react";

const art = {
  "01": "bg-[#D8C9B4]",
  "02": "bg-[#C9B9A7]",
  "03": "bg-[#E0D8CA]",
  "04": "bg-[#BBA895]"
};

export default function ProjectCard({ number, title, category, year, description }) {
  return (
    <article className="project-card group" data-stagger-item>
      <a href="#contact" className="block" aria-label={`View ${title} project`}>
        <div className={`project-art relative aspect-[1.25/1] overflow-hidden rounded-[24px] border border-line ${art[number] || art["01"]}`}>
          <div className="absolute inset-5 rounded-[18px] border border-darkaccent/15 bg-surface/45 p-4 transition-transform duration-700 group-hover:scale-[.96]">
            <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-[.14em] text-darkaccent/70">
              <span>{number}</span><span>{year}</span>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="h-px w-full bg-darkaccent/20" />
              <div className="mt-4 max-w-[75%] font-display text-3xl font-semibold leading-none tracking-[-.05em] text-darkaccent sm:text-4xl">
                {title}
              </div>
            </div>
          </div>
          <div className="absolute right-7 top-7 h-12 w-12 rounded-full border border-darkaccent/20 transition-transform duration-500 group-hover:rotate-45" />
        </div>

        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-semibold tracking-[-.03em]">{title}</h3>
            <p className="mt-1 text-sm text-muted">{description}</p>
          </div>
          <div className="shrink-0 text-right text-[10px] font-semibold uppercase tracking-[.12em] text-muted">
            <div>{category}</div>
            <div className="mt-1">{year}</div>
          </div>
        </div>
      </a>
    </article>
  );
}