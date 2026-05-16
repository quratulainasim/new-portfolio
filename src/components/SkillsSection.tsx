import { motion } from "framer-motion";
import { Sparkles, Zap } from "lucide-react";

const coreSkills = [
  { name: "Cloud Generative AI", level: 95, category: "AI & ML" },
  { name: "Python", level: 90, category: "AI & ML" },
  { name: "OpenAI Agents SDK", level: 85, category: "AI & ML" },
  { name: "Prompt Engineering", level: 90, category: "AI & ML" },
  { name: "OpenClaw", level: 85, category: "AI & ML" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "React / Next.js", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 88, category: "Frontend" },
  { name: "HTML / CSS", level: 90, category: "Frontend" },
  { name: "Sanity CMS", level: 78, category: "Backend" },
  { name: "Cloud Computing", level: 75, category: "Backend" },
];

const otherSkills = [
  "FTE AI Automation", "Speckit Plus", "Data Analysis",
  "Quality Control", "Project Management", "Business Strategy",
  "Team Leadership", "Problem Solving", "Analytical Thinking",
  "Research Methodology", "Communication", "Time Management",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 bg-navy-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-sky-dark/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
            <Zap size={14} className="text-primary" />
            <span className="font-display text-xs uppercase tracking-[0.3em] text-sky-light">
              Expertise
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Skill cards — 3 columns */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {coreSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="glass rounded-2xl p-5 group hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-display text-sm font-bold text-primary-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 font-display text-[10px] uppercase tracking-wider text-primary font-semibold">
                      {skill.category}
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-navy overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.06, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-sky-light to-primary relative"
                    >
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary border-2 border-navy glow" />
                    </motion.div>
                  </div>
                  <div className="flex justify-end mt-1.5">
                    <span className="font-display text-xs font-bold text-primary/70">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional skills — 2 columns */}
          <div className="lg:col-span-2">
            <div className="glass rounded-2xl p-8 h-full">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles size={18} className="text-primary" />
                <h3 className="font-display text-lg font-bold text-primary-foreground">
                  Additional Skills
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {otherSkills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-2.5 rounded-xl glass text-sm font-display font-medium text-primary-foreground/70 hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
