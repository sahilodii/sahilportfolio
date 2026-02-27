import { motion } from "framer-motion";
import { Brain, Server } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI/ML Model Development",
    glow: true,
    items: [
      "Model building and experimentation",
      "Data preprocessing and training workflows",
      "Implementing ML algorithms in Python",
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    glow: false,
    items: [
      "REST API development using Node.js",
      "Database integration (SQL)",
      "Scalable backend architecture",
    ],
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Services</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What I Do</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -4 }}
            className={`glass-card p-8 transition-shadow duration-300 ${
              s.glow ? "glow-border animate-glow-pulse" : "hover:glow-border"
            }`}
          >
            <s.icon size={32} className="text-primary mb-5" />
            <h3 className="text-xl font-bold mb-4 text-foreground">{s.title}</h3>
            <ul className="space-y-3">
              {s.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
