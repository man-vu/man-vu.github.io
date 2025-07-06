import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Cloud, Brain, Briefcase, GraduationCap, Award } from 'lucide-react';

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

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">About Me</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Passionate About <span className="text-blue-600 dark:text-blue-400">Innovation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm a dedicated software developer with a passion for creating scalable applications, 
              automating infrastructure, and leveraging cutting-edge technologies to solve complex problems.
            </p>
          </div>

          {/* Story */}
          <div className="mb-16">
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border-0">
              <CardContent className="p-0">
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                    My journey in software development began over 6 years ago, and I've had the privilege 
                    of working on mission-critical applications that serve thousands of users. Currently, 
                    I work as a full-time Software Developer at ABELSoft Inc., where I develop healthcare 
                    practice management systems using C#, .NET, and SQL Server.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                    What sets me apart is my commitment to continuous learning and adaptation. While 
                    maintaining a full-time development role, I'm also pursuing my Honours Bachelor's 
                    degree in Computer Science at the University of Ottawa, focusing on AI and software design.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    I'm particularly passionate about leveraging AI tools like GitHub Copilot and ChatGPT 
                    to accelerate development workflows, and I enjoy sharing my knowledge through mentoring 
                    and collaboration with fellow developers.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}