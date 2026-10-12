import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

interface EnquiryFormProps {
  initialData?: {
    date?: string;
    location?: string;
    service?: string;
    packageTier?: string;
  };
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    wedding_date: initialData?.date || '',
    location: initialData?.location || '',
    service: initialData?.service || 'Photography + Films',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // Sync initialData if updated from calculator
  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        wedding_date: initialData.date || prev.wedding_date,
        location: initialData.location || prev.location,
        service: initialData.service || prev.service,
        message: initialData.packageTier
          ? `Inquiring about ${initialData.packageTier}. ` + prev.message
          : prev.message,
      }));
    }
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate a reference ID
    const ref = 'AF-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(ref);
    setSubmitted(true);
  };

  return (
    <section id="inquire" className="bg-[#fdfbf7] text-[#1c1814] py-24 sm:py-32 px-5 sm:px-10 md:px-14">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="font-label text-xs uppercase tracking-[0.28em] text-[#b65c44] mb-3">
            Enquire
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.06] tracking-tight">
            Tell us about your <em className="italic font-serif text-[#b65c44]">day</em>.
          </h2>
          <p className="font-body text-[#786c5e] text-base sm:text-lg mt-4 leading-relaxed">
            Share your dates and a little about your celebration. We reply within 48 hours with
            availability, an approach, and a considered quote.
          </p>
        </div>

        {/* Form and Contact Aside Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-8 bg-[#fdfbf7]">
            {submitted ? (
              <div className="bg-[#f6ece9]/80 border border-[#b65c44]/30 rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#b65c44]/15 text-[#b65c44] flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="font-heading text-3xl sm:text-4xl font-semibold text-[#1c1814] mb-2">
                  Thank You, {formData.name || 'Friend'}!
                </h3>
                <p className="font-body text-[#786c5e] max-w-md mx-auto mb-4 leading-relaxed">
                  We have received your celebration details. Our studio director Sunny will review our calendar
                  and email you a customized approach within 48 hours.
                </p>
                <div className="inline-block bg-white border border-[#1c1814]/15 px-4 py-2 rounded-xl text-xs font-mono text-[#1c1814] mb-6">
                  Reference: <span className="font-bold text-[#b65c44]">{referenceId}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-label uppercase tracking-widest text-[#b65c44] underline font-semibold hover:text-[#9c4f3a]"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  {/* Your Names */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="f-name" className="font-label text-xs uppercase tracking-widest text-[#786c5e] font-medium">
                      Your Names *
                    </label>
                    <input
                      id="f-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Amrita & Viraj"
                      className="bg-[#fdfbf7] border border-[#1c1814]/15 focus:border-[#b65c44] focus:ring-2 focus:ring-[#b65c44]/15 rounded-xl px-4 py-3 text-sm text-[#1c1814] font-body outline-none transition-all placeholder:text-[#ababab]"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="f-email" className="font-label text-xs uppercase tracking-widest text-[#786c5e] font-medium">
                      Email Address *
                    </label>
                    <input
                      id="f-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      className="bg-[#fdfbf7] border border-[#1c1814]/15 focus:border-[#b65c44] focus:ring-2 focus:ring-[#b65c44]/15 rounded-xl px-4 py-3 text-sm text-[#1c1814] font-body outline-none transition-all placeholder:text-[#ababab]"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="f-phone" className="font-label text-xs uppercase tracking-widest text-[#786c5e] font-medium">
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="f-phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="bg-[#fdfbf7] border border-[#1c1814]/15 focus:border-[#b65c44] focus:ring-2 focus:ring-[#b65c44]/15 rounded-xl px-4 py-3 text-sm text-[#1c1814] font-body outline-none transition-all placeholder:text-[#ababab]"
                    />
                  </div>

                  {/* Wedding Date */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="f-date" className="font-label text-xs uppercase tracking-widest text-[#786c5e] font-medium">
                      Wedding Date *
                    </label>
                    <input
                      id="f-date"
                      name="wedding_date"
                      type="date"
                      required
                      value={formData.wedding_date}
                      onChange={handleChange}
                      className="bg-[#fdfbf7] border border-[#1c1814]/15 focus:border-[#b65c44] focus:ring-2 focus:ring-[#b65c44]/15 rounded-xl px-4 py-3 text-sm text-[#1c1814] font-body outline-none transition-all"
                    />
                  </div>

                  {/* Venue / City */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="f-location" className="font-label text-xs uppercase tracking-widest text-[#786c5e] font-medium">
                      Venue / City / Destination *
                    </label>
                    <input
                      id="f-location"
                      name="location"
                      type="text"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Udaipur, Lake Pichola"
                      className="bg-[#fdfbf7] border border-[#1c1814]/15 focus:border-[#b65c44] focus:ring-2 focus:ring-[#b65c44]/15 rounded-xl px-4 py-3 text-sm text-[#1c1814] font-body outline-none transition-all placeholder:text-[#ababab]"
                    />
                  </div>

                  {/* Scope / Service */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="f-service" className="font-label text-xs uppercase tracking-widest text-[#786c5e] font-medium">
                      What do you need?
                    </label>
                    <select
                      id="f-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="bg-[#fdfbf7] border border-[#1c1814]/15 focus:border-[#b65c44] focus:ring-2 focus:ring-[#b65c44]/15 rounded-xl px-4 py-3 text-sm text-[#1c1814] font-body outline-none transition-all"
                    >
                      <option value="Photography + Films">Photography + Films Combo</option>
                      <option value="Photography only">Photography Stills only</option>
                      <option value="Films only">Cinematic Wedding Films only</option>
                      <option value="Not sure yet">Not sure yet / Need guidance</option>
                    </select>
                  </div>
                </div>

                {/* About your day Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="f-message" className="font-label text-xs uppercase tracking-widest text-[#786c5e] font-medium">
                    About Your Day *
                  </label>
                  <textarea
                    id="f-message"
                    name="message"
                    rows={4}
                    required
                    maxLength={500}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Events, estimated guest count, the atmosphere you envision, how you met, or anything that helps us picture your story."
                    className="bg-[#fdfbf7] border border-[#1c1814]/15 focus:border-[#b65c44] focus:ring-2 focus:ring-[#b65c44]/15 rounded-xl px-4 py-3 text-sm text-[#1c1814] font-body outline-none transition-all placeholder:text-[#ababab] resize-none"
                  />
                  <span className="text-[11px] text-[#786c5e] self-end">
                    {formData.message.length}/500 characters
                  </span>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#b65c44] hover:bg-[#9c4f3a] text-white px-9 py-4 rounded-full text-xs font-label uppercase tracking-widest font-semibold shadow-lg hover:shadow-xl transition-all active:scale-[0.98] cursor-pointer"
                  >
                    Send Enquiry
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Aside Cards */}
          <aside className="lg:col-span-4 flex flex-col gap-6 bg-[#f6ece9]/50 border border-[#1c1814]/10 rounded-2xl p-6 sm:p-8">
            <h3 className="font-heading text-2xl font-semibold text-[#1c1814]">
              Studio Information
            </h3>

            <div className="space-y-6 divide-y divide-[#1c1814]/10 pt-1">
              <div className="flex items-start gap-3.5 pt-3 first:pt-0">
                <Mail className="w-5 h-5 text-[#b65c44] shrink-0 mt-0.5" />
                <div>
                  <div className="font-label text-[10px] tracking-[0.2em] uppercase text-[#786c5e]">
                    Direct Email
                  </div>
                  <a
                    href="mailto:hello@aurafilms.studio"
                    className="text-sm font-body font-medium text-[#1c1814] hover:text-[#b65c44] transition-colors mt-0.5 block"
                  >
                    hello@aurafilms.studio
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4">
                <Phone className="w-5 h-5 text-[#b65c44] shrink-0 mt-0.5" />
                <div>
                  <div className="font-label text-[10px] tracking-[0.2em] uppercase text-[#786c5e]">
                    Call / WhatsApp
                  </div>
                  <a
                    href="tel:+919876543210"
                    className="text-sm font-body font-medium text-[#1c1814] hover:text-[#b65c44] transition-colors mt-0.5 block"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4">
                <MapPin className="w-5 h-5 text-[#b65c44] shrink-0 mt-0.5" />
                <div>
                  <div className="font-label text-[10px] tracking-[0.2em] uppercase text-[#786c5e]">
                    Studio Base
                  </div>
                  <div className="text-sm font-body text-[#1c1814] mt-0.5">
                    Chandigarh, India · Travelling Worldwide
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4">
                <Clock className="w-5 h-5 text-[#b65c44] shrink-0 mt-0.5" />
                <div>
                  <div className="font-label text-[10px] tracking-[0.2em] uppercase text-[#786c5e]">
                    Response Time
                  </div>
                  <div className="text-sm font-body text-[#1c1814] mt-0.5">
                    Within 48 hours, always by a human
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-[#1c1814]/10 text-xs text-[#786c5e] leading-relaxed">
              We respect your privacy. We never share your contact details, nor will we spam you.
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
