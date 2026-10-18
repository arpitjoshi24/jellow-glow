"use client";

import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Disc3,
 
  Headphones,
} from "lucide-react";

const tracks = [
  {
    number: "01",
    title: "DISCOVER THEIR SOUND",
    type: "FEATURED MUSIC",
    description:
      "Explore the band's sound through their official music releases.",
  },
];

export default function FeaturedMusic() {
  return (
    <section
      id="music"
      className="relative overflow-hidden bg-[#10110f] px-5 py-28 text-white sm:px-8 sm:py-36 lg:px-12 lg:py-40"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-48 top-1/3 h-96 w-96 rounded-full bg-[#d9e943]/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-[1800px]">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex items-end justify-between gap-5 border-b border-white/15 pb-6 sm:mb-20"
        >
          <div>
            <p className="mb-4 flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] text-[#d9e943]">
              <Disc3 size={15} />
              01 / SOUND ARCHIVE
            </p>

            <h2 className="text-5xl font-black tracking-[-0.07em] sm:text-7xl lg:text-8xl">
              THE <span className="text-white/30">SOUND.</span>
            </h2>
          </div>

          <span className="hidden font-mono text-[10px] tracking-widest text-white/40 sm:block">
            PLAY IT LOUD / 001
          </span>
        </motion.div>

        {/* Featured release layout */}
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          {/* Artwork */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="group relative"
          >
            <div className="relative aspect-square overflow-hidden border border-white/10 bg-[#20211c]">
              {/* Abstract artwork: no invented album cover */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(217,233,67,0.28),transparent_32%),linear-gradient(135deg,#292b22_0%,#10110f_50%,#37382b_100%)] transition-transform duration-1000 group-hover:scale-105" />

              <div className="absolute inset-0 opacity-20 [background-image:repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(255,255,255,0.12)_4px)]" />

              <div className="absolute inset-5 border border-white/20 sm:inset-8" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-1/2 flex aspect-square w-[58%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20"
              >
                <div className="absolute inset-3 rounded-full border border-[#d9e943]/40" />
                <div className="absolute inset-[22%] rounded-full border border-white/20" />
                <div className="h-4 w-4 rounded-full bg-[#d9e943] shadow-[0_0_35px_rgba(217,233,67,0.8)] sm:h-6 sm:w-6" />
              </motion.div>

              <div className="absolute left-8 top-8">
                <p className="font-mono text-[9px] tracking-[0.25em] text-white/60">
                  JG / FREQUENCY
                </p>
              </div>

              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                <h3 className="text-4xl font-black leading-[0.8] tracking-[-0.08em] sm:text-6xl">
                  SOUND
                  <br />
                  <span className="text-[#d9e943]">IN MOTION.</span>
                </h3>

                <Disc3
                  size={30}
                  className="text-[#d9e943] transition-transform duration-700 group-hover:rotate-180"
                />
              </div>
            </div>

            <div className="mt-3 flex justify-between font-mono text-[9px] tracking-[0.15em] text-white/40">
              <span>VISUAL STUDY / FAN CONCEPT</span>
              <span>FIG. 001</span>
            </div>
          </motion.div>

          {/* Music information */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="flex flex-col"
          >
            <p className="font-mono text-[10px] tracking-[0.25em] text-[#d9e943]">
              A CLOSER LISTEN
            </p>

            <h3 className="mt-5 max-w-xl text-4xl font-black leading-[0.95] tracking-[-0.06em] sm:text-6xl">
              FIND THE
              <br />
              <span className="text-white/35">FREQUENCY.</span>
            </h3>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              Every band has its own universe. Step into Jellow Glow's music,
              discover their releases, and find the tracks that stay with you.
            </p>

            {/* Track-style row */}
            <div className="mt-10 border-y border-white/15">
              {tracks.map((track) => (
                <div
                  key={track.number}
                  className="group flex items-center gap-4 py-5"
                >
                  <span className="font-mono text-xs text-[#d9e943]">
                    {track.number}
                  </span>

                  <div className="flex-1">
                    <p className="text-xs font-bold tracking-[0.1em] sm:text-sm">
                      {track.title}
                    </p>
                    <p className="mt-2 font-mono text-[9px] tracking-widest text-white/40">
                      {track.type}
                    </p>
                  </div>

                  <ArrowDownRight
                    size={18}
                    className="text-white/40 transition-all group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-[#d9e943]"
                  />
                </div>
              ))}
            </div>

            {/* Official music link */}
            <a
              href="https://www.youtube.com/results?search_query=Jellow+Glow+official+music"
              target="_blank"
              rel="noreferrer"
              className="group mt-8 flex w-fit items-center gap-4 bg-[#d9e943] px-6 py-4 text-black transition-colors hover:bg-white"
            >
              <Headphones size={18} />
              <span className="text-[10px] font-black tracking-[0.15em]">
                EXPLORE THEIR MUSIC
              </span>
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <p className="mt-4 text-[10px] leading-5 text-white/35">
              Opens YouTube search. Replace with verified official music links
              when available.
            </p>
          </motion.div>
        </div>

        {/* Bottom marquee */}
        <div className="mt-28 overflow-hidden border-y border-white/10 py-5 sm:mt-36">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="flex w-max items-center gap-8"
          >
            {Array.from({ length: 4 }, (_, index) => (
              <div key={index} className="flex items-center gap-8">
                <span className="text-2xl font-black tracking-[-0.05em] text-white/20 sm:text-4xl">
                  SOUND WITHOUT LIMITS
                </span>
                <span className="text-xl text-[#d9e943]">✳</span>
                <span className="text-2xl font-black tracking-[-0.05em] text-white/20 sm:text-4xl">
                  FEEL EVERY FREQUENCY
                </span>
                <span className="text-xl text-[#d9e943]">✳</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}