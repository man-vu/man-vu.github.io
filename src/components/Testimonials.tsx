import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Quote, Linkedin, Calendar, Building } from 'lucide-react';
import { testimonials, testimonialsHeader } from '../portfolio.js';
import { motion } from 'framer-motion';

export default function Testimonials() {
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
    <section id="testimonials" className="py-20 relative">
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
            <Badge variant="secondary" className="mb-4">What Colleagues Say</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Colleague <span className="text-blue-600 dark:text-blue-400">Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {testimonialsHeader.description}
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {testimonials.data.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full glass-panel group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-none">
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
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonial Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 p-8 glass-panel rounded-[2rem] border-none"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}