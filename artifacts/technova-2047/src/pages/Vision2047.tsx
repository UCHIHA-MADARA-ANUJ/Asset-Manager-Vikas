import { motion } from "framer-motion";
import { TreeDeciduous, Sparkles, Building2, Train } from "lucide-react";
import { Link } from "wouter";
import { FadeInStagger, FadeInItem } from "../components/shared-ui";

export default function Vision2047() {
  return (
    <div className="w-full bg-foreground text-background min-h-screen">
      {/* Cinematic Hero Section */}
      <div className="w-full h-screen relative flex items-center justify-center overflow-hidden snap-start">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            src="/images/vision.jpg" 
            alt="Vision 2047 Futuristic City" 
            className="w-full h-full object-cover object-center origin-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent" />
          <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />
        </div>

        <div className="container relative z-10 px-4 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="inline-flex items-center justify-center gap-2 text-accent font-bold tracking-widest uppercase mb-8 glass-dark px-6 py-2.5 rounded-full border border-accent/30 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
              <Sparkles size={16} /> Destination 100 Years
            </div>
            <h1 className="text-[5rem] md:text-[8rem] lg:text-[10rem] font-display font-black text-white drop-shadow-2xl mb-6 leading-none tracking-tighter text-glow">
              VIKSIT BHARAT <br className="hidden md:block"/><span className="text-transparent bg-clip-text bg-gradient-to-b from-accent to-emerald-600">2047</span>
            </h1>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-8 h-12 rounded-full border-2 border-white/30 flex justify-center p-2 z-10 glass-dark"
        >
          <div className="w-1.5 h-3 bg-white rounded-full"></div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-32 text-center max-w-5xl">
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl md:text-5xl text-white font-display font-medium leading-tight mb-32 tracking-tight text-balance"
        >
          "A developed India in 2047 is not an imitation of the 20th-century West. It is a highly advanced, technologically supreme nation that lives in perfect harmony with nature."
        </motion.p>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 text-left mb-32">
          <FadeInStagger delay={0.2}>
            <FadeInItem>
              <div className="p-10 md:p-12 glass-dark rounded-[3rem] border border-white/10 hover:border-primary/50 transition-colors h-full group">
                <div className="w-16 h-16 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner">
                  <Building2 size={32} />
                </div>
                <h3 className="text-3xl font-display font-black mb-4 text-white">Green Megacities</h3>
                <p className="text-white/60 text-lg font-medium leading-relaxed">
                  Urban centers designed with vertical forests, zero-emission zones, and buildings that generate more energy than they consume via integrated solar glass and smart-grid AI.
                </p>
              </div>
            </FadeInItem>

            <FadeInItem>
              <div className="p-10 md:p-12 glass-dark rounded-[3rem] border border-white/10 hover:border-accent/50 transition-colors h-full group">
                <div className="w-16 h-16 bg-accent/20 text-accent rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner border border-accent/20">
                  <TreeDeciduous size={32} />
                </div>
                <h3 className="text-3xl font-display font-black mb-4 text-white">Net Zero Carbon</h3>
                <p className="text-white/60 text-lg font-medium leading-relaxed">
                  Approaching the 2070 absolute zero target, the 2047 economy is already deeply decarbonized. Heavy industries run on green hydrogen; forests are vast and protected.
                </p>
              </div>
            </FadeInItem>

            <FadeInItem>
              <div className="p-10 md:p-12 glass-dark rounded-[3rem] border border-white/10 hover:border-secondary/50 transition-colors h-full group">
                <div className="w-16 h-16 bg-secondary/20 text-secondary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner border border-secondary/20">
                  <Train size={32} />
                </div>
                <h3 className="text-3xl font-display font-black mb-4 text-white">Hyper-Mobility</h3>
                <p className="text-white/60 text-lg font-medium leading-relaxed">
                  100% electrified rail networks, seamless high-speed transits, and autonomous EV pods making personal fossil-fuel vehicles obsolete museum pieces.
                </p>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-br from-primary to-primary-foreground/10 p-16 md:p-24 rounded-[4rem] text-center border border-white/10 shadow-[0_0_50px_rgba(20,83,45,0.5)] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-display font-black mb-8 text-white tracking-tighter">This is our commitment.</h2>
            <p className="text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-medium leading-relaxed text-balance">
              As the youth of India, we aren't just inheriting this future—we are building it. 
              TechNova 2047 is our blueprint. 
            </p>
            <Link href="/team" className="inline-flex items-center justify-center px-10 py-5 bg-white text-foreground font-black text-xl rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              Meet the Builders
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
