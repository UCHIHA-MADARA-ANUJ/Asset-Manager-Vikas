import { ReactNode, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Sun, Wind, Car, Droplets, BookOpen, Users, TreeDeciduous, Factory, Globe } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home", icon: Leaf },
  { href: "/about-green-tech", label: "About", icon: Globe },
  { href: "/solar", label: "Solar", icon: Sun },
  { href: "/wind", label: "Wind", icon: Wind },
  { href: "/ev-mobility", label: "Mobility", icon: Car },
  { href: "/bioenergy-waste", label: "Bioenergy", icon: Factory },
  { href: "/water-rivers", label: "Rivers", icon: Droplets },
  { href: "/policy-schemes", label: "Policies", icon: BookOpen },
  { href: "/vision-2047", label: "Vision", icon: TreeDeciduous },
];

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location]);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background relative selection:bg-accent selection:text-accent-foreground">
      {/* Global Noise Overlay */}
      <div className="pointer-events-none fixed inset-0 z-[100] bg-noise opacity-[0.03] mix-blend-overlay" />

      <header className="fixed top-0 z-50 w-full transition-all duration-300 glass border-b-0 shadow-sm supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group relative z-10">
            <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500 shadow-[0_0_20px_rgba(20,83,45,0.3)] group-hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] group-hover:scale-105">
              <Leaf size={20} className="group-hover:animate-pulse" />
            </div>
            <span className="font-display font-black text-2xl tracking-tighter text-primary">
              TechNova <span className="text-secondary relative">
                2047
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 bg-card/50 backdrop-blur-md px-2 py-1.5 rounded-full border border-border/50 shadow-inner">
            {NAV_LINKS.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden ${
                    isActive 
                      ? "text-primary-foreground shadow-md" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
                  }`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-primary rounded-full z-0"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <link.icon size={14} className={isActive ? "opacity-100" : "opacity-70"} />
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center">
            <Link href="/team" className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 text-primary font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-all shadow-sm">
              <Users size={16} /> Team Vikaas
            </Link>
          </div>
        </div>
      </header>
      
      {/* Mobile nav quick bar for small screens */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-50 glass rounded-2xl p-2 flex overflow-x-auto no-scrollbar gap-2 shadow-2xl border-white/20 items-center supports-[backdrop-filter]:bg-background/80">
        {NAV_LINKS.map((link) => {
          const isActive = location === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                isActive 
                  ? "bg-primary text-primary-foreground shadow-lg scale-105" 
                  : "bg-muted/50 text-muted-foreground hover:bg-muted"
              }`}
            >
              <link.icon size={16} />
              <span>{link.label}</span>
            </Link>
          );
        })}
        <Link href="/team" className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${location === '/team' ? "bg-secondary text-secondary-foreground shadow-lg scale-105" : "bg-muted/50 text-muted-foreground hover:bg-muted"}`}>
          <Users size={16} />
          <span>Team</span>
        </Link>
      </div>

      <main className="flex-1 w-full relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location}
            initial={{ opacity: 0, filter: "blur(12px)", scale: 0.98 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            exit={{ opacity: 0, filter: "blur(12px)", scale: 1.02 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full origin-top"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="w-full relative z-10 mt-auto bg-foreground text-background pb-20 lg:pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 text-primary-foreground opacity-90">
              <Leaf size={24} className="text-accent" />
              <span className="font-display font-black text-2xl tracking-tighter">TechNova 2047</span>
            </div>
            <p className="text-background/60 text-sm max-w-sm text-center md:text-left">
              A digital exhibition built for the Vision of Viksit Bharat. Engineering a green, resilient, and self-reliant future.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="text-sm font-bold text-background/60 uppercase tracking-widest">Built By</div>
            <Link href="/team" className="group flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/10 group-hover:bg-white/20 transition-all">
                <span className="font-display font-bold text-lg">Team Vikaas</span>
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              </div>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
