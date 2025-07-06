import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Cloud, Brain } from 'lucide-react';
import { skills } from '../portfolio.js';

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

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Expertise</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Technical <span className="text-blue-600 dark:text-blue-400">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With over 6 years of experience, I've developed expertise across the full technology stack, 
              from frontend interfaces to cloud infrastructure and data science.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skills.data.map((skillCategory, index) => {
              const IconComponent = getIcon(skillCategory.title);
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border">
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
                          className="text-xs border-border"
                          style={{ borderColor: tech.style?.color, color: tech.style?.color }}
                        >
                          {tech.skillName}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 border-border">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}