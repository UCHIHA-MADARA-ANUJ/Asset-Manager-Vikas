import { motion } from "framer-motion";
import { Mail, Code, Palette, Trophy } from "lucide-react";
import { FadeInStagger, FadeInItem } from "../components/shared-ui";

export default function Team() {
  return (
    <div className="w-full pb-24 bg-background overflow-hidden relative">
      {/* Decorative large background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] -z-10"></div>

      <header className="pt-32 pb-24 text-center relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold mb-8 glass px-6 py-2.5 rounded-full uppercase tracking-widest text-sm border-primary/20 shadow-md">
              <Trophy size={18} className="text-amber-500" /> TechNova 2047 Submission
            </div>
            <h1 className="text-6xl md:text-[6rem] font-display font-black text-foreground mb-6 tracking-tighter">
              Team <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Vikaas</span>
            </h1>
            <p className="text-2xl text-muted-foreground max-w-2xl mx-auto font-medium">
              Colonel's Central Academy • Grade 10
            </p>
          </motion.div>
        </div>
      </header>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          
          <FadeInStagger delay={0.2}>
            <FadeInItem>
              {/* Using a pseudo-3d tilt effect via Framer motion simple hover */}
              <motion.div 
                whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
                className="bg-card/80 backdrop-blur-xl border border-white/50 p-10 md:p-12 rounded-[3rem] shadow-2xl transition-all duration-300 relative overflow-hidden group h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700 pointer-events-none">
                  <Code size={250} />
                </div>
                
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-emerald-700 text-white rounded-3xl flex items-center justify-center text-4xl font-display font-black mb-8 shadow-[0_10px_30px_rgba(20,83,45,0.3)]">
                    AP
                  </div>
                  <h2 className="text-4xl font-display font-black mb-2 tracking-tight text-foreground">Anuj Phulera</h2>
                  <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-lg mb-8 uppercase tracking-wider text-sm">
                    Leader, Coder & Builder
                  </div>
                  
                  <div className="space-y-6 text-lg text-muted-foreground font-medium leading-relaxed">
                    <p>Architecting the digital pavilion. Passionate about clean code, high-performance web experiences, and sustainable futures.</p>
                    
                    <div className="pt-6 border-t border-border">
                      <a href="mailto:madara.coding.projects@gmail.com" className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors font-bold bg-muted px-4 py-2.5 rounded-xl hover:bg-primary/10">
                        <Mail size={20} className="text-primary" /> madara.coding.projects@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeInItem>
          </FadeInStagger>

          <FadeInStagger delay={0.4}>
            <FadeInItem>
              <motion.div 
                whileHover={{ y: -10, rotateX: 2, rotateY: 2 }}
                className="bg-card/80 backdrop-blur-xl border border-white/50 p-10 md:p-12 rounded-[3rem] shadow-2xl transition-all duration-300 relative overflow-hidden group h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-bl from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700 pointer-events-none">
                  <Palette size={250} />
                </div>
                
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-secondary to-orange-600 text-white rounded-3xl flex items-center justify-center text-4xl font-display font-black mb-8 shadow-[0_10px_30px_rgba(234,88,12,0.3)]">
                    AC
                  </div>
                  <h2 className="text-4xl font-display font-black mb-2 tracking-tight text-foreground">Aarav Choudhary</h2>
                  <div className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary font-bold rounded-lg mb-8 uppercase tracking-wider text-sm">
                    Innovator & Designer
                  </div>
                  
                  <div className="space-y-6 text-lg text-muted-foreground font-medium leading-relaxed">
                    <p>Shaping the vision and aesthetics. Ensuring the narrative hits with massive visual impact, clarity, and bold originality.</p>
                    
                    <div className="pt-6 border-t border-border">
                      <a href="mailto:aaravgurmeet@gmail.com" className="inline-flex items-center gap-3 text-foreground hover:text-secondary transition-colors font-bold bg-muted px-4 py-2.5 rounded-xl hover:bg-secondary/10">
                        <Mail size={20} className="text-secondary" /> aaravgurmeet@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeInItem>
          </FadeInStagger>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto mt-24 p-12 bg-foreground text-background rounded-[3rem] text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h3 className="font-display font-black text-3xl mb-6 tracking-tight">About Our Submission</h3>
            <p className="text-background/80 text-xl max-w-3xl mx-auto leading-relaxed font-medium text-balance">
              This digital exhibition was built as a highly interactive single-page application using React and Framer Motion. 
              We chose an immersive "pavilion" concept to make learning about India's green tech policies 
              engaging, proud, and forward-looking—perfectly aligned with the grand spirit of Viksit Bharat 2047.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
