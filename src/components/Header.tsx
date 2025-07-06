import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Mail, Github, Linkedin, Facebook, FileText } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { greeting, socialMediaLinks } from '../portfolio.js';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'projects', label: 'Projects' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  const socialIcons = [
    { href: socialMediaLinks.github, icon: Github, label: 'GitHub' },
    { href: socialMediaLinks.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: `mailto:${socialMediaLinks.gmail}`, icon: Mail, label: 'Email' },
    { href: socialMediaLinks.facebook, icon: Facebook, label: 'Facebook' },
    { href: greeting.resumeLink, icon: FileText, label: 'Resume' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
            M
          </div>
          <span className="font-bold text-lg text-foreground">{greeting.full_name}</span>
          <span className="text-sm text-muted-foreground hidden sm:inline">{greeting.logo_title}</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm text-foreground hover:text-blue-600 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Social Icons and Theme Toggle */}
        <div className="hidden md:flex items-center space-x-2">
          {socialIcons.map((social) => (
            <Button
              key={social.label}
              variant="ghost"
              size="sm"
              asChild
              className="h-8 w-8 p-0"
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer" title={social.label}>
                <social.icon className="h-4 w-4" />
              </a>
            </Button>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <hr className="my-4 border-border" />
              <div className="flex flex-wrap gap-2">
                {socialIcons.map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="sm"
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-4 w-4 mr-2" />
                      {social.label}
                    </a>
                  </Button>
                ))}
              </div>
              <div className="pt-4">
                <ThemeToggle />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}