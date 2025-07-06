import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GraduationCap, Calendar, ExternalLink, FileText, Award } from 'lucide-react';
import { degrees } from '../portfolio.js';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Academic Journey</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              <span className="text-blue-600 dark:text-blue-400">Education</span> & Learning
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Committed to continuous learning and academic excellence while maintaining professional growth.
            </p>
          </div>

          {/* Current Education */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center text-foreground">
              <GraduationCap className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
              Currently Pursuing
            </h3>
            {degrees.inProgressDegrees.map((degree, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="space-y-2">
                      <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 mb-2">
                        In Progress
                      </Badge>
                      <CardTitle className="text-xl font-bold text-foreground">{degree.title}</CardTitle>
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">{degree.subtitle}</p>
                    </div>
                    <div className="text-right space-y-2">
                      <div className="flex items-center justify-end space-x-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground font-medium">{degree.duration}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {degree.descriptions.map((desc, descIndex) => (
                      <li key={descIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{desc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-4">
                    <Button variant="outline" size="sm" asChild className="border-border">
                      <a href={degree.website_link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Program Details
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="border-border">
                      <a href={degree.transcript_link} target="_blank" rel="noopener noreferrer">
                        <FileText className="w-4 h-4 mr-2" />
                        Transcripts
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Completed Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center text-foreground">
              <Award className="w-6 h-6 mr-2 text-green-600 dark:text-green-400" />
              Completed Degrees
            </h3>
            {degrees.completedDegrees.map((degree, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          Completed
                        </Badge>
                        <Badge variant="outline" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                          {degree.additional_info.honors}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground">{degree.title}</CardTitle>
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">{degree.subtitle}</p>
                      <p className="text-sm text-muted-foreground">GPA: {degree.additional_info.gpa}</p>
                    </div>
                    <div className="text-right space-y-2">
                      <div className="flex items-center justify-end space-x-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground font-medium">{degree.duration}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {degree.descriptions.map((desc, descIndex) => (
                      <li key={descIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{desc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-4">
                    <Button variant="outline" size="sm" asChild className="border-border">
                      <a href={degree.website_link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Program Details
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="border-border">
                      <a href={degree.transcript_link} target="_blank" rel="noopener noreferrer">
                        <FileText className="w-4 h-4 mr-2" />
                        {degree.additional_info.transcripts}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Academic Highlights */}
          <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 rounded-xl border border-border">
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Academic Highlights</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">90%</div>
                <div className="text-muted-foreground">GPA Achievement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">57</div>
                <div className="text-muted-foreground">Transfer Credits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">3</div>
                <div className="text-muted-foreground">Co-op Terms Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}