import { motion, useScroll, useTransform } from "framer-motion";
import { Wind, Navigation, ArrowRight, Zap } from "lucide-react";
import { ParallaxHero, FadeInStagger, FadeInItem } from "../components/shared-ui";

export default function WindEnergy() {
  return (
    <div className="w-full pb-24 bg-background">
      <div className="w-full h-[60vh] relative flex items-end bg-black overflow-hidden">
        <ParallaxHero 
          src="/images/wind.jpg" 
          alt="Wind Turbines in India" 
          overlayColor="from-black via-black/40 to-transparent"
        />
        
        <div className="container mx-auto px-4 relative z-10 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-blue-400 font-bold mb-6 glass px-5 py-2 rounded-full uppercase tracking-widest text-sm border-blue-400/30">
              <Wind size={18} /> Pavilion 2
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-black text-white mb-4 tracking-tighter text-glow">
              Wind <span className="text-blue-400">Energy</span>
            </h1>
            <p className="text-2xl text-white/90 max-w-3xl font-medium drop-shadow-lg">
              Catching the coastal breezes to power the hinterlands.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-24">
        <div className="max-w-5xl mx-auto space-y-24">
          
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter mb-8">India's Wind Corridors</h2>
            <p className="text-2xl text-muted-foreground font-medium leading-relaxed max-w-4xl mx-auto text-balance">
              With a coastline of over 7,500 km and vast peninsula landscapes, India possesses enormous wind energy potential. 
              States like Tamil Nadu, Gujarat, Maharashtra, and Karnataka lead the charge, hosting massive wind farms that dot 
              the agricultural and coastal landscapes, churning quietly to feed the national grid.
            </p>
          </motion.section>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative">
            {/* Decorative background blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[600px] max-h-[600px] bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
              className="p-10 md:p-12 bg-blue-50/50 backdrop-blur-sm rounded-[3rem] border border-blue-200 shadow-xl transition-all duration-500"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                <Navigation className="text-blue-600 w-10 h-10" />
              </div>
              <h3 className="text-3xl font-display font-black mb-6 text-blue-950 tracking-tight">Onshore Dominance</h3>
              <p className="text-blue-900/80 font-medium text-lg leading-relaxed">
                India is currently the 4th largest in the world in terms of installed wind power capacity. 
                The Muppandal wind farm in Tamil Nadu is one of the largest operational onshore wind farms globally, 
                serving as a monument to early green adoption.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
              className="p-10 md:p-12 bg-card rounded-[3rem] border border-border shadow-2xl transition-all duration-500 relative overflow-hidden"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 shadow-inner relative z-10">
                <Wind className="text-primary w-10 h-10" />
              </div>
              <h3 className="text-3xl font-display font-black mb-6 tracking-tight relative z-10">The Offshore Frontier</h3>
              <p className="text-muted-foreground font-medium text-lg leading-relaxed relative z-10">
                As land becomes scarce, the next big leap for 2047 is Offshore Wind. Projects off the coasts of 
                Gujarat and Tamil Nadu are being developed to harness the stronger, more consistent ocean winds, 
                unlocking gigawatts of untapped potential.
              </p>
              
              {/* Subtle animated wave background for offshore */}
              <div className="absolute bottom-0 left-0 w-full h-32 bg-blue-50/50 -z-0 translate-y-10 group-hover:translate-y-0 transition-transform"></div>
            </motion.div>
          </div>

          <motion.section 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-primary text-primary-foreground p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-primary border-white/20 text-accent font-bold uppercase tracking-widest text-xs">
                  <Zap size={14} /> Synergy
                </div>
                <h3 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-glow-sm">Hybrid Future</h3>
                <p className="text-primary-foreground/80 font-medium text-xl leading-relaxed text-balance">
                  The true power of wind is unlocked when paired with solar. Since wind speeds often peak in the evening 
                  and during monsoons (when solar generation is low), Wind-Solar Hybrid systems ensure a steady, 
                  round-the-clock supply of green energy—a critical requirement for industrializing a Viksit Bharat.
                </p>
              </div>
              
              <div className="flex justify-center md:justify-end">
                {/* Custom Animated Wind Turbine Graphic */}
                <div className="relative w-64 h-64 bg-primary-foreground/5 rounded-full flex items-center justify-center border border-white/10 shadow-[0_0_50px_rgba(20,83,45,0.8)]">
                   <div className="absolute top-0 bottom-0 left-1/2 w-1.5 bg-accent rounded-full animate-spin-slow origin-center" />
                   <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-accent rounded-full animate-spin-slow origin-center transform rotate-60" style={{ animationDelay: '-4s'}} />
                   <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-accent rounded-full animate-spin-slow origin-center transform -rotate-60" style={{ animationDelay: '-8s'}} />
                   <div className="w-12 h-12 bg-white rounded-full z-10 shadow-lg"></div>
                   
                   {/* Glowing rings */}
                   <div className="absolute inset-4 border border-accent/20 rounded-full animate-pulse"></div>
                   <div className="absolute inset-10 border border-accent/10 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
