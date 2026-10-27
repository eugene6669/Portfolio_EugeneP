import { motion, AnimatePresence } from 'framer-motion';
import { siteContent } from '../data/content';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

export function AboutPage() {
  const { about, personal } = siteContent;
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = () => {
    if (about.profileImage) {
      setLightboxOpen(true);
    }
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (!lightboxOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [lightboxOpen]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-12">
        <div className="eyebrow mb-3">About</div>
        <h1 className="font-heading font-bold text-5xl md:text-6xl leading-tight mb-4">
          {about.statement}{' '}
          <span className="text-muted">{about.statementContinuation}</span>
        </h1>
        <p className="text-lg text-muted max-w-3xl leading-relaxed">
          {about.bio}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Left Column - Roles and Info Cards */}
        <div className="lg:col-span-2 space-y-4">
          {/* Roles */}
          {about.roles.map((role, index) => (
            <motion.div
              key={role.index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-surface border border-hairline rounded-card-lg p-6 relative overflow-hidden card-hover"
            >
              <div className="ghost-number right-4 top-4">{role.index}</div>
              
              <div className="relative z-10">
                {/* Role Info */}
                <div className="mb-4">
                  <div className="font-mono text-xs text-accent mb-1">{role.index}</div>
                  <h3 className="font-heading font-bold text-2xl mb-2">{role.title}</h3>
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-2">
                  {role.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-surface-2 text-sm rounded-full border border-hairline"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-surface border border-hairline rounded-card p-4"
          >
            <div className="text-xs text-muted mb-1">Location</div>
            <div className="font-medium">{personal.location}</div>
            <div className="text-sm text-muted">{personal.timezone}</div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-surface border border-hairline rounded-card p-4"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🎓</span>
              <div className="text-sm font-medium">Education</div>
            </div>
            {about.certifications.map((cert, idx) => (
              <div key={idx} className="mb-3 last:mb-0">
                <div className="font-medium text-sm">{cert.title}</div>
                <div className="text-xs text-muted">{cert.id}</div>
                <div className="text-xs text-muted font-mono">{cert.issuer}</div>
              </div>
            ))}
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-surface border border-hairline rounded-card p-4"
          >
            <div className="text-xs text-muted mb-1">Experience</div>
            <div className="font-medium text-sm">{about.community.role}</div>
          </motion.div>
        </div>

        {/* Right Column - Profile Image */}
        <div className="space-y-4">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={openLightbox}
          >
            <div 
              className="overflow-hidden border border-hairline panel-glow"
              style={{
                aspectRatio: '4 / 5',
                width: '100%',
                borderRadius: '24px',
              }}
            >
              {about.profileImage ? (
                <img 
                  src={about.profileImage} 
                  alt={personal.name}
                  className="block"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent/10 to-accent/30">
                  <span className="text-[30rem] leading-none opacity-30">👤</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox for Profile Image */}
      {lightboxOpen && about.profileImage && createPortal(
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              width: '100vw',
              height: '100dvh',
              margin: 0,
              padding: 0,
              zIndex: 9999,
              background: 'rgba(20, 24, 40, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
            onClick={closeLightbox}
          >
            {/* Backdrop blur */}
            <div className="absolute inset-0 backdrop-blur-[8px]" />

            {/* Close button */}
            <button
              onClick={closeLightbox}
              aria-label="Close"
              className="
                fixed top-5 right-5 z-[10001]
                w-11 h-11 rounded-full
                bg-white/15 border border-white/20
                flex items-center justify-center
                text-white hover:bg-white/25
                transition-colors backdrop-blur-sm
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5000]
              "
            >
              <X size={20} />
            </button>

            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 max-w-[90vw] max-h-[90vh] p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={about.profileImage}
                alt={personal.name}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </motion.div>
  );
}
