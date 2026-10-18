
"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Plus } from "lucide-react";
import Image from "next/image";
const members = [
  {
    number: "01",
    name: "KOTO",
    role: "VOCALS",
    accent: "#d9e943",
     slug: "koto",
    gradient: "from-[#545b30] via-[#27291e] to-[#10110f]",
    initial: "K",
  },
  {
    number: "02",
    name: "GENKI",
    role: "GUITAR",
    accent: "#e6e1d6",
     slug: "genki",
    gradient: "from-[#4b4840] via-[#292823] to-[#10110f]",
    initial: "G",
  },
  {
    number: "03",
    name: "YUSEI",
    role: "DRUMS",
    accent: "#c4d0c5",
    slug:"yusei",
    gradient: "from-[#34453f] via-[#222923] to-[#10110f]",
    initial: "Y",
  },
  {
    number: "04",
    name: "RUKIA",
    role: "BASS",
    accent: "#d9e943",
    slug:"rukia",
    gradient: "from-[#514331] via-[#29251e] to-[#10110f]",
    initial: "R",
  },
];

export default function Members() {
  return (
    <section
      id="members"
      className="relative overflow-hidden bg-[#10110f] px-5 py-28 text-white sm:px-8 sm:py-36 lg:px-12"
    >
      <div className="mx-auto max-w-[1800px]">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col justify-between gap-6 border-b border-white/15 pb-8 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-4 font-mono text-[10px] tracking-[0.25em] text-[#d9e943]">
              02 / THE PEOPLE BEHIND THE SOUND
            </p>

            <h2 className="text-6xl font-black leading-[0.85] tracking-[-0.08em] sm:text-8xl lg:text-[10rem]">
              THE
              <br />
              <span className="text-white/25">BAND.</span>
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-7 text-white/50">
            Four identities. One frequency.
            <br />
            Get to know the people behind the music.
          </p>
        </motion.div>

        {/* Member panels */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {members.map((member, index) => (
            <motion.article
              key={member.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
              }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Visual panel */}
              <div
                className={`relative aspect-[4/5] overflow-hidden bg-gradient-to-br ${member.gradient}`}
              >
              <Image
  src={`/images/members/${member.slug}.jpg`}
  alt={`${member.name} — ${member.role}`}
  fill
  sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw"
  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
/>

{/* DARK OVERLAY FOR READABLE TEXT */}
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />

{/* YELLOW HOVER GLOW */}
<div className="absolute inset-0 bg-[#d9e943]/0 transition-colors duration-500 group-hover:bg-[#d9e943]/10" />

                <div className="absolute inset-4 border border-white/15 transition-all duration-500 group-hover:inset-2 group-hover:border-[#d9e943]/50" />

               

                {/* Top label */}
                <div className="absolute left-7 right-7 top-7 flex items-center justify-between font-mono text-[9px] tracking-[0.18em] text-white/60">
                  <span>JG / {member.number}</span>
                  <span>ARTIST</span>
                </div>

                {/* Hover indicator */}
                <div className="absolute right-7 top-16 flex h-9 w-9 items-center justify-center border border-white/25 transition-all duration-300 group-hover:rotate-90 group-hover:border-[#d9e943] group-hover:bg-[#d9e943] group-hover:text-black">
                  <Plus size={17} />
                </div>

                {/* Bottom member info */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent px-7 pb-7 pt-28">
                  <p
                    className="mb-3 font-mono text-[10px] tracking-[0.25em]"
                    style={{ color: member.accent }}
                  >
                    {member.role}
                  </p>

                  <h3 className="text-4xl font-black tracking-[-0.07em] sm:text-5xl">
                    {member.name}
                  </h3>

                  <div className="mt-5 h-px w-full bg-white/20">
                    <div className="h-px w-0 bg-[#d9e943] transition-all duration-500 group-hover:w-full" />
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-mono text-[9px] tracking-[0.15em] text-white/40">
                      MEMBER PROFILE
                    </span>
                    <ArrowUpRight
                      size={17}
                      className="text-white/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d9e943]"
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-xl font-black tracking-[-0.04em] sm:text-2xl">
            DIFFERENT PEOPLE. <span className="text-[#d9e943]">ONE SOUND.</span>
          </p>

          <span className="font-mono text-[9px] tracking-[0.15em] text-white/35">
            INDEPENDENT FAN PROJECT / 2026
          </span>
        </motion.div>
      </div>
    </section>
  );
}
