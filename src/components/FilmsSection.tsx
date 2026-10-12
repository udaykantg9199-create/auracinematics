import React from 'react';
import { Play, Clock, MapPin, Sparkles, Film, ArrowRight } from 'lucide-react';
import { FilmItem } from '../types';
import { FILM_ITEMS } from '../data/weddingData';

interface FilmsSectionProps {
  onPlayFilm: (film: FilmItem) => void;
  onCheckDateClick: () => void;
}

export const FilmsSection: React.FC<FilmsSectionProps> = ({
  onPlayFilm,
  onCheckDateClick,
}) => {
  return (
    <section id="films" className="bg-[#1c1814] text-white py-24 sm:py-32 px-5 sm:px-10 md:px-14 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial-gradient from-[#b65c44]/15 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <p className="font-label text-xs uppercase tracking-[0.28em] text-[#e8d0a5] mb-3">
            Moving Pictures
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.06] tracking-tight">
            Films worth <em className="italic font-serif text-[#e8d0a5]">watching</em> again.
          </h2>
          <p className="font-body text-white/75 text-base sm:text-lg mt-4 leading-relaxed">
            Our cinematographers shoot alongside the photographers, so your film and your album
            share the same eye, the same light, and the same story.
          </p>
        </div>

        {/* Featured Film Hero Card */}
        <div
          onClick={() => onPlayFilm(FILM_ITEMS[0])}
          className="group relative rounded-3xl overflow-hidden cursor-pointer border border-white/15 bg-black/40 shadow-2xl transition-all duration-500 hover:border-[#c9a46a]/60 mb-10 sm:mb-14"
        >
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
            <img
              src={FILM_ITEMS[0].poster}
              alt={FILM_ITEMS[0].title}
              className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c1814] via-[#1c1814]/40 to-transparent" />

            {/* Pulsing Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 shadow-2xl group-hover:bg-[#b65c44]">
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
              </div>
            </div>

            {/* Bottom Meta Overlay */}
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 text-xs font-label uppercase tracking-widest text-[#e8d0a5] mb-1">
                  <Film className="w-3.5 h-3.5" />
                  <span>Featured Film Anthology · {FILM_ITEMS[0].duration}</span>
                </div>
                <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
                  {FILM_ITEMS[0].title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-white/80 mt-2 line-clamp-2">
                  {FILM_ITEMS[0].synopsis}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-label uppercase tracking-wider text-[#e8d0a5] bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  {FILM_ITEMS[0].venue}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Supporting Films Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FILM_ITEMS.slice(1).map((film) => (
            <article
              key={film.id}
              onClick={() => onPlayFilm(film)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-[#251f1a] shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-[#c9a46a]/50 flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
                <img
                  src={film.poster}
                  alt={film.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-[0.88] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1814] via-transparent to-transparent pointer-events-none" />

                {/* Center Mini Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white group-hover:bg-[#b65c44] transition-all">
                    <Play className="w-5 h-5 fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Top Duration Tag */}
                <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-mono text-white/90 border border-white/15 flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-[#c9a46a]" />
                  <span>{film.duration}</span>
                </span>

                {/* Bottom Left Title */}
                <div className="absolute bottom-4 left-5 right-5">
                  <div className="font-label text-[10px] tracking-[0.22em] uppercase text-[#e8d0a5]">
                    {film.category === 'feature' ? 'Feature Film' : 'Short Story'} · {film.location}
                  </div>
                  <h4 className="font-heading text-2xl font-medium text-white mt-1">
                    {film.title}
                  </h4>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <p className="font-body text-xs sm:text-sm text-white/70 leading-relaxed flex-1">
                  {film.synopsis}
                </p>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-label">
                  <span className="text-white/50">{film.couple}</span>
                  <span className="text-[#e8d0a5] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Watch Film <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Film Booking Note */}
        <div className="mt-14 pt-8 border-t border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm font-body text-white/70 max-w-xl text-left">
            All feature films are shot on Netflix-approved 4K cinema cameras, with original live audio recording
            and fully licensed cinematic music scores.
          </p>
          <button
            type="button"
            onClick={onCheckDateClick}
            className="bg-[#b65c44] hover:bg-[#9c4f3a] text-white px-7 py-3 rounded-full text-xs font-label uppercase tracking-widest font-semibold transition-all whitespace-nowrap"
          >
            Inquire For Films
          </button>
        </div>
      </div>
    </section>
  );
};
