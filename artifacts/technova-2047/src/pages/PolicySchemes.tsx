import { motion, useScroll, useTransform } from "framer-motion";
import { BookOpen, Scale, FileText, ArrowRight } from "lucide-react";
import { FadeInStagger, FadeInItem } from "../components/shared-ui";
import { useRef } from "react";

export default function PolicySchemes() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const policies = [
    {
      title: "National Green Hydrogen Mission",
      date: "Launched: 2023",
      desc: "An ambition to make India the global hub for production, usage and export of Green Hydrogen and its derivatives. Targeting 5 MMT production capacity by 2030, reducing fossil fuel imports by ₹1 lakh crore.",
      color: "from-emerald-500 to-teal-700",
      textColor: "text-emerald-50",
      shadow: "shadow-[0_20px_50px_rgba(16,185,129,0.3)]"
    },
    {
      title: "PM Surya Ghar: Muft Bijli",
      date: "Launched: 2024",
      desc: "A massive drive to install rooftop solar in 1 crore households. By providing heavy subsidies and cheap loans, it turns consumers into prosumers, decentralizing the energy grid.",
      color: "from-amber-400 to-orange-600",
      textColor: "text-amber-50",
      shadow: "shadow-[0_20px_50px_rgba(245,158,11,0.3)]"
    },
    {
      title: "FAME India Scheme",
      date: "Phases I & II",
      desc: "Faster Adoption and Manufacturing of (Hybrid &) Electric Vehicles. Providing direct consumer subsidies to lower the upfront cost of EVs, and funding the deployment of electric buses and charging stations.",
      color: "from-blue-500 to-indigo-700",
      textColor: "text-blue-50",
      shadow: "shadow-[0_20px_50px_rgba(59,130,246,0.3)]"
    },
    {
      title: "International Solar Alliance",
      date: "Founded: 2015",
      desc: "Initiated by India and France, an alliance of over 100 'sunshine countries' to mobilize investments for massive deployment of solar energy and reducing the cost of solar technology globally.",
      color: "from-purple-500 to-purple-800",
      textColor: "text-purple-50",
      shadow: "shadow-[0_20px_50px_rgba(168,85,247,0.3)]"
    }
  ];

  return (
    <div className="w-full pb-24 bg-background" ref={containerRef}>
      <header className="relative pt-32 pb-24 overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-accent font-bold mb-8 glass-dark px-5 py-2 rounded-full uppercase tracking-widest text-sm border-accent/30">
              <BookOpen size={16} /> Governance & Frameworks
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-black mb-6 tracking-tighter text-balance text-glow-sm">
              Policies Driving <br className="hidden md:block"/><span className="text-accent">The Transition</span>
            </h1>
            <p className="text-xl md:text-3xl text-background/80 max-w-3xl mx-auto font-medium leading-relaxed">
              Technology cannot scale without intent. These landmark initiatives form the regulatory and financial backbone of India's green growth.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="container mx-auto px-4 mt-20">
        {/* Stacked overlapping cards layout */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          <div className="absolute left-10 top-10 bottom-10 w-1 bg-border rounded-full hidden md:block"></div>
          
          <FadeInStagger delay={0.2}>
            {policies.map((policy, i) => (
              <FadeInItem key={i}>
                <motion.div
                  whileHover={{ x: 10, scale: 1.02 }}
                  className={`p-10 md:p-12 rounded-[2.5rem] bg-gradient-to-br ${policy.color} ${policy.textColor} ${policy.shadow} relative overflow-hidden md:ml-16`}
                >
                  <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
                  <div className="absolute -right-10 -top-10 opacity-10 transform rotate-12">
                    <FileText size={200} />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="inline-block px-4 py-1.5 bg-black/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/20 shadow-inner">
                      {policy.date}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-display font-black mb-6 tracking-tight text-white">{policy.title}</h3>
                    <p className="text-lg md:text-xl opacity-90 leading-relaxed font-medium">
                      {policy.desc}
                    </p>
                  </div>
                </motion.div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto mt-24 p-12 md:p-16 glass bg-card/80 border border-border rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle animated background */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[80px] -z-10"></div>
          
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-3 text-secondary font-black mb-4 uppercase tracking-widest text-sm">
              <div className="p-2 bg-secondary/20 rounded-lg"><Scale size={20} /></div>
              Sovereign Green Bonds
            </div>
            <h3 className="text-4xl md:text-5xl font-display font-black mb-6 tracking-tighter">Funding the Future</h3>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed">
              India has successfully issued Sovereign Green Bonds to mobilize massive resources for green infrastructure. The proceeds are deployed in public sector projects which help in radically reducing the carbon intensity of the economy.
            </p>
          </div>
          <div className="shrink-0 relative z-10">
            <button className="group flex items-center justify-center gap-3 px-8 py-5 bg-secondary text-secondary-foreground rounded-full font-black text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(234,88,12,0.4)]">
              Explore Financials <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
