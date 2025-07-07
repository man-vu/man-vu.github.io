import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Play, Image, List, AlignJustify } from 'lucide-react';
import { projectsHeader, projects, socialMediaLinks } from '../portfolio.js';
import ProjectImageModal from './ProjectImageModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<{
    name: string;
    images: string[];
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [compactMode, setCompactMode] = useState(true);

  const openImageModal = (projectName: string, images: string[]) => {
    setSelectedProject({ name: projectName, images });
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const getBadgeColor = (color: string) => {
    switch (color) {
      case 'warning': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'success': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'info': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'danger': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'primary': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  const getIcon = (name: string) => {
    if (name.includes('GitHub') || name.includes('Repo')) return Github;
    if (name.includes('Demo') || name.includes('Live')) return Play;
    return ExternalLink;
  };

  const renderMarkdownDescription = (description: string) => {
    // Split by lines and process each line
    const lines = description.trim().split('\n');
    
    return lines.map((line, index) => {
      const trimmedLine = line.trim();
      
      // Skip empty lines
      if (!trimmedLine) return null;
      
      // Handle bullet points (lines starting with -)
      if (trimmedLine.startsWith('-')) {
        const content = trimmedLine.substring(1).trim();
        
        // Handle bold text (**text**)
        const boldContent = content.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>');
        
        return (
          <li key={index} className="flex items-start space-x-2 mb-2">
            <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <span 
              className="text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: boldContent }}
            />
          </li>
        );
      }
      
      // Handle regular text (non-bullet points)
      const boldContent = trimmedLine.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>');
      
      return (
        <p key={index} className="text-muted-foreground leading-relaxed mb-2">
          <span dangerouslySetInnerHTML={{ __html: boldContent }} />
        </p>
      );
    }).filter(Boolean);
  };

  // Add a markdown renderer for briefDescription (bold only)
  const renderBriefMarkdown = (text: string) => {
    if (!text) return null;
    // Only support bold (**text**)
    const html = text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>');
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 flex flex-col items-center gap-2">
            <Badge variant="secondary" className="mb-2">Portfolio</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-foreground">
              Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-2">
              {projectsHeader.description}
            </p>
            {/* Compact/Detailed Toggle */}
            <Button
              variant="outline"
              size="sm"
              className="mt-2 flex items-center gap-2"
              onClick={() => setCompactMode((v) => !v)}
              aria-pressed={compactMode}
            >
              {compactMode ? <AlignJustify className="w-4 h-4" /> : <List className="w-4 h-4" />}
              {compactMode ? 'Detailed View' : 'Compact View'}
            </Button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.data.map((project) => (
              <Card key={project.id} className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-border ${compactMode ? 'p-0' : ''}`}>
                <div className="relative">
                  {project.images && project.images.length > 0 && (
                    <div className="relative cursor-pointer group/image">
                      <img
                        src={`/src/assets/images/projects/${project.images[0]}`}
                        alt={project.name}
                        className={`w-full ${compactMode ? 'h-32' : 'h-48'} object-cover group-hover:scale-105 transition-transform duration-300`}
                      />
                      {/* Image Gallery Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center gap-2 bg-white/90 dark:bg-black/90 px-3 py-2 rounded-full text-sm font-medium">
                          <Image className="w-4 h-4" />
                          View Gallery ({project.images.length} images)
                        </div>
                      </div>
                      {/* Click handler for the entire image area */}
                      <button
                        onClick={() => openImageModal(project.name, project.images)}
                        className="absolute inset-0 w-full h-full"
                        aria-label={`View image gallery for ${project.name}`}
                      />
                    </div>
                  )}
                  {project.badge && (
                    <Badge className={`absolute top-4 left-4 ${getBadgeColor(project.badge.color)} z-10`}>
                      <span className="mr-1">{project.badge.icon}</span>
                      {project.badge.text}
                    </Badge>
                  )}
                  {/* Image count badge */}
                  {project.images && project.images.length > 1 && (
                    <Badge className="absolute top-4 right-4 bg-white/90 dark:bg-black/90 text-foreground z-10">
                      <Image className="w-3 h-3 mr-1" />
                      {project.images.length}
                    </Badge>
                  )}
                </div>
                {/* Compact Mode: Only show name, brief description, and links */}
                {compactMode ? (
                  <>
                    <CardHeader className="pb-2 pt-4">
                      <CardTitle className="text-base font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.name}
                      </CardTitle>
                      {project.briefDescription && (
                        <p className="text-xs text-muted-foreground mt-1 mb-2 leading-snug">
                          {renderBriefMarkdown(project.briefDescription)}
                        </p>
                      )}
                    </CardHeader>
                    {/* Links */}
                    <CardContent className="pt-0 pb-3">
                      <div className="flex flex-wrap gap-2">
                        {project.links && project.links.map((link, index) => {
                          const IconComponent = getIcon(link.name);
                          return (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              className="flex items-center gap-2 border-border"
                              asChild
                            >
                              <a href={link.url} target="_blank" rel="noopener noreferrer">
                                <IconComponent className="w-4 h-4" />
                                {link.name}
                              </a>
                            </Button>
                          );
                        })}
                      </div>
                    </CardContent>
                  </>
                ) : (
                  <>
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Description with proper markdown rendering */}
                      <div className="space-y-2">
                        {renderMarkdownDescription(project.description)}
                      </div>
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.languages && project.languages.map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-border">
                            {tech.name}
                          </Badge>
                        ))}
                      </div>
                      {/* Links */}
                      <div className="flex gap-2 pt-2">
                        {project.links && project.links.map((link, index) => {
                          const IconComponent = getIcon(link.name);
                          return (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              className="flex items-center gap-2 border-border"
                              asChild
                            >
                              <a href={link.url} target="_blank" rel="noopener noreferrer">
                                <IconComponent className="w-4 h-4" />
                                {link.name}
                              </a>
                            </Button>
                          );
                        })}
                      </div>
                    </CardContent>
                  </>
                )}
              </Card>
            ))}
          </div>

          {/* More Projects Button */}
          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="group border-border">
              <a
                href={socialMediaLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                More Projects (Github)
                <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Image Gallery Modal */}
      {selectedProject && (
        <ProjectImageModal
          isOpen={isModalOpen}
          onClose={closeImageModal}
          projectName={selectedProject.name}
          images={selectedProject.images}
        />
      )}
    </section>
  );
} 