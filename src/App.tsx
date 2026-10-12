import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroChapter } from './components/HeroChapter';
import { GoldenHourGallery } from './components/GoldenHourGallery';
import { AboutStudio } from './components/AboutStudio';
import { PortfolioSection } from './components/PortfolioSection';
import { FilmsSection } from './components/FilmsSection';
import { PressMarquee } from './components/PressMarquee';
import { Manifesto } from './components/Manifesto';
import { DateAvailabilityCalculator } from './components/DateAvailabilityCalculator';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { InstagramFeed } from './components/InstagramFeed';
import { JournalSection } from './components/JournalSection';
import { EnquiryForm } from './components/EnquiryForm';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { FilmModal } from './components/FilmModal';
import { JournalModal } from './components/JournalModal';

import { GoldenHourTile, FilmItem, JournalArticle } from './types';
import { GOLDEN_HOUR_TILES } from './data/weddingData';

export default function App() {
  // Modal states
  const [activeLightboxTile, setActiveLightboxTile] = useState<GoldenHourTile | null>(null);
  const [activeFilm, setActiveFilm] = useState<FilmItem | null>(null);
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);

  // Form pre-fill transfer state from Date Availability Calculator
  const [enquiryInitialData, setEnquiryInitialData] = useState<{
    date?: string;
    location?: string;
    service?: string;
    packageTier?: string;
  }>({});

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCheckDateClick = () => {
    scrollToSection('calculator');
  };

  const handlePreFillEnquiry = (details: {
    date: string;
    location: string;
    service: string;
    packageTier?: string;
  }) => {
    setEnquiryInitialData(details);
    scrollToSection('inquire');
  };

  // Lightbox carousel navigation
  const handleNextTile = () => {
    if (!activeLightboxTile) return;
    const currentIndex = GOLDEN_HOUR_TILES.findIndex((t) => t.id === activeLightboxTile.id);
    if (currentIndex >= 0) {
      const nextIndex = (currentIndex + 1) % GOLDEN_HOUR_TILES.length;
      setActiveLightboxTile(GOLDEN_HOUR_TILES[nextIndex]);
    }
  };

  const handlePrevTile = () => {
    if (!activeLightboxTile) return;
    const currentIndex = GOLDEN_HOUR_TILES.findIndex((t) => t.id === activeLightboxTile.id);
    if (currentIndex >= 0) {
      const prevIndex = (currentIndex - 1 + GOLDEN_HOUR_TILES.length) % GOLDEN_HOUR_TILES.length;
      setActiveLightboxTile(GOLDEN_HOUR_TILES[prevIndex]);
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#1c1814] flex flex-col font-body selection:bg-[#b65c44]/20 selection:text-[#9c4f3a]">
      {/* 3-Zone Navigation Header */}
      <Navbar
        onCheckDateClick={handleCheckDateClick}
        onNavigateSection={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Cinematic Hero Chapter with Background Video & Interactive Beats */}
        <HeroChapter
          onCheckDateClick={handleCheckDateClick}
          onExploreWorkClick={() => scrollToSection('portfolio')}
        />

        {/* 2. Golden Hour Masonry & Bento Showcase */}
        <GoldenHourGallery
          onOpenLightbox={(tile) => setActiveLightboxTile(tile)}
          onExplorePortfolio={() => scrollToSection('portfolio')}
        />

        {/* 3. Studio Philosophy & Milestone Stats */}
        <AboutStudio />

        {/* 4. Signature Portfolio (Weddings, Pre-Wedding, Editorial) */}
        <PortfolioSection
          onOpenLightbox={(tile) => setActiveLightboxTile(tile)}
        />

        {/* 5. Moving Pictures: Cinema Films Showcase */}
        <FilmsSection
          onPlayFilm={(film) => setActiveFilm(film)}
          onCheckDateClick={handleCheckDateClick}
        />

        {/* 6. Editorial Press Marquee Ribbon */}
        <PressMarquee />

        {/* 7. Illuminated Manifesto */}
        <Manifesto />

        {/* 8. Interactive Date Availability & Investment Calculator */}
        <DateAvailabilityCalculator
          onPreFillEnquiry={handlePreFillEnquiry}
        />

        {/* 9. Verified Couple Testimonials & Reviews */}
        <Testimonials />

        {/* 10. Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* 11. Instagram Behind-The-Scenes Feed */}
        <InstagramFeed />

        {/* 12. Journal Essays & Advice */}
        <JournalSection
          onReadArticle={(article) => setActiveArticle(article)}
        />

        {/* 13. Direct Commission Enquiry Form */}
        <EnquiryForm initialData={enquiryInitialData} />
      </main>

      {/* Footer */}
      <Footer
        onNavigateSection={scrollToSection}
        onCheckDateClick={handleCheckDateClick}
      />

      {/* Interactive Modals */}
      <LightboxModal
        tile={activeLightboxTile}
        onClose={() => setActiveLightboxTile(null)}
        onNext={handleNextTile}
        onPrev={handlePrevTile}
      />

      <FilmModal
        film={activeFilm}
        onClose={() => setActiveFilm(null)}
        onBookFilm={() => {
          if (activeFilm) {
            setEnquiryInitialData({
              service: 'Films only',
              packageTier: activeFilm.title,
            });
          }
          scrollToSection('inquire');
        }}
      />

      <JournalModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />
    </div>
  );
}
