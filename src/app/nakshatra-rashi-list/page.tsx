"use client";

import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const NAKSHATRA_RASHI_LIST = [
  { nakshatra: "Ashwini", rashi: "Mesham (Aries)" },
  { nakshatra: "Bharani", rashi: "Mesham (Aries)" },
  { nakshatra: "Krittika (1st Pada)", rashi: "Mesham (Aries)" },
  { nakshatra: "Krittika (2, 3, 4 Padas)", rashi: "Rishabam (Taurus)" },
  { nakshatra: "Rohini", rashi: "Rishabam (Taurus)" },
  { nakshatra: "Mrigashirsha (1, 2 Padas)", rashi: "Rishabam (Taurus)" },
  { nakshatra: "Mrigashirsha (3, 4 Padas)", rashi: "Mithunam (Gemini)" },
  { nakshatra: "Ardra", rashi: "Mithunam (Gemini)" },
  { nakshatra: "Punarvasu (1, 2, 3 Padas)", rashi: "Mithunam (Gemini)" },
  { nakshatra: "Punarvasu (4th Pada)", rashi: "Katakam (Cancer)" },
  { nakshatra: "Pushya", rashi: "Katakam (Cancer)" },
  { nakshatra: "Ashlesha", rashi: "Katakam (Cancer)" },
  { nakshatra: "Magha", rashi: "Simham (Leo)" },
  { nakshatra: "Purva Phalguni", rashi: "Simham (Leo)" },
  { nakshatra: "Uttara Phalguni (1st Pada)", rashi: "Simham (Leo)" },
  { nakshatra: "Uttara Phalguni (2, 3, 4 Padas)", rashi: "Kanya (Virgo)" },
  { nakshatra: "Hasta", rashi: "Kanya (Virgo)" },
  { nakshatra: "Chitra (1, 2 Padas)", rashi: "Kanya (Virgo)" },
  { nakshatra: "Chitra (3, 4 Padas)", rashi: "Tula (Libra)" },
  { nakshatra: "Swati", rashi: "Tula (Libra)" },
  { nakshatra: "Vishakha (1, 2, 3 Padas)", rashi: "Tula (Libra)" },
  { nakshatra: "Vishakha (4th Pada)", rashi: "Vrishchika (Scorpio)" },
  { nakshatra: "Anuradha", rashi: "Vrishchika (Scorpio)" },
  { nakshatra: "Jyeshtha", rashi: "Vrishchika (Scorpio)" },
  { nakshatra: "Mula", rashi: "Dhanu (Sagittarius)" },
  { nakshatra: "Purva Ashadha", rashi: "Dhanu (Sagittarius)" },
  { nakshatra: "Uttara Ashadha (1st Pada)", rashi: "Dhanu (Sagittarius)" },
  { nakshatra: "Uttara Ashadha (2, 3, 4 Padas)", rashi: "Makara (Capricorn)" },
  { nakshatra: "Shravana", rashi: "Makara (Capricorn)" },
  { nakshatra: "Dhanishta (1, 2 Padas)", rashi: "Makara (Capricorn)" },
  { nakshatra: "Dhanishta (3, 4 Padas)", rashi: "Kumbha (Aquarius)" },
  { nakshatra: "Shatabhisha", rashi: "Kumbha (Aquarius)" },
  { nakshatra: "Purva Bhadrapada (1, 2, 3 Padas)", rashi: "Kumbha (Aquarius)" },
  { nakshatra: "Purva Bhadrapada (4th Pada)", rashi: "Meena (Pisces)" },
  { nakshatra: "Uttara Bhadrapada", rashi: "Meena (Pisces)" },
  { nakshatra: "Revati", rashi: "Meena (Pisces)" },
];

const RASHI_COLORS: Record<string, string> = {
  "Mesham (Aries)": "bg-[#FFEBEE] hover:bg-[#FFCDD2]",
  "Rishabam (Taurus)": "bg-[#E8F5E9] hover:bg-[#C8E6C9]",
  "Mithunam (Gemini)": "bg-[#E3F2FD] hover:bg-[#BBDEFB]",
  "Katakam (Cancer)": "bg-[#FFF3E0] hover:bg-[#FFE0B2]",
  "Simham (Leo)": "bg-[#F3E5F5] hover:bg-[#E1BEE7]",
  "Kanya (Virgo)": "bg-[#FFF8E1] hover:bg-[#FFECB3]",
  "Tula (Libra)": "bg-[#E0F7FA] hover:bg-[#B2EBF2]",
  "Vrishchika (Scorpio)": "bg-[#FCE4EC] hover:bg-[#F8BBD0]",
  "Dhanu (Sagittarius)": "bg-[#F1F8E9] hover:bg-[#DCEDC8]",
  "Makara (Capricorn)": "bg-[#ECEFF1] hover:bg-[#CFD8DC]",
  "Kumbha (Aquarius)": "bg-[#E0F2F1] hover:bg-[#B2DFDB]",
  "Meena (Pisces)": "bg-[#F9FBE7] hover:bg-[#F0F4C3]",
};

export default function NakshatraRashiPage() {
  const [lang, setLang] = useState<"en" | "ta">("en");
  const isTamil = lang === "ta";

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");
    if (urlLang === "ta" || urlLang === "en") {
      setLang(urlLang);
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 font-sans antialiased text-gray-900">
      <Header lang={lang} setLang={setLang} />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 px-4 text-center shadow-md">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            {isTamil ? "நட்சத்திர மற்றும் ராசி அட்டவணை" : "Nakshatra Rashi List"}
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg opacity-90 leading-relaxed">
            {isTamil
              ? "உங்கள் பிறப்பு நட்சத்திரத்தின் அடிப்படையில் ராசியை எளிதாகக் கண்டறியுங்கள்."
              : "Find your Rashi (Zodiac Sign) based on your birth Nakshatra (Star) easily."}
          </p>
        </div>
      </section>

      {/* Table Container */}
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-6 sm:p-10">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="px-6 py-4 text-sm sm:text-base font-bold text-gray-700">
                    {isTamil ? "நட்சத்திரம் (Nakshatra)" : "Nakshatra"}
                  </th>
                  <th className="px-6 py-4 text-sm sm:text-base font-bold text-gray-700">
                    {isTamil ? "ராசி (Rashi)" : "Rashi"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {NAKSHATRA_RASHI_LIST.map((row, index) => {
                  const rashiColorClass = RASHI_COLORS[row.rashi] || "bg-white hover:bg-gray-50";
                  return (
                    <tr
                      key={index}
                      className={`transition-colors duration-150 ${rashiColorClass}`}
                    >
                      <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                        {row.nakshatra}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                        {row.rashi}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
