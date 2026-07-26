"use client";

import React, { useEffect } from "react";

interface HeaderProps {
  lang: "en" | "ta";
  setLang: (lang: "en" | "ta") => void;
}

export default function Header({ lang, setLang }: HeaderProps) {
  useEffect(() => {
    // Check url params first
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");
    if (urlLang === "ta" || urlLang === "en") {
      setLang(urlLang);
      localStorage.setItem("i18nextLng", urlLang);
    } else {
      // Check localStorage
      const stored = localStorage.getItem("i18nextLng");
      if (stored === "ta" || stored === "en") {
        setLang(stored);
      }
    }
  }, [setLang]);

  const toggleLanguage = () => {
    const nextLang = lang === "en" ? "ta" : "en";
    setLang(nextLang);
    localStorage.setItem("i18nextLng", nextLang);
    // Update URL param without reloading
    const url = new URL(window.location.href);
    url.searchParams.set("lang", nextLang);
    window.history.pushState({}, "", url.toString());
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-[#f4f7fc]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <a href="https://www.kalyanawaran.com" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/dc3dylylv/image/upload/q_auto,f_auto/v1670433144/Logos/Kalyanawaran/Finalized_Logo_Kalyawaran_-_1725_x_353_guysdv.png"
              alt="Kalyanawaran Logo"
              className="h-8 w-auto sm:h-10"
            />
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-700">
            <a href="/blog" className="hover:text-[#037afb] transition-colors">
              Blog Home
            </a>
            <a
              href="/blog/dosham"
              className="hover:text-[#037afb] transition-colors"
            >
              Horoscope Doshams
            </a>
            <a
              href="/blog/nakshatra-rashi-list"
              className="hover:text-[#037afb] transition-colors"
            >
              Nakshatra & Rashi
            </a>
            <a
              href="/blog/gotralu"
              className="hover:text-[#037afb] transition-colors"
            >
              Gotralu
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-1.5 text-xs font-bold text-gray-700 shadow-sm hover:bg-gray-50 transition-all cursor-pointer"
          >
            🌐 {lang === "en" ? "தமிழ்" : "English"}
          </button>
          <a
            href="https://www.kalyanawaran.com/register"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#037afb] to-[#0250c5] px-5 py-2 text-sm font-semibold text-white shadow-md hover:from-[#0250c5] hover:to-[#013a8f] transition-all"
          >
            Register Free
          </a>
        </div>
      </div>
    </header>
  );
}
