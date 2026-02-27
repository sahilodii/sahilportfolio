import { motion } from "framer-motion";
import { GraduationCap, Brain, Server, BookOpen } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "B.E. AI & Data Science", sub: "GEC Rajkot • 2027" },
  { icon: Brain, label: "AI/ML Focus", sub: "Model Development" },
  { icon: Server, label: "Backend Dev", sub: "Node.js & APIs" },
  { icon: BookOpen, label: "Continuous Learner", sub: "DSA, OOP, System Design" },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">About Me</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Building Intelligent Solutions
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-5 text-muted-foreground leading-relaxed"
        >
          <p>
            I'm an AI & Data Science undergraduate at{" "}
            <span className="text-foreground font-medium">Government Engineering College, Rajkot</span>,
            expected to graduate in 2027. My passion lies at the intersection of
            artificial intelligence and practical software engineering.
          </p>
          <p>
            Currently focused on <span className="text-primary">AI/ML model development</span> and
            building robust backend systems with Node.js. I believe in strengthening
            fundamentals — from data structures and algorithms to system design —
            to create solutions that truly scale.
          </p>
          <p>
            My goal is to bridge the gap between cutting-edge AI research and
            production-ready applications, building intelligent systems that solve
            real-world problems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 gap-4"
        >
          {highlights.map((h, i) => (
            <div
              key={i}
              className="glass-card p-5 flex flex-col gap-3 hover:glow-border transition-shadow duration-300"
            >
              <h.icon size={24} className="text-primary" />
              <div>
                <p className="font-medium text-foreground text-sm">{h.label}</p>
                <p className="text-muted-foreground text-xs mt-1">{h.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
