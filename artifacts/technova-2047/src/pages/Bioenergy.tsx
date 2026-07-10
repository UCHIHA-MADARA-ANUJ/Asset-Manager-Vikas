import { motion } from "framer-motion";
import { Factory, Flame, Recycle, ArrowDown, ArrowUp } from "lucide-react";
import { ParallaxHero, FadeInStagger, FadeInItem } from "../components/shared-ui";

export default function Bioenergy() {
  return (
    <div className="w-full pb-24 bg-background">
      <div className="w-full h-[60vh] relative flex items-end bg-black overflow-hidden">
        <ParallaxHero 
          src="/images/bioenergy.jpg" 
          alt="Bioenergy Plant" 
          overlayColor="from-background via-background/60 to-transparent"
        />
        
        <div className="container mx-auto px-4 relative z-10 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-emerald-600 font-bold mb-6 glass px-5 py-2 rounded-full uppercase tracking-widest text-sm border-emerald-500/30">
              <Factory size={18} /> Pavilion 4
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-black text-foreground mb-4 tracking-tighter text-glow-sm">
              Bioenergy & <br className="hidden md:block"/><span className="text-emerald-600">Waste-to-Wealth</span>
            </h1>
            <p className="text-2xl text-foreground/80 max-w-3xl font-medium">
              Turning agricultural residue and urban waste into the fuel of tomorrow.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-20">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 space-y-10 lg:pr-8"
          >
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter">The Stubble Solution</h2>
            <div className="w-20 h-1.5 bg-emerald-500 rounded-full"></div>
            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
              Every winter, crop residue burning blankets Northern India in smog. The solution isn't just prohibition, but monetization. 
              By converting agricultural biomass into Compressed Biogas (CBG) and ethanol, we turn a pollution crisis into an energy asset.
            </p>
            
            <FadeInStagger delay={0.2}>
              <div className="space-y-6 mt-8">
                <FadeInItem className="flex gap-6 items-start p-8 bg-card border border-border rounded-[2rem] shadow-lg hover:shadow-xl transition-shadow group">
                  <div className="p-4 bg-orange-100 text-orange-600 rounded-2xl shrink-0 group-hover:scale-110 transition-transform">
                    <Flame size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-foreground mb-3">Ethanol Blending</h4>
                    <p className="text-muted-foreground font-medium leading-relaxed">
                      India successfully achieved 10% ethanol blending in petrol ahead of schedule and has fast-tracked the 20% target. This reduces crude oil imports and empowers sugarcane farmers.
                    </p>
                  </div>
                </FadeInItem>

                <FadeInItem className="flex gap-6 items-start p-8 bg-card border border-border rounded-[2rem] shadow-lg hover:shadow-xl transition-shadow group">
                  <div className="p-4 bg-emerald-100 text-emerald-600 rounded-2xl shrink-0 group-hover:scale-110 transition-transform">
                    <Recycle size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-foreground mb-3">GOBARdhan Scheme</h4>
                    <p className="text-muted-foreground font-medium leading-relaxed">
                      Galvanizing Organic Bio-Agro Resources Dhan aims to manage cattle and biodegradable waste, converting it into wealth and energy, keeping villages clean.
                    </p>
                  </div>
                </FadeInItem>
              </div>
            </FadeInStagger>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 bg-emerald-950 p-12 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay"></div>
            
            <h3 className="text-3xl md:text-4xl font-display font-black mb-12 text-center text-white tracking-tight">The Circular Economy Loop</h3>
            
            <div className="relative py-8 flex flex-col items-center justify-center">
              {/* Dynamic flowing lines (CSS only simulation of flow) */}
              <div className="absolute inset-y-0 w-1 bg-white/10 left-1/2 -translate-x-1/2"></div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative z-10 w-full max-w-sm flex justify-center mb-8"
              >
                <div className="w-full text-center p-6 glass-dark rounded-3xl border border-white/20 shadow-xl">
                  <span className="text-2xl font-display font-black block text-white mb-1">Farm / City</span>
                  <span className="text-sm font-bold text-white/60 uppercase tracking-widest">Generates Waste</span>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ duration: 2, repeat: Infinity }}
                className="relative z-10 text-emerald-400 bg-emerald-950 p-2 rounded-full mb-8"
              >
                <ArrowDown size={32} />
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative z-10 w-full max-w-sm flex justify-center mb-8"
              >
                <div className="w-full text-center p-8 bg-gradient-to-br from-emerald-400 to-emerald-600 text-white rounded-3xl shadow-[0_0_40px_rgba(52,211,153,0.4)] border border-emerald-300">
                  <span className="text-2xl font-display font-black block mb-1">Bio-Refinery</span>
                  <span className="text-sm font-bold text-emerald-950 uppercase tracking-widest">Converts to Bio-fuel</span>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="relative z-10 text-emerald-400 bg-emerald-950 p-2 rounded-full mb-8"
              >
                <ArrowDown size={32} />
              </motion.div>
              
              <div className="relative z-10 w-full flex justify-between max-w-md gap-4">
                <motion.div whileHover={{ scale: 1.05 }} className="w-full text-center p-6 glass-dark rounded-3xl border border-white/20 shadow-xl">
                  <span className="text-xl font-display font-black block text-emerald-400 mb-1">Clean Energy</span>
                  <span className="text-xs font-bold text-white/60 uppercase tracking-widest">Fuel for Transport</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="w-full text-center p-6 glass-dark rounded-3xl border border-white/20 shadow-xl">
                  <span className="text-xl font-display font-black block text-amber-400 mb-1">Bio-Manure</span>
                  <span className="text-xs font-bold text-white/60 uppercase tracking-widest">Back to Farms</span>
                </motion.div>
              </div>
            </div>
            
            <p className="text-center text-lg font-medium text-emerald-100/70 mt-10">
              A zero-waste approach that creates jobs, cleans the environment, and generates energy simultaneously.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
