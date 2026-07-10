import { motion } from "framer-motion";
import { Car, BatteryCharging, Leaf, Zap, ShieldCheck } from "lucide-react";
import { ParallaxHero, FadeInStagger, FadeInItem, AnimatedCounter } from "../components/shared-ui";

export default function EVMobility() {
  return (
    <div className="w-full pb-0 bg-background">
      <div className="w-full h-[60vh] relative flex items-end bg-black overflow-hidden">
        <ParallaxHero 
          src="/images/ev.jpg" 
          alt="EV Mobility in India" 
          overlayColor="from-[#0f172a] via-[#0f172a]/60 to-transparent"
        />
        
        <div className="container mx-auto px-4 relative z-10 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-green-400 font-bold mb-6 glass-dark px-5 py-2 rounded-full uppercase tracking-widest text-sm border-green-400/30">
              <Car size={18} /> Pavilion 3
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-black text-white mb-4 tracking-tighter text-glow">
              Green <span className="text-green-400">Mobility</span>
            </h1>
            <p className="text-2xl text-white/90 max-w-3xl font-medium drop-shadow-lg">
              Electrifying a billion journeys and cleaning our city air.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Dark Section for EV to give a sleek, tech feel */}
      <section className="bg-[#0f172a] text-white pt-20 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-7 space-y-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-4xl md:text-6xl font-display font-black mb-8 tracking-tighter">The 2W & 3W <br/>Revolution</h2>
                <div className="space-y-6 text-xl text-slate-300 font-medium leading-relaxed">
                  <p>
                    Unlike the West, where electric transition is driven by premium cars, India's EV revolution is playing out on two and three wheels. 
                  </p>
                  <p>
                    E-rickshaws have silently transformed last-mile connectivity in towns and cities, while electric scooters are becoming the default choice for daily commuters and gig-economy delivery agents.
                  </p>
                  <p className="text-green-400 font-bold border-l-4 border-green-500 pl-6 mt-8">
                    This grassroots adoption ensures that the benefits of green tech—lower running costs and zero tailpipe emissions—reach the masses immediately.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="p-10 md:p-12 glass-dark rounded-[3rem] border border-white/10 relative overflow-hidden"
              >
                {/* Huge subtle icon */}
                <div className="absolute -right-10 -bottom-10 text-green-500/10 transform -rotate-12">
                  <Zap size={250} />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-display font-black mb-6 flex items-center gap-4 tracking-tight">
                    <div className="p-3 bg-green-500/20 text-green-400 rounded-2xl"><BatteryCharging size={28} /></div>
                    FAME Scheme & Policy
                  </h3>
                  <p className="text-slate-300 font-medium text-lg mb-10 leading-relaxed">
                    By subsidizing the upfront cost and funding charging infrastructure, FAME bridged the viability gap. Progressive state policies now exempt EVs from road tax and registration fees.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                      <div className="font-bold text-white mb-2 text-xl">PLI Schemes</div>
                      <div className="text-slate-400 font-medium">Production Linked Incentives to manufacture advanced chemistry cell (ACC) batteries locally.</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                      <div className="font-bold text-white mb-2 text-xl">Public Transit</div>
                      <div className="text-slate-400 font-medium">Massive procurement of electric buses under PM-eBus Sewa to clean up urban transport.</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="sticky top-32 bg-gradient-to-b from-green-500 to-emerald-700 text-white rounded-[3rem] p-10 md:p-12 shadow-[0_20px_50px_rgba(34,197,94,0.3)] border border-green-400/30"
              >
                <h3 className="text-4xl font-display font-black mb-8 tracking-tighter">Vision 2030 Goals</h3>
                
                <FadeInStagger delay={0.3}>
                  <div className="space-y-10">
                    <FadeInItem>
                      <div className="flex justify-between items-end mb-3">
                        <div className="flex items-center gap-3">
                          <Car size={24} className="text-green-200" />
                          <span className="font-bold text-xl">Private EV Sales</span>
                        </div>
                        <span className="font-display font-black text-3xl"><AnimatedCounter value={30} suffix="%" /></span>
                      </div>
                      <div className="w-full h-3 bg-black/20 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }} 
                          whileInView={{ width: "30%" }} 
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-white rounded-full shadow-[0_0_10px_white]"
                        />
                      </div>
                    </FadeInItem>
                    
                    <FadeInItem>
                      <div className="flex justify-between items-end mb-3">
                        <div className="flex items-center gap-3">
                          <Car size={24} className="text-green-200" />
                          <span className="font-bold text-xl">Commercial EVs</span>
                        </div>
                        <span className="font-display font-black text-3xl"><AnimatedCounter value={70} suffix="%" /></span>
                      </div>
                      <div className="w-full h-3 bg-black/20 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }} 
                          whileInView={{ width: "70%" }} 
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                          className="h-full bg-white rounded-full shadow-[0_0_10px_white]"
                        />
                      </div>
                    </FadeInItem>

                    <FadeInItem>
                      <div className="flex justify-between items-end mb-3">
                        <div className="flex items-center gap-3">
                          <Car size={24} className="text-green-200" />
                          <span className="font-bold text-xl">Electric Buses</span>
                        </div>
                        <span className="font-display font-black text-3xl"><AnimatedCounter value={40} suffix="%" /></span>
                      </div>
                      <div className="w-full h-3 bg-black/20 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }} 
                          whileInView={{ width: "40%" }} 
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                          className="h-full bg-white rounded-full shadow-[0_0_10px_white]"
                        />
                      </div>
                    </FadeInItem>
                  </div>
                </FadeInStagger>

                <div className="mt-12 pt-8 border-t border-white/20 flex items-start gap-4">
                  <ShieldCheck size={32} className="text-green-200 shrink-0" />
                  <p className="font-medium text-green-100">
                    Targets designed to drastically reduce dependency on crude oil imports and guarantee cleaner air for future generations.
                  </p>
                </div>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
