import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onCheckDateClick: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onCheckDateClick,
  onNavigateSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const [filmsDropdownOpen, setFilmsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ambient sound synthesizer using Web Audio API (gentle warm acoustic chime on un-mute)
  const toggleAmbientSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) {
        setIsMuted(!isMuted);
        return;
      }
      const ctx = new AudioCtx();
      if (isMuted) {
        // Play warm gentle celestial chord: Cmaj9 (C, E, G, B, D)
        const freqs = [261.63, 329.63, 392.0, 493.88, 587.33];
        freqs.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          
          gain.gain.setValueAtTime(0, ctx.currentTime);
          gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.3 + i * 0.1);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.5);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(ctx.currentTime + i * 0.1);
          osc.stop(ctx.currentTime + 3.8);
        });
      }
      setIsMuted(!isMuted);
    } catch {
      setIsMuted(!isMuted);
    }
  };

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    setPortfolioDropdownOpen(false);
    setFilmsDropdownOpen(false);
    onNavigateSection(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-out flex items-center justify-between px-5 md:px-12 h-[76px] ${
          isScrolled
            ? 'bg-[#fdfbf7]/92 backdrop-blur-md border-b border-[#1c1814]/10 text-[#1c1814] shadow-sm'
            : 'bg-gradient-to-b from-black/60 via-black/25 to-transparent text-white border-b border-transparent'
        }`}
      >
        {/* Zone 1: Single text element wordmark with brand insignia */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('top');
          }}
          className="flex items-center gap-3 no-underline group whitespace-nowrap shrink-0"
          aria-label="Aura Films & Photography - home"
        >
          <span
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors duration-300 ${
              isScrolled
                ? 'border-[#b65c44] text-[#b65c44]'
                : 'border-[#c9a46a] text-[#c9a46a]'
            }`}
          >
            <span className="font-heading text-lg font-bold leading-none">A</span>
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-heading text-[17px] font-semibold tracking-wide">
              Aura Films
            </span>
            <span className="font-label text-[9px] uppercase tracking-[0.3em] opacity-75">
              &amp; Photography
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 single-line navigation links with hover states */}
        <nav
          className="hidden lg:flex items-center gap-7 text-[12px] font-medium font-label tracking-[0.16em] uppercase"
          aria-label="Primary"
        >
          <button
            type="button"
            onClick={() => handleLinkClick('top')}
            className="hover:opacity-100 opacity-80 transition-opacity cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#b65c44] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => handleLinkClick('golden-hour')}
            className="hover:opacity-100 opacity-80 transition-opacity cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#b65c44] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
          >
            Golden Hour
          </button>

          <button
            type="button"
            onClick={() => handleLinkClick('about')}
            className="hover:opacity-100 opacity-80 transition-opacity cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#b65c44] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
          >
            About
          </button>

          {/* Portfolio with clean flyout */}
          <div
            className="relative"
            onMouseEnter={() => setPortfolioDropdownOpen(true)}
            onMouseLeave={() => setPortfolioDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => handleLinkClick('portfolio')}
              className="flex items-center gap-1 hover:opacity-100 opacity-80 transition-opacity cursor-pointer py-1"
            >
              Portfolio
              <i className="ri-arrow-down-s-line text-sm opacity-60"></i>
            </button>

            {portfolioDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                <div className="bg-[#fdfbf7] border border-[#1c1814]/10 rounded-xl p-2 min-w-[200px] shadow-xl text-[#1c1814] flex flex-col gap-1">
                  <button
                    type="button"
                    onClick={() => handleLinkClick('portfolio')}
                    className="text-left px-3 py-2 text-xs rounded-lg hover:bg-[#f6ece9] hover:text-[#b65c44] transition-colors"
                  >
                    All Works
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('portfolio')}
                    className="text-left px-3 py-2 text-xs rounded-lg hover:bg-[#f6ece9] hover:text-[#b65c44] transition-colors"
                  >
                    Weddings
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('portfolio')}
                    className="text-left px-3 py-2 text-xs rounded-lg hover:bg-[#f6ece9] hover:text-[#b65c44] transition-colors"
                  >
                    Pre-Wedding
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('portfolio')}
                    className="text-left px-3 py-2 text-xs rounded-lg hover:bg-[#f6ece9] hover:text-[#b65c44] transition-colors"
                  >
                    Editorial &amp; Couture
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Films Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setFilmsDropdownOpen(true)}
            onMouseLeave={() => setFilmsDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => handleLinkClick('films')}
              className="flex items-center gap-1 hover:opacity-100 opacity-80 transition-opacity cursor-pointer py-1"
            >
              Films
              <i className="ri-arrow-down-s-line text-sm opacity-60"></i>
            </button>

            {filmsDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                <div className="bg-[#fdfbf7] border border-[#1c1814]/10 rounded-xl p-2 min-w-[210px] shadow-xl text-[#1c1814] flex flex-col gap-1">
                  <button
                    type="button"
                    onClick={() => handleLinkClick('films')}
                    className="text-left px-3 py-2 text-xs rounded-lg hover:bg-[#f6ece9] hover:text-[#b65c44] transition-colors"
                  >
                    Wedding Cinema (15-25 min)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('films')}
                    className="text-left px-3 py-2 text-xs rounded-lg hover:bg-[#f6ece9] hover:text-[#b65c44] transition-colors"
                  >
                    Pre-Wedding Stories (3-5 min)
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => handleLinkClick('journal')}
            className="hover:opacity-100 opacity-80 transition-opacity cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#b65c44] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
          >
            Journal
          </button>

          <button
            type="button"
            onClick={() => handleLinkClick('inquire')}
            className="hover:opacity-100 opacity-80 transition-opacity cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#b65c44] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: 1 primary action + subtle ambient audio toggle */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Audio Chime Ambient Controller */}
          <button
            type="button"
            onClick={toggleAmbientSound}
            aria-label={isMuted ? 'Play ambient sound chord' : 'Mute ambient sound'}
            title={isMuted ? 'Atmospheric wedding chord' : 'Mute audio'}
            className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all ${
              isScrolled
                ? 'border-[#1c1814]/15 text-[#1c1814] hover:bg-[#f6ece9]'
                : 'border-white/25 text-white hover:bg-white/10'
            }`}
          >
            {isMuted ? <VolumeX className="w-4 h-4 opacity-75" /> : <Volume2 className="w-4 h-4 text-[#c46e58] animate-pulse" />}
          </button>

          {/* Primary Action Button */}
          <button
            type="button"
            onClick={onCheckDateClick}
            className="hidden sm:inline-flex items-center gap-2 bg-[#b65c44] hover:bg-[#9c4f3a] text-white px-5 py-2.5 rounded-full text-xs font-medium tracking-wide uppercase font-label transition-all shadow-sm hover:shadow active:scale-[0.98] whitespace-nowrap shrink-0"
          >
            Check your date
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-inherit hover:opacity-80 transition-opacity focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-Out Panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[76px] z-40 bg-[#fdfbf7]/98 backdrop-blur-xl border-b border-[#1c1814]/10 p-6 flex flex-col gap-3 shadow-2xl lg:hidden max-h-[calc(100vh-76px)] overflow-y-auto">
          <button
            type="button"
            onClick={() => handleLinkClick('top')}
            className="text-left py-3 border-b border-[#1c1814]/10 text-sm font-label uppercase tracking-widest text-[#1c1814] hover:text-[#b65c44]"
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('golden-hour')}
            className="text-left py-3 border-b border-[#1c1814]/10 text-sm font-label uppercase tracking-widest text-[#1c1814] hover:text-[#b65c44]"
          >
            The Golden Hour
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('about')}
            className="text-left py-3 border-b border-[#1c1814]/10 text-sm font-label uppercase tracking-widest text-[#1c1814] hover:text-[#b65c44]"
          >
            Our Studio
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('portfolio')}
            className="text-left py-3 border-b border-[#1c1814]/10 text-sm font-label uppercase tracking-widest text-[#1c1814] hover:text-[#b65c44]"
          >
            Portfolio (Weddings &amp; Pre-Wedding)
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('films')}
            className="text-left py-3 border-b border-[#1c1814]/10 text-sm font-label uppercase tracking-widest text-[#1c1814] hover:text-[#b65c44]"
          >
            Cinema Films
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('calculator')}
            className="text-left py-3 border-b border-[#1c1814]/10 text-sm font-label uppercase tracking-widest text-[#1c1814] hover:text-[#b65c44]"
          >
            Availability &amp; Pricing
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('journal')}
            className="text-left py-3 border-b border-[#1c1814]/10 text-sm font-label uppercase tracking-widest text-[#1c1814] hover:text-[#b65c44]"
          >
            Journal &amp; Stories
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('inquire')}
            className="text-left py-3 border-b border-[#1c1814]/10 text-sm font-label uppercase tracking-widest text-[#1c1814] hover:text-[#b65c44]"
          >
            Contact &amp; Enquiry
          </button>

          <div className="pt-4 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onCheckDateClick();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#b65c44] text-white py-3 rounded-full text-xs font-label uppercase tracking-widest font-semibold"
            >
              Check your wedding date
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-center gap-5 pt-2 text-[#786c5e]">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#b65c44]">
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#b65c44]">
                <i className="ri-youtube-line text-lg"></i>
              </a>
              <a href="mailto:hello@aurafilms.studio" className="hover:text-[#b65c44]">
                <i className="ri-mail-line text-lg"></i>
              </a>
              <a href="tel:+919876543210" className="hover:text-[#b65c44]">
                <i className="ri-phone-line text-lg"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
