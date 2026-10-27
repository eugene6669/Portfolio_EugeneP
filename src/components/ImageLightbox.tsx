import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */
interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onGoTo: (index: number) => void;
  projectTitle: string;
  triggerRef?: React.RefObject<HTMLElement | null>;
}

/* ------------------------------------------------------------------ */
/*  Reduced-motion media query                                         */
/* ------------------------------------------------------------------ */
const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const dur = () => (prefersReducedMotion() ? 0 : 0.35);

/* ------------------------------------------------------------------ */
/*  BrowserFrame – wraps each screenshot with macOS chrome             */
/* ------------------------------------------------------------------ */
function BrowserFrame({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div
      className="flex-shrink-0 rounded-[16px] overflow-hidden flex flex-col"
      style={{
        height: 'calc(100dvh - 120px)',
        width: 'auto',
        maxWidth: '70vw',
        boxShadow: '0 25px 60px -12px rgba(0,0,0,0.45), 0 10px 24px -8px rgba(0,0,0,0.3)',
      }}
    >
      {/* Title bar */}
      <div className="h-10 bg-[#F5F3EE] flex items-center gap-2 px-4 border-b border-black/5 flex-shrink-0">
        <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <span className="w-3 h-3 rounded-full bg-[#28C840]" />
      </div>
      {/* Screenshot */}
      <div className="bg-white flex-1 flex items-center justify-center overflow-hidden">
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="w-full h-full object-contain block"
          style={{ maxHeight: 'calc(100dvh - 160px)' }}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  ImageLightbox                                                      */
/* ------------------------------------------------------------------ */
export function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
  onGoTo,
  projectTitle,
  triggerRef,
}: ImageLightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  /* ---- keyboard ---- */
  useEffect(() => {
    if (!isOpen) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [isOpen, onClose]);

  /* ---- body scroll lock + return focus ---- */
  useEffect(() => {
    if (!isOpen) return;
    const scrollY = window.scrollY;
    
    // Lock body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      // Restore body scroll
      document.body.style.overflow = '';
      window.scrollTo(0, scrollY);
      // Return focus to trigger
      triggerRef?.current?.focus();
    };
  }, [isOpen, triggerRef]);

  /* ---- focus close button ---- */
  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();
  }, [isOpen]);

  /* ---- render nothing when closed ---- */
  if (!isOpen) return null;

  /* ---- duplicate images for infinite loop ---- */
  const duplicatedImages = [...images, ...images, ...images];

  /* ---- dynamic animation speed based on number of images ---- */
  // More images = slower speed so you can see them better
  // Formula: 0.5 seconds per image, minimum 5s, maximum 15s
  const animationDuration = Math.min(15, Math.max(5, images.length * 0.5));

  const lightboxContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={projectTitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: dur() }}
          style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100dvh',
            margin: 0,
            padding: 0,
            zIndex: 9999,
            background: 'rgba(20, 24, 40, 0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* backdrop blur layer */}
          <div
            className="absolute inset-0 backdrop-blur-[8px]"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Visually-hidden title for a11y */}
          <h2 className="sr-only">{projectTitle}</h2>

          {/* Close button */}
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close gallery"
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

          {/* Continuous Marquee */}
          <div className="absolute inset-0 flex items-center overflow-hidden">
            <style>{`
              @keyframes marquee-scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-33.333%);
                }
              }
              .marquee-track {
                animation: marquee-scroll ${animationDuration}s linear infinite;
              }
              .marquee-track:hover {
                animation-play-state: paused;
              }
            `}</style>
            <div 
              ref={trackRef}
              className="marquee-track flex items-center gap-6"
            >
              {duplicatedImages.map((src, idx) => (
                <BrowserFrame
                  key={idx}
                  src={src}
                  alt={`${projectTitle} — screenshot ${(idx % images.length) + 1} of ${images.length}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(lightboxContent, document.body);
}
