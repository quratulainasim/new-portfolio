import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import hack1Book from "../assets/hack1-book.png";
import hack2Todo from "../assets/hack2-todo.png";
import hack5 from "../assets/hack5.png";
import ecommerce1 from "../assets/ecommerce1.png";
import blogWeb from "../assets/blog-web.png";
import diabeticChecker from "../assets/dibetic-checker.png";
import cellPoint from "../assets/cell-point.png";

const projects = [
  {
    title: "AI-Powered Robotics Book",
    description: "Built with Docusaurus AI-Chatbot,OpenAI Agents SDK & Next.js",
    tags: ["Next.js", "OpenAI Agents","Python", "Agentic AI"],
    color: "from-sky-light/20 to-primary/10",
    image: hack1Book,
    github: "https://github.com/quratulainasim/HACKATHON1-ROBOTICS-BOOK.git",
    link: "https://hackathon-1-robotics-book.vercel.app/",
  },
  {
    title: "Evolution of Todo with Cloud Native AI",
    description: "Exploring the integration of cloud-native technologies with AI-driven task management",
    tags: ["Python","AI Rag-Chatbot","Next.js", "Agentic AI", "Kubernetes"],
    color: "from-primary/20 to-sky-dark/10",
    image: hack2Todo,
    github: "https://github.com/quratulainasim/hack2-nextjs-chatbot.git",
    link: "https://hack2-nextjs-chatbot.vercel.app/",
  },
  {
    title: "CRM Real Digital FTE Factory",
    description: "Using Claude code Build Your First 24/7 AI Employee",
    tags: ["Agentic AI", "Python", "Next.js", "OpenAI Agents SDK"],
    color: "from-sky-dark/20 to-sky-light/10",
    image: hack5,
    github: "https://github.com/quratulainasim/hackathon--5.git",
    link: "https://www.youtube.com/watch?v=pFhBRoU4fPc",
  },
  {
    title: "E-Commerce Warehouse Web Store",
    description: "Interactive Functional Web Store ",
    tags: ["Next.js", "TypeScript", "React","Tailwind"],
    color: "from-sky-light/15 to-primary/15",
    image: ecommerce1,
    github: "https://github.com/quratulainasim/last-project.git",
    link: "https://last-project-beta-eight.vercel.app/",
  },
  {
    title: "Blog Website with Next.js and Tailwind CSS",
    description: "A modern blog platform built with Next.js for server-side rendering and Tailwind CSS for styling.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    color: "from-primary/15 to-sky-dark/15",
    image: blogWeb,
    github: "https://github.com/quratulainasim/Blog-website.git",
    link: "https://blog-website-ochre-nine.vercel.app/",
  },
  
  {
    title: "Dibetics Checker App",
    description: "A webapp that uses streamlit and python to check diabetes",
    tags: ["Python", "Streamlit", "Machine Learning"],
    color: "from-sky-dark/15 to-sky-light/15",
    image: diabeticChecker,
    github: "https://github.com/quratulainasim/Diabetes_Checker.git",
    link: "https://diabetes123456.streamlit.app/",
  },

 {
    title: "Cell Point Website",
    description: "A website that uses ecommerce platform to cell phones",
    tags: ["Python","Next.js", "Tailwind CSS", "Vite"],
    color: "from-sky-dark/15 to-sky-light/15",
    image: cellPoint,
    github: "https://github.com/quratulainasim/cell-point-web.git",
    link: "https://cell-point-web-jna6.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-navy">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground">
            50+ Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={project.image ?? "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(event) => {
                    (event.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                  }}
                />
              </div>

              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-primary-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-primary-foreground/50 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-display font-medium bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-primary transition">
                    <Github size={18} />
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-primary transition">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
