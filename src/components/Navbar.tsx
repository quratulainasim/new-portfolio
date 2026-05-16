import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Journey", href: "/#journey" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Product", href: "/product" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    
    if (href.startsWith("/#")) {
      const hash = href.replace("/", "");
      if (location.pathname === "/") {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", hash);
        }
      } else {
        navigate(href);
      }
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/#home" onClick={(e) => handleNavClick(e, "/#home")} className="font-display text-2xl font-bold text-primary-foreground">
          <span className="text-gradient">Quratulain</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-display text-sm font-medium text-primary-foreground/70 hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/#contact"
          onClick={(e) => handleNavClick(e, "/#contact")}
          className="hidden md:inline-flex px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-display text-sm font-semibold hover:opacity-90 transition-opacity glow"
        >
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary-foreground/80"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass"
          >
            <ul className="flex flex-col items-center gap-4 py-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="font-display text-lg font-medium text-primary-foreground/80 hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <a
                href="/#contact"
                onClick={(e) => handleNavClick(e, "/#contact")}
                className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-display text-sm font-semibold"
              >
                Hire Me
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
