import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, Github, Linkedin, MapPin, ExternalLink, Calendar, GraduationCap, Award, Code, Cloud, Database, Wrench } from 'lucide-react';
import { resumeData } from './resumeData';
import { socialMediaLinks, skills as portfolioSkills, experience as portfolioExperience, degrees as portfolioDegrees, certifications as portfolioCerts, projects as portfolioProjects } from '@/portfolio';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Resume() {
  // Use resumeData for most sections
  const { contact, summary, technicalSkills, experience, projects, education, certifications, interests } = resumeData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950/50">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 shadow-sm border-b dark:border-slate-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">{contact.name}</h1>
              <p className="text-xl text-blue-600 dark:text-blue-400 font-medium">Full-Stack Engineer</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600 dark:text-gray-300 items-end">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{contact.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{contact.email}</span>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-1" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={contact.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-1" />
                    GitHub
                  </a>
                </Button>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Summary */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl md:text-3xl font-bold">
              <Code className="w-5 h-5" />
              Summary of Qualifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {summary.map((item, idx) => (
              <p key={idx} className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {item}
              </p>
            ))}
          </CardContent>
        </Card>

        {/* Experience and Skills Side by Side */}
        <div className="grid grid-cols-1 xl:grid-cols-10 gap-8 mb-8">
          {/* Experience Timeline */}
          <Card className="xl:col-span-7">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl md:text-3xl font-bold">
                <Calendar className="w-5 h-5" />
                Professional Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900"></div>
                {experience.map((exp, index) => (
                  <div key={index} className="relative pl-12 pb-8 last:pb-0">
                    {/* Timeline dot */}
                    <div className="absolute left-2 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full border-4 border-white dark:border-slate-900 shadow-md"></div>
                    <div className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-800 p-4 shadow-sm">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h4>
                          <p className="text-base text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{exp.location}</p>
                        </div>
                        <div className="mt-2 lg:mt-0 text-right">
                          <Badge variant="outline" className="mb-1 text-xs">{exp.date}</Badge>
                        </div>
                      </div>
                      {exp.bullets && exp.bullets.length > 0 && (
                        <ul className="list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300">
                          {exp.bullets.map((highlight, idx) => (
                            <li key={idx}>{highlight}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technical Skills */}
          <Card className="xl:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl md:text-3xl font-bold">
                <Wrench className="w-5 h-5" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {Object.entries(technicalSkills).map(([category, skillsArr]) => (
                  <div key={category}>
                    <div className="flex items-center gap-2 mb-3">
                      {/* Icon selection can be improved for each category */}
                      <h4 className="font-semibold text-xl text-gray-900 dark:text-white capitalize">{category.replace(/([A-Z])/g, ' $1')}</h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {skillsArr.map((skill: string) => (
                        <Badge key={skill} variant="outline" className="text-xs">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Projects */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl md:text-3xl font-bold">
              <Code className="w-5 h-5" />
              Key Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 rounded-lg p-6 border border-blue-100 dark:border-blue-900">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.name}</h3>
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className="bg-blue-500 dark:bg-blue-400 text-xs">{project.stack ? project.stack.join(', ') : ''}</Badge>
                      <Badge variant="outline" className="text-xs">{project.year}</Badge>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                  </Button>
                </div>
                <ul className="space-y-2">
                  {project.bullets.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base text-gray-700 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          {/* Education Timeline */}
          <Card className="lg:col-span-7">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl md:text-3xl font-bold">
                <GraduationCap className="w-5 h-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900"></div>
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-12 pb-8 last:pb-0">
                    {/* Timeline dot */}
                    <div className="absolute left-2 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full border-4 border-white dark:border-slate-900 shadow-md"></div>
                    <div className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-800 p-4 shadow-sm">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                          <p className="text-base text-blue-600 dark:text-blue-400 font-medium">{edu.school}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{edu.location}</p>
                        </div>
                        <div className="mt-2 lg:mt-0 text-right">
                          <Badge variant="secondary" className="mb-1 text-xs">{edu.date}</Badge>
                        </div>
                      </div>
                      {edu.details && edu.details.length > 0 && (
                        <ul className="space-y-1.5">
                          {edu.details.map((detail: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2 text-base text-gray-700 dark:text-gray-300">
                              <div className="w-1 h-1 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications List */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl md:text-3xl font-bold">
                <Award className="w-5 h-5" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-blue-500 mt-1" />
                    <div>
                      <span className="font-semibold text-base text-gray-900 dark:text-white">
                        {cert.name}
                      </span>
                      <div className="text-sm text-blue-600 dark:text-blue-400">{cert.issuer}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Interests */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-bold">Interests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest: string) => (
                <Badge key={interest} variant="secondary" className="dark:bg-slate-800 dark:text-blue-200 text-base">{interest}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t dark:border-slate-800 mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>© 2025 Man Vu. Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}