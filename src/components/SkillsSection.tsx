import { motion } from "framer-motion";

const skills = [
  { name: "Node.js", level: 85 },
  { name: "Python", level: 80 },
  { name: "Java", level: 70 },
  { name: "SQL", level: 75 },
  { name: "DSA", level: 70 },
  { name: "OOP", level: 80 },
  { name: "AI / Machine Learning", level: 75 },
  { name: "React", level: 70 },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-secondary/30">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Skills</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Technical Expertise</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="space-y-2"
          >
            <div className="flex justify-between text-sm">
              <span className="text-foreground font-medium">{skill.name}</span>
              <span className="text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-border overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.08 + 0.3 }}
                className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
