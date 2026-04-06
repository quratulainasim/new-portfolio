import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail, Github, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";
import resumePdf from "@/assets/Resume.pdf";

const HeroSection = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-[1fr_auto] items-center gap-12">
          {/* Text — left aligned */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <p className="font-display text-sm uppercase tracking-[0.3em] text-sky-light mb-4">
              Chemistry → Business → AI
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-primary-foreground">Hi, I'm </span>
              <span className="text-gradient">Quratulain</span>
            </h1>
            <p className="font-body text-lg text-primary-foreground/60 max-w-xl mx-auto lg:mx-0 mb-8">
              MSc & EMBA turned Agentic AI Architect. I design autonomous digital
              workforces and intelligent cloud systems that bridge the gap between
              business strategy and cutting-edge intelligence.
            </p>

            <div className="flex items-center gap-4 justify-center lg:justify-start flex-wrap">
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-display font-semibold text-sm hover:opacity-90 transition glow"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full border border-primary-foreground/20 text-primary-foreground font-display font-semibold text-sm hover:bg-primary-foreground/5 transition"
              >
                Get in Touch
              </a>
              <button
                onClick={handleDownloadCV}
                className="flex items-center gap-2 px-8 py-3.5 rounded-full border border-primary/40 text-primary font-display font-semibold text-sm hover:bg-primary/10 transition"
              >
                <Download size={16} />
                Download CV
              </button>
            </div>

            <div className="flex items-center gap-5 mt-8 justify-center lg:justify-start">
              <a href="https://www.linkedin.com/in/quratulain-asim" target="_blank" rel="noreferrer" className="text-primary-foreground/50 hover:text-primary transition">
                <Linkedin size={20} />
              </a>
              <a href="mailto:quratulainasim1234@gmail.com" className="text-primary-foreground/50 hover:text-primary transition">
                <Mail size={20} />
              </a>
              <a href="https://github.com/quratulainasim" target="_blank" rel="noreferrer" className="text-primary-foreground/50 hover:text-primary transition">
                <Github size={20} />
              </a>
            </div>
          </motion.div>

          {/* Photo — right side, not center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative w-60 h-60 xl:w-72 xl:h-72">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-light to-sky-dark opacity-20 blur-3xl animate-float" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30 glow">
                <img
                  src={profilePhoto}
                  alt="Quratulain"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#journey"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/40 hover:text-primary transition"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
