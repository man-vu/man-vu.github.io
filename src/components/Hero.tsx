import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Download, Github, Linkedin, MapPin, Calendar } from 'lucide-react';
import { greeting, socialMediaLinks } from '../portfolio.js';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950/50 dark:to-indigo-950/50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Status Badge */}
              <Badge variant="secondary" className="mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                Available for New Opportunities
              </Badge>

              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight">
                  {greeting.title2}
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                  {greeting.title}
                </h2>
              </div>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {greeting.subTitle}
              </p>

              {/* Key Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">6+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">12+</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Ottawa, Ontario, Canada</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600">
                  <a href={greeting.mail}>
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-white transition-colors">
                  <a href={greeting.resumeLink} target="_blank" rel="noopener noreferrer">
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <Button asChild variant="ghost" size="sm">
                  <a href={socialMediaLinks.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column - Avatar */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Avatar Image */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  <img
                    src="/src/assets/images/avatar.jpg"
                    alt={greeting.full_name}
                    className="w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl"
                  />
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-1000"></div>
                  
                  {/* Status Indicator */}
                  <div className="absolute bottom-6 right-6 w-6 h-6 bg-green-500 border-4 border-white dark:border-slate-800 rounded-full animate-ping"></div>
                  <div className="absolute bottom-6 right-6 w-6 h-6 bg-green-500 border-4 border-white dark:border-slate-800 rounded-full"></div>
                </div>
                
                {/* Background Decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}