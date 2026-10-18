
"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Play, Radio, Disc3 } from "lucide-react";

const archiveItems = [
  {
    number: "001",
    type: "LIVE PERFORMANCE",
    title: "THE LIVE EXPERIENCE",
    subtitle: "Concert footage & live sessions",
    gradient: "from-[#777b46] via-[#343728] to-[#11120f]",
    symbol: "LIVE",
  },
  {
    number: "002",
    type: "MUSIC ARCHIVE",
    title: "SOUND IN MOTION",
    subtitle: "Music videos & visual stories",
    gradient: "from-[#555b68] via-[#292d35] to-[#11120f]",
    symbol: "PLAY",
  },
  {
    number: "003",
    type: "BEHIND THE SCENES",
    title: "AFTER THE NOISE",
    subtitle: "The moments between the music",
    gradient: "from-[#765344] via-[#382923] to-[#11120f]",
    symbol: "BTS",
  },
];

export default function LiveArchive() {
  return (
    <>
      {/* LIVE SECTION */}
      <section
        id="live"
        className="relative overflow-hidden bg-[#d9e943] px-5 py-24 text-[#10110f] sm:px-10 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between gap-8 md:flex-row md:items-end"
          >
            <div>
              <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em]">
                <Radio size={16} />
                <span>On stage / Off the grid</span>
              </div>

              <h2 className="text-6xl font-black uppercase leading-[0.85] tracking-[-0.07em] sm:text-8xl md:text-9xl">
                FEEL
                <br />
                THE LIVE.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-black/70 md:text-base">
              The lights go down. The volume goes up. This space is ready for
              confirmed show announcements, tour dates, and live moments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-14 border-y border-black/25 py-8 md:mt-20"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="mt-1 font-mono text-xs">LIVE / 001</span>

                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight sm:text-3xl">
                    The next chapter
                  </h3>
                  <p className="mt-2 text-sm text-black/60">
                    Show details will appear here when officially announced.
                  </p>
                </div>
              </div>

              <a
                href="https://www.youtube.com/results?search_query=Jellow+Glow+live"
                target="_blank"
                rel="noreferrer"
                className="group flex w-fit items-center gap-3 border border-black/40 px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] transition-colors hover:bg-black hover:text-[#d9e943]"
              >
                Explore live videos
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>

          <div className="mt-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-black/50">
            <span>Live archive / 2026 onwards</span>
            <span>Updates pending verification</span>
          </div>
        </div>

        <div className="pointer-events-none absolute -right-10 top-10 opacity-[0.07]">
          <Disc3 size={280} strokeWidth={0.5} />
        </div>
      </section>

      {/* ARCHIVE SECTION */}
      <section
        id="archive"
        className="relative overflow-hidden bg-[#10110f] px-5 py-24 text-[#eeede5] sm:px-10 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"
          >
            <div>
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-[#d9e943]">
                <span className="mr-3">04 /</span>
                Fragments of sound
              </p>

              <h2 className="text-6xl font-black uppercase leading-[0.85] tracking-[-0.07em] sm:text-8xl md:text-9xl">
                THE
                <br />
                ARCHIVE<span className="text-[#d9e943]">.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/50">
              Every performance leaves a trace. Explore music, live footage,
              and behind-the-scenes moments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {archiveItems.map((item, index) => (
              <motion.a
                key={item.number}
                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                  `Jellow Glow ${item.type}`
                )}`}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className="group relative block overflow-hidden border border-white/10"
              >
                <div
                  className={`relative flex aspect-[4/5] flex-col justify-between overflow-hidden bg-gradient-to-br ${item.gradient} p-6 sm:p-7`}
                >
                  {/* Decorative background typography */}
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <span className="select-none text-7xl font-black uppercase tracking-[-0.1em] text-white/[0.07] transition-transform duration-700 group-hover:scale-125 sm:text-8xl">
                      {item.symbol}
                    </span>
                  </div>

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-mono text-xs text-white/60">
                      ARCHIVE / {item.number}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition-all duration-300 group-hover:border-[#d9e943] group-hover:bg-[#d9e943] group-hover:text-black">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>

                  <div className="relative z-10">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#d9e943] text-black transition-transform duration-300 group-hover:scale-110">
                      <Play size={18} fill="currentColor" />
                    </div>

                    <p className="mb-3 font-mono text-[10px] tracking-[0.2em] text-[#d9e943]">
                      {item.type}
                    </p>

                    <h3 className="text-3xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-4xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-xs text-white/60">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="absolute inset-0 border-2 border-transparent transition-colors duration-300 group-hover:border-[#d9e943]/60" />
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-8 flex flex-col justify-between gap-3 border-t border-white/10 pt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 sm:flex-row">
            <span>Collected moments / Not official media</span>
            <span>Made by a fan, for the music.</span>
          </div>
        </div>
      </section>
    </>
  );
}
