import React, { useEffect } from 'react';
import { X, Camera, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { GoldenHourTile } from '../types';

interface LightboxModalProps {
  tile: GoldenHourTile | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  tile,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!tile) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#070707]/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
    >
      {/* Top Header Bar */}
      <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-8 flex items-center justify-between text-white z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c9a46a]"></span>
          <span className="font-label text-xs uppercase tracking-[0.2em] text-[#e8d0a5]">
            Aura Master Plate · {tile.location}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close photo preview"
          className="w-10 h-10 rounded-full border border-white/20 hover:border-white/60 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative max-w-5xl max-h-[75vh] sm:max-h-[80vh] flex items-center justify-center my-auto">
        <img
          src={tile.image}
          alt={tile.alt}
          className="max-w-full max-h-[72vh] sm:max-h-[78vh] object-contain rounded-xl shadow-2xl border border-white/10"
        />

        {/* Previous Button */}
        {onPrev && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous photograph"
            className="absolute -left-3 sm:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Next Button */}
        {onNext && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next photograph"
            className="absolute -right-3 sm:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Bottom Metadata Bar */}
      <div className="w-full max-w-3xl mt-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
        <div>
          <h4 className="font-heading text-2xl font-semibold text-white">
            {tile.title}
          </h4>
          {tile.story && (
            <p className="font-body text-xs text-white/70 mt-1 max-w-xl">
              {tile.story}
            </p>
          )}
        </div>

        {tile.camera && (
          <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 text-[11px] font-mono text-white/80 shrink-0">
            <Camera className="w-3.5 h-3.5 text-[#c9a46a]" />
            <span>
              {tile.camera} · {tile.lens}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
