import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code, Brain, Sparkles } from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    year: "2004",
    title: "MSc Analytical Chemistry",
    description: "Mastered analytical techniques, research methodology, and scientific problem-solving.",
    highlight: "Foundation",
  },
  {
    icon: Briefcase,
    year: "2009",
    title: "EMBA in General Management",
    description: "Developed strategic thinking, leadership, and business acumen for multinational environments.",
    highlight: "Strategy",
  },
  {
    icon: Briefcase,
    year: "2004-2010",
    title: "Multinational Professional Experience",
    description: "Led cross-functional teams, managed operations, and drove business transformation initiatives.",
    highlight: "Leadership",
  },
  {
    icon: Code,
    year: "2024",
    title: "Tech Transition — TypeScript, Next.js, Python",
    description: "Pivoted into full-stack development, building modern web applications and automation tools.",
    highlight: "Development",
  },
  {
    icon: Brain,
    year: "2024–Present",
    title: "AI & Agentic Systems",
    description: "Specializing in Prompt Engineering, OpenAI Agents SDK, Agentic AI, and FTE AI Automation.",
    highlight: "AI Expert",
  },
];

const JourneySection = () => {
  return (
    <section id="journey" className="py-28 bg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full bg-sky-dark/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
            <Sparkles size={14} className="text-primary" />
            <span className="font-display text-xs uppercase tracking-[0.3em] text-sky-light">
              My Path
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground">
            The <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central line with gradient */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="w-full h-full bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0" />
          </div>

          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`relative flex mb-16 last:mb-0 ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Node dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-20">
                  <div className="w-16 h-16 rounded-2xl bg-navy-light border-2 border-primary/40 flex items-center justify-center glow rotate-45">
                    <item.icon size={22} className="text-primary -rotate-45" />
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-56px)] ${
                    isLeft ? "md:pr-4" : "md:pl-4"
                  }`}
                >
                  <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group relative overflow-hidden">
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 font-display text-xs font-bold text-primary">
                          {item.year}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-sky-dark/20 font-display text-[10px] uppercase tracking-wider text-sky-light font-semibold">
                          {item.highlight}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-primary-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="font-body text-sm text-primary-foreground/50 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
