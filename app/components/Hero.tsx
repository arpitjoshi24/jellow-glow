"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight, Volume2 } from "lucide-react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 700], [0, 180]);
  const imageY = useTransform(scrollY, [0, 700], [0, 90]);
  const titleOpacity = useTransform(scrollY, [0, 500], [1, 0.15]);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 150);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] w-full flex-col justify-end overflow-hidden bg-[#10110f] px-5 pb-10 pt-32 text-white sm:px-8 sm:pb-14 lg:px-12"
    >
      {/* BACKGROUND IMAGE */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 -z-20"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=2400&q=85')] bg-cover bg-center opacity-45" />
      </motion.div>

      {/* DARK CINEMATIC OVERLAYS */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#10110f] via-[#10110f]/70 to-black/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#10110f] via-transparent to-black/40" />

      {/* ACCENT GLOW */}
      <div className="pointer-events-none absolute -right-32 top-1/4 -z-10 h-72 w-72 rounded-full bg-[#d9e943]/10 blur-[120px] sm:h-[500px] sm:w-[500px]" />

      {/* TOP STATUS */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="absolute left-5 right-5 top-28 flex items-center justify-between font-mono text-[9px] tracking-[0.18em] text-white/60 sm:left-8 sm:right-8 lg:left-12 lg:right-12"
      >
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#d9e943]" />
          INDEPENDENT FAN PROJECT
        </span>

        <span className="hidden sm:block">TOKYO / SOUND / CULTURE</span>
        <span>NO. 001</span>
      </motion.div>

      {/* MAIN CONTENT */}
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="relative z-10 mx-auto w-full max-w-[1800px]"
      >
        <div className="mb-5 flex items-center gap-3 sm:mb-7">
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: loaded ? 44 : 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="h-px bg-[#d9e943]"
          />

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="font-mono text-[10px] tracking-[0.25em] text-[#d9e943] sm:text-xs"
          >
            FEEL THE FREQUENCY
          </motion.p>
        </div>

        {/* OVERSIZED TITLE */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: loaded ? "0%" : "110%" }}
            transition={{
              delay: 0.15,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[19vw] font-black leading-[0.72] tracking-[-0.105em] sm:text-[16vw] lg:text-[14.5vw]"
          >
            JELLOW
          </motion.h1>
        </div>

        <div className="mt-3 flex items-center gap-3 overflow-hidden sm:mt-5 sm:gap-6">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: loaded ? "0%" : "110%" }}
            transition={{
              delay: 0.3,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[19vw] font-black leading-[0.8] tracking-[-0.105em] text-[#d9e943] sm:text-[16vw] lg:text-[14.5vw]"
          >
            GLOW<span className="text-white">.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, rotate: -15, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="hidden -translate-y-2 border border-white/25 p-3 sm:block lg:p-5"
          >
            <Volume2 className="text-[#d9e943]" size={28} />
          </motion.div>
        </div>

        {/* DESCRIPTION + ACTIONS */}
        <div className="mt-8 flex flex-col gap-7 sm:mt-10 sm:flex-row sm:items-end sm:justify-between lg:mt-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="max-w-sm text-sm leading-7 text-white/65 sm:text-base"
          >
            A fan-made space exploring the sound, energy, and world of
            Jellow Glow.
            <span className="mt-1 block text-xs text-white/40">
              Made with appreciation. Unofficial fan project.
            </span>
          </motion.p>

          <motion.a
            href="#music"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            whileHover={{ x: 5 }}
            className="group flex w-fit items-center gap-5 border border-[#d9e943]/60 px-5 py-4 transition-colors duration-300 hover:bg-[#d9e943] hover:text-black"
          >
            <span className="text-[10px] font-bold tracking-[0.18em]">
              EXPLORE THE SOUND
            </span>
            <ArrowUpRight
              size={18}
              className="text-[#d9e943] transition-colors group-hover:text-black"
            />
          </motion.a>
        </div>
      </motion.div>

      {/* BOTTOM SCROLL INDICATOR */}
      <motion.a
        href="#music"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="mx-auto mt-12 flex items-center gap-3 self-start font-mono text-[9px] tracking-[0.2em] text-white/40 sm:mt-16"
      >
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={14} />
        </motion.span>
        SCROLL TO DISCOVER
      </motion.a>

      {/* DECORATIVE SIDE LABEL */}
      <div className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rotate-90 font-mono text-[9px] tracking-[0.3em] text-white/35 xl:block">
        SOUND IS A LANGUAGE
      </div>

      {/* GRAIN-LIKE GRID TEXTURE */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 35%, transparent)",
        }}
      />
    </section>
  );
}