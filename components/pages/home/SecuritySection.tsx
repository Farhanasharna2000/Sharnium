"use client";

import React, { useRef, useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";

export default function SecuritySection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  /* ----------------------------------
     Scroll progress
  ---------------------------------- */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? el.scrollTop / max : 0);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  /* ----------------------------------
     Background gradient animation
  ---------------------------------- */
  const bgSpring = useSpring({
    background:
      progress < 0.25
        ? "linear-gradient(135deg,#000,#111)"
        : progress < 0.5
        ? "linear-gradient(135deg,#0f172a,#1e3a8a)"
        : progress < 0.75
        ? "linear-gradient(135deg,#1e40af,#2563eb)"
        : "linear-gradient(135deg,#2563eb,#60a5fa)",
    config: { tension: 180, friction: 40 },
  });

  /* ----------------------------------
     Image animation
  ---------------------------------- */
  const imageSpring = useSpring({
    opacity: progress > 0.2 ? 1 : 0,
    transform: `scale(${0.85 + progress * 0.15})`,
    config: { tension: 200, friction: 30 },
  });

  /* ----------------------------------
     Content animation
  ---------------------------------- */
  const contentSpring = useSpring({
    opacity: progress > 0.65 ? 1 : 0,
    transform: progress > 0.65 ? "translateY(0)" : "translateY(40px)",
    config: { tension: 200, friction: 35 },
  });

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Animated Background */}
      <animated.div
        className="absolute inset-0 -z-10"
        style={bgSpring}
      />

      {/* Scroll Container */}
      <div
        ref={containerRef}
        className="h-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth no-scrollbar"
      >
        {/* SECTION 1 – Blank */}
        <section className="h-screen snap-start bg-black" />

        {/* SECTION 2 – Image appear */}
        <section className="h-screen snap-start flex items-center justify-end px-6 md:px-24">
          <animated.div
            style={imageSpring}
            className="relative overflow-hidden"
          >
            <div className="relative w-[260px] h-[260px] md:w-[420px] md:h-[420px]">
              <Image
                src="/Sharna.png"
                alt="Profile"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-3xl -z-10" />
          </animated.div>
        </section>

        {/* SECTION 3 – Image continues */}
        <section className="h-screen snap-start flex items-center justify-end px-6 md:px-24">
          <animated.div
            style={imageSpring}
            className="relative overflow-hidden"
          >
            <div className="relative w-[260px] h-[260px] md:w-[420px] md:h-[420px]">
              <Image
                src="/Sharna.png"
                alt="Profile"
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-sky-400/30 blur-3xl -z-10" />
          </animated.div>
        </section>

        {/* SECTION 4 – Content */}
        <section className="h-screen snap-start flex items-center justify-between px-6 md:px-24">
          <animated.div
            style={contentSpring}
            className="max-w-xl text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Security as
              <br />
              standard
            </h1>

            <p className="text-lg md:text-xl opacity-90 mb-8">
              Build your digital future safe in the knowledge your domains,
              products, accounts, and data are protected.
            </p>

            <button className="px-8 py-4 rounded-xl border border-white/30 hover:bg-white hover:text-black transition-all">
              See measures
            </button>
          </animated.div>

          <div className="hidden lg:block relative overflow-hidden">
            <div className="relative w-[420px] h-[420px]">
              <Image
                src="/Sharna.png"
                alt="Profile"
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl -z-10" />
          </div>
        </section>
      </div>
    </div>
  );
}
