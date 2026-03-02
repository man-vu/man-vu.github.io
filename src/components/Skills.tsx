import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Cloud, Brain } from 'lucide-react';
import { skills } from '../portfolio.js';
import { motion } from 'framer-motion';

export default function Skills() {
  const getColorClasses = (index: number) => {
    const colors = [
      'from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500',
      'from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-500',
      'from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500',
      'from-green-500 to-green-600 dark:from-green-400 dark:to-green-500'
    ];
    return colors[index % colors.length];
  };

  const getIcon = (title: string) => {
    if (title.includes('Full Stack') || title.includes('Development')) return Code;
    if (title.includes('Cloud') || title.includes('DevOps')) return Cloud;
    if (title.includes('Data') || title.includes('Analytics')) return Database;
    if (title.includes('AI') || title.includes('Machine Learning')) return Brain;
    return Code;
  };

  const stats = [
    { label: "Programming Languages", value: "8+" },
    { label: "Frameworks & Tools", value: "15+" },
    { label: "Cloud Platforms", value: "3+" },
    { label: "Databases", value: "5+" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">Expertise</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Technical <span className="text-blue-600 dark:text-blue-400">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With over 6 years of experience, I've developed expertise across the full technology stack,
              from frontend interfaces to cloud infrastructure and data science.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {skills.data.map((skillCategory, index) => {
              const IconComponent = getIcon(skillCategory.title);
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full glass-panel group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-none">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-3 bg-gradient-to-r ${getColorClasses(index)} rounded-lg`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-xl font-bold text-foreground">
                          {skillCategory.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Key Skills */}
                      <div className="space-y-2">
                        {skillCategory.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full flex-shrink-0"></div>
                            <span className="text-muted-foreground">{skill}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technology Badges */}
                      <div className="flex flex-wrap gap-2">
                        {skillCategory.softwareSkills.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs bg-white/50 dark:bg-black/50 border-white/20 dark:border-white/10 backdrop-blur-sm"
                            style={{ borderColor: tech.style?.color, color: tech.style?.color }}
                          >
                            {tech.skillName}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full text-center p-6 glass-panel border-none group hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}