import React from 'react';

export const Manifesto: React.FC = () => {
  return (
    <section className="relative min-h-[85svh] flex items-center justify-center text-center px-6 sm:px-12 py-28 bg-[#1c1814] text-white overflow-hidden">
      {/* Background with dramatic lighting and blur */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/ceremony_string_lights_1791796191937.jpg"
          alt="Atmospheric wedding ceremony candlelit background"
          className="w-full h-full object-cover filter brightness-[0.38] contrast-[1.1] scale-105"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1814] via-[#1c1814]/65 to-[#1c1814]/85" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <span className="font-label text-xs uppercase tracking-[0.32em] text-[#e8d0a5] mb-6 block">
          Our Guiding Conviction
        </span>

        <blockquote className="font-heading text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.16] tracking-tight text-white/90 max-w-3xl">
          &ldquo;We do not chase <em className="italic font-serif text-[#e8d0a5] font-semibold">trends</em> — we chase the{' '}
          <em className="italic font-serif text-[#e8d0a5] font-semibold">moment</em> a room goes quiet when the light finally lands.&rdquo;
        </blockquote>

        <div className="w-12 h-[1px] bg-[#c9a46a]/60 my-8"></div>

        <p className="font-body text-sm sm:text-base text-white/75 max-w-xl leading-relaxed">
          Ten years from now, you will not care about what color grade was viral on social media.
          You will care about how tightly your father squeezed your shoulder before letting go.
        </p>
      </div>
    </section>
  );
};
