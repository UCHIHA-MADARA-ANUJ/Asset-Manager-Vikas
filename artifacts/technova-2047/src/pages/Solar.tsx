import { motion } from "framer-motion";
import { Sun, ArrowUpRight, Zap, Home } from "lucide-react";
import { ParallaxHero, FadeInStagger, FadeInItem, AnimatedCounter } from "../components/shared-ui";

export default function Solar() {
  return (
    <div className="w-full pb-24 bg-background">
      <div className="w-full h-[60vh] relative flex items-end bg-black overflow-hidden">
        <ParallaxHero 
          src="/images/solar.jpg" 
          alt="Solar Park in India" 
          overlayColor="from-black via-black/40 to-transparent"
        />
        
        <div className="container mx-auto px-4 relative z-10 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-amber-400 font-bold mb-6 glass px-5 py-2 rounded-full uppercase tracking-widest text-sm border-amber-400/30">
              <Sun size={18} className="animate-spin-slow" /> Pavilion 1
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-black text-white mb-4 tracking-tighter text-glow">
              The Solar <span className="text-amber-400">Revolution</span>
            </h1>
            <p className="text-2xl text-white/90 max-w-3xl font-medium drop-shadow-lg">
              Harnessing the power of the Sun to electrify every corner of the nation.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-20">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-16">
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-black mb-6 tracking-tighter">From Scarcity to Abundance</h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium mb-6 text-balance">
                India is blessed with nearly 300 sunny days a year. Recognizing this immense potential, 
                solar energy has become the spearhead of India's renewable transition. From giant ultra-mega 
                solar parks in Bhadla and Pavagada to decentralized rooftop installations, solar power is 
                democratizing energy access.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium text-balance">
                The target is clear: massive capacity additions to ensure that the grid of a Viksit Bharat 
                runs primarily on the rays of the sun.
              </p>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="p-10 md:p-14 bg-amber-50 rounded-[3rem] border border-amber-200 relative overflow-hidden"
            >
              {/* Decorative sun glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/20 rounded-full blur-[80px] pointer-events-none"></div>
              
              <h3 className="text-3xl md:text-4xl font-display font-black mb-8 text-amber-900 flex items-center gap-4">
                <div className="p-3 bg-amber-100 rounded-2xl text-amber-600"><Home size={32} /></div>
                PM Surya Ghar: Muft Bijli
              </h3>
              
              <p className="text-xl text-amber-900/80 mb-10 font-medium">
                Launched to boost rooftop solar, this transformative scheme aims to light up 1 crore (10 million) 
                households by providing up to 300 units of free electricity every month.
              </p>
              
              <FadeInStagger delay={0.2}>
                <div className="space-y-6">
                  {[
                    { title: "Financial Relief", desc: "Substantial subsidies deposited directly into citizens' bank accounts." },
                    { title: "Grid Integration", desc: "Households become producers, selling surplus energy back to the grid." },
                    { title: "Job Creation", desc: "Generating employment for technicians and installers across districts." }
                  ].map((item, i) => (
                    <FadeInItem key={i} className="flex gap-4 p-4 bg-white/60 rounded-2xl border border-white">
                      <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 shadow-sm"><Zap size={20} /></div>
                      <div>
                        <h4 className="font-bold text-amber-950 text-lg">{item.title}</h4>
                        <p className="text-amber-900/70 font-medium">{item.desc}</p>
                      </div>
                    </FadeInItem>
                  ))}
                </div>
              </FadeInStagger>
            </motion.section>
          </div>

          {/* Right Sidebar Visuals */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-card rounded-[2.5rem] p-10 border border-border shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/30 transition-colors duration-700"></div>
              <h3 className="text-2xl font-display font-black text-foreground mb-3 tracking-tight">Bhadla Solar Park</h3>
              <p className="text-muted-foreground font-medium mb-8">Located in Rajasthan, spreading across 14,000 acres of desert.</p>
              <div className="text-6xl font-display font-black text-amber-500 tracking-tighter">
                <AnimatedCounter value={2.2} duration={2} suffix=" GW+" />
              </div>
              <div className="text-foreground font-bold uppercase tracking-widest mt-2 text-sm">Installed Capacity</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-primary text-primary-foreground rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-black mb-4 tracking-tight text-accent">Global Leadership</h3>
                <p className="text-primary-foreground/80 font-medium mb-8 leading-relaxed">
                  India co-founded the International Solar Alliance (ISA), steering global policy towards unified solar grids (One Sun, One World, One Grid).
                </p>
                <a href="/policy-schemes" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-accent/20">
                  Read about ISA <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.div>
            
            {/* Animated Chart Representation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-[2.5rem] p-10 border border-border shadow-xl"
            >
              <h3 className="font-bold text-xl mb-6">Exponential Growth</h3>
              <div className="w-full h-40 bg-muted/30 rounded-2xl p-4 flex items-end gap-3 border border-border">
                {[20, 40, 65, 95].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col justify-end group">
                    <motion.div 
                      initial={{ height: "0%" }} 
                      whileInView={{ height: `${height}%` }} 
                      transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
                      className={`w-full rounded-t-xl transition-all duration-300 ${i === 3 ? 'bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]' : 'bg-amber-200 group-hover:bg-amber-300'}`} 
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-muted-foreground mt-4 text-center">Solar capacity growth over the last decade.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
