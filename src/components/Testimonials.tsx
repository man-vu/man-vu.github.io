import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Quote, Linkedin, Calendar, Building } from 'lucide-react';
import { testimonials, testimonialsHeader } from '../portfolio.js';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">What Colleagues Say</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Colleague <span className="text-blue-600 dark:text-blue-400">Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {testimonialsHeader.description}
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.data.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full border-border">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{testimonial.position}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge variant="outline" className="text-xs border-border">
                          <Building className="w-3 h-3 mr-1" />
                          {testimonial.relationship}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{testimonial.date}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <Quote className="absolute top-0 left-0 w-8 h-8 text-blue-200 dark:text-blue-800 -translate-y-2" />
                  <div className="pl-6">
                    {testimonial.testimonial.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                        {paragraph.trim()}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonial Stats */}
          <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 rounded-xl border border-border">
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Professional Recognition</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">4+</div>
                <div className="text-muted-foreground">Team Leads Endorsements</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">10+</div>
                <div className="text-muted-foreground">Colleague Recommendations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">5+</div>
                <div className="text-muted-foreground">Years of Collaboration</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">100%</div>
                <div className="text-muted-foreground">Positive Feedback</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}