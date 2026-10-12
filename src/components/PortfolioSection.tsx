import React, { useState } from 'react';
import { ArrowRight, Eye, Calendar, MapPin } from 'lucide-react';
import { CategoryType, PortfolioItem, GoldenHourTile } from '../types';
import { PORTFOLIO_ITEMS } from '../data/weddingData';

interface PortfolioSectionProps {
  onOpenLightbox: (tile: GoldenHourTile) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onOpenLightbox,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const handleTileClick = (item: PortfolioItem) => {
    onOpenLightbox({
      id: item.id,
      title: item.title,
      location: item.location,
      image: item.image,
      alt: item.alt,
      span: 's3',
      camera: 'Leica SL2 / Hasselblad X2D',
      lens: '50mm / 85mm Prime',
      story: item.description,
    });
  };

  return (
    <section id="portfolio" className="bg-[#f6ece9]/45 text-[#1c1814] py-24 sm:py-32 px-5 sm:px-10 md:px-14 border-b border-[#1c1814]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <p className="font-label text-xs uppercase tracking-[0.28em] text-[#b65c44] mb-3">
              Our Signature Work
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.06] tracking-tight">
              Three ways we tell a <em className="italic font-serif text-[#b65c44]">love story</em>.
            </h2>
            <p className="font-body text-[#786c5e] text-base sm:text-lg mt-4 leading-relaxed">
              From the calm of a pre-wedding shoot to the full sweep of the wedding day and styled editorial features —
              pick the story you want told.
            </p>
          </div>

          {/* Interactive Filter Tabs (Segmented control style) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#fdfbf7] border border-[#1c1814]/12 rounded-full self-start md:self-auto shadow-sm">
            {[
              { key: 'all', label: 'All Stories' },
              { key: 'weddings', label: 'Weddings' },
              { key: 'pre-wedding', label: 'Pre-Wedding' },
              { key: 'editorial', label: 'Editorial' },
            ].map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveCategory(tab.key as CategoryType)}
                className={`px-4 sm:px-5 py-2 text-xs font-label uppercase tracking-wider rounded-full transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeCategory === tab.key
                    ? 'bg-[#b65c44] text-white font-semibold shadow-sm'
                    : 'text-[#786c5e] hover:text-[#1c1814]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Signature Pillars Overview Cards */}
        {activeCategory === 'all' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {/* Pillar 1: Pre-Wedding */}
            <div
              onClick={() => setActiveCategory('pre-wedding')}
              className="group cursor-pointer bg-[#fdfbf7] rounded-2xl border border-[#1c1814]/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#dedede]">
                <img
                  src="/src/assets/images/hero_wedding_golden_hour_1791796143879.jpg"
                  alt="Pre-wedding engagement session in golden field"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="font-label text-[10px] tracking-[0.24em] uppercase text-[#e8d0a5]">
                    Engagement Stories
                  </div>
                  <div className="font-heading text-2xl font-semibold mt-1">
                    Pre-Wedding
                  </div>
                  <p className="font-body text-xs text-white/80 mt-2 line-clamp-2 leading-relaxed">
                    Concept-led shoots across mountains, cities and coastlines — the calm before the vows.
                  </p>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between text-xs font-label uppercase tracking-widest text-[#786c5e]">
                <span>180+ Sessions</span>
                <span className="text-[#b65c44] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Pillar 2: Weddings */}
            <div
              onClick={() => setActiveCategory('weddings')}
              className="group cursor-pointer bg-[#fdfbf7] rounded-2xl border border-[#1c1814]/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#dedede]">
                <img
                  src="/src/assets/images/ceremony_string_lights_1791796191937.jpg"
                  alt="Full-day wedding celebration under fairy lights"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="font-label text-[10px] tracking-[0.24em] uppercase text-[#e8d0a5]">
                    Full-Day Coverage
                  </div>
                  <div className="font-heading text-2xl font-semibold mt-1">
                    Weddings
                  </div>
                  <p className="font-body text-xs text-white/80 mt-2 line-clamp-2 leading-relaxed">
                    Candid, unposed storytelling from the haldi to the last dance, with a calm crew that never gets in the way.
                  </p>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between text-xs font-label uppercase tracking-widest text-[#786c5e]">
                <span>600+ Weddings</span>
                <span className="text-[#b65c44] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Pillar 3: Editorial */}
            <div
              onClick={() => setActiveCategory('editorial')}
              className="group cursor-pointer bg-[#fdfbf7] rounded-2xl border border-[#1c1814]/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#dedede]">
                <img
                  src="/src/assets/images/editorial_couture_bride_1791796209147.jpg"
                  alt="High fashion bridal couture editorial"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="font-label text-[10px] tracking-[0.24em] uppercase text-[#e8d0a5]">
                    Portraits &amp; Couture
                  </div>
                  <div className="font-heading text-2xl font-semibold mt-1">
                    Editorial
                  </div>
                  <p className="font-body text-xs text-white/80 mt-2 line-clamp-2 leading-relaxed">
                    Styled bridal editorials, designer campaigns and magazine features shot with fashion-house polish.
                  </p>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between text-xs font-label uppercase tracking-widest text-[#786c5e]">
                <span>40+ Features</span>
                <span className="text-[#b65c44] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Detailed Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              onClick={() => handleTileClick(item)}
              className="group cursor-pointer bg-[#fdfbf7] rounded-2xl overflow-hidden border border-[#1c1814]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#2a241e]">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter saturate-[1.03] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-4 text-[10px] font-label uppercase tracking-widest text-white/90 bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/10">
                  {item.category === 'pre-wedding' ? 'Pre-Wedding' : item.category === 'weddings' ? 'Wedding Story' : 'Editorial'}
                </span>
                <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4" />
                </span>
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="flex items-center gap-1.5 text-xs text-[#b65c44] font-label uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>

                <h3 className="font-heading text-2xl font-semibold text-[#1c1814] group-hover:text-[#b65c44] transition-colors">
                  {item.title}
                </h3>

                <p className="font-body text-sm text-[#786c5e] mt-2 leading-relaxed flex-1">
                  {item.description}
                </p>

                <div className="mt-4 pt-4 border-t border-[#1c1814]/10 flex items-center justify-between text-xs text-[#786c5e] font-label">
                  <span className="tracking-wide">{item.count}</span>
                  <span className="text-[#b65c44] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Gallery <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
