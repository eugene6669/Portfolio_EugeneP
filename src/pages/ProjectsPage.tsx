import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { siteContent } from '../data/content';
import { useState, useRef } from 'react';
import { ImageLightbox } from '../components/ImageLightbox';

export function ProjectsPage() {
  const { projects } = siteContent;
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<string, number>>({});
  const [lightboxOpen, setLightboxOpen] = useState<string | null>(null);
  const triggerRefs = useRef<Record<string, HTMLElement | null>>({});

  const goToImage = (projectId: string, index: number, maxIndex: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((index % maxIndex) + maxIndex) % maxIndex
    }));
  };

  const nextImage = (projectId: string, maxIndex: number) => {
    goToImage(projectId, (currentImageIndex[projectId] || 0) + 1, maxIndex);
  };

  const prevImage = (projectId: string, maxIndex: number) => {
    goToImage(projectId, (currentImageIndex[projectId] || 0) - 1, maxIndex);
  };

  const openLightbox = (projectId: string, el: HTMLElement | null) => {
    triggerRefs.current[projectId] = el;
    setLightboxOpen(projectId);
  };

  const closeLightbox = () => {
    setLightboxOpen(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-12">
        <div className="eyebrow mb-3">Portfolio</div>
        <h1 className="font-heading font-bold text-5xl md:text-6xl leading-tight mb-4">
          Selected work and{' '}
          <span className="text-muted">case studies</span>
        </h1>
        <p className="text-lg text-muted max-w-2xl">
          A collection of projects showcasing design thinking, technical execution, and measurable impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-surface border border-hairline rounded-card-lg overflow-hidden card-hover group"
          >
            {/* Browser Frame */}
            <div className="bg-surface-2 border-b border-hairline px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
              </div>
              <div className="flex-1 h-6 bg-surface rounded text-xs flex items-center px-3 text-muted">
                <span className="truncate">{project.liveUrl || 'project-preview'}</span>
              </div>
            </div>

            {/* Screenshot Preview with Carousel */}
            <div className="aspect-video bg-gradient-to-br from-accent/5 to-accent/20 relative overflow-hidden group/image">
              {project.images && project.images.length > 0 ? (
                <>
                  <img
                    src={project.images[currentImageIndex[project.id] || 0]}
                    alt={`${project.title} screenshot ${(currentImageIndex[project.id] || 0) + 1}`}
                    className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={(e) => openLightbox(project.id, e.currentTarget)}
                  />
                  
                  {/* Image Navigation */}
                  {project.images.length > 1 && (
                    <>
                      {/* Previous Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage(project.id, project.images.length);
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-surface/90 hover:bg-surface border border-hairline rounded-full flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity z-10"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      
                      {/* Next Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage(project.id, project.images.length);
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-surface/90 hover:bg-surface border border-hairline rounded-full flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity z-10"
                        aria-label="Next image"
                      >
                        <ChevronRight size={16} />
                      </button>
                      
                      {/* Dots Indicator */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {project.images.map((_, imgIndex) => (
                          <button
                            key={imgIndex}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(prev => ({ ...prev, [project.id]: imgIndex }));
                            }}
                            className={`w-2 h-2 rounded-full transition-all ${
                              imgIndex === (currentImageIndex[project.id] || 0)
                                ? 'bg-accent w-6'
                                : 'bg-surface/60 hover:bg-surface/80'
                            }`}
                            aria-label={`Go to image ${imgIndex + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <>
                  <div className="absolute inset-0 bg-surface-2 opacity-50"></div>
                  <span className="absolute inset-0 flex items-center justify-center text-6xl opacity-30">🖼️</span>
                </>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-heading font-bold text-xl">{project.title}</h3>
                <span className="text-xs text-muted font-mono">{project.year}</span>
              </div>
              
              <p className="text-muted mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-surface-2 text-xs rounded-full border border-hairline"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-accent hover:underline"
                  >
                    <FiExternalLink size={14} />
                    Live Site
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted hover:text-ink"
                  >
                    <FiGithub size={14} />
                    Source
                  </a>
                )}
                {project.status && (
                  <div className="ml-auto flex items-center gap-1.5 text-xs">
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      project.status === 'live' ? 'bg-green-500' : 'bg-gray-500'
                    }`}></div>
                    <span className="text-muted capitalize">{project.status}</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox for each project */}
      {projects.map((project) => (
        project.images && project.images.length > 0 && (
          <ImageLightbox
            key={project.id}
            images={project.images}
            currentIndex={currentImageIndex[project.id] || 0}
            isOpen={lightboxOpen === project.id}
            onClose={closeLightbox}
            onNext={() => nextImage(project.id, project.images.length)}
            onPrev={() => prevImage(project.id, project.images.length)}
            onGoTo={(index) => setCurrentImageIndex(prev => ({ ...prev, [project.id]: index }))}
            projectTitle={project.title}
            triggerRef={{ current: triggerRefs.current[project.id] || null }}
          />
        )
      ))}
    </motion.div>
  );
}
