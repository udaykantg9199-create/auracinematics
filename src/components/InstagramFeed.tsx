import React from 'react';
import { Instagram } from 'lucide-react';

export const InstagramFeed: React.FC = () => {
  const instaPosts = [
    {
      id: 'ig-1',
      image: '/src/assets/images/bridal_veil_sunset_1791796159607.jpg',
      alt: 'Bride getting ready in warm morning sunlight',
      caption: 'The quiet fifteen minutes before the baarat arrives. Rajasthan, 2026.',
    },
    {
      id: 'ig-2',
      image: '/src/assets/images/couple_hands_rings_1791796176554.jpg',
      alt: 'Couple sharing a quiet moment with rings held close',
      caption: 'Entwined hands and fresh henna in late afternoon Udaipur light.',
    },
    {
      id: 'ig-3',
      image: '/src/assets/images/hero_wedding_golden_hour_1791796143879.jpg',
      alt: 'Wedding couple candid laughter in sunlit field',
      caption: 'Chasing the last five minutes of Punjab golden hour.',
    },
    {
      id: 'ig-4',
      image: '/src/assets/images/ceremony_string_lights_1791796191937.jpg',
      alt: 'Wedding couple first dance under string lights',
      caption: 'First dance under a thousand fairy lights. A night we will never forget.',
    },
    {
      id: 'ig-5',
      image: '/src/assets/images/editorial_couture_bride_1791796209147.jpg',
      alt: 'Bridal couture portrait in marble palace archway',
      caption: 'Editorial couture studies for Vogue Weddings. Jaipur.',
    },
    {
      id: 'ig-6',
      image: '/src/assets/images/hero_wedding_golden_hour_1791796143879.jpg',
      alt: 'Wedding couple walking into golden distance',
      caption: 'Walking into forever together. Bali destination vows.',
    },
  ];

  return (
    <section className="bg-[#f6ece9]/60 text-[#1c1814] py-20 sm:py-28 px-5 sm:px-10 md:px-14 border-b border-[#1c1814]/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <p className="font-label text-xs uppercase tracking-[0.28em] text-[#b65c44] mb-2">
              Follow Along
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
              Latest from the <em className="italic font-serif text-[#b65c44]">feed</em>.
            </h2>
          </div>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#1c1814]/20 hover:border-[#b65c44] bg-[#fdfbf7] text-[#1c1814] hover:text-[#b65c44] px-5 py-2.5 rounded-full text-xs font-label uppercase tracking-widest font-semibold transition-all self-start sm:self-auto"
          >
            <Instagram className="w-4 h-4" />
            <span>@aura.films</span>
          </a>
        </div>

        {/* 6 Square Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {instaPosts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden bg-[#dedede] block shadow-xs"
              aria-label={post.alt}
            >
              <img
                src={post.image}
                alt={post.alt}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />

              {/* Hover overlay with Instagram icon */}
              <div className="absolute inset-0 bg-[#1c1814]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-white text-center">
                <Instagram className="w-6 h-6 text-[#e8d0a5] mb-2 scale-90 group-hover:scale-100 transition-transform" />
                <p className="text-[11px] font-body line-clamp-2 text-white/90">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
