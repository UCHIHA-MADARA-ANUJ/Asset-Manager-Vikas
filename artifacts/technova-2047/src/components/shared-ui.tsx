import { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";

export function AnimatedCounter({ 
  value, 
  duration = 2, 
  prefix = "", 
  suffix = "",
  className = ""
}: { 
  value: number; 
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (!inView || !nodeRef.current) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // easeOutExpo
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeProgress * value);
      
      if (nodeRef.current) {
        nodeRef.current.textContent = `${prefix}${current}${suffix}`;
      }
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else if (nodeRef.current) {
        nodeRef.current.textContent = `${prefix}${value}${suffix}`; // exact final value
      }
    };
    
    window.requestAnimationFrame(step);
  }, [inView, value, duration, prefix, suffix]);

  return <span ref={nodeRef} className={className}>0</span>;
}

export function ParallaxHero({ 
  src, 
  alt, 
  overlayColor = "from-background via-background/80 to-background/20" 
}: { 
  src: string; 
  alt: string;
  overlayColor?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <div ref={ref} className="absolute inset-0 z-0 overflow-hidden bg-black">
      <motion.img 
        src={src} 
        alt={alt} 
        style={{ y, scale, opacity }}
        className="w-full h-full object-cover object-center origin-center" 
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${overlayColor} mix-blend-normal`} />
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
    </div>
  );
}

export function FadeInStagger({ 
  children, 
  delay = 0 
}: { 
  children: React.ReactNode; 
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
            delayChildren: delay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

export function FadeInItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
        visible: { 
          opacity: 1, 
          y: 0, 
          filter: "blur(0px)",
          transition: { type: "spring", stiffness: 100, damping: 20 }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
