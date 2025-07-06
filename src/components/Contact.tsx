import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, Github, Linkedin, Facebook, FileText, MessageCircle } from 'lucide-react';
import { contactPageData, socialMediaLinks, greeting } from '../portfolio.js';

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Send me a message",
      value: socialMediaLinks.gmail,
      href: `mailto:${socialMediaLinks.gmail}`,
      primary: true
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect professionally",
      value: "linkedin.com/in/manvu",
      href: socialMediaLinks.linkedin,
      primary: true
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Check out my code",
      value: "github.com/man-vu",
      href: socialMediaLinks.github,
      primary: true
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Based in",
      value: "Ottawa, Ontario, Canada",
      href: null,
      primary: false
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      href: socialMediaLinks.github,
      color: "hover:text-gray-800 dark:hover:text-gray-200"
    },
    {
      icon: Linkedin,
      title: "LinkedIn", 
      href: socialMediaLinks.linkedin,
      color: "hover:text-blue-600 dark:hover:text-blue-400"
    },
    {
      icon: Facebook,
      title: "Facebook",
      href: socialMediaLinks.facebook,
      color: "hover:text-blue-500 dark:hover:text-blue-400"
    },
    {
      icon: FileText,
      title: "Resume",
      href: greeting.resumeLink,
      color: "hover:text-green-600 dark:hover:text-green-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Let's <span className="text-blue-600 dark:text-blue-400">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {contactPageData.contactSection.description}
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border ${method.primary ? 'border-blue-200 dark:border-blue-800' : ''}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${method.primary ? 'bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900' : 'bg-muted'} group-hover:scale-110 transition-transform`}>
                      <method.icon className={`w-6 h-6 ${method.primary ? 'text-blue-600 dark:text-blue-400' : 'text-muted-foreground'}`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold text-foreground">{method.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {method.href ? (
                    <Button variant="link" className="p-0 h-auto text-left justify-start" asChild>
                      <a href={method.href} target="_blank" rel="noopener noreferrer">
                        <span className="text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          {method.value}
                        </span>
                      </a>
                    </Button>
                  ) : (
                    <span className="text-foreground">{method.value}</span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Links */}
          <Card className="mb-16 border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-foreground">Follow Me Online</CardTitle>
              <p className="text-muted-foreground">Stay connected on social media and professional networks</p>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    asChild
                    className={`group border-border ${social.color} transition-colors`}
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="w-5 h-5 mr-2" />
                      {social.title}
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Blog Section */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border-blue-200 dark:border-blue-800">
            <CardHeader className="text-center">
              <div className="mx-auto p-3 bg-blue-100 dark:bg-blue-900 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">{contactPageData.blogSection.title}</CardTitle>
              <p className="text-muted-foreground">{contactPageData.blogSection.subtitle}</p>
            </CardHeader>
            <CardContent className="text-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600">
                <a href={contactPageData.blogSection.link} target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5 mr-2" />
                  Visit My Blog
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-blue-100 dark:text-blue-200 mb-6 max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities, collaborating on exciting projects, 
              or just having a conversation about technology and software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href={`mailto:${socialMediaLinks.gmail}`}>
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </Button>
              <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 transition-colors">
                <a href={greeting.resumeLink} target="_blank" rel="noopener noreferrer">
                  <FileText className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}