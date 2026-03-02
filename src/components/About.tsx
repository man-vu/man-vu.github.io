import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Cloud, Brain, Briefcase, GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const highlights = [
    {
      icon: Briefcase,
      title: "6+ Years Experience",
      description: "Full-time Software Developer with extensive industry experience"
    },
    {
      icon: Code,
      title: "Full Stack Expert",
      description: "Proficient in .NET, React, Vue.js, Node.js, and modern web technologies"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Azure certified with expertise in CI/CD pipelines and infrastructure"
    },
    {
      icon: Brain,
      title: "AI Enthusiast",
      description: "Leveraging AI tools and machine learning for efficient problem-solving"
    },
    {
      icon: GraduationCap,
      title: "Continuous Learner",
      description: "Currently pursuing CS degree while working full-time"
    },
    {
      icon: Award,
      title: "Certified Professional",
      description: "12+ industry certifications from Google, Microsoft, and Meta"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <section id="about" className="py-20 relative">
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
            <Badge variant="secondary" className="mb-4">About Me</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Passionate About <span className="text-blue-600 dark:text-blue-400">Innovation</span>
            </h2>
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Card className="p-8 glass-panel rounded-[2rem] border-none">
              <CardContent className="p-0">
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                    I'm a Full-Stack Developer at ABELSoft with 6+ years of experience building mission-critical healthcare systems using C#, .NET, and SQL Server. I specialize in scalable applications and automated infrastructure.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Currently pursuing a Computer Science degree at the University of Ottawa, I'm deeply passionate about AI, cloud computing, and modern web development. I constantly leverage tools like ChatGPT to accelerate workflows.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full glass-panel group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-none">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 rounded-lg group-hover:from-blue-200 group-hover:to-indigo-200 dark:group-hover:from-blue-800/50 dark:group-hover:to-indigo-800/50 transition-colors">
                        <highlight.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 text-foreground">{highlight.title}</h3>
                        <p className="text-muted-foreground">{highlight.description}</p>
                      </div>
                    </div>
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