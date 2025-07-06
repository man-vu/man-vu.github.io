import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, ExternalLink, Building } from 'lucide-react';
import { experience } from '../portfolio.js';

export default function Experience() {
  const calculateDuration = (startDate: string) => {
    const start = new Date(startDate);
    const now = new Date();
    const years = now.getFullYear() - start.getFullYear();
    const months = (now.getMonth() - start.getMonth()) + (years * 12);
    
    if (months >= 12) {
      const yearCount = Math.floor(months / 12);
      const monthCount = months % 12;
      return monthCount > 0 ? `${yearCount}y ${monthCount}m` : `${yearCount}y`;
    }
    return `${months}m`;
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Professional Journey</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {experience.description}
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experience.sections[0].experiences.map((exp, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl font-bold text-foreground">
                        {exp.title}
                      </CardTitle>
                      <div className="flex items-center space-x-2">
                        <Building className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <Button
                          variant="link"
                          className="p-0 h-auto font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                          asChild
                        >
                          <a href={exp.company_url} target="_blank" rel="noopener noreferrer">
                            {exp.company}
                            <ExternalLink className="w-4 h-4 ml-1" />
                          </a>
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground font-medium">{exp.duration}</span>
                      </div>
                      <div className="flex items-center justify-end space-x-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{exp.location}</span>
                      </div>
                      {index === 0 && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          {calculateDuration("2020-01-01")} • Current
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Achievements */}
          <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 rounded-xl border border-border">
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Key Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50%</div>
                <div className="text-muted-foreground">Reduction in Deployment Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">100%</div>
                <div className="text-muted-foreground">Production Uptime Maintained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">25+</div>
                <div className="text-muted-foreground">Mission-Critical Features Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}