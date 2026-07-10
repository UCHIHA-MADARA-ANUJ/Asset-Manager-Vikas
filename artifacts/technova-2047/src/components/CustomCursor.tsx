import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Only mount on devices that have a fine pointer (mouse/trackpad).
// Returns false on touch-only and coarse-pointer devices.
function hasFinePointer() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export function CustomCursor() {
  const [enabled] = useState(() => hasFinePointer());
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const trailId = useRef(0);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth outer ring follows with spring lag
  const springConfig = { damping: 22, stiffness: 250, mass: 0.5 };
  const outerX = useSpring(mouseX, springConfig);
  const outerY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (!enabled) return;
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Add trail particle
      const id = ++trailId.current;
      setTrail((prev) => [
        ...prev.slice(-14),
        { x: e.clientX, y: e.clientY, id },
      ]);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleDown = () => setIsClicking(true);
    const handleUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [mouseX, mouseY]);

  const trailColors = ["#FF9933", "#FFD700", "#138808", "#22c55e", "#FF9933"];

  // Don't render anything on touch/coarse-pointer devices
  if (!enabled) return null;

  return (
    <>
      {/* Hide default cursor only on fine-pointer devices */}
      <style>{`@media (hover: hover) and (pointer: fine) { * { cursor: none !important; } }`}</style>

      {/* Trail particles */}
      {trail.map((point, i) => {
        const age = trail.length - 1 - i; // 0 = newest
        const opacity = Math.max(0, 1 - age / trail.length) * 0.7;
        const size = Math.max(2, 8 - age * 0.5);
        const color = trailColors[i % trailColors.length];
        return (
          <motion.div
            key={point.id}
            className="fixed pointer-events-none z-[9998] rounded-full"
            style={{
              left: point.x - size / 2,
              top: point.y - size / 2,
              width: size,
              height: size,
              backgroundColor: color,
              opacity,
              filter: `blur(${age * 0.3}px)`,
              boxShadow: `0 0 ${size * 2}px ${color}`,
            }}
            initial={{ scale: 1 }}
            animate={{ scale: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        );
      })}

      {/* Outer ring — springy lag */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full border-2"
        style={{
          left: outerX,
          top: outerY,
          x: "-50%",
          y: "-50%",
          width: isHovering ? 52 : 36,
          height: isHovering ? 52 : 36,
          borderColor: isHovering ? "#FF9933" : "#138808",
          opacity: isClicking ? 0.5 : 0.9,
          boxShadow: isHovering
            ? "0 0 20px #FF9933, 0 0 40px rgba(255,153,51,0.3)"
            : "0 0 12px #138808, 0 0 25px rgba(19,136,8,0.2)",
          transition: "width 0.2s ease, height 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
        }}
      />

      {/* Inner dot — instant */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          left: mouseX,
          top: mouseY,
          x: "-50%",
          y: "-50%",
          width: isClicking ? 6 : isHovering ? 8 : 6,
          height: isClicking ? 6 : isHovering ? 8 : 6,
          backgroundColor: isHovering ? "#FF9933" : "#FFFFFF",
          boxShadow: isHovering
            ? "0 0 10px #FF9933"
            : "0 0 8px rgba(255,255,255,0.8)",
        }}
      />
    </>
  );
}
