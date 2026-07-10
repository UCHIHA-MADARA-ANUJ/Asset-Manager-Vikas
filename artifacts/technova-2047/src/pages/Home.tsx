import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Sun, Droplets, Wind, Zap, Shield } from "lucide-react";
import { AnimatedCounter, ParallaxHero, FadeInStagger, FadeInItem } from "../components/shared-ui";

export default function Home() {
  const pavilions = [
    { title: "Solar Power", desc: "Leading the global solar revolution", icon: Sun, color: "text-amber-500", bg: "bg-amber-50", link: "/solar", colSpan: "col-span-1 md:col-span-2 lg:col-span-2", img: "/images/solar.jpg" },
    { title: "Wind Energy", desc: "Harnessing coastal breezes", icon: Wind, color: "text-blue-500", bg: "bg-blue-50", link: "/wind", colSpan: "col-span-1 lg:col-span-1", img: "/images/wind.jpg" },
    { title: "Clean Rivers", desc: "Restoring our sacred waterways", icon: Droplets, color: "text-cyan-500", bg: "bg-cyan-50", link: "/water-rivers", colSpan: "col-span-1 lg:col-span-1", img: "/images/rivers.jpg" },
    { title: "EV Mobility", desc: "Electrifying a billion journeys", icon: Zap, color: "text-green-500", bg: "bg-green-50", link: "/ev-mobility", colSpan: "col-span-1 md:col-span-2 lg:col-span-2", img: "/images/ev.jpg" }
  ];

  return (
    <div className="w-full">
      {/* Hero Section with Parallax */}
      <section className="relative w-full h-[95vh] min-h-[700px] flex flex-col justify-center overflow-hidden bg-foreground">
        <ParallaxHero 
          src="/images/hero.jpg" 
          alt="Futuristic Green India" 
          overlayColor="from-foreground via-foreground/80 to-transparent"
        />

        <div className="container relative z-10 px-4 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="max-w-5xl"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full glass-dark text-accent text-xs font-bold tracking-widest uppercase border-accent/30"
            >
              <Shield size={14} className="text-accent" /> Vision Document • TechNova 2047
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-display font-black text-background mb-6 leading-[0.9] tracking-tighter">
              Engineering a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-emerald-400 to-secondary animate-gradient-x text-glow">
                Green Viksit Bharat
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-background/80 mb-12 max-w-2xl leading-relaxed font-medium">
              Step into the exhibition of India's sustainable future. By our 100th year of independence, 
              we envision a nation powered by clean energy and relentless innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/about-green-tech" className="group w-full sm:w-auto inline-flex items-center justify-center h-16 px-10 rounded-full bg-accent text-primary-foreground font-black text-lg hover:bg-accent/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                Begin the Tour 
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link href="/vision-2047" className="w-full sm:w-auto inline-flex items-center justify-center h-16 px-10 rounded-full glass-dark text-background font-bold text-lg hover:bg-white/10 transition-all">
                See Vision 2047
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats Overlay (Negative Margin) */}
      <section className="relative z-20 -mt-20 px-4">
        <div className="container mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 border-white/50 shadow-2xl">
            <FadeInStagger delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 divide-y md:divide-y-0 md:divide-x divide-border">
                <FadeInItem className="text-center md:text-left md:pr-10">
                  <div className="text-6xl md:text-7xl font-display font-black text-primary mb-2 tracking-tighter">
                    <AnimatedCounter value={500} suffix=" GW" />
                  </div>
                  <div className="text-muted-foreground font-bold text-lg uppercase tracking-wide">Non-Fossil Capacity</div>
                  <div className="text-sm text-muted-foreground/80 mt-2">Target by 2030, a monumental shift in global energy grids.</div>
                </FadeInItem>
                
                <FadeInItem className="text-center md:text-left md:px-10 pt-8 md:pt-0">
                  <div className="text-6xl md:text-7xl font-display font-black text-primary mb-2 tracking-tighter">
                    <AnimatedCounter value={2070} />
                  </div>
                  <div className="text-muted-foreground font-bold text-lg uppercase tracking-wide">Net Zero Emissions</div>
                  <div className="text-sm text-muted-foreground/80 mt-2">India's sovereign commitment to the planet and future generations.</div>
                </FadeInItem>
                
                <FadeInItem className="text-center md:text-left md:pl-10 pt-8 md:pt-0">
                  <div className="text-6xl md:text-7xl font-display font-black text-primary mb-2 tracking-tighter">
                    <AnimatedCounter value={100} suffix="%" />
                  </div>
                  <div className="text-muted-foreground font-bold text-lg uppercase tracking-wide">Sustainable Growth</div>
                  <div className="text-sm text-muted-foreground/80 mt-2">Decoupling economic rise from carbon-heavy industrialization.</div>
                </FadeInItem>
              </div>
            </FadeInStagger>
          </div>
        </div>
      </section>

      {/* Exhibition Asymmetric Grid */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container px-4 mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-1 bg-secondary rounded-full"></span>
              <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-foreground text-balance">
                Explore the <br className="hidden md:block"/>Pavilions
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl font-medium">
              Navigate through key domains where Indian innovation is turning the tide against climate change 
              and building a resilient, self-reliant infrastructure.
            </p>
          </motion.div>

          <FadeInStagger>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pavilions.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <FadeInItem key={i} className={feature.colSpan}>
                    <Link href={feature.link}>
                      <motion.div
                        whileHover={{ y: -8, scale: 1.01 }}
                        className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 bg-black"
                      >
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0 z-0">
                          <img src={feature.img} alt={feature.title} className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700" />
                          <div className={`absolute inset-0 bg-gradient-to-t ${feature.bg.replace('bg-', 'from-').replace('50', '900')}/80 via-transparent to-transparent opacity-90`} />
                        </div>
                        
                        {/* Huge Abstract Icon */}
                        <div className={`absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-30 group-hover:scale-125 transition-all duration-700 transform rotate-12 ${feature.color}`}>
                          <Icon size={300} />
                        </div>
                        
                        {/* Content */}
                        <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-end text-white">
                          <div className={`w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 border border-white/30 text-white group-hover:scale-110 transition-transform`}>
                            <Icon size={32} />
                          </div>
                          
                          <h3 className="text-3xl md:text-4xl font-display font-black mb-3 leading-tight text-glow-sm">{feature.title}</h3>
                          <p className="text-white/80 text-lg font-medium mb-6 max-w-md">{feature.desc}</p>
                          
                          <div className="flex items-center text-sm font-bold uppercase tracking-widest text-accent group-hover:translate-x-2 transition-transform">
                            Enter Pavilion <ArrowRight className="ml-2 w-5 h-5" />
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </FadeInItem>
                );
              })}
            </div>
          </FadeInStagger>
        </div>
      </section>
    </div>
  );
}
