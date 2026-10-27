import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, FileCheck, X } from 'lucide-react';
import { siteContent } from '../data/content';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export function CertificationsPage() {
  const { certifications } = siteContent;
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null);

  const openLightbox = (src: string, title: string) => {
    setLightboxImage({ src, title });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (!lightboxImage) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxImage]);

  // Close on Escape key
  useEffect(() => {
    if (!lightboxImage) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [lightboxImage]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-12">
        <div className="eyebrow mb-3">Professional Development</div>
        <h1 className="font-heading font-bold text-5xl md:text-6xl leading-tight mb-4">
          Certifications and{' '}
          <span className="text-muted">credentials</span>
        </h1>
        <p className="text-lg text-muted max-w-2xl">
          Professional certifications and educational achievements demonstrating commitment to continuous learning and technical excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-surface border border-hairline rounded-card-lg overflow-hidden card-hover group"
          >
            {/* Certificate Image */}
            <div className="aspect-video bg-gradient-to-br from-accent/5 to-accent/20 relative overflow-hidden">
              {cert.image ? (
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => openLightbox(cert.image, cert.title)}
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-surface-2 opacity-50"></div>
                  <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4">
                    <Award size={64} className="text-accent opacity-30" />
                  </div>
                </>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs text-muted font-mono">{cert.number}</span>
              </div>
              
              <h3 className="font-heading font-bold text-xl mb-2">{cert.title}</h3>
              
              <div className="flex items-center gap-2 text-sm text-muted mb-4">
                <FileCheck size={14} />
                <span>{cert.issuer}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted mb-4">
                <Calendar size={14} />
                <span>{cert.date}</span>
              </div>

              {/* Credential ID */}
              {cert.credentialId && (
                <div className="mb-4 p-3 bg-surface-2 rounded-lg border border-hairline">
                  <div className="text-xs text-muted mb-1">Credential ID</div>
                  <div className="text-sm font-mono">{cert.credentialId}</div>
                </div>
              )}

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Certification CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 p-8 bg-surface border border-hairline rounded-card-lg text-center"
      >
        <Award size={48} className="text-accent mx-auto mb-4" />
        <h3 className="font-heading font-bold text-2xl mb-2">Continuous Learning</h3>
        <p className="text-muted max-w-xl mx-auto">
          I'm committed to staying current with industry trends and continuously expanding my technical expertise through professional development and certifications.
        </p>
      </motion.div>

      {/* Single Image Lightbox */}
      {lightboxImage && createPortal(
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

            {/* Certificate Image */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 max-w-[90vw] max-h-[90vh] p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
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
