import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../data/weddingData';

export const FaqSection: React.FC = () => {
  // First item open by default
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({
    'faq-1': true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faq" className="bg-[#fdfbf7] text-[#1c1814] py-24 sm:py-32 px-5 sm:px-10 md:px-14 border-b border-[#1c1814]/10">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-left mb-12 sm:mb-16">
          <p className="font-label text-xs uppercase tracking-[0.28em] text-[#b65c44] mb-3">
            Good To Know
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.06] tracking-tight">
            Frequently asked <em className="italic font-serif text-[#b65c44]">questions</em>.
          </h2>
          <p className="font-body text-[#786c5e] text-base sm:text-lg mt-3">
            Everything you need to know about our approach, delivery dates, and booking process.
          </p>
        </div>

        {/* Accordion Wrapper */}
        <div className="border-t border-[#1c1814]/12 divide-y divide-[#1c1814]/12">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = !!openItems[faq.id];

            return (
              <div key={faq.id} className="py-5 sm:py-6">
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left gap-4 font-heading text-xl sm:text-2xl font-semibold text-[#1c1814] hover:text-[#b65c44] transition-colors focus:outline-none cursor-pointer group"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <span
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#b65c44] text-white border-[#b65c44]'
                        : 'border-[#1c1814]/20 text-[#b65c44] group-hover:border-[#b65c44]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-3 pb-2 text-sm sm:text-[15px] font-body text-[#786c5e] leading-relaxed max-w-3xl">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
