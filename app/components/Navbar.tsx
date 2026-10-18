"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "MUSIC", href: "#music", number: "01" },
  { label: "THE BAND", href: "#members", number: "02" },
  { label: "LIVE", href: "#live", number: "03" },
  { label: "ARCHIVE", href: "#archive", number: "04" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* MAIN NAVBAR */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-[#10110f]/90 shadow-2xl shadow-black/20 backdrop-blur-xl"
            : "border-b border-transparent bg-black/10"
        }`}
      >
        <nav className="mx-auto flex h-[82px] max-w-[1800px] items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* LOGO */}
          <a
            href="#home"
            onClick={closeMenu}
            aria-label="Jellow Glow home"
            className="group relative z-[60] flex items-center gap-3"
          >
            <motion.span
              whileHover={{ rotate: -8, scale: 1.08 }}
              className="flex h-11 w-11 items-center justify-center border border-[#d9e943]/60 bg-[#d9e943] font-black tracking-tighter text-black transition-colors group-hover:bg-white"
            >
              JG
            </motion.span>

            <span className="text-[10px] font-bold uppercase leading-[1.15] tracking-[0.22em] text-white sm:text-xs">
              JELLOW
              <br />
              GLOW<span className="text-[#d9e943]">.</span>
            </span>
          </a>

          {/* DESKTOP LINKS */}
          <div className="hidden items-center gap-8 lg:flex xl:gap-12">
            {links.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="group relative flex items-center gap-2 py-3"
              >
                <span className="font-mono text-[9px] text-[#d9e943]/60">
                  {link.number}
                </span>

                <span className="text-[11px] font-bold tracking-[0.17em] text-white/70 transition-colors duration-300 group-hover:text-[#d9e943]">
                  {link.label}
                </span>

                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#d9e943] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="group hidden items-center gap-4 border border-white/20 py-3 pl-5 pr-3 text-[10px] font-bold tracking-[0.16em] text-white transition-all duration-300 hover:border-[#d9e943] hover:bg-[#d9e943] hover:text-black sm:flex"
          >
            <span>ENTER THE NOISE</span>
            <span className="flex h-7 w-7 items-center justify-center bg-[#d9e943] text-black transition-transform duration-300 group-hover:rotate-45 group-hover:bg-black group-hover:text-[#d9e943]">
              <ArrowUpRight size={16} />
            </span>
          </a>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="relative z-[60] flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-[#d9e943] hover:text-[#d9e943] lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                {menuOpen ? <X size={21} /> : <Menu size={21} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      {/* FULL-SCREEN MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col overflow-hidden bg-[#10110f] px-6 pb-8 pt-28 sm:px-10 lg:hidden"
          >
            {/* DECORATIVE GLOW */}
            <div className="pointer-events-none absolute -right-28 top-24 h-72 w-72 rounded-full bg-[#d9e943]/10 blur-[100px]" />

            <div className="relative flex items-center justify-between border-b border-white/15 pb-5 font-mono text-[9px] tracking-[0.16em] text-white/50 sm:text-[10px]">
              <span>JG/ — OFFSTAGE ACCESS</span>

              <span className="flex items-center gap-2 text-[#d9e943]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#d9e943]" />
                SIGNAL ACTIVE
              </span>
            </div>

            {/* ANIMATED LINKS */}
            <div className="relative my-auto flex flex-col">
              {links.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.16 + index * 0.09,
                    duration: 0.45,
                  }}
                  className="group flex items-center gap-4 border-b border-white/10 py-5 sm:py-6"
                >
                  <span className="w-6 font-mono text-xs text-[#d9e943]">
                    {link.number}
                  </span>

                  <span className="text-4xl font-black tracking-[-0.06em] text-white transition-all duration-300 group-hover:translate-x-3 group-hover:text-[#d9e943] sm:text-6xl">
                    {link.label}
                  </span>

                  <ArrowUpRight
                    size={25}
                    className="ml-auto text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d9e943]"
                  />
                </motion.a>
              ))}
            </div>

            {/* FOOTER */}
            <div className="relative flex items-end justify-between gap-4 border-t border-white/15 pt-5 font-mono text-[9px] tracking-[0.12em] text-white/40 sm:text-[10px]">
              <span>TURN IT UP. STAY DIFFERENT.</span>
              <span>JG/ FAN PROJECT</span>
            </div>

            {/* WATERMARK */}
            <div className="pointer-events-none absolute -bottom-16 -right-4 select-none text-[13rem] font-black leading-none tracking-[-0.12em] text-white/[0.025] sm:text-[18rem]">
              JG
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}