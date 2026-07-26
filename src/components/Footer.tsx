import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#CFD1E6] py-12 text-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Logo & Contact details */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/dc3dylylv/image/upload/q_auto,f_auto/v1670433144/Logos/Kalyanawaran/Finalized_Logo_Kalyawaran_-_1725_x_353_guysdv.png"
              alt="Kalyanawaran Logo"
              className="h-8 w-auto mb-4"
            />
            <div className="text-sm space-y-1">
              <p>
                <a
                  href="mailto:info@kalyanawaran.com"
                  className="hover:underline hover:text-[#037afb]"
                >
                  info@kalyanawaran.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+919842393234"
                  className="hover:underline hover:text-[#037afb]"
                >
                  +91 98423 93234
                </a>
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-base font-bold text-gray-900 mb-4">
              Our Guidelines
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <a
                  href="https://www.kalyanawaran.com/terms"
                  className="hover:text-[#037afb]"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="https://www.kalyanawaran.com/privacy-policy"
                  className="hover:text-[#037afb]"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/blog/gotralu" className="hover:text-[#037afb]">
                  Gotralu
                </a>
              </li>
              <li>
                <a
                  href="/blog/nakshatra-rashi-list"
                  className="hover:text-[#037afb]"
                >
                  Nakshatra & Rashi List
                </a>
              </li>
              <li>
                <a
                  href="https://www.kalyanawaran.com/social-groups"
                  className="hover:text-[#037afb]"
                >
                  Social Groups
                </a>
              </li>
              <li>
                <a
                  href="https://www.kalyanawaran.com/age-difference-calculator"
                  className="hover:text-[#037afb]"
                >
                  Age Difference Calculator
                </a>
              </li>
              <li>
                <a
                  href="https://www.kalyanawaran.com/age-calculator"
                  className="hover:text-[#037afb]"
                >
                  Age Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-base font-bold text-gray-900 mb-4">
              Our Address
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              515, Sallivan Street,
              <br />
              Coimbatore - 641 001.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-[#b8bacf] pt-6 text-center text-xs text-gray-600">
          <p>
            © {new Date().getFullYear()}{" "}
            <a
              href="https://www.kalyanawaran.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-800 hover:underline"
            >
              Kalyanawaran
            </a>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
