import { motion } from "framer-motion";
import { Leaf, Target, Globe2, Scale, ArrowRight } from "lucide-react";
import { FadeInStagger, FadeInItem } from "../components/shared-ui";

export default function AboutGreenTech() {
  return (
    <div className="w-full pb-24 bg-background">
      {/* Huge Typographic Header */}
      <header className="relative pt-32 pb-24 overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 text-accent font-bold mb-8 bg-accent/10 px-5 py-2 rounded-full border border-accent/20 uppercase tracking-widest text-sm">
              <Globe2 size={16} /> Context & Importance
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-black mb-8 leading-[0.9] tracking-tighter text-balance">
              Why Green Tech is the <br className="hidden md:block"/>
              <span className="text-accent text-glow">Backbone of Viksit Bharat</span>
            </h1>
            <p className="text-xl md:text-3xl text-primary-foreground/80 max-w-4xl font-medium leading-relaxed">
              India's journey to becoming a developed nation by 2047 cannot rely on the carbon-heavy pathways of the past. 
              We are forging a new paradigm: growth decoupled from emissions.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Narrative Section - Overlapping style */}
      <div className="container mx-auto px-4 mt-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-0 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 space-y-8 lg:pr-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter text-foreground">The Dual Challenge</h2>
            <div className="w-20 h-1.5 bg-accent rounded-full"></div>
            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
              India houses 17% of the global population but accounts for only about 4% of historical global greenhouse gas emissions. 
              As our economy expands to meet the aspirations of over a billion citizens, our energy needs will surge.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
              The challenge for a <strong className="text-foreground">Viksit Bharat (Developed India)</strong> is twofold: providing abundant, affordable energy to eradicate poverty and fuel industrial growth, while simultaneously protecting our vulnerable ecosystems and adhering to our ambitious climate commitments.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 relative"
          >
            {/* Decorative abstract card layout */}
            <div className="relative z-10 glass bg-card p-10 rounded-3xl shadow-2xl border-primary/10 -ml-4 lg:-ml-12 mt-8 lg:mt-0">
              <FadeInStagger delay={0.2}>
                <div className="space-y-8">
                  <FadeInItem className="flex gap-6 items-start">
                    <div className="p-4 bg-secondary/10 text-secondary rounded-2xl shrink-0 shadow-inner">
                      <Target size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Panchamrit</h3>
                      <p className="text-muted-foreground font-medium">India's five nectar elements of climate action, culminating in Net Zero by 2070.</p>
                    </div>
                  </FadeInItem>
                  
                  <FadeInItem className="flex gap-6 items-start">
                    <div className="p-4 bg-primary/10 text-primary rounded-2xl shrink-0 shadow-inner">
                      <Leaf size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">LiFE Movement</h3>
                      <p className="text-muted-foreground font-medium">Lifestyle for Environment: shifting from mindless consumption to mindful utilization.</p>
                    </div>
                  </FadeInItem>

                  <FadeInItem className="flex gap-6 items-start">
                    <div className="p-4 bg-accent/20 text-primary rounded-2xl shrink-0 shadow-inner">
                      <Scale size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Energy Independence</h3>
                      <p className="text-muted-foreground font-medium">Reducing massive import bills for fossil fuels by generating power locally.</p>
                    </div>
                  </FadeInItem>
                </div>
              </FadeInStagger>
            </div>
            
            {/* Background decorative square */}
            <div className="absolute top-10 -right-4 lg:-right-10 w-full h-full bg-secondary/10 rounded-3xl -z-10 transform rotate-3"></div>
          </motion.div>
        </div>

        {/* Massive Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-40 mb-20 relative rounded-[3rem] overflow-hidden bg-primary text-primary-foreground"
        >
          <div className="absolute inset-0 bg-[url('/images/vision.jpg')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/50"></div>
          
          <div className="relative z-10 p-12 md:p-24 max-w-5xl">
            <h2 className="text-4xl md:text-6xl font-display font-black mb-8 text-glow-sm">A New Global Template</h2>
            <p className="text-2xl md:text-4xl font-medium leading-tight text-primary-foreground/90 text-balance border-l-4 border-accent pl-8">
              "India's success in green tech isn't just about India. If a nation of 1.4 billion can achieve high-income status without carbonizing, it creates a scalable template for the entire Global South."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
