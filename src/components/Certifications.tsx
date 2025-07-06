import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Award, Calendar } from 'lucide-react';
import { certifications } from '../portfolio.js';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Professional Development</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              <span className="text-blue-600 dark:text-blue-400">Certifications</span> & Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Continuous learning through industry-recognized certifications from leading technology companies and institutions.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {certifications.certifications.map((cert, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: cert.color_code }}
                    >
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    {cert.issued && (
                      <Badge variant="outline" className="text-xs border-border">
                        <Calendar className="w-3 h-3 mr-1" />
                        {cert.issued}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg font-bold leading-tight text-foreground">
                    {cert.title}
                  </CardTitle>
                  <p className="text-sm font-semibold" style={{ color: cert.color_code }}>
                    {cert.subtitle}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Skills */}
                  {(cert.skills || cert.additional_info?.skills) && (
                    <div className="flex flex-wrap gap-1">
                      {(cert.skills || cert.additional_info?.skills)?.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Credential ID */}
                  {(cert.credential_id || cert.additional_info?.credential_id) && (
                    <p className="text-xs text-muted-foreground">
                      ID: {cert.credential_id || cert.additional_info?.credential_id}
                    </p>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" asChild className="border-border">
                      <a href={cert.certificate_link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View Certificate
                      </a>
                    </Button>
                    {cert.projects && (
                      <Button variant="outline" size="sm" asChild className="border-border">
                        <a href={cert.projects} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Projects
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certification Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 rounded-xl border border-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">12+</div>
              <div className="text-muted-foreground">Total Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">5</div>
              <div className="text-muted-foreground">Technology Providers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">3</div>
              <div className="text-muted-foreground">Specializations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">2024</div>
              <div className="text-muted-foreground">Latest Certification</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}