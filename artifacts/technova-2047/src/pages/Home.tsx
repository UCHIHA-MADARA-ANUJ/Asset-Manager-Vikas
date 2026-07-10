import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sun, Droplets, Wind, Zap, Shield, Leaf, Globe2, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedCounter, FadeInStagger, FadeInItem } from "../components/shared-ui";

gsap.registerPlugin(ScrollTrigger);

// Ashoka Chakra SVG inline
function Chakra({ size = 120, color = "currentColor", className = "" }: { size?: number; color?: string; className?: string }) {
  const cx = size / 2, cy = size / 2, r = size * 0.42, innerR = size * 0.06;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" className={className}>
      <circle cx={cx} cy={cy} r={r} stroke={color} strokeWidth={size * 0.025} fill="none" />
      <circle cx={cx} cy={cy} r={innerR} fill={color} />
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 360) / 24;
        const rad = (angle * Math.PI) / 180;
        return (
          <line key={i}
            x1={cx + innerR * Math.cos(rad)} y1={cy + innerR * Math.sin(rad)}
            x2={cx + (r - size * 0.01) * Math.cos(rad)} y2={cy + (r - size * 0.01) * Math.sin(rad)}
            stroke={color} strokeWidth={size * 0.018} strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLElement>(null);
  const pavilionsRef = useRef<HTMLElement>(null);
  const ctaBannerRef = useRef<HTMLElement>(null);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroBgY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.6], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.08]);

  // GSAP ScrollTrigger animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stats counter section pin + reveal
      if (statsRef.current) {
        gsap.from(statsRef.current.querySelectorAll(".stat-item"), {
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          y: 60,
          opacity: 0,
          stagger: 0.15,
          duration: 0.9,
          ease: "power3.out",
        });
      }

      // Mission section — cards only (progress bars use Framer Motion whileInView)
      if (missionRef.current) {
        gsap.from(missionRef.current.querySelectorAll(".mission-card"), {
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 65%",
          },
          y: 80,
          opacity: 0,
          stagger: 0.18,
          duration: 1,
          ease: "power3.out",
        });
      }

      // Pavilion cards — cascade with depth
      if (pavilionsRef.current) {
        gsap.from(pavilionsRef.current.querySelectorAll(".pavilion-card"), {
          scrollTrigger: {
            trigger: pavilionsRef.current,
            start: "top 70%",
          },
          y: 100,
          opacity: 0,
          scale: 0.93,
          stagger: 0.12,
          duration: 1,
          ease: "power3.out",
        });
      }

      // CTA Banner parallax
      if (ctaBannerRef.current) {
        gsap.from(ctaBannerRef.current.querySelector(".cta-content"), {
          scrollTrigger: {
            trigger: ctaBannerRef.current,
            start: "top 80%",
          },
          y: 50,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const pavilions = [
    { title: "Solar Power", desc: "Leading the global solar revolution with PM Surya Ghar & International Solar Alliance", icon: Sun, color: "text-amber-400", link: "/solar", colSpan: "col-span-1 md:col-span-2 lg:col-span-2", img: "/images/solar.jpg", accent: "#FF9933" },
    { title: "Wind Energy", desc: "Harnessing coastal breezes along 7,500km of Indian coastline", icon: Wind, color: "text-sky-400", link: "/wind", colSpan: "col-span-1 lg:col-span-1", img: "/images/wind.jpg", accent: "#22c55e" },
    { title: "Clean Rivers", desc: "Restoring our sacred waterways through Namami Gange", icon: Droplets, color: "text-cyan-400", link: "/water-rivers", colSpan: "col-span-1 lg:col-span-1", img: "/images/rivers.jpg", accent: "#22c55e" },
    { title: "EV Mobility", desc: "Electrifying a billion journeys with FAME-II & indigenous EVs", icon: Zap, color: "text-emerald-400", link: "/ev-mobility", colSpan: "col-span-1 md:col-span-2 lg:col-span-2", img: "/images/ev.jpg", accent: "#138808" },
  ];

  const missionPillars = [
    { icon: Sun, label: "Renewable Energy", num: 500, suffix: " GW", sub: "Non-fossil target by 2030", color: "#FF9933" },
    { icon: Leaf, label: "Net Zero", num: 2070, suffix: "", sub: "India's sovereign commitment", color: "#138808" },
    { icon: Globe2, label: "Green GDP", num: 100, suffix: "T", prefix: "₹", sub: "Trillion green economy by 2047", color: "#22c55e" },
    { icon: Sparkles, label: "Clean Growth", num: 100, suffix: "%", sub: "Sustainable industrialisation", color: "#FF9933" },
  ];

  return (
    <div className="w-full overflow-x-hidden">

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section ref={heroRef} className="relative w-full h-[100dvh] min-h-[700px] flex flex-col justify-center overflow-hidden bg-black">
        {/* Parallax Background */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: heroBgY, scale: heroScale }}
        >
          <img src="/images/hero.jpg" alt="Futuristic Green India" className="w-full h-full object-cover object-center opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
        </motion.div>

        {/* Spinning Chakra watermark */}
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 pointer-events-none z-0 opacity-[0.06]"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <Chakra size={700} color="#FFFFFF" />
        </motion.div>

        {/* Tricolor left edge bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 flex flex-col">
          <div className="flex-1" style={{ backgroundColor: "#FF9933" }} />
          <div className="flex-1 bg-white" />
          <div className="flex-1" style={{ backgroundColor: "#138808" }} />
        </div>

        {/* Hero content */}
        <motion.div className="container relative z-10 px-6 lg:px-12 pt-20" style={{ opacity: heroOpacity }}>
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="max-w-5xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full text-xs font-black tracking-widest uppercase border border-white/20 backdrop-blur-md bg-white/5 text-white/90"
            >
              <Shield size={12} style={{ color: "#FF9933" }} />
              <span style={{ color: "#FF9933" }}>TechNova 2047</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span className="text-white/60">Vision Document</span>
            </motion.div>

            {/* Main heading */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                className="text-[13vw] sm:text-[10vw] lg:text-[8vw] font-display font-black leading-[0.88] tracking-tighter text-white"
              >
                Project
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
                className="text-[16vw] sm:text-[13vw] lg:text-[10vw] font-display font-black leading-[0.88] tracking-tighter"
                style={{
                  background: "linear-gradient(100deg, #FF9933 0%, #FFD700 40%, #138808 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 60px rgba(255,153,51,0.45))",
                }}
              >
                VIKAS
              </motion.h1>
            </div>

            {/* Tricolor separator */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.75 }}
              className="origin-left flex h-[2px] w-48 sm:w-72 rounded-full overflow-hidden mb-7"
            >
              <div className="flex-1" style={{ backgroundColor: "#FF9933" }} />
              <div className="flex-1 bg-white" />
              <div className="flex-1" style={{ backgroundColor: "#138808" }} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7 }}
              className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl leading-relaxed font-medium"
            >
              A digital exhibition of India's sustainable future. By our 100th year of independence,
              a nation powered by clean energy, relentless innovation, and the spirit of{" "}
              <span className="text-white font-bold">Viksit Bharat</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Link
                href="/about-green-tech"
                className="group inline-flex items-center justify-center h-14 px-8 rounded-full font-black text-base text-white transition-all hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #FF9933, #e88500)",
                  boxShadow: "0 0 35px rgba(255,153,51,0.45)",
                }}
                data-cursor-hover
              >
                Begin the Tour
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link
                href="/vision-2047"
                className="group inline-flex items-center justify-center h-14 px-8 rounded-full font-bold text-base text-white border border-white/20 backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all"
                data-cursor-hover
              >
                See Vision 2047
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="text-white/40 text-xs font-bold tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/60 to-white/0"
            animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* ═══════════════════ IMPACT STATS — dark section ═══════════════════ */}
      <section className="relative py-24 bg-[#0a0f0a] overflow-hidden">
        {/* Tricolor glow accents */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-[120px]" style={{ background: "#FF9933" }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-[120px]" style={{ background: "#138808" }} />

        <div ref={statsRef} className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionPillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="stat-item group relative rounded-2xl p-8 border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-500 backdrop-blur-sm overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(ellipse at top left, ${p.color}18 0%, transparent 70%)` }} />
                  <Icon size={28} className="mb-4" style={{ color: p.color }} />
                  <div className="text-4xl sm:text-5xl font-display font-black text-white mb-1 tracking-tighter">
                    <AnimatedCounter value={p.num} prefix={p.prefix ?? ""} suffix={p.suffix} />
                  </div>
                  <div className="font-bold text-sm uppercase tracking-widest mb-1" style={{ color: p.color }}>{p.label}</div>
                  <div className="text-white/40 text-sm font-medium">{p.sub}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════ MISSION — tricolor light section ═══════════════════ */}
      <section ref={missionRef} className="relative py-32 bg-background overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        {/* Decorative Chakra */}
        <motion.div
          className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-[0.035] pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        >
          <Chakra size={500} color="#138808" />
        </motion.div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Section label */}
          <div className="flex items-center gap-4 mb-3">
            <div className="h-[3px] w-10 rounded-full" style={{ background: "linear-gradient(90deg, #FF9933, #138808)" }} />
            <span className="text-xs font-black uppercase tracking-widest" style={{ color: "#FF9933" }}>Our Mission</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter leading-[0.9] mb-8">
                Engineering a<br />
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #FF9933 0%, #138808 100%)" }}>
                  Green Bharat
                </span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl">
                India stands at the threshold of the most consequential energy transition in human history.
                Project Vikas is our vision document — charting the path to a net-zero, resilient, and
                prosperous Viksit Bharat by 2047.
              </p>
              {/* Tricolor progress bar */}
              <div className="space-y-4">
                {[
                  { label: "Renewable capacity installed", pct: 42, color: "#FF9933" },
                  { label: "EV adoption rate", pct: 31, color: "#138808" },
                  { label: "Forest cover growth", pct: 24, color: "#22c55e" },
                ].map((bar, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm font-bold mb-1.5">
                      <span className="text-foreground/70">{bar.label}</span>
                      <span style={{ color: bar.color }}>{bar.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full mission-line"
                        style={{ backgroundColor: bar.color, scaleX: 1, transformOrigin: "left" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${bar.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 * i, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "PM Surya Ghar", desc: "1 crore households to get rooftop solar by 2027", color: "#FF9933", icon: Sun },
                { title: "Int'l Solar Alliance", desc: "India leading 120 nations in the solar revolution", color: "#138808", icon: Globe2 },
                { title: "FAME-II Scheme", desc: "₹10,000 Cr to accelerate EV ecosystem across India", color: "#22c55e", icon: Zap },
                { title: "Namami Gange", desc: "₹20,000 Cr for Ganga cleanup & rejuvenation", color: "#3b82f6", icon: Droplets },
              ].map((card, i) => {
                const Icon = card.icon;
                return (
                  <div key={i} className="mission-card group p-6 rounded-2xl border border-border/50 bg-card hover:border-transparent hover:shadow-xl transition-all duration-400 cursor-default"
                    style={{ boxShadow: "none" }}
                    onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 20px 50px ${card.color}20`)}
                    onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${card.color}18` }}>
                      <Icon size={20} style={{ color: card.color }} />
                    </div>
                    <h3 className="font-display font-black text-lg mb-1.5 text-foreground group-hover:text-transparent group-hover:bg-clip-text transition-all"
                      style={{ backgroundImage: `linear-gradient(135deg, ${card.color}, ${card.color}aa)` }}
                    >{card.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ PAVILIONS — dark section ═══════════════════ */}
      <section ref={pavilionsRef} className="relative py-32 bg-[#070c07] overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(19,136,8,0.07) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-900/40 to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeInStagger>
            <FadeInItem>
              <div className="flex items-center gap-4 mb-3">
                <div className="h-[3px] w-10 rounded-full" style={{ background: "linear-gradient(90deg, #FF9933, #138808)" }} />
                <span className="text-xs font-black uppercase tracking-widest" style={{ color: "#138808" }}>Exhibition</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-white leading-[0.9] mb-4">
                Explore the <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #FF9933, #138808)" }}>
                  Pavilions
                </span>
              </h2>
              <p className="text-white/50 text-xl font-medium max-w-2xl mb-16">
                Navigate through key sectors where Indian innovation is turning the tide on climate change.
              </p>
            </FadeInItem>
          </FadeInStagger>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pavilions.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className={`pavilion-card ${p.colSpan}`}>
                  <Link href={p.link}>
                    <motion.div
                      whileHover={{ y: -6, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer bg-black border border-white/5 hover:border-white/15 transition-all duration-500"
                      style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.4)" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 30px 80px ${p.accent}30, 0 4px 30px rgba(0,0,0,0.4)`; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 30px rgba(0,0,0,0.4)"; }}
                      data-cursor-hover
                    >
                      {/* Image */}
                      <div className="absolute inset-0">
                        <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-35 group-hover:scale-108 transition-all duration-700" style={{ transform: "scale(1)" }}
                          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.08)")}
                          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      </div>

                      {/* Giant icon watermark */}
                      <div className={`absolute -bottom-8 -right-8 opacity-[0.07] group-hover:opacity-[0.18] transition-all duration-700 transform group-hover:scale-110 ${p.color}`}>
                        <Icon size={280} />
                      </div>

                      {/* Tricolor top accent */}
                      <div className="absolute top-0 left-6 right-6 h-[2px] flex rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex-1" style={{ backgroundColor: "#FF9933" }} />
                        <div className="flex-1 bg-white" />
                        <div className="flex-1" style={{ backgroundColor: "#138808" }} />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-end">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border border-white/20 backdrop-blur-md bg-white/10 group-hover:scale-110 transition-transform"
                          style={{ boxShadow: `0 0 20px ${p.accent}30` }}>
                          <Icon size={28} className="text-white" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-display font-black mb-2 text-white leading-tight" style={{ textShadow: "0 0 30px rgba(0,0,0,0.8)" }}>{p.title}</h3>
                        <p className="text-white/65 text-base font-medium mb-6 max-w-sm leading-snug">{p.desc}</p>
                        <div className="flex items-center text-sm font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300" style={{ color: p.accent }}>
                          Enter Pavilion <ArrowRight className="ml-2 w-4 h-4" />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA BANNER — tricolor gradient ═══════════════════ */}
      <section ref={ctaBannerRef} className="relative py-32 overflow-hidden">
        {/* Tricolor background */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #0d1f0d 0%, #1a0f00 40%, #0d1f0d 100%)" }} />
        <div className="absolute inset-0 opacity-20"
          style={{ background: "linear-gradient(90deg, #FF9933 0%, transparent 30%, transparent 70%, #138808 100%)" }} />
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ background: "radial-gradient(ellipse at 50% 50%, #FFD700 0%, transparent 65%)" }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="cta-content text-center max-w-4xl mx-auto">
            {/* Chakra accent */}
            <motion.div
              className="flex justify-center mb-8 opacity-60"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              <Chakra size={64} color="#FF9933" />
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-white mb-6 leading-[0.9]">
              जय हिन्द.<br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #FF9933, #FFD700, #138808)" }}>
                Viksit Bharat 2047
              </span>
            </h2>
            <p className="text-white/60 text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              India's 100th Independence Day will be a milestone of clean energy, innovation, and sustainable prosperity.
              Join us in envisioning this future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/vision-2047"
                className="group inline-flex items-center justify-center h-14 px-10 rounded-full font-black text-base text-white transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #FF9933, #e88500)", boxShadow: "0 0 40px rgba(255,153,51,0.35)" }}
                data-cursor-hover
              >
                View 2047 Vision <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link
                href="/team"
                className="inline-flex items-center justify-center h-14 px-10 rounded-full font-bold text-base text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-all"
                data-cursor-hover
              >
                Meet Team Vikaas
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
