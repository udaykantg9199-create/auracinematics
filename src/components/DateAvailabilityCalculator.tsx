import React, { useState } from 'react';
import { Calendar, MapPin, Sparkles, Check, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { PACKAGE_TIERS } from '../data/weddingData';

interface DateAvailabilityCalculatorProps {
  onPreFillEnquiry: (details: {
    date: string;
    location: string;
    service: string;
    packageTier?: string;
  }) => void;
}

export const DateAvailabilityCalculator: React.FC<DateAvailabilityCalculatorProps> = ({
  onPreFillEnquiry,
}) => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('Jaipur & Udaipur (Palatial)');
  const [selectedDuration, setSelectedDuration] = useState<string>('3-day');
  const [selectedService, setSelectedService] = useState<string>('Photography + Films');

  // Calculate estimated price based on configuration
  const calculateEstimate = () => {
    let base = 275000;
    if (selectedService === 'Photography + Films') base = 485000;
    if (selectedService === 'Films only') base = 320000;
    if (selectedService === 'Photography only') base = 250000;

    if (selectedDuration === '1-day') base *= 0.65;
    if (selectedDuration === '2-day') base *= 0.85;
    if (selectedDuration === '3-day') base *= 1.0;
    if (selectedDuration === '4-day+') base *= 1.35;

    if (selectedLocation.includes('International')) base *= 1.25;

    return Math.round(base / 5000) * 5000;
  };

  const estimateVal = calculateEstimate();
  const formattedEstimate = `₹${estimateVal.toLocaleString('en-IN')}`;

  const handleApplyToForm = (packageName?: string) => {
    onPreFillEnquiry({
      date: selectedDate,
      location: selectedLocation,
      service: selectedService,
      packageTier: packageName,
    });
  };

  return (
    <section id="calculator" className="bg-[#fdfbf7] text-[#1c1814] py-24 sm:py-32 px-5 sm:px-10 md:px-14 border-b border-[#1c1814]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <p className="font-label text-xs uppercase tracking-[0.28em] text-[#b65c44] mb-3">
            Investment &amp; Schedule
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.06] tracking-tight">
            Check your date &amp; estimate <em className="italic font-serif text-[#b65c44]">coverage</em>.
          </h2>
          <p className="font-body text-[#786c5e] text-base sm:text-lg mt-4 leading-relaxed">
            Select your celebration parameters below to check studio availability and preview
            investment estimates instantly.
          </p>
        </div>

        {/* Interactive Estimator Calculator Tool Card */}
        <div className="bg-[#f6ece9]/60 border border-[#1c1814]/12 rounded-3xl p-6 sm:p-10 md:p-12 mb-20 shadow-sm max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Input Selectors */}
            <div className="space-y-6">
              {/* Date Input */}
              <div>
                <label className="block text-xs font-label uppercase tracking-widest text-[#786c5e] mb-2 font-medium">
                  1. Wedding Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={selectedDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-[#fdfbf7] border border-[#1c1814]/15 rounded-xl px-4 py-3 text-sm font-body text-[#1c1814] focus:outline-none focus:border-[#b65c44] transition-colors"
                  />
                </div>
              </div>

              {/* Destination Selector */}
              <div>
                <label className="block text-xs font-label uppercase tracking-widest text-[#786c5e] mb-2 font-medium">
                  2. Destination / Region
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full bg-[#fdfbf7] border border-[#1c1814]/15 rounded-xl px-4 py-3 text-sm font-body text-[#1c1814] focus:outline-none focus:border-[#b65c44] transition-colors"
                >
                  <option value="Chandigarh & Punjab">Chandigarh &amp; Punjab (Home Studio)</option>
                  <option value="Delhi NCR">Delhi NCR &amp; Surrounding Venues</option>
                  <option value="Jaipur & Udaipur (Palatial)">Rajasthan Palaces (Jaipur, Udaipur, Jodhpur)</option>
                  <option value="Goa & Coastal">Goa &amp; Coastal Resorts</option>
                  <option value="Mumbai & Maharashtra">Mumbai &amp; Maharashtra</option>
                  <option value="International (Italy, Bali, UK, UAE)">International Destination (Italy, Bali, UK, UAE)</option>
                </select>
              </div>

              {/* Coverage Duration */}
              <div>
                <label className="block text-xs font-label uppercase tracking-widest text-[#786c5e] mb-2 font-medium">
                  3. Celebration Duration
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { id: '1-day', label: '1 Day' },
                    { id: '2-day', label: '2 Days' },
                    { id: '3-day', label: '3 Days' },
                    { id: '4-day+', label: '4+ Days' },
                  ].map((dur) => (
                    <button
                      key={dur.id}
                      type="button"
                      onClick={() => setSelectedDuration(dur.id)}
                      className={`py-2 text-xs font-label rounded-lg border transition-all text-center ${
                        selectedDuration === dur.id
                          ? 'bg-[#b65c44] text-white border-[#b65c44] font-semibold'
                          : 'bg-[#fdfbf7] border-[#1c1814]/15 text-[#1c1814] hover:border-[#b65c44]'
                      }`}
                    >
                      {dur.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Bundle */}
              <div>
                <label className="block text-xs font-label uppercase tracking-widest text-[#786c5e] mb-2 font-medium">
                  4. Scope Needed
                </label>
                <div className="flex flex-col gap-2">
                  {[
                    { id: 'Photography + Films', label: 'Complete Combo (Stills + Cinema Films)' },
                    { id: 'Photography only', label: 'Fine Art Photography Stills Only' },
                    { id: 'Films only', label: 'Cinematic Films & Aerial Video Only' },
                  ].map((srv) => (
                    <label
                      key={srv.id}
                      className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                        selectedService === srv.id
                          ? 'bg-[#fdfbf7] border-[#b65c44] shadow-xs'
                          : 'bg-white/60 border-[#1c1814]/10 hover:border-[#1c1814]/30'
                      }`}
                    >
                      <input
                        type="radio"
                        name="service"
                        checked={selectedService === srv.id}
                        onChange={() => setSelectedService(srv.id)}
                        className="accent-[#b65c44]"
                      />
                      <span className="text-xs font-body text-[#1c1814]">{srv.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Calculation Output Card */}
            <div className="bg-[#fdfbf7] border border-[#1c1814]/12 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full shadow-md">
              <div>
                <div className="flex items-center justify-between border-b border-[#1c1814]/10 pb-4 mb-4">
                  <span className="font-label text-xs uppercase tracking-widest text-[#786c5e]">
                    Estimated Investment
                  </span>
                  <span className="bg-[#e8d0a5]/60 text-[#783726] text-[10px] font-label uppercase tracking-wider px-2.5 py-1 rounded-full font-semibold">
                    Custom Studio Grade
                  </span>
                </div>

                <div className="font-heading text-4xl sm:text-5xl font-semibold text-[#1c1814] tracking-tight tabular-nums">
                  {formattedEstimate}
                </div>
                <div className="text-xs text-[#786c5e] font-body mt-1">
                  Approx. $
                  {Math.round(estimateVal / 83.5).toLocaleString('en-US')}{' '}
                  USD · Applicable taxes &amp; crew travel included transparently.
                </div>

                <div className="mt-6 pt-5 border-t border-[#1c1814]/10 space-y-2.5">
                  <div className="text-xs font-label uppercase tracking-wider text-[#1c1814] font-semibold mb-2">
                    Included with this configuration:
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#5d5d5d]">
                    <Check className="w-3.5 h-3.5 text-[#b65c44] shrink-0 mt-0.5" />
                    <span>Dedicated Senior Candid Master + Lighting Team</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#5d5d5d]">
                    <Check className="w-3.5 h-3.5 text-[#b65c44] shrink-0 mt-0.5" />
                    <span>4K Cinema Sensors + 60-Second Social Teaser within 7 days</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#5d5d5d]">
                    <Check className="w-3.5 h-3.5 text-[#b65c44] shrink-0 mt-0.5" />
                    <span>Hand-bound Italian archival leather heirloom album</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#5d5d5d]">
                    <Check className="w-3.5 h-3.5 text-[#b65c44] shrink-0 mt-0.5" />
                    <span>Lifetime private online gallery with uncompressed downloads</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  type="button"
                  onClick={() => handleApplyToForm()}
                  className="w-full bg-[#b65c44] hover:bg-[#9c4f3a] text-white py-3.5 rounded-full text-xs font-label uppercase tracking-widest font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
                >
                  Reserve / Lock This Date
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-center text-[#786c5e] mt-2">
                  No commitment required. Opens consultation with our studio director.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Package Tier Cards for Fixed Offerings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PACKAGE_TIERS.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between border transition-all duration-300 ${
                pkg.popular
                  ? 'bg-[#fdfbf7] border-[#b65c44] shadow-xl relative'
                  : 'bg-[#f6ece9]/30 border-[#1c1814]/10 shadow-sm hover:border-[#1c1814]/20'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#b65c44] text-white text-[10px] font-label uppercase tracking-widest px-4 py-1 rounded-full font-semibold shadow">
                  Most Requested
                </div>
              )}

              <div>
                <h3 className="font-heading text-2xl font-semibold text-[#1c1814] mb-1">
                  {pkg.name}
                </h3>
                <p className="font-body text-xs text-[#786c5e] mb-4 min-h-[34px]">
                  {pkg.idealFor}
                </p>

                <div className="font-heading text-3xl font-semibold text-[#b65c44] mb-6 tabular-nums">
                  {pkg.priceEstimate}
                </div>

                <ul className="space-y-3 text-xs text-[#5d5d5d] border-t border-[#1c1814]/10 pt-5">
                  {pkg.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-3.5 h-3.5 text-[#b65c44] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <button
                  type="button"
                  onClick={() => handleApplyToForm(pkg.name)}
                  className={`w-full py-3 rounded-full text-xs font-label uppercase tracking-widest font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-[#b65c44] text-white hover:bg-[#9c4f3a]'
                      : 'border border-[#1c1814]/20 text-[#1c1814] hover:bg-[#f6ece9]'
                  }`}
                >
                  Choose {pkg.name.split(' ')[1] || 'Package'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
