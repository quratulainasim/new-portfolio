import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import nexImg from "@/assets/nex.png";
import { Sparkles, Brain, Cloud, Code, Palette, ExternalLink } from "lucide-react";

const Product = () => {
  return (
    <div className="min-h-screen bg-navy flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-24">
        <div className="flex flex-col gap-16 items-center text-center w-full">
            
            {/* Top Content - Image Hero Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full px-4 sm:px-8 lg:px-12 xl:px-16"
            >
              <div className="relative w-full max-w-[1400px] mx-auto">
                <div className="absolute -inset-2 bg-gradient-to-tr from-primary/30 via-sky-dark/20 to-primary/30 blur-3xl opacity-40 rounded-[3rem]" />
                <div className="relative glass rounded-[2rem] p-2 sm:p-3 md:p-4 border-2 border-primary/30 shadow-[0_0_50px_-12px_rgba(var(--primary),0.3)] overflow-hidden group bg-navy-light/40">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img 
                    src={nexImg} 
                    alt="Nexora Studio" 
                    className="w-full h-auto max-h-[80vh] object-cover object-top rounded-xl md:rounded-[1.5rem] shadow-inner hover:scale-[1.01] transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>

            {/* Bottom Content - Text */}
            <div className="container mx-auto px-6 max-w-4xl flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full flex flex-col items-center"
              >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
                <Sparkles size={14} className="text-primary" />
                <span className="font-display text-xs uppercase tracking-[0.3em] text-sky-light">
                  Our Signature Product
                </span>
              </div>
              
              <h1 className="font-display text-5xl sm:text-6xl font-bold text-primary-foreground leading-tight mb-4">
                Nexora <span className="text-gradient">Studio</span>
              </h1>
              
              <h2 className="font-display text-xl sm:text-2xl font-medium text-sky-light mb-10">
                Software House & AI Solutions
              </h2>

              <div className="text-center max-w-3xl mx-auto mb-12">
                <p className="text-xl md:text-2xl font-display font-medium text-primary-foreground leading-relaxed mb-6">
                  Empowering businesses through cutting-edge web development, <span className="text-primary">artificial intelligence</span>, and cloud-powered solutions.
                </p>
                <p className="text-primary-foreground/60 font-body leading-relaxed mb-10 text-lg">
                  From bespoke full-stack applications and intelligent AI agents to Docker & Kubernetes cloud infrastructure, we deliver fast, reliable, and scalable digital experiences tailored for the future.
                </p>
                
                <div className="flex flex-wrap items-center justify-center gap-5">
                  <a href="https://nexorastudio-ten.vercel.app/" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-display font-bold text-sm tracking-wide hover:opacity-90 transition-opacity glow flex items-center gap-2">
                    Visit Nexora Studio <ExternalLink size={16} />
                  </a>
                  <a href="/#contact" className="px-8 py-4 rounded-full border border-primary/40 text-primary font-display font-bold text-sm tracking-wide hover:bg-primary/10 transition-colors flex items-center gap-2">
                    Work With Us
                  </a>
                </div>
              </div>

              {/* Core Features */}
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-3 px-6 py-4 glass rounded-full hover:border-primary/40 transition-colors">
                  <div className="text-primary">
                    <Brain size={20} />
                  </div>
                  <span className="font-display text-sm font-semibold text-primary-foreground">AI & Automation</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-4 glass rounded-full hover:border-sky-light/40 transition-colors">
                  <div className="text-sky-light">
                    <Cloud size={20} />
                  </div>
                  <span className="font-display text-sm font-semibold text-primary-foreground">Cloud & DevOps</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-4 glass rounded-full hover:border-primary/40 transition-colors">
                  <div className="text-primary">
                    <Code size={20} />
                  </div>
                  <span className="font-display text-sm font-semibold text-primary-foreground">Full-Stack Dev</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-4 glass rounded-full hover:border-sky-light/40 transition-colors">
                  <div className="text-sky-light">
                    <Palette size={20} />
                  </div>
                  <span className="font-display text-sm font-semibold text-primary-foreground">UX / UI Design</span>
                </div>
              </div>
              </motion.div>
            </div>
          </div>
      </main>

      <Footer />
    </div>
  );
};

export default Product;
