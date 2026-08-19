import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Services from "./components/Services";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

      intro
        .from("[data-nav]", { y: -18, opacity: 0, duration: .7 })
        .from("[data-hero-kicker]", { y: 16, opacity: 0, duration: .45 }, "-=.3")
        .from("[data-hero-title] > span", {
          yPercent: 105,
          opacity: 0,
          duration: .85,
          stagger: .08,
          ease: "power4.out"
        }, "-=.25")
        .from("[data-hero-copy], [data-hero-actions]", {
          y: 18,
          opacity: 0,
          duration: .6,
          stagger: .12
        }, "-=.35")
        .from("[data-console]", {
          y: 28,
          opacity: 0,
          scale: .985,
          duration: .9
        }, "-=.5");

      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 35,
          opacity: 0,
          duration: .75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 84%",
            once: true
          }
        });
      });

      gsap.utils.toArray("[data-stagger]").forEach((group) => {
        const items = group.querySelectorAll("[data-stagger-item]");
        gsap.from(items, {
          y: 28,
          opacity: 0,
          duration: .65,
          stagger: .1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: group,
            start: "top 82%",
            once: true
          }
        });
      });

      gsap.utils.toArray("[data-parallax]").forEach((el) => {
        gsap.to(el, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="noise min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}