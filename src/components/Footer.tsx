import { motion } from "framer-motion";
import { Linkedin, Mail, Github, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-20 bg-navy-light border-t border-primary/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-display text-sm uppercase tracking-[0.3em] text-sky-light mb-3">
            Let's Connect
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="font-body text-primary-foreground/50 max-w-md mx-auto">
            Open to collaboration, freelance projects, and full-time opportunities
            in AI, automation, and full-stack development.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <motion.a
            whileHover={{ y: -4 }}
            href="https://www.linkedin.com/in/quratulain-asim"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-6 py-4 glass rounded-xl hover:border-primary/30 transition-colors group"
          >
            <Linkedin className="text-primary" size={22} />
            <div className="text-left">
              <p className="font-display text-xs text-primary-foreground/40">LinkedIn</p>
              <p className="font-display text-sm font-semibold text-primary-foreground group-hover:text-primary transition-colors">
                Connect with me
              </p>
            </div>
            <ArrowUpRight size={16} className="text-primary-foreground/30 group-hover:text-primary transition-colors" />
          </motion.a>

          <motion.a
            whileHover={{ y: -4 }}
            href="https://mail.google.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-6 py-4 glass rounded-xl hover:border-primary/30 transition-colors group"
          >
            <Mail className="text-primary" size={22} />
            <div className="text-left">
              <p className="font-display text-xs text-primary-foreground/40">Email</p>
              <p className="font-display text-sm font-semibold text-primary-foreground group-hover:text-primary transition-colors">
                quratulainasim1234@gmail.com
              </p>
            </div>
            <ArrowUpRight size={16} className="text-primary-foreground/30 group-hover:text-primary transition-colors" />
          </motion.a>

          <motion.a
            whileHover={{ y: -4 }}
            href="https://github.com/quratulainasim"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-6 py-4 glass rounded-xl hover:border-primary/30 transition-colors group"
          >
            <Github className="text-primary" size={22} />
            <div className="text-left">
              <p className="font-display text-xs text-primary-foreground/40">GitHub</p>
              <p className="font-display text-sm font-semibold text-primary-foreground group-hover:text-primary transition-colors">
                View my repos
              </p>
            </div>
            <ArrowUpRight size={16} className="text-primary-foreground/30 group-hover:text-primary transition-colors" />
          </motion.a>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display text-sm text-primary-foreground/30">
            © 2026 Quratulain. Crafted with passion.
          </p>
          <div className="flex items-center gap-1 text-primary-foreground/30 text-sm">
            <MapPin size={14} />
            <span className="font-body">Available Worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
