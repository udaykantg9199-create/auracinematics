import React from 'react';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { JournalArticle } from '../types';
import { JOURNAL_ARTICLES } from '../data/weddingData';

interface JournalSectionProps {
  onReadArticle: (article: JournalArticle) => void;
}

export const JournalSection: React.FC<JournalSectionProps> = ({ onReadArticle }) => {
  return (
    <section id="journal" className="bg-[#fdfbf7] text-[#1c1814] py-24 sm:py-32 px-5 sm:px-10 md:px-14 border-b border-[#1c1814]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <p className="font-label text-xs uppercase tracking-[0.28em] text-[#b65c44] mb-3">
              The Journal
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.06] tracking-tight">
              Notes on light, love &amp; <em className="italic font-serif text-[#b65c44]">memory</em>.
            </h2>
          </div>
          <span className="text-xs font-label uppercase tracking-widest text-[#786c5e]">
            Studio Dispatches &amp; Guides
          </span>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => onReadArticle(article)}
              className="group cursor-pointer flex flex-col justify-between bg-[#fdfbf7] border border-[#1c1814]/10 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#2a241e]">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-4 text-[10px] font-label uppercase tracking-widest text-white/90 bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/10">
                    {article.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-[11px] font-label uppercase tracking-wider text-[#786c5e] mb-2">
                    <span>{article.date}</span>
                    <span>·</span>
                    <Clock className="w-3 h-3 text-[#b65c44]" />
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-heading text-2xl font-semibold text-[#1c1814] group-hover:text-[#b65c44] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[#786c5e] mt-2.5 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <span className="text-xs font-label uppercase tracking-widest text-[#b65c44] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Essay <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
