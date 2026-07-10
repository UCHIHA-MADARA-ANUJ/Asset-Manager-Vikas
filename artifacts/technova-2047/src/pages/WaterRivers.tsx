import { motion } from "framer-motion";
import { Droplets, ShieldCheck, Waves } from "lucide-react";
import { ParallaxHero, FadeInStagger, FadeInItem } from "../components/shared-ui";

export default function WaterRivers() {
  return (
    <div className="w-full pb-24 bg-background">
      <div className="w-full h-[60vh] relative flex items-end bg-cyan-950 overflow-hidden">
        <ParallaxHero 
          src="/images/rivers.jpg" 
          alt="Clean Rivers in India" 
          overlayColor="from-cyan-950 via-cyan-950/60 to-transparent"
        />
        
        <div className="container mx-auto px-4 relative z-10 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-cyan-400 font-bold mb-6 glass-dark px-5 py-2 rounded-full uppercase tracking-widest text-sm border-cyan-400/30">
              <Droplets size={18} /> Pavilion 5
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-black text-white mb-4 tracking-tighter text-glow-sm">
              River <span className="text-cyan-400">Restoration</span>
            </h1>
            <p className="text-2xl text-cyan-50 max-w-3xl font-medium drop-shadow-lg">
              Reviving our sacred lifelines and securing water for a billion-plus.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-20">
        <div className="max-w-6xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-8">The Lifelines of Bharat</h2>
            <p className="text-2xl text-muted-foreground font-medium leading-relaxed max-w-4xl mx-auto text-balance">
              A developed nation requires absolute water security. For decades, rapid urbanization turned sacred rivers into conduits for wastewater. Today, heavy investments in green technology and ecological restoration are reversing this trend.
            </p>
          </motion.div>

          {/* Fluid fluid layout for River sections */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 blur-[100px] rounded-full -z-10"></div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-card p-10 md:p-14 border border-border shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden group"
              style={{ borderRadius: "40px 100px 40px 40px" }}
            >
              <div className="absolute -right-10 -top-10 text-cyan-100 group-hover:scale-110 transition-transform duration-700">
                <Waves size={200} strokeWidth={1} />
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-cyan-100 text-cyan-600 rounded-3xl flex items-center justify-center mb-8 shadow-inner">
                  <Waves size={40} />
                </div>
                <h3 className="text-3xl font-display font-black mb-6 tracking-tight text-foreground">Namami Gange</h3>
                <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                  An integrated conservation mission recognized by the UN as one of the top 10 World Restoration Flagships. It focuses on pollution abatement, river front development, biodiversity, and massive public participation (Jan Bhagidari) to restore the purity of the Ganga basin.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-cyan-900 text-cyan-50 p-10 md:p-14 border border-cyan-800 shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden group"
              style={{ borderRadius: "100px 40px 40px 40px" }}
            >
              <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-cyan-800 text-cyan-300 rounded-3xl flex items-center justify-center mb-8 shadow-inner">
                  <ShieldCheck size={40} />
                </div>
                <h3 className="text-3xl font-display font-black mb-6 tracking-tight">Jal Jeevan Mission</h3>
                <p className="text-lg text-cyan-100/80 font-medium leading-relaxed">
                  A monumental infrastructure push ensuring 'Har Ghar Jal'—piped water to every rural household. Combined with tech-driven water quality monitoring and community-managed rain water harvesting to recharge deep aquifers.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-cyan-50 p-12 md:p-20 rounded-[3rem] border border-cyan-200 shadow-lg relative overflow-hidden"
          >
            {/* Animated wave bottom */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 animate-gradient-x"></div>

            <h3 className="text-4xl font-display font-black text-cyan-950 mb-16 text-center tracking-tight">Tech-Driven Water Management</h3>
            
            <FadeInStagger delay={0.2}>
              <div className="grid md:grid-cols-3 gap-10 text-center">
                <FadeInItem>
                  <div className="w-24 h-24 mx-auto bg-white shadow-xl text-cyan-600 rounded-full flex items-center justify-center mb-8 font-display font-black text-3xl border-4 border-cyan-100">01</div>
                  <h4 className="font-bold text-2xl text-cyan-950 mb-4">Smart STPs</h4>
                  <p className="text-lg text-cyan-800/80 font-medium leading-relaxed">Sensor-monitored Sewage Treatment Plants ensuring zero liquid discharge into rivers.</p>
                </FadeInItem>
                <FadeInItem>
                  <div className="w-24 h-24 mx-auto bg-white shadow-xl text-cyan-600 rounded-full flex items-center justify-center mb-8 font-display font-black text-3xl border-4 border-cyan-100">02</div>
                  <h4 className="font-bold text-2xl text-cyan-950 mb-4">Precision Ag</h4>
                  <p className="text-lg text-cyan-800/80 font-medium leading-relaxed">Micro-irrigation (Per Drop More Crop) heavily reducing agricultural water wastage.</p>
                </FadeInItem>
                <FadeInItem>
                  <div className="w-24 h-24 mx-auto bg-white shadow-xl text-cyan-600 rounded-full flex items-center justify-center mb-8 font-display font-black text-3xl border-4 border-cyan-100">03</div>
                  <h4 className="font-bold text-2xl text-cyan-950 mb-4">Desalination</h4>
                  <p className="text-lg text-cyan-800/80 font-medium leading-relaxed">Solar-powered coastal plants ensuring water security for growing industrial hubs.</p>
                </FadeInItem>
              </div>
            </FadeInStagger>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}
