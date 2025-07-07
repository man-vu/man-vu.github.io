import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Menu, Mail, Github, Linkedin, Facebook, FileText, House, User, Brain, Briefcase, GraduationCap, Award, Code, Quote, MessageCircle } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { greeting, socialMediaLinks } from '../portfolio.js';
import { motion } from 'framer-motion';
import avatarImg from '@/assets/images/avatar.jpg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(id);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = navItems.map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return { id: item.id, offset: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: item.id, offset: Math.abs(rect.top - 80) }; // 80px header height
      });
      const closest = sectionOffsets.reduce((prev, curr) => (curr.offset < prev.offset ? curr : prev), sectionOffsets[0]);
      setActiveSection(closest.id);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: House },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Brain },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'testimonials', label: 'Testimonials', icon: Quote },
    { id: 'contact', label: 'Contact', icon: MessageCircle },
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
          <button
            className="flex items-center space-x-2 focus:outline-none"
            aria-label="Refresh page and go to top"
            onClick={() => window.location.reload()}
            style={{ background: 'none', border: 'none', padding: 0, margin: 0, cursor: 'pointer' }}
          >
            <img
              src={avatarImg}
              alt="Man Vu avatar"
              className="w-8 h-8 rounded-full object-cover border-2 border-blue-600"
            />
            <span className="font-bold text-lg text-foreground">{greeting.full_name}</span>
            <span className="text-sm text-muted-foreground hidden sm:inline">{greeting.logo_title}</span>
          </button>
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

        {/* Mobile Theme Toggle and Menu */}
        <div className="flex items-center space-x-2 lg:hidden">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Access navigation links and social media profiles
              </SheetDescription>
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center space-x-3 text-left text-foreground hover:text-blue-600 transition-colors"
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
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
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}