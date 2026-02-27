import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const ProjectsSection = () => (
  <section id="projects" className="section-padding bg-secondary/30">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Projects</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Work</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        whileHover={{ y: -4 }}
        className="glass-card overflow-hidden max-w-3xl hover:glow-border transition-shadow duration-300"
      >
        {/* Gradient placeholder for project mockup */}
        <div className="h-48 md:h-64 bg-gradient-to-br from-primary/20 via-secondary to-card flex items-center justify-center">
          <span className="text-muted-foreground text-sm">Project Preview</span>
        </div>

        <div className="p-8">
          <h3 className="text-xl font-bold mb-3 text-foreground">
            Full-Stack Food Delivery Admin Panel
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-5">
            Admin dashboard for managing orders, users, and system operations.
            Built with a clean UI and structured backend logic, featuring
            comprehensive API handling and database integration.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {["React", "Node.js", "SQL", "REST API"].map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
              >
                {t}
              </span>
            ))}
          </div>

          <button className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline">
            View Details <ExternalLink size={14} />
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
