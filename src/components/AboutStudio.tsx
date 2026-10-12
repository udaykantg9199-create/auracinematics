import React from 'react';
import { Camera, Globe, Award, Heart } from 'lucide-react';

export const AboutStudio: React.FC = () => {
  return (
    <section id="about" className="bg-[#fdfbf7] text-[#1c1814] py-24 sm:py-32 px-5 sm:px-10 md:px-14 border-b border-[#1c1814]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="font-label text-xs uppercase tracking-[0.28em] text-[#b65c44] mb-3">
            Our Studio
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.06] tracking-tight">
            Your visual <em className="italic font-serif text-[#b65c44]">legacy</em> begins here.
          </h2>
          <p className="font-body text-[#786c5e] text-base sm:text-lg mt-4 leading-relaxed">
            For over a decade we have documented the weddings of couples who want their day
            remembered exactly as it felt — warm, unhurried, and full of honest emotion.
          </p>
        </div>

        {/* 2-Column Split: Philosophy vs Media Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Philosophy Prose */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-[#5d5d5d] font-body text-base sm:text-[15.5px] leading-relaxed">
            <div className="space-y-2">
              <h3 className="font-heading text-2xl sm:text-3xl text-[#1c1814] font-semibold">
                Blending art with real moments
              </h3>
              <p>
                Great wedding photography is about telling a complete human story. We pair considered
                architectural composition with genuinely candid frames, so your album reads like a cinema
                narrative rather than a series of stiff poses. The quiet, in-between glances get as much care as the
                grand rituals.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-heading text-2xl sm:text-3xl text-[#1c1814] font-semibold">
                Finding your inspiration
              </h3>
              <p>
                Your relationship and family background shape everything we capture. We focus on the small,
                heartfelt details first — the heirloom jewellery passed through generations, the handwritten vows,
                the laughter between cousins — then celebrate the grand pageantry that defines your celebration.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-heading text-2xl sm:text-3xl text-[#1c1814] font-semibold">
                Global experience, local cultural care
              </h3>
              <p>
                We are proud to work from our base in Chandigarh while travelling widely across the globe —
                photographing{' '}
                <strong className="text-[#1c1814] font-semibold">
                  Hindu, Sikh, Muslim, Christian, and multicultural celebrations
                </strong>{' '}
                across Asia, Europe, and North America. That seasoned depth means we anticipate every key ritual
                without ever obstructing the sacred ceremony.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Media with Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-[#f2f0ed] border border-[#1c1814]/10">
              <img
                src="/src/assets/images/bridal_veil_sunset_1791796159607.jpg"
                alt="Aura Films & Photography royal bridal portrait"
                className="w-full h-full object-cover object-top filter saturate-[1.04]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Achievement Badge */}
            <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 bg-[#fdfbf7] border border-[#1c1814]/15 rounded-2xl p-4 sm:p-5 shadow-xl flex items-center gap-6">
              <div className="border-r border-[#1c1814]/15 pr-6">
                <div className="font-heading text-3xl sm:text-4xl font-semibold text-[#b65c44] leading-none tabular-nums">
                  5,000+
                </div>
                <div className="font-label text-[10px] tracking-[0.2em] uppercase text-[#786c5e] mt-1.5 font-medium">
                  Love Stories
                </div>
              </div>
              <div>
                <div className="font-heading text-3xl sm:text-4xl font-semibold text-[#b65c44] leading-none tabular-nums">
                  32
                </div>
                <div className="font-label text-[10px] tracking-[0.2em] uppercase text-[#786c5e] mt-1.5 font-medium">
                  Countries
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Strip - Full width row below split */}
        <div className="mt-20 sm:mt-24 pt-12 border-t border-[#1c1814]/10 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-center sm:text-left">
          <div className="flex flex-col gap-2">
            <div className="font-heading text-4xl sm:text-5xl font-semibold text-[#b65c44] tabular-nums">
              900+
            </div>
            <div className="font-label text-xs uppercase tracking-[0.22em] text-[#786c5e] font-medium">
              Weddings Documented
            </div>
            <p className="text-xs text-[#786c5e]/80 mt-1">
              From palatial Rajasthan fortresses to serene Himalayan valleys and Italian villas.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="font-heading text-4xl sm:text-5xl font-semibold text-[#b65c44] tabular-nums">
              32
            </div>
            <div className="font-label text-xs uppercase tracking-[0.22em] text-[#786c5e] font-medium">
              Countries Travelled
            </div>
            <p className="text-xs text-[#786c5e]/80 mt-1">
              Extensive destination coverage across Europe, Southeast Asia, the Middle East &amp; UK.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="font-heading text-4xl sm:text-5xl font-semibold text-[#b65c44] tabular-nums">
              14
            </div>
            <div className="font-label text-xs uppercase tracking-[0.22em] text-[#786c5e] font-medium">
              Years Behind The Lens
            </div>
            <p className="text-xs text-[#786c5e]/80 mt-1">
              Refining an unapologetically candid, timeless aesthetic that defies passing trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
