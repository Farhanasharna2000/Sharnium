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
     Background animation
  ---------------------------------- */
  const bgSpring = useSpring({
    background:
      progress < 0.25
        ? "linear-gradient(135deg,#000,#000)"
        : progress < 0.5
        ? "linear-gradient(135deg,#0f172a,#1e3a8a)"
        : progress < 0.75
        ? "linear-gradient(135deg,#1e40af,#2563eb)"
        : "linear-gradient(135deg,#2563eb,#60a5fa)",
  });

  /* ----------------------------------
     Image fade-in AFTER scroll
  ---------------------------------- */
  const imageSpring = useSpring({
    opacity: progress > 0.15 ? 1 : 0,
    config: { tension: 120, friction: 20 },
  });

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background */}
      <animated.div className="absolute inset-0 -z-10" style={bgSpring} />

      {/* Scroll container */}
      <div
        ref={containerRef}
        className="h-full overflow-y-auto no-scrollbar"
      >
        <div className="grid grid-cols-12 min-h-[400vh]">
          {/* LEFT CONTENT */}
          <div className="col-span-12 lg:col-span-8">
            <section className="h-screen" />
            <section className="h-screen" />

            <section className="h-screen flex items-center px-6 md:px-24">
              <div className="text-white">
                <h2 className="text-5xl font-bold mb-6">
                  Security as standard
                </h2>
                <p className="text-lg opacity-90 mb-8">
                  Build your digital future safe in the knowledge your domains,
                  products, accounts, and data are protected.
                </p>
                <button className="px-8 py-4 rounded-xl border border-white/40 hover:bg-white hover:text-black transition">
                  See measures
                </button>
              </div>
            </section>
          </div>

          {/* RIGHT STICKY IMAGE */}
          <div className="hidden lg:block col-span-4">
            <div className="sticky top-0 h-screen">
              <animated.div
                style={imageSpring}
                className="relative w-full h-full"
              >
                <Image
                  src="/s.png"
                  alt="Security Visual"
                  fill
                  className="object-cover"
                />
              </animated.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
