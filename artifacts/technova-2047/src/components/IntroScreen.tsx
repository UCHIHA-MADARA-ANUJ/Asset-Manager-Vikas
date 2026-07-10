import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroScreenProps {
  onComplete: () => void;
}

export function IntroScreen({ onComplete }: IntroScreenProps) {
  const [phase, setPhase] = useState<"flag" | "title" | "outro">("flag");
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Phase timeline
    const t1 = setTimeout(() => setPhase("title"), 1200);
    const t2 = setTimeout(() => setPhase("outro"), 5800);
    const t3 = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 700);
    }, 6800);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
        >
          {/* Tricolor stripes — saffron, white, green */}
          <div className="absolute inset-0 flex flex-col">
            {["#FF9933", "#F8F8F0", "#138808"].map((color, i) => (
              <motion.div
                key={i}
                className="flex-1 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: phase !== "flag" ? 1 : 0 }}
                transition={{ duration: 0.7, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
                style={{ backgroundColor: color, opacity: 0.92 }}
              />
            ))}
          </div>

          {/* Dark overlay for readability after flag reveals */}
          <motion.div
            className="absolute inset-0 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "title" || phase === "outro" ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />

          {/* Cinematic letterbox bars */}
          <div className="absolute top-0 left-0 right-0 h-[8vh] bg-black z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-[8vh] bg-black z-10" />

          {/* Ashoka Chakra */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
            initial={{ opacity: 0, scale: 0.3, rotate: -90 }}
            animate={{
              opacity: phase === "flag" ? 0 : phase === "outro" ? 0 : 0.15,
              scale: phase === "outro" ? 1.6 : 1,
              rotate: phase === "outro" ? 360 : 0,
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <AsokaChakra size={380} color="#FFFFFF" />
          </motion.div>

          {/* Main content */}
          <div className="relative z-20 flex flex-col items-center text-center px-6 select-none">
            {/* Top label */}
            <motion.div
              initial={{ opacity: 0, y: -20, letterSpacing: "0.5em" }}
              animate={{ opacity: phase !== "flag" ? 1 : 0, y: phase !== "flag" ? 0 : -20, letterSpacing: "0.4em" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-[#FF9933] text-xs sm:text-sm font-black uppercase tracking-[0.4em] mb-6 font-display"
            >
              TechNova 2047 • Team Vikaas
            </motion.div>

            {/* PROJECT VIKAS — cinematic letter reveal */}
            <div className="overflow-hidden mb-2">
              <motion.div
                initial={{ y: "110%" }}
                animate={{ y: phase !== "flag" ? "0%" : "110%" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              >
                <h1
                  className="text-[14vw] sm:text-[11vw] md:text-[9vw] font-black leading-none tracking-tighter font-display"
                  style={{
                    color: "#FFFFFF",
                    textShadow: "0 0 80px rgba(255,153,51,0.5), 0 0 160px rgba(19,136,8,0.3)",
                  }}
                >
                  PROJECT
                </h1>
              </motion.div>
            </div>

            <div className="overflow-hidden mb-8">
              <motion.div
                initial={{ y: "110%" }}
                animate={{ y: phase !== "flag" ? "0%" : "110%" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
              >
                <h1
                  className="text-[20vw] sm:text-[15vw] md:text-[13vw] font-black leading-none tracking-tighter font-display"
                  style={{
                    background: "linear-gradient(135deg, #FF9933 0%, #FFD700 35%, #138808 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 0 40px rgba(255,153,51,0.6))",
                  }}
                >
                  VIKAS
                </h1>
              </motion.div>
            </div>

            {/* Tricolor divider line */}
            <motion.div
              className="flex h-[3px] w-64 sm:w-96 rounded-full overflow-hidden mb-8"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: phase !== "flag" ? 1 : 0, opacity: phase !== "flag" ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex-1" style={{ backgroundColor: "#FF9933" }} />
              <div className="flex-1" style={{ backgroundColor: "#FFFFFF" }} />
              <div className="flex-1" style={{ backgroundColor: "#138808" }} />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: phase !== "flag" ? 1 : 0, y: phase !== "flag" ? 0 : 20, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-white/80 text-base sm:text-xl font-medium tracking-widest uppercase font-display"
            >
              Towards Viksit Bharat 2047
            </motion.p>

            {/* Loading bar */}
            <motion.div className="mt-12 w-48 sm:w-64 h-0.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, #FF9933, #138808)" }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5.5, ease: "linear", delay: 0.5 }}
              />
            </motion.div>
          </div>

          {/* Vignette edges */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.8) 100%)",
            }}
          />

          {/* Light flare particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: `${4 + Math.random() * 8}px`,
                height: `${4 + Math.random() * 8}px`,
                left: `${10 + i * 7}%`,
                top: `${20 + (i % 3) * 30}%`,
                backgroundColor: ["#FF9933", "#FFD700", "#138808", "#FFFFFF"][i % 4],
                filter: "blur(2px)",
              }}
              initial={{ opacity: 0, scale: 0, y: 0 }}
              animate={{
                opacity: phase !== "flag" ? [0, 0.8, 0] : 0,
                scale: [0, 1, 0],
                y: [-20, -80],
              }}
              transition={{ duration: 2.5, delay: 1 + i * 0.15, repeat: Infinity, repeatDelay: 1 }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function AsokaChakra({ size = 200, color = "#000080" }: { size?: number; color?: string }) {
  const spokes = 24;
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.42;
  const innerR = size * 0.06;
  const spokeW = size * 0.018;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring */}
      <circle cx={cx} cy={cy} r={r} stroke={color} strokeWidth={size * 0.025} fill="none" />
      {/* Inner ring */}
      <circle cx={cx} cy={cy} r={innerR} fill={color} />
      {/* Spokes */}
      {Array.from({ length: spokes }).map((_, i) => {
        const angle = (i * 360) / spokes;
        const rad = (angle * Math.PI) / 180;
        const x1 = cx + innerR * Math.cos(rad);
        const y1 = cy + innerR * Math.sin(rad);
        const x2 = cx + (r - size * 0.01) * Math.cos(rad);
        const y2 = cy + (r - size * 0.01) * Math.sin(rad);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth={spokeW}
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}
