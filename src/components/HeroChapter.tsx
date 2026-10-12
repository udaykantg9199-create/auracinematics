import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, ArrowRight, ChevronRight, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { HERO_VIDEO_URL, HERO_POSTER_URL } from '../data/weddingData';

interface HeroChapterProps {
  onCheckDateClick: () => void;
  onExploreWorkClick: () => void;
}

export const HeroChapter: React.FC<HeroChapterProps> = ({
  onCheckDateClick,
  onExploreWorkClick,
}) => {
  const [activeBeat, setActiveBeat] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-advance beats every 6 seconds if user is idle
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBeat((prev) => (prev + 1) % 3);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleVideoSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsVideoMuted(videoRef.current.muted);
  };

  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden bg-[#1c1814] text-white">
      {/* Background Video Plate */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src={HERO_VIDEO_URL}
          poster={HERO_POSTER_URL}
          autoPlay
          loop
          muted={isVideoMuted}
          playsInline
          className="w-full h-full object-cover object-center filter brightness-[0.88]"
        />
        {/* Soft Vignette and Scrim Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1814]/90 via-[#1c1814]/35 to-black/50 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#1c1814]/20 to-[#1c1814]/70 pointer-events-none" />
      </div>

      {/* Main Chapter Content Overlay */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 sm:px-10 md:px-14 flex flex-col justify-end pb-24 sm:pb-28 md:pb-32 pt-24">
        {/* Story Beat 0 */}
        <div
          className={`transition-all duration-700 ease-out flex flex-col items-start gap-4 max-w-2xl ${
            activeBeat === 0
              ? 'opacity-100 translate-y-0 relative'
              : 'opacity-0 translate-y-6 absolute pointer-events-none'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="font-label text-xs uppercase tracking-[0.28em] text-[#e8d0a5]">
              Weddings · Films · Photography
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.04] tracking-tight">
            Weddings, shot <br className="hidden sm:inline" />
            like <em className="italic font-serif text-[#e8d0a5] font-medium">cinema</em>.
          </h1>

          <p className="font-body text-base sm:text-lg text-white/90 max-w-xl leading-relaxed">
            A boutique studio making candid photography and cinematic wedding films,
            told with light, patience, and a crew that stays intentionally small.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              type="button"
              onClick={onCheckDateClick}
              className="bg-[#b65c44] hover:bg-[#9c4f3a] text-white px-7 py-3 rounded-full text-xs font-label uppercase tracking-widest font-semibold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
            >
              Check your date
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onExploreWorkClick}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white px-6 py-3 rounded-full text-xs font-label uppercase tracking-widest font-medium transition-all"
            >
              Explore Portfolio
            </button>
          </div>

          {/* Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-4">
            <span className="text-[11px] font-label uppercase tracking-widest px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 text-white/80">
              Est. 2012
            </span>
            <span className="text-[11px] font-label uppercase tracking-widest px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 text-white/80">
              Stills &amp; Films
            </span>
            <span className="text-[11px] font-label uppercase tracking-widest px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 text-white/80">
              India &amp; Worldwide
            </span>
          </div>
        </div>

        {/* Story Beat 1 */}
        <div
          className={`transition-all duration-700 ease-out flex flex-col items-start gap-4 max-w-2xl ${
            activeBeat === 1
              ? 'opacity-100 translate-y-0 relative'
              : 'opacity-0 translate-y-6 absolute pointer-events-none'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="font-label text-xs uppercase tracking-[0.28em] text-[#e8d0a5]">
              The Craft · In-House Grade
            </span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.04] tracking-tight">
            Light that <br className="hidden sm:inline" />
            <em className="italic font-serif text-[#e8d0a5] font-medium">remembers</em>.
          </h2>

          <p className="font-body text-base sm:text-lg text-white/90 max-w-xl leading-relaxed">
            Every single frame lit, rolled, and hand-finished in-house by the very artists who shoot it.
            No outsourced edits, no artificial digital filters.
          </p>

          <ul className="text-sm sm:text-base text-white/85 space-y-1.5 pt-1">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a46a]"></span>
              Candid, unposed emotional storytelling
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a46a]"></span>
              Hand-finished film color grading on 4K Master sensors
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a46a]"></span>
              Bespoke live acoustic sound design and custom film score
            </li>
          </ul>

          <div className="pt-2">
            <button
              type="button"
              onClick={onExploreWorkClick}
              className="bg-[#b65c44] hover:bg-[#9c4f3a] text-white px-7 py-3 rounded-full text-xs font-label uppercase tracking-widest font-semibold inline-flex items-center gap-2 shadow-lg transition-all"
            >
              See Our Films
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Story Beat 2 */}
        <div
          className={`transition-all duration-700 ease-out flex flex-col items-start gap-4 max-w-2xl ${
            activeBeat === 2
              ? 'opacity-100 translate-y-0 relative'
              : 'opacity-0 translate-y-6 absolute pointer-events-none'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="font-label text-xs uppercase tracking-[0.28em] text-[#e8d0a5]">
              Reservations 2026–2027
            </span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.04] tracking-tight">
            Let us tell <br className="hidden sm:inline" />
            <em className="italic font-serif text-[#e8d0a5] font-medium">yours</em>.
          </h2>

          <p className="font-body text-base sm:text-lg text-white/90 max-w-xl leading-relaxed">
            Send us your dates and wedding vision. We take only 25 celebrations per year to guarantee
            devoted attention to every couple’s story.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              type="button"
              onClick={onCheckDateClick}
              className="bg-[#b65c44] hover:bg-[#9c4f3a] text-white px-7 py-3 rounded-full text-xs font-label uppercase tracking-widest font-semibold inline-flex items-center gap-2 shadow-lg transition-all active:scale-[0.98]"
            >
              Check your wedding date
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Chapter Navigation Dots / Bar & Video Control Affordances */}
      <div className="absolute bottom-7 left-6 sm:left-10 md:left-14 right-6 sm:right-10 md:right-14 z-20 flex items-center justify-between">
        {/* Chapter Beats Indicators */}
        <div className="flex items-center gap-2 sm:gap-3 bg-black/40 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/15">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveBeat(idx)}
              className={`text-[10px] sm:text-xs font-label uppercase tracking-widest px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                activeBeat === idx
                  ? 'bg-white text-black font-semibold shadow'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {idx === 0 ? '01 · Story' : idx === 1 ? '02 · Craft' : '03 · Connect'}
            </button>
          ))}
        </div>

        {/* Video Play/Pause and Audio Controls */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
            title={isPlaying ? 'Pause video' : 'Play video'}
            className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
          </button>
          <button
            type="button"
            onClick={toggleVideoSound}
            aria-label={isVideoMuted ? 'Unmute video audio' : 'Mute video audio'}
            title={isVideoMuted ? 'Enable video audio' : 'Mute video audio'}
            className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
          >
            {isVideoMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Floating Scroll Cue */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-8 hidden md:flex flex-col items-center gap-2 pointer-events-none opacity-60">
        <div className="w-5 h-8 rounded-full border border-white/50 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-white animate-cue"></div>
        </div>
      </div>
    </section>
  );
};
