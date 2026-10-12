import React, { useEffect } from 'react';
import { X, Film, Clock, MapPin, Sparkles, Volume2, ArrowRight } from 'lucide-react';
import { FilmItem } from '../types';

interface FilmModalProps {
  film: FilmItem | null;
  onClose: () => void;
  onBookFilm: () => void;
}

export const FilmModal: React.FC<FilmModalProps> = ({ film, onClose, onBookFilm }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!film) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#070707]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl bg-[#1c1814] border border-white/15 rounded-3xl overflow-hidden shadow-2xl my-auto text-white">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close cinema modal"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Frame */}
        <div className="relative aspect-video w-full bg-black">
          {film.videoUrl ? (
            <video
              src={film.videoUrl}
              poster={film.poster}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img src={film.poster} alt={film.title} className="w-full h-full object-cover" />
          )}
        </div>

        {/* Film Information & Director's Note */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-label uppercase tracking-widest text-[#e8d0a5]">
                <Film className="w-3.5 h-3.5" />
                <span>{film.category === 'feature' ? 'Cinema Feature' : 'Short Story'}</span>
                <span>·</span>
                <Clock className="w-3.5 h-3.5" />
                <span>{film.duration}</span>
              </div>
              <h3 className="font-heading text-3xl sm:text-4xl font-medium mt-1">
                {film.title}
              </h3>
            </div>

            <div className="text-xs font-label uppercase tracking-wider text-white/70 bg-white/10 px-4 py-2 rounded-full border border-white/15 self-start sm:self-auto">
              <MapPin className="w-3.5 h-3.5 inline mr-1 text-[#c9a46a]" />
              {film.location}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <div>
                <h4 className="font-label text-xs uppercase tracking-widest text-[#e8d0a5] font-semibold mb-1">
                  Synopsis
                </h4>
                <p className="font-body text-sm text-white/80 leading-relaxed">
                  {film.synopsis}
                </p>
              </div>

              <div>
                <h4 className="font-label text-xs uppercase tracking-widest text-[#e8d0a5] font-semibold mb-1">
                  Director&apos;s Note
                </h4>
                <p className="font-body text-xs text-white/70 leading-relaxed italic border-l-2 border-[#b65c44] pl-3 py-0.5">
                  &ldquo;{film.directorNote}&rdquo;
                </p>
              </div>
            </div>

            <div className="bg-black/30 border border-white/10 rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <div className="text-xs font-label uppercase tracking-wider text-[#e8d0a5] font-semibold mb-2">
                  Sound &amp; Color Grade
                </div>
                <div className="text-[11px] font-body text-white/70 space-y-1.5">
                  <p>• 4K Anamorphic Raw Cinema Format</p>
                  <p>• Live acoustic sound recording</p>
                  <p>• Bespoke studio film grading</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onBookFilm();
                }}
                className="mt-6 w-full bg-[#b65c44] hover:bg-[#9c4f3a] text-white py-2.5 rounded-full text-xs font-label uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                Inquire For Your Film
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
