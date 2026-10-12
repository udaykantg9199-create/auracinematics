import React from 'react';
import { PRESS_MENTIONS } from '../data/weddingData';

export const PressMarquee: React.FC = () => {
  return (
    <section className="bg-[#f6ece9]/60 border-y border-[#1c1814]/10 py-12 sm:py-16 overflow-hidden">
      <div className="text-center mb-8 px-5">
        <p className="font-label text-xs uppercase tracking-[0.28em] text-[#786c5e]">
          Press &amp; Praise
        </p>
        <h3 className="font-heading text-2xl sm:text-3xl font-medium text-[#1c1814] mt-1">
          Featured &amp; celebrated by
        </h3>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex items-center gap-12 sm:gap-20 whitespace-nowrap">
          {/* Double list for smooth seamless infinite scroll */}
          {[...PRESS_MENTIONS, ...PRESS_MENTIONS].map((press, index) => (
            <span
              key={`${press}-${index}`}
              className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold text-[#1c1814]/70 hover:text-[#b65c44] transition-colors cursor-default tracking-wider"
            >
              {press}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
