
"use client";

import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  ArrowUp,
  Camera,
  Play,
  Music2,
} from "lucide-react";

const socials = [
  {
    label: "INSTAGRAM",
    href: "https://www.instagram.com/",
    icon: Camera,
  },
  {
    label: "YOUTUBE",
    href: "https://www.youtube.com/",
    icon: Play,
  },
  {
    label: "SPOTIFY",
    href: "https://open.spotify.com/",
    icon: Music2,
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#10110f] px-5 pb-6 pt-20 text-[#eeede5] sm:px-10 md:pt-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Top row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-6 border-b border-white/15 pb-8 sm:flex-row sm:items-center"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center bg-[#d9e943] text-sm font-black text-[#10110f]">
              JG
            </span>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.15em]">
                JELLOW GLOW
              </p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
                A fan-made experience
              </p>
            </div>
          </div>

          <a
            href="#home"
            className="group flex w-fit items-center gap-3 font-mono text-xs uppercase tracking-[0.15em] text-white/60 transition-colors hover:text-[#d9e943]"
          >
            Back to the beginning
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-all group-hover:border-[#d9e943] group-hover:bg-[#d9e943] group-hover:text-black">
              <ArrowUp size={15} />
            </span>
          </a>
        </motion.div>

        {/* Giant closing statement */}
        <div className="relative py-20 sm:py-28">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#d9e943] sm:text-xs"
          >
            <ArrowDownRight size={15} />
            Until the next sound
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[18vw] font-black uppercase leading-[0.72] tracking-[-0.09em] sm:text-[15vw] md:text-[12.5rem]"
          >
            STAY
            <br />
            <span className="text-[#d9e943]">LOUD.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end"
          >
            <p className="max-w-sm text-sm leading-7 text-white/50">
              Built around the music, the atmosphere, and the moments that
              stay with us long after the sound fades.
            </p>

            <div className="flex flex-wrap gap-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="group flex items-center gap-3 border border-white/15 px-4 py-3 transition-all duration-300 hover:border-[#d9e943] hover:bg-[#d9e943] hover:text-[#10110f]"
                  >
                    <Icon size={15} />
                    <span className="font-mono text-[10px] tracking-[0.12em]">
                      {social.label}
                    </span>
                    <ArrowUpRight
                      size={13}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col justify-between gap-4 border-t border-white/15 py-6 font-mono text-[9px] uppercase tracking-[0.15em] text-white/40 sm:flex-row sm:items-center sm:text-[10px]">
          <p>© 2026 Jellow Glow Fan Project</p>
          <p className="max-w-md leading-5">
            Unofficial fan-made website. Not affiliated with or endorsed by
            the band. All rights belong to their respective owners.
          </p>

          <a
            href="#home"
            className="flex w-fit items-center gap-2 transition-colors hover:text-[#d9e943]"
          >
            Back to top <ArrowUp size={12} />
          </a>
        </div>
      </div>

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-[#d9e943]/5 blur-[100px]" />
    </footer>
  );
}
