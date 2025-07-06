import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Facebook, FileText, Heart } from 'lucide-react';
import { greeting, socialMediaLinks } from '../portfolio.js';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navSections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
  ];

  const moreSections = [
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'projects', label: 'Projects' },
    { id: 'testimonials', label: 'Testimonials' },
  ];

  const socialLinks = [
    { href: socialMediaLinks.github, icon: Github, label: 'GitHub' },
    { href: socialMediaLinks.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: `mailto:${socialMediaLinks.gmail}`, icon: Mail, label: 'Email' },
    { href: socialMediaLinks.facebook, icon: Facebook, label: 'Facebook' },
    { href: greeting.resumeLink, icon: FileText, label: 'Resume' },
  ];

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <span className="font-bold text-xl">{greeting.full_name}</span>
              </div>
              <p className="text-slate-400 dark:text-slate-300 mb-4 leading-relaxed">
                {greeting.subTitle}
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="sm"
                    asChild
                    className="h-10 w-10 p-0 hover:bg-slate-800 dark:hover:bg-slate-700 hover:text-blue-400 transition-colors"
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer" title={social.label}>
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="md:col-span-1">
              <h3 className="font-semibold text-lg mb-4">Navigation</h3>
              <ul className="space-y-2">
                {navSections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className="text-slate-400 dark:text-slate-300 hover:text-white transition-colors text-left"
                    >
                      {section.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Sections */}
            <div className="md:col-span-1">
              <h3 className="font-semibold text-lg mb-4">More</h3>
              <ul className="space-y-2">
                {moreSections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className="text-slate-400 dark:text-slate-300 hover:text-white transition-colors text-left"
                    >
                      {section.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1">
              <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
              <div className="space-y-3 text-slate-400 dark:text-slate-300">
                <p>Ottawa, Ontario, Canada</p>
                <a href={`mailto:${socialMediaLinks.gmail}`} className="hover:text-white transition-colors block">
                  {socialMediaLinks.gmail}
                </a>
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 mt-4"
                >
                  <a href={`mailto:${socialMediaLinks.gmail}`}>
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Me
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 dark:border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-1 text-slate-400 dark:text-slate-300">
                <span>© {currentYear} {greeting.full_name}. Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>using React & Tailwind CSS</span>
              </div>
              <div className="flex items-center space-x-6 text-sm text-slate-400 dark:text-slate-300">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="hover:text-white transition-colors"
                >
                  Back to Top
                </button>
                <a 
                  href={greeting.resumeLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}