"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ARTICLES = [
  {
    slug: "/blog/dosham",
    titleEn: "Horoscope Doshams in Kalyanawaran Matrimony",
    titleTa: "தமிழ் திருமணங்களில் ஜாதக தோஷங்கள் மற்றும் பரிகாரங்கள்",
    excerptEn:
      "Learn about Sevvai, Rahu-Ketu, Kalathira, Mangalya, Pithru, and Surya dosham — what they mean for your horoscope match and how to find remedies (pariharams) in Vedic astrology.",
    excerptTa:
      "செவ்வாய், ராகு-கேது, களத்திர, மாங்கல்ய, பித்ரு மற்றும் சூரிய தோஷம் பற்றிய முழு விபரம் — திருமணப் பொருத்தம் மற்றும் சோதிட பரிகாரங்கள்.",
    tagsEn: ["Astrology", "Horoscope", "Dosham", "Tamil"],
    tagsTa: ["சோதிடம்", "ஜாதகம்", "தோஷம்", "தமிழ்"],
    readTimeEn: "8 min read",
    readTimeTa: "8 நிமிட வாசிப்பு",
    publishedDateEn: "January 2026",
    publishedDateTa: "ஜனவரி 2026",
  },
  {
    slug: "/blog/nakshatra-rashi-list",
    titleEn: "Nakshatra Rashi List",
    titleTa: "நட்சத்திர மற்றும் ராசி அட்டவணை",
    excerptEn:
      "Find your Rashi (Zodiac Sign) based on your birth Nakshatra (Star). Complete reference guide for all 27 Nakshatras and 12 Rashis.",
    excerptTa:
      "உங்கள் பிறப்பு நட்சத்திரத்தின் அடிப்படையில் ராசியைக் கண்டறியுங்கள். 27 நட்சத்திரங்கள் மற்றும் 12 ராசிகளுக்கான முழுமையான குறிப்பு வழிகாட்டி.",
    tagsEn: ["Nakshatra", "Rashi", "Astrology"],
    tagsTa: ["நட்சத்திரம்", "ராசி", "சோதிடம்"],
    readTimeEn: "5 min read",
    readTimeTa: "5 நிமிட வாசிப்பு",
    publishedDateEn: "February 2026",
    publishedDateTa: "பிப்ரவரி 2026",
  },
  {
    slug: "/blog/gotralu",
    titleEn: "Arya Vysya Gotralu",
    titleTa: "ஆரிய வைசிய கோத்திரங்கள்",
    excerptEn:
      "Complete guide to the 102 Rishi lineages of the Arya Vysya community. Find gotram, sanketha namam, rishi, gothra slokam, and cultural practices.",
    excerptTa:
      "ஆரிய வைசிய சமூகத்தின் 102 ரிஷி கோத்திரங்களின் முழு விவரங்கள். கோத்திரம், சங்கேத நாமம், ரிஷி, கோத்திர ஸ்லோகம் மற்றும் பழக்கவழக்கங்கள்.",
    tagsEn: ["Gotra", "Arya Vysya", "Rishi", "Lineage"],
    tagsTa: ["கோத்திரம்", "ஆரிய வைசியர்", "ரிஷி", "வழிமரபு"],
    readTimeEn: "15 min read",
    readTimeTa: "15 நிமிட வாசிப்பு",
    publishedDateEn: "March 2026",
    publishedDateTa: "மார்ச் 2026",
  },
];

export default function Home() {
  const [lang, setLang] = useState<"en" | "ta">("en");
  const isTamil = lang === "ta";

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-[#f4f7fc] to-[#eef3fd] font-sans antialiased text-gray-900">
      <Header lang={lang} setLang={setLang} />

      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Page Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-blue-100/80 px-4 py-1.5 text-xs font-bold text-[#037afb] mb-4">
            {isTamil ? "கல்யாணவரன் வலைப்பதிவு" : "Kalyanawaran Blog"}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a1a2e] tracking-tight leading-tight mb-4">
            {isTamil ? "திருமணம் & சோதிட வலைப்பதிவு" : "Matrimony & Astrology Blog"}
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed">
            {isTamil
              ? "தமிழ் சோதிடம், ஜாதகப் பொருத்தம், தோஷ நிவர்த்தி பரிகாரங்கள் மற்றும் திருமண வழிகாட்டுதல்கள் — கல்யாணவரன் குழுவினரால் தொகுக்கப்பட்டது."
              : "Insights on Tamil astrology, horoscope matching, dosham remedies, and matrimonial guidance — curated by the Kalyanawaran team."}
          </p>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <article
              key={article.slug}
              className="flex flex-col justify-between bg-white/85 backdrop-blur-md rounded-2xl border border-blue-100/50 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {(isTamil ? article.tagsTa : article.tagsEn).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-[#037afb] border border-blue-100/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-lg sm:text-xl font-bold text-[#1a1a2e] leading-snug mb-3 group-hover:text-[#037afb] transition-colors">
                  {isTamil ? article.titleTa : article.titleEn}
                </h2>

                {/* Excerpt */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {isTamil ? article.excerptTa : article.excerptEn}
                </p>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-blue-50">
                <span className="text-xs text-gray-500">
                  {isTamil ? article.publishedDateTa : article.publishedDateEn} ·{" "}
                  {isTamil ? article.readTimeTa : article.readTimeEn}
                </span>
                <a
                  href={`${article.slug}?lang=${lang}`}
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#037afb] to-[#0250c5] px-4 py-2 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:from-[#0250c5] hover:to-[#013a8f] transition-all cursor-pointer"
                >
                  {isTamil ? "வாசிக்க →" : "Read Article →"}
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
