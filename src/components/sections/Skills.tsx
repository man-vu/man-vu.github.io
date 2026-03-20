import { motion } from "framer-motion";
import { skills } from "../../portfolio";
import { Icon } from "@iconify/react";

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Technical Arsenal
          </h2>
          <div className="w-12 h-1 bg-cyan-500 rounded-full" />
        </motion.div>

        {/* Skill Group Cards */}
        <div className="flex flex-col gap-8">
          {skills.data.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl"
            >
              {/* Group Title */}
              <h3 className="text-xl font-semibold text-white mb-6">
                {skillGroup.title}
              </h3>

              {/* Technology Icon Pills */}
              <div className="flex flex-wrap gap-3 mb-6">
                {skillGroup.softwareSkills.map((software, i) => (
                  <motion.div
                    key={software.skillName}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.03 }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:bg-white/10 transition-all"
                  >
                    <Icon
                      icon={software.fontAwesomeClassname}
                      style={software.style}
                      className="w-5 h-5"
                    />
                    <span className="text-sm text-slate-300">
                      {software.skillName}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Skill Description Bullets */}
              <ul className="space-y-3">
                {skillGroup.skills.map((sentence, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-slate-400"
                  >
                    <span className="text-cyan-500 mt-1 shrink-0">&#8226;</span>
                    <span className="text-sm leading-relaxed">{sentence}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
