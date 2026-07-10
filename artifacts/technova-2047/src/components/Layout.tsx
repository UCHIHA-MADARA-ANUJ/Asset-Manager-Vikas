import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence, useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import { Leaf, Sun, Wind, Car, Droplets, BookOpen, Users, TreeDeciduous, Factory, Globe, Flag } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home", icon: Leaf },
  { href: "/about-green-tech", label: "About", icon: Globe },
  { href: "/solar", label: "Solar", icon: Sun },
  { href: "/wind", label: "Wind", icon: Wind },
  { href: "/ev-mobility", label: "Mobility", icon: Car },
  { href: "/bioenergy-waste", label: "Bioenergy", icon: Factory },
  { href: "/water-rivers", label: "Rivers", icon: Droplets },
  { href: "/policy-schemes", label: "Policies", icon: BookOpen },
  { href: "/vision-2047", label: "Vision", icon: TreeDeciduous },
];

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const isHome = location === "/";
  const { scrollY, scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 30);
  });

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background relative selection:bg-[rgba(255,153,51,0.25)]">
      {/* Global Noise Overlay */}
      <div className="pointer-events-none fixed inset-0 z-[100] bg-noise opacity-[0.03] mix-blend-overlay" />

      {/* ─── Tricolor scroll-progress bar ─── */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[200] h-[2px] origin-left"
        style={{
          scaleX: smoothProgress,
          background: "linear-gradient(90deg, #FF9933 0%, #FFD700 50%, #138808 100%)",
        }}
      />

      {/* ─── Header ─── */}
      <motion.header
        className="fixed top-[2px] z-50 w-full transition-all duration-500"
        animate={{
          backgroundColor: scrolled ? "rgba(250,249,245,0.93)" : "rgba(0,0,0,0.2)",
          backdropFilter: "blur(16px)",
          boxShadow: scrolled ? "0 1px 30px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div className="container mx-auto px-4 lg:px-8 h-16 lg:h-20 flex items-center justify-between">

          {/* Logo — PROJECT VIKAS */}
          <Link href="/" className="flex items-center gap-3 group relative z-10" data-cursor-hover>
            {/* Tricolor icon */}
            <div className="relative w-10 h-10 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-lg">
              <div className="absolute inset-0 flex flex-col">
                <div className="flex-1" style={{ backgroundColor: "#FF9933" }} />
                <div className="flex-1 bg-white" />
                <div className="flex-1" style={{ backgroundColor: "#138808" }} />
              </div>
              {/* Ashoka Chakra mini */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full border border-[#000080] flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-[#000080]" />
                </div>
              </div>
            </div>

            <div className="flex flex-col leading-none">
              <span className="font-display font-black text-xs tracking-[0.18em] uppercase" style={{ color: "#FF9933" }}>
                Project
              </span>
              <span
                className="font-display font-black text-xl tracking-tight"
                style={{ color: (isHome && !scrolled) ? "#ffffff" : "#0d1a0d" }}
              >
                VIKAS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className={`hidden lg:flex items-center gap-1 backdrop-blur-md px-2 py-1.5 rounded-full shadow-inner ${
            isHome && !scrolled
              ? "bg-white/5 border border-white/10"
              : "bg-black/5 border border-black/10"
          }`}>
            {NAV_LINKS.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden ${
                    isActive
                      ? "text-white shadow-md"
                      : isHome && !scrolled
                      ? "text-white/60 hover:text-white hover:bg-white/10"
                      : "text-foreground/60 hover:text-foreground hover:bg-black/5"
                  }`}
                  data-cursor-hover
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full z-0"
                      style={{ background: "linear-gradient(135deg, #138808, #0d5c08)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <link.icon size={13} className={isActive ? "opacity-100" : "opacity-60"} />
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Team button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/team"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm text-white transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #FF9933, #e88500)", boxShadow: "0 0 20px rgba(255,153,51,0.25)" }}
              data-cursor-hover
            >
              <Users size={15} /> Team Vikaas
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Mobile nav */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-50 glass rounded-2xl p-2 flex overflow-x-auto no-scrollbar gap-1.5 shadow-2xl border-white/20 items-center supports-[backdrop-filter]:bg-background/80">
        {NAV_LINKS.map((link) => {
          const isActive = location === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                isActive
                  ? "text-white shadow-lg scale-105"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted"
              }`}
              style={isActive ? { background: "linear-gradient(135deg, #138808, #0d5c08)" } : {}}
            >
              <link.icon size={15} />
              <span>{link.label}</span>
            </Link>
          );
        })}
        <Link
          href="/team"
          className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${location === "/team" ? "text-white shadow-lg scale-105" : "bg-muted/50 text-muted-foreground hover:bg-muted"}`}
          style={location === "/team" ? { background: "linear-gradient(135deg, #FF9933, #e88500)" } : {}}
        >
          <Users size={15} />
          <span>Team</span>
        </Link>
      </div>

      <main className="flex-1 w-full relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location}
            initial={{ opacity: 0, filter: "blur(10px)", y: 8 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, filter: "blur(10px)", y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ─── Footer ─── */}
      <footer className="w-full relative z-10 mt-auto bg-[#070c07] text-white pb-20 lg:pb-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] tricolor-bar" />
        <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay pointer-events-none" />

        {/* Subtle tricolor glow */}
        <div className="absolute left-0 top-0 bottom-0 w-1 flex flex-col">
          <div className="flex-1" style={{ backgroundColor: "#FF9933", opacity: 0.6 }} />
          <div className="flex-1 bg-white/40" />
          <div className="flex-1" style={{ backgroundColor: "#138808", opacity: 0.6 }} />
        </div>

        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-3">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex flex-col">
                  <div className="flex-1" style={{ backgroundColor: "#FF9933" }} />
                  <div className="flex-1 bg-white" />
                  <div className="flex-1" style={{ backgroundColor: "#138808" }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full border border-[#000080] flex items-center justify-center">
                    <div className="w-0.5 h-0.5 rounded-full bg-[#000080]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-black text-[10px] tracking-[0.2em] uppercase" style={{ color: "#FF9933" }}>Project</span>
                <span className="font-display font-black text-lg tracking-tight text-white">VIKAS</span>
              </div>
            </div>
            <p className="text-white/40 text-sm max-w-xs text-center md:text-left leading-relaxed">
              A digital exhibition built for the Vision of Viksit Bharat.<br/>
              Engineering a green, resilient, self-reliant India by 2047.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="text-xs font-black text-white/30 uppercase tracking-widest">Submission for</div>
            <div className="text-sm font-bold text-white/60">TechNova 2047 • Grades IX–X</div>
            <Link href="/team" className="group flex items-center gap-3" data-cursor-hover>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all group-hover:border-[#FF9933]/40">
                <span className="font-display font-bold text-base text-white">Team Vikaas</span>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#138808" }} />
              </div>
            </Link>
            <p className="text-white/20 text-xs">Colonel's Central Academy · 10th Grade</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
