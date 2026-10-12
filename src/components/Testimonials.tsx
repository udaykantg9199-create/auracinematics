import React from 'react';
import { Star, MapPin, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/weddingData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="bg-[#f6ece9]/50 text-[#1c1814] py-24 sm:py-32 px-5 sm:px-10 md:px-14 border-b border-[#1c1814]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <p className="font-label text-xs uppercase tracking-[0.28em] text-[#b65c44] mb-3">
            Words From Our Couples
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.06] tracking-tight">
            Loved by the people we <em className="italic font-serif text-[#b65c44]">photograph</em>.
          </h2>
        </div>

        {/* 3-Column Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((testi) => (
            <figure
              key={testi.id}
              className="bg-[#fdfbf7] border border-[#1c1814]/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-[#c9a46a] mb-5" aria-label="5 out of 5 stars">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-heading text-lg sm:text-[19px] italic text-[#1c1814]/90 leading-relaxed mb-6">
                  &ldquo;{testi.quote}&rdquo;
                </blockquote>
              </div>

              {/* Attribution */}
              <figcaption className="flex items-center gap-3.5 pt-5 border-t border-[#1c1814]/10 mt-auto">
                <img
                  src={testi.avatar}
                  alt={testi.names}
                  className="w-11 h-11 rounded-full object-cover border border-[#1c1814]/15"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="flex flex-col">
                  <span className="font-body text-sm font-semibold text-[#1c1814]">
                    {testi.names}
                  </span>
                  <span className="text-xs text-[#786c5e] font-body flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#b65c44]" />
                    {testi.venue}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
