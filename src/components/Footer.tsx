import React from 'react';
import { ArrowUp, Instagram, Youtube, Facebook, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onCheckDateClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateSection,
  onCheckDateClick,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1c1814] text-[#f2f0ed] pt-20 pb-12 px-5 sm:px-10 md:px-14 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="flex items-center gap-3 no-underline group whitespace-nowrap"
            >
              <span className="w-10 h-10 rounded-full border border-[#c9a46a] text-[#c9a46a] flex items-center justify-center">
                <span className="font-heading text-xl font-bold leading-none">A</span>
              </span>
              <div className="flex flex-col leading-tight">
                <span className="font-heading text-xl font-semibold tracking-wide text-white">
                  Aura Films
                </span>
                <span className="font-label text-[10px] uppercase tracking-[0.34em] text-white/60">
                  &amp; Photography
                </span>
              </div>
            </a>

            <p className="font-body text-sm text-white/70 max-w-sm leading-relaxed mt-1">
              A boutique wedding studio making candid photography and cinematic films. We tell love stories with
              light, patience, and a crew that stays small on purpose.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/80 hover:text-black hover:bg-[#c9a46a] hover:border-[#c9a46a] transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/80 hover:text-black hover:bg-[#c9a46a] hover:border-[#c9a46a] transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/80 hover:text-black hover:bg-[#c9a46a] hover:border-[#c9a46a] transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@aurafilms.studio"
                aria-label="Email Studio"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/80 hover:text-black hover:bg-[#c9a46a] hover:border-[#c9a46a] transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Portfolio */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-label text-xs uppercase tracking-[0.2em] text-[#e8d0a5] font-semibold">
              Portfolio
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70 font-body">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('portfolio')}
                  className="hover:text-[#e8d0a5] transition-colors cursor-pointer text-left"
                >
                  Weddings
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('portfolio')}
                  className="hover:text-[#e8d0a5] transition-colors cursor-pointer text-left"
                >
                  Pre-Wedding
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('portfolio')}
                  className="hover:text-[#e8d0a5] transition-colors cursor-pointer text-left"
                >
                  Editorial &amp; Couture
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('golden-hour')}
                  className="hover:text-[#e8d0a5] transition-colors cursor-pointer text-left"
                >
                  The Golden Hour
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Films & Studio */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-label text-xs uppercase tracking-[0.2em] text-[#e8d0a5] font-semibold">
              Films &amp; Story
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70 font-body">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('films')}
                  className="hover:text-[#e8d0a5] transition-colors cursor-pointer text-left"
                >
                  Wedding Films (4K)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('films')}
                  className="hover:text-[#e8d0a5] transition-colors cursor-pointer text-left"
                >
                  Short Love Stories
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('about')}
                  className="hover:text-[#e8d0a5] transition-colors cursor-pointer text-left"
                >
                  Our Philosophy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('journal')}
                  className="hover:text-[#e8d0a5] transition-colors cursor-pointer text-left"
                >
                  Journal &amp; Guides
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('faq')}
                  className="hover:text-[#e8d0a5] transition-colors cursor-pointer text-left"
                >
                  Frequently Asked
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Dates */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-label text-xs uppercase tracking-[0.2em] text-[#e8d0a5] font-semibold">
              Connect
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70 font-body">
              <li>
                <button
                  type="button"
                  onClick={onCheckDateClick}
                  className="text-[#e8d0a5] font-semibold hover:underline cursor-pointer"
                >
                  Check Your 2026/2027 Date
                </button>
              </li>
              <li>
                <a
                  href="mailto:hello@aurafilms.studio"
                  className="hover:text-white transition-colors"
                >
                  hello@aurafilms.studio
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="text-white/50 text-xs">
                Chandigarh, India · Global commissions worldwide
              </li>
            </ul>

            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs font-label uppercase tracking-wider text-white/60 hover:text-white transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                Back to top
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-white/50">
          <p>© 2026 Aura Films &amp; Photography. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onNavigateSection('faq')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onNavigateSection('faq')}
              className="hover:text-white transition-colors"
            >
              Terms of Commission
            </button>
            <span>Told with light.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
