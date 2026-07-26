"use client";

import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import gotraluData from "../../data/arya_vysya_gotralu.json";

// Inline Icons from GotraluIcons
const RishiIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const NamamIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const MeditatingPlaceIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3M12 8v8M8 12h8" />
  </svg>
);

const WaterPoolIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const OfferingsIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const LordIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const CouplesIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const DontsIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
  </svg>
);

const SlokamIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

interface FieldProps {
  Icon: React.ComponentType;
  label: string;
  value: string | string[];
}

function FieldWithIcon({ Icon, label, value }: FieldProps) {
  if (!value || (Array.isArray(value) && value.length === 0) || value === "—") {
    return null;
  }
  const displayValue = Array.isArray(value) ? value.join(", ") : value;
  return (
    <div className="flex items-start gap-2.5 mt-2">
      <div className="text-[#9B0B00] shrink-0 mt-0.5">
        <Icon />
      </div>
      <div className="text-sm text-gray-600 leading-normal">
        <strong className="text-[#9B0B00] font-semibold">{label}:</strong> {displayValue}
      </div>
    </div>
  );
}

export default function GotraluPage() {
  const [lang, setLang] = useState<"en" | "ta">("en");
  const [searchQuery, setSearchQuery] = useState("");
  const isTamil = lang === "ta";

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");
    if (urlLang === "ta" || urlLang === "en") {
      setLang(urlLang);
    }
  }, []);

  const filteredGotras = gotraluData.gotras.filter((item) => {
    const query = searchQuery.toLowerCase();
    const matchesGotram = item.gotram.toLowerCase().includes(query);
    const matchesRishi = item.rishi.toLowerCase().includes(query);
    const matchesNamam = item.sanketha_namam.some((namam) =>
      namam.toLowerCase().includes(query)
    );
    return matchesGotram || matchesRishi || matchesNamam;
  });

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 font-sans antialiased text-[#4A0602]">
      <Header lang={lang} setLang={setLang} />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#9B0B00] to-[#6b0700] text-[#FFEAA7] py-16 px-4 text-center shadow-md">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            {isTamil ? "ஆரிய வைசிய கோத்திரங்கள்" : "Arya Vysya Gotralu"}
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg opacity-90 leading-relaxed">
            {isTamil ? "102 ரிஷிகளின் கோத்திர வழிமரபுகள்" : "Lineages of the 102 Rishis"}
          </p>
          <p className="max-w-3xl mx-auto text-xs sm:text-sm opacity-75 mt-4 leading-relaxed">
            {gotraluData.overview.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Search bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder={isTamil ? "கோத்திரம், ரிஷி, அல்லது சங்கேத நாமம் கொண்டு தேடுக..." : "Search by gotram, rishi, or sanketha namam..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-[#f4c5b1] bg-white px-5 py-3.5 pl-12 text-sm text-gray-800 focus:border-[#9B0B00] focus:ring-1 focus:ring-[#9B0B00] outline-none shadow-sm transition-all"
            />
            <div className="absolute left-4 top-4 text-gray-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Gotra Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGotras.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#f4c5b1] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-[#9B0B00] border-b border-gray-100 pb-2 mb-3">
                  {index + 1}. {item.gotram}
                </h3>

                <div className="space-y-1">
                  <FieldWithIcon Icon={RishiIcon} label="Rishi" value={item.rishi} />
                  <FieldWithIcon Icon={NamamIcon} label="Sanketha Namam" value={item.sanketha_namam} />
                  <FieldWithIcon Icon={MeditatingPlaceIcon} label="Meditating Place" value={item.meditating_place} />
                  <FieldWithIcon Icon={WaterPoolIcon} label="Water Pool" value={item.water_pool} />
                  <FieldWithIcon Icon={LordIcon} label="Favourite Lord" value={item.favourite_lord} />
                  <FieldWithIcon Icon={OfferingsIcon} label="Offerings (Daan)" value={item.offerings_daan} />
                  <FieldWithIcon Icon={CouplesIcon} label="Agni Pravesha Couples" value={item.agni_pravesha_couples} />
                  <FieldWithIcon Icon={DontsIcon} label="Don'ts" value={item.donts} />
                </div>
              </div>

              {item.gothra_slokam && (
                <div className="mt-5 p-4 bg-[#fff4f0] rounded-xl flex items-start gap-2.5">
                  <div className="text-[#9B0B00] shrink-0 mt-0.5">
                    <SlokamIcon />
                  </div>
                  <div className="text-xs text-gray-600 italic">
                    <strong className="text-[#9B0B00] not-italic block mb-0.5">Gothra Slokam:</strong>
                    {item.gothra_slokam}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredGotras.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              {isTamil ? "கோத்திரங்கள் எதுவும் கண்டறியப்படவில்லை." : "No gotras found matching your query."}
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
