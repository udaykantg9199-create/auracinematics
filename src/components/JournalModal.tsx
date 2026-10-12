import React, { useEffect } from 'react';
import { X, Clock, MapPin, Calendar, BookOpen } from 'lucide-react';
import { JournalArticle } from '../types';

interface JournalModalProps {
  article: JournalArticle | null;
  onClose: () => void;
}

export const JournalModal: React.FC<JournalModalProps> = ({ article, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!article) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#070707]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl bg-[#fdfbf7] text-[#1c1814] border border-[#1c1814]/15 rounded-3xl overflow-hidden shadow-2xl my-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close article modal"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Article Banner Header */}
        <div className="relative aspect-[21/9] w-full bg-[#1c1814] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover filter brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fdfbf7] via-transparent to-black/40" />
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 -mt-8 relative z-10">
          <div className="flex items-center gap-3 text-xs font-label uppercase tracking-widest text-[#b65c44] font-semibold mb-2">
            <span>{article.category}</span>
            <span>·</span>
            <span className="text-[#786c5e] flex items-center gap-1 font-normal">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-[#1c1814] mb-6">
            {article.title}
          </h2>

          <div className="prose text-[#5d5d5d] font-body text-base leading-relaxed space-y-4 border-t border-[#1c1814]/10 pt-6">
            <p className="text-lg font-heading italic text-[#1c1814] border-l-2 border-[#b65c44] pl-4 my-4">
              &ldquo;{article.excerpt}&rdquo;
            </p>
            <p>{article.content}</p>
            <p>
              When light hits an unposed subject without interference from flash umbrellas or artificial shouts to &apos;smile at the lens&apos;,
              the skin tone renders with cinematic fidelity. That authenticity is why our clients look back on their albums thirty years later
              and feel the very same pulse they felt that morning.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-[#1c1814]/10 flex items-center justify-between">
            <span className="text-xs font-label text-[#786c5e]">
              Aura Films &amp; Photography Editorial Desk
            </span>
            <button
              type="button"
              onClick={onClose}
              className="text-xs font-label uppercase tracking-widest text-[#b65c44] font-semibold hover:underline"
            >
              Close Essay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
