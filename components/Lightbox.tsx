import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export interface LightboxImage {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  // Synthetic-data charts open fitted so the baked-in label is visible first.
  illustrative?: boolean;
}

interface LightboxProps {
  image: LightboxImage | null;
  onClose: () => void;
}

// Full-screen viewer for the wide figures. "Actual size" shows the image at its
// 1x size (files are 2x), so small labels stay readable on a phone; the overlay
// scrolls on both axes while the page underneath stays locked.
const Lightbox: React.FC<LightboxProps> = ({ image, onClose }) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const [actual, setActual] = useState(false);

  useEffect(() => {
    if (!image) return;
    setActual(!image.illustrative && window.innerWidth < 1024);
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      // Keep Tab focus inside the dialog.
      if (e.key === 'Tab' && dialogRef.current) {
        const items = dialogRef.current.querySelectorAll<HTMLElement>('button');
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (!dialogRef.current.contains(document.activeElement)) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [image, onClose]);

  if (!image) return null;

  // Portal to <body> so parent layout utilities (e.g. space-y margins) never offset the overlay.
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      ref={dialogRef}
      aria-label={image.caption}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex flex-col"
      onClick={onClose}
    >
      <div
        className="flex items-center justify-between gap-4 px-4 md:px-6 h-16 border-b border-white/10 shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-gray-300 text-xs md:text-sm truncate min-w-0">{image.caption}</p>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setActual((a) => !a)}
            className="px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase text-gray-300 border border-white/15 rounded-sm hover:border-blue-400 hover:text-white transition-colors"
          >
            {actual ? 'Fit to screen' : 'Actual size'}
          </button>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close image"
            className="w-9 h-9 flex items-center justify-center text-gray-300 border border-white/15 rounded-sm hover:border-blue-400 hover:text-white transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto overscroll-contain p-4 md:p-8">
        <div
          className={`bg-white rounded-lg p-2 md:p-3 mx-auto ${actual ? 'w-max' : 'max-w-full w-fit'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            style={actual ? { width: image.width / 2, maxWidth: 'none' } : undefined}
            className={actual ? 'block h-auto' : 'block h-auto max-w-full max-h-[calc(100vh-8rem)] object-contain'}
          />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Lightbox;
