import React from 'react';
import { ArrowRight, Eye, Camera } from 'lucide-react';
import { GoldenHourTile } from '../types';
import { GOLDEN_HOUR_TILES } from '../data/weddingData';

interface GoldenHourGalleryProps {
  onOpenLightbox: (tile: GoldenHourTile) => void;
  onExplorePortfolio: () => void;
}

export const GoldenHourGallery: React.FC<GoldenHourGalleryProps> = ({
  onOpenLightbox,
  onExplorePortfolio,
}) => {
  return (
    <section id="golden-hour" className="relative bg-[#1c1814] text-white py-24 sm:py-32 px-5 sm:px-10 md:px-14 overflow-hidden">
      {/* Subtle warm glow background gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_80%_20%,_rgba(201,164,106,0.22),_transparent_50%),radial-gradient(circle_at_20%_80%,_rgba(182,92,68,0.18),_transparent_55%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="font-label text-xs uppercase tracking-[0.28em] text-[#e8d0a5] mb-3">
            Chasing the light
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.06] tracking-tight">
            The golden hour, <br />
            held <em className="italic font-serif text-[#e8d0a5]">still</em>.
          </h2>
          <p className="font-body text-white/75 text-base sm:text-lg mt-4 leading-relaxed">
            The last hour before sunset is where our favourite frames live — warm, unhurried,
            and full of quiet feeling. Here is a glimpse of that light.
          </p>
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6">
          {GOLDEN_HOUR_TILES.map((tile) => {
            const isSpan3 = tile.span === 's3';
            const isSpan2 = tile.span === 's2';
            const isSpan6 = tile.span === 's6';

            return (
              <figure
                key={tile.id}
                onClick={() => onOpenLightbox(tile)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-[#2a241e] border border-white/10 transition-all duration-500 hover:border-[#c9a46a]/50 shadow-md hover:shadow-2xl ${
                  isSpan3
                    ? 'lg:col-span-3 aspect-[4/5]'
                    : isSpan2
                    ? 'lg:col-span-2 aspect-square sm:aspect-[4/5] lg:aspect-square'
                    : isSpan6
                    ? 'col-span-1 sm:col-span-2 lg:col-span-6 aspect-[16/9] sm:aspect-[21/9]'
                    : 'lg:col-span-2 aspect-square'
                }`}
              >
                <img
                  src={tile.image}
                  alt={tile.alt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter saturate-[1.06] contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1814]/85 via-[#1c1814]/25 to-transparent transition-opacity duration-300 opacity-90 group-hover:opacity-100" />

                {/* Subtle top badge for camera lovers */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[10px] font-mono text-white/90 flex items-center gap-1.5">
                  <Camera className="w-3 h-3 text-[#c9a46a]" />
                  <span>{tile.lens?.split(' ')[0] || 'Prime'}</span>
                </div>

                {/* Caption and interactive hint */}
                <figcaption className="absolute bottom-5 left-5 right-5 flex flex-col gap-1 text-white transition-transform duration-300 group-hover:translate-y-[-2px]">
                  <span className="font-label text-[10px] uppercase tracking-[0.24em] text-[#e8d0a5]">
                    {tile.location}
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-xl sm:text-2xl font-semibold tracking-wide">
                      {tile.title}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all text-[#e8d0a5]">
                      <Eye className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>

        {/* Footnote and Call to Action */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="font-body text-white/70 text-sm max-w-md">
            Every shoot ends the same way — chasing one more frame as the sun slips below the horizon.
          </p>
          <button
            type="button"
            onClick={onExplorePortfolio}
            className="inline-flex items-center gap-2 bg-[#b65c44] hover:bg-[#9c4f3a] text-white px-6 py-3 rounded-full text-xs font-label uppercase tracking-widest font-semibold transition-all shadow hover:shadow-lg active:scale-95 cursor-pointer"
          >
            See the full portfolio
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
