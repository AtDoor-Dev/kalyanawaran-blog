"use client";

import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const DOSHAS = [
  {
    id: "chevvai",
    titleEn: "1. Sevvai Dosham (செவ்வாய் தோஷம் - Mars Dosham / Manglik)",
    titleTa: "1. செவ்வாய் தோஷம் (Sevvai Dosham / Mars Dosham)",
    descEn: "Occurs when Mars (Chevvai) is placed in the 1st, 2nd, 4th, 7th, 8th, or 12th house from the Ascendant (Lagnam), Moon, or Venus. In Tamil Vedic astrology, this is considered a powerful planetary placement that influences temperament and compatibility.",
    descTa: "ஜாதகத்தில் லக்னம், சந்திரன் அல்லது சுக்கிரனுக்கு 1, 2, 4, 7, 8, அல்லது 12-ம் இடங்களில் செவ்வாய் கிரகம் அமைந்திருந்தால் செவ்வாய் தோஷம் இருப்பதாகக் கருதப்படுகிறது. தமிழ் சோதிட சாஸ்திரத்தில் இது மிகவும் முக்கியமானதாகக் கொள்ளப்படுகிறது.",
    detailsEn: [
      { label: "Marital Impact", text: "Can cause delay in marriage, emotional or temperamental friction between partners, or unexpected obstacles in relationship harmony." },
      { label: "Astrological Exemptions", text: "If Mars is in its own houses (Aries or Scorpio), exalted (Capricorn), or under the auspicious aspect of Jupiter (Guru), the negative intensity is greatly reduced or cancelled." },
      { label: "Recommended Remedies (Pariharams)", text: "Fast on Tuesdays, worship Lord Muruga (the presiding deity of Mars), visit Vaithiswaran Koil near Sirkazhi (famous Mars parihara temple), or match with a partner who also has Sevvai Dosham." }
    ],
    detailsTa: [
      { label: "திருமண பாதிப்பு", text: "திருமண தாமதம், தம்பதிகளுக்குள் தேவையற்ற கருத்து வேறுபாடுகள் அல்லது உறவுகளில் தடைகளை ஏற்படுத்தலாம்." },
      { label: "ஜாதக விதிவிலக்குகள்", text: "செவ்வாய் தனது சொந்த வீடுகளான மேஷம் அல்லது விருச்சிகத்தில் அமைந்திருந்தாலோ, மகரத்தில் உச்சம் பெற்றிருந்தாலோ அல்லது குருவின் பார்வை பெற்றிருந்தாலோ தோஷத்தின் தாக்கம் பெருமளவு குறையும்." },
      { label: "பரிந்துரைக்கப்படும் பரிகாரங்கள்", text: "செவ்வாய்க்கிழமைகளில் விரதமிருப்பது, முருகப்பெருமானை வழிபடுவது, வைத்தீஸ்வரன் கோயிலுக்குச் சென்று பரிகார பூஜை செய்வது அல்லது செவ்வாய் தோஷமுள்ள மற்றொரு ஜாதகத்துடன் இணைப்பது சிறந்த பரிகாரமாகும்." }
    ]
  },
  {
    id: "rahu-ketu",
    titleEn: "2. Rahu - Kethu Dosham (ராகு - கேது தோஷம் / Sarpa Dosham)",
    titleTa: "2. ராகு - கேது தோஷம் (Rahu - Kethu Dosham / Sarpa Dosham)",
    descEn: "Caused by the shadow planets Rahu and Kethu occupying sensitive houses like the 1st, 2nd, 5th, 7th, 8th, or 12th in the birth chart. Commonly known as Sarpa Dosham or Naga Dosham.",
    descTa: "நிழல் கிரகங்களான ராகு மற்றும் கேது லக்னத்திற்கு 1, 2, 5, 7, 8, அல்லது 12-ம் இடங்களில் அமைந்தால் ராகு-கேது தோஷம் அல்லது சர்ப்ப தோஷம் என அழைக்கப்படுகிறது.",
    detailsEn: [
      { label: "Marital Impact", text: "Often associated with significant delays in getting married, difficulties in progeny (childbirth), or unexpected family disharmony." },
      { label: "Key Considerations", text: "The positioning of other planets and dasha periods play a crucial role. A minor Rahu-Ketu placement might not require heavy remedies unless afflicted." },
      { label: "Recommended Remedies (Pariharams)", text: "Perform Sarpa Santhi Homam, worship snake deities at Thirunageswaram Temple or Kalahasti Temple, offer milk to snake shrines, and perform selfless acts of charity." }
    ],
    detailsTa: [
      { label: "திருமண பாதிப்பு", text: "திருமணத்தில் கடும் தடைகள், புத்திர பாக்கிய தாமதம் அல்லது குடும்ப உறவுகளில் நிம்மதியின்மை ஆகியவற்றை ஏற்படுத்தலாம்." },
      { label: "முக்கிய குறிப்பு", text: "மற்ற கிரகங்களின் பலம் மற்றும் தசா புத்திகளைப் பொறுத்து தோஷத்தின் தீவிரம் மாறுபடும். எளிய அமைப்புகளுக்கு பரிகாரம் தேவையில்லை." },
      { label: "பரிந்துரைக்கப்படும் பரிகாரங்கள்", text: "சர்ப்ப சாந்தி ஹோமங்கள் செய்வது, திருநாகேஸ்வரம் அல்லது திருக்காளஹஸ்தி திருத்தலங்களுக்குச் சென்று வழிபடுவது மற்றும் ஆதரவற்றோருக்கு உதவுவது நலம் தரும்." }
    ]
  },
  {
    id: "kalathira",
    titleEn: "3. Kalathira Dosham (களத்திர தோஷம்)",
    titleTa: "3. களத்திர தோஷம் (Kalathira Dosham)",
    descEn: "'Kalathira' refers to life partner or spouse. In Vedic astrology, the 7th house represents marriage and partner. When malefic planets (Saturn, Rahu, Kethu, Sun) affect the 7th house or its lord, Kalathira Dosham is formed.",
    descTa: "களத்திரம் என்றால் வாழ்க்கைத்துணை என்று பொருள். ஜாதகத்தில் ஏழாம் வீடு திருமண வாழ்க்கை மற்றும் துணையை குறிக்கிறது. இங்கு பாப கிரகங்கள் (சனி, ராகு, கேது, சூரியன்) அமர்ந்தாலோ அல்லது அதன் அதிபதி பாதிக்கப்பட்டாலோ களத்திர தோஷம் உண்டாகும்.",
    detailsEn: [
      { label: "Marital Impact", text: "Difficulty in finding a compatible spouse, severe arguments after marriage, emotional distance, or separation in extreme charts." },
      { label: "Key Planets Involved", text: "Venus (Sukran) is the Kalathira Karagan (significator) for men, and Jupiter/Mars for women. Affliction to these planets also triggers this dosham." },
      { label: "Recommended Remedies (Pariharams)", text: "Visit Thirumanancheri Temple (famous for marriage blessings), worship Kalyanasundareswarar and Goddess Parvati, perform Shukra (Venus) preethi pujas, and maintain patience in domestic life." }
    ],
    detailsTa: [
      { label: "திருமண பாதிப்பு", text: "பொருத்தமான வாழ்க்கைத்துணை அமைவதில் சிக்கல், திருமணத்திற்குப் பிறகு கருத்து வேறுபாடுகள் அல்லது உறவில் விரிசல் ஏற்படலாம்." },
      { label: "கிரக அமைப்புகள்", text: "ஆண்களுக்கு சுக்கிரனும் பெண்களுக்கு செவ்வாய்/குருவும் களத்திரகாரகர்கள் ஆவர். இக்கிரகங்கள் பாதிக்கப்பட்டாலும் இத்தோஷம் உண்டாகும்." },
      { label: "பரிந்துரைக்கப்படும் பரிகாரங்கள்", text: "திருமணஞ்சேரி திருமணத் திருத்தலத்திற்குச் சென்று மாங்கல்ய பூஜை செய்வது, வெள்ளிக்கிழமைகளில் சுக்கிரன் வழிபாடு செய்வது மற்றும் லக்ஷ்மி தேவியை வழிபடுவது நல்லது." }
    ]
  },
  {
    id: "mangalya",
    titleEn: "4. Mangalya Dosham (மாங்கல்ய தோஷம்)",
    titleTa: "4. மாங்கல்ய தோஷம் (Mangalya Dosham)",
    descEn: "Specifically evaluated in a bride's horoscope. It is associated with the 8th house, which represents 'Mangalya Sthanam' (the longevity of marital bond and the husband's life). Afflictions by Saturn, Mars, Rahu or Kethu in the 8th house cause this dosham.",
    descTa: "இது பெரும்பாலும் பெண்களின் ஜாதகத்தில் மட்டுமே பார்க்கப்படும் தோஷமாகும். ஜாதகத்தில் 8-ம் இடம் மாங்கல்ய ஸ்தானம் எனப்படும். இங்கு பாப கிரகங்களான சனி, ராகு, கேது அல்லது செவ்வாய் அமைந்தால் மாங்கல்ய தோஷம் ஏற்படும்.",
    detailsEn: [
      { label: "Marital Impact", text: "Historically believed to bring concern over the longevity or health of the husband, or lead to sudden distress in married life." },
      { label: "Modern Astrological View", text: "Exemptions and the strong placement of the 7th and 9th houses can easily nullify its negative effects. It is matched with horoscopes of similar strength." },
      { label: "Recommended Remedies (Pariharams)", text: "Perform Mangala Gauri Puja, fast on Fridays, worship Lord Shiva and chant Mrityunjaya Mantra, and donate auspicious items (turmeric, kumkum) to married women." }
    ],
    detailsTa: [
      { label: "திருமண பாதிப்பு", text: "கணவரின் ஆரோக்கியத்தில் குறைபாடு அல்லது தம்பதியினரிடையே எதிர்பாராத மனக்கசப்புகள் ஏற்பட வாய்ப்புண்டு." },
      { label: "நவீன ஜோதிட பார்வை", text: "7 மற்றும் 9-ம் வீடுகள் பலமாக இருந்தால் இத்தோஷம் தானாகவே செயலிழந்துவிடும். சமபலமுள்ள ஜாதகங்களை இணைப்பதன் மூலம் இதனை நிவர்த்தி செய்யலாம்." },
      { label: "பரிந்துரைக்கப்படும் பரிகாரங்கள்", text: "வெள்ளிக்கிழமைகளில் மங்கள கௌரி விரதமிருப்பது, சுமங்கலிப் பெண்களுக்கு மங்களப் பொருட்கள் தானம் செய்வது மற்றும் பைரவர் வழிபாடு செய்வது சிறந்தது." }
    ]
  },
  {
    id: "pithru",
    titleEn: "5. Pithru Dosham (பித்ரு தோஷம் - Ancestral Dosham)",
    titleTa: "5. பித்ரு தோஷம் (Pithru Dosham - Ancestral Dosham)",
    descEn: "Caused by karmic debt related to ancestors. It is indicated in the chart when the Sun (Pitru Karagan) or the 9th house (representing father and ancestors) is heavily afflicted by Saturn, Rahu, or Kethu.",
    descTa: "முன்னோர்களின் சாபம் அல்லது அவர்களுக்கு செய்ய வேண்டிய கடமைகளை சரிவர செய்யாததால் ஏற்படும் தோஷமாகும். ஜாதகத்தில் சூரியன் அல்லது 9-ம் வீடு சனியுடனோ ராகு-கேதுவுடனோ இணைந்து பாதிக்கப்பட்டால் பித்ரு தோஷம் ஏற்படும்.",
    detailsEn: [
      { label: "Impact on Life", text: "Continuous struggles in career, financial instability, lack of peace at home, health issues, and delay in starting a family." },
      { label: "Significance", text: "Reminds individuals to honor and remember their lineage, showing that respect for elders and ancestors brings peace and prosperity." },
      { label: "Recommended Remedies (Pariharams)", text: "Offer Tharpanam (ancestral offerings) regularly on Amavasai (New Moon) days, perform annual Shradham, feed crows and street animals, and perform charitable works in the name of ancestors." }
    ],
    detailsTa: [
      { label: "வாழ்க்கையில் பாதிப்பு", text: "தொடர் தொழில் முடக்கம், கடுமையான நிதி இழப்புகள், புத்திர பேறு தாமதம் மற்றும் குடும்பத்தில் தொடர் குழப்பங்கள் வரலாம்." },
      { label: "முக்கியத்துவம்", text: "முன்னோர்களை மதிப்பதே இதன் நோக்கம். பெரியவர்களின் ஆசியே குடும்ப முன்னேற்றத்தின் முதல் படியாகும்." },
      { label: "பரிந்துரைக்கப்படும் பரிகாரங்கள்", text: "அமாவாசை தோறும் முன்னோர்களுக்கு தர்ப்பணம் கொடுப்பது, காகங்களுக்கு உணவிடுவது, ராமேஸ்வரம் சென்று தில ஹோமம் செய்வது மற்றும் எளியோருக்கு அன்னதானம் செய்வது." }
    ]
  },
  {
    id: "surya",
    titleEn: "6. Surya Dosham (சூரிய தோஷம்)",
    titleTa: "6. சூரிய தோஷம் (Surya Dosham)",
    descEn: "Arises when the Sun (Suriyan) is positioned in houses that clash with relationship dynamics (such as the 2nd, 7th, or 8th house) or is debilitated (in Libra) without saving aspects.",
    descTa: "ஜாதகத்தில் சூரியன் பலமிழந்து காணப்பட்டாலோ அல்லது 2, 7, 8 ஆகிய இடங்களில் பாதகமாக அமைந்திருந்தாலோ சூரிய தோஷம் ஏற்படுகிறது.",
    detailsEn: [
      { label: "Marital Impact", text: "Can result in dominant ego clashes, pride issues between spouses, or challenges relating to father-in-law relations." },
      { label: "Health & Career", text: "May manifest as health issues related to bones, eyes, or blood pressure, and delays in government jobs or official approvals." },
      { label: "Recommended Remedies (Pariharams)", text: "Perform Surya Namaskar every morning, chant the Gayatri Mantra, fast on Sundays, worship Lord Shiva, and donate copper vessels or wheat." }
    ],
    detailsTa: [
      { label: "திருமண பாதிப்பு", text: "தம்பதிகளுக்கு இடையே ஈகோ (தலைக்கனம்) பிரச்சினைகள், குடும்பத்தில் அதிகாரப் போக்கு மற்றும் மன அமைதியின்மை ஏற்படலாம்." },
      { label: "ஆரோக்கியம் & தொழில்", text: "எலும்பு, கண் சார்ந்த நோய்கள், அரசு வேலைகளில் தடைகள் அல்லது அரசாங்க ரீதியான தொல்லைகள் வர வாய்ப்புண்டு." },
      { label: "பரிந்துரைக்கப்படும் பரிகாரங்கள்", text: "தினமும் அதிகாலையில் சூரிய நமஸ்காரம் செய்வது, காயத்ரி மந்திரம் ஜெபிப்பது, ஞாயிற்றுக்கிழமைகளில் விரதமிருப்பது மற்றும் சிவபெருமானை வழிபடுவது." }
    ]
  }
];

const FAQS = [
  {
    qEn: "Can a person with Sevvai Dosham marry someone without it?",
    qTa: "செவ்வாய் தோஷம் உள்ளவர் தோஷம் இல்லாதவரை திருமணம் செய்யலாமா?",
    aEn: "Astrologers generally recommend matching Sevvai Dosham with another Sevvai Dosham chart. However, if the other person has a strong placement of Jupiter (Guru) or Saturn that cancels out the blemish, or if they have completed 28 years of age, compatibility may be acceptable. A detailed horoscope matching (Porutham) is highly recommended.",
    aTa: "பொதுவாக செவ்வாய் தோஷத்திற்கு செவ்வாய் தோஷம் உள்ள ஜாதகத்தையே இணைக்க வேண்டும். ஆனால், மற்றொருவர் ஜாதகத்தில் குரு பார்வை பலமாக இருந்தாலோ அல்லது 28 வயதுக்கு மேல் ஆனாலோ தோஷத்தின் தாக்கம் குறையும் என்பதால் திருமணம் செய்யலாம். முறையான ஜாதக பொருத்தம் பார்ப்பது அவசியம்."
  },
  {
    qEn: "What is the concept of Dosha Samyam?",
    qTa: "தோஷ சாம்யம் என்றால் என்ன?",
    aEn: "Dosha Samyam means the equal balance of positive and negative energy between two birth charts. If the groom has a certain count of malefic planetary placements in specific houses, the bride's chart should also have a comparable count. This balances the energetic scales, ensuring long-term marital harmony.",
    aTa: "தோஷ சாம்யம் என்பது இரு ஜாதகங்களிலும் உள்ள தோஷங்களின் அளவை சமன் செய்வதாகும். வரனின் ஜாதகத்தில் எந்த அளவிற்கு பாப கிரகங்களின் தாக்கம் இருக்கிறதோ, அதே அளவிற்கு வதுவின் ஜாதகத்திலும் இருக்க வேண்டும். இது திருமண வாழ்க்கை நீண்ட காலம் நீடிக்க உதவும்."
  },
  {
    qEn: "Are horoscope doshams permanent?",
    qTa: "ஜாதக தோஷங்கள் நிரந்தரமானவையா?",
    aEn: "No. Most doshams are active during specific planetary periods (Dashas) or transits. Performing remedies (pariharams), visiting temples, engaging in charitable acts, and choosing a compatible partner can significantly mitigate or nullify the impact of any dosham.",
    aTa: "இல்லை. பெரும்பாலான தோஷங்கள் குறிப்பிட்ட தசா புத்திகள் மற்றும் கோச்சார காலங்களிலேயே வேலை செய்யும். உரிய பரிகாரங்கள், கோயில் வழிபாடுகள், தான தர்மங்கள் செய்வதன் மூலமும், சரியான துணையைத் தேர்ந்தெடுப்பதன் மூலமும் தோஷங்களின் தாக்கத்தைக் குறைக்கலாம்."
  }
];

export default function DoshamPage() {
  const [lang, setLang] = useState<"en" | "ta">("en");
  const [activeDosha, setActiveDosha] = useState<number | null>(null);
  const isTamil = lang === "ta";

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");
    if (urlLang === "ta" || urlLang === "en") {
      setLang(urlLang);
    }
  }, []);

  const toggleDosha = (index: number) => {
    setActiveDosha(activeDosha === index ? null : index);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#FFFDF9] font-sans antialiased text-[#4A0602]">
      <Header lang={lang} setLang={setLang} />

      {/* Banner Section */}
      <section className="bg-gradient-to-r from-[#7A0C02] to-[#4A0602] text-[#FFEAA7] py-16 px-4 text-center shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            {isTamil
              ? "ஜாதக தோஷங்கள்: வகைகள், திருமண பாதிப்புகள் மற்றும் எளிய பரிகாரங்கள்"
              : "Horoscope Doshams: Types, Marital Impacts, and Simple Remedies"}
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg opacity-90 leading-relaxed">
            {isTamil
              ? "தமிழ் சோதிட சாஸ்திரத்தின்படி செவ்வாய், ராகு-கேது, சர்ப்ப தோஷம் உள்ளிட்ட முக்கிய தோஷங்கள் மற்றும் அவற்றின் தாக்கங்கள் பற்றிய முழுமையான வழிகாட்டி."
              : "A comprehensive guide to understanding Sevvai, Rahu-Ketu, Kalathira, Mangalya, Pithru, and Surya Doshams in Vedic Astrology."}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Column */}
          <div className="lg:col-span-8 bg-white border border-[#F0D59E] rounded-2xl p-6 sm:p-10 shadow-sm">
            {/* Intro */}
            <div className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-[#9B0B00] mb-4">
                {isTamil ? "ஜாதக தோஷம் என்றால் என்ன?" : "What is an Astrological Dosham?"}
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {isTamil
                  ? "தமிழ் ஜோதிட சாஸ்திரத்தின்படி, தோஷம் என்பது ஒருவருடைய ஜாதகக் கட்டத்தில் கிரகங்களின் சாதகமற்ற அமைப்பினால் ஏற்படும் குறைபாடாகும். இவை பொதுவாக ஒருவரது திருமண வாழ்க்கையிலோ, புத்திர பாக்கியத்திலோ, அல்லது தொழிலிலோ பல்வேறு தடைகளை உருவாக்கலாம். திருமணப் பொருத்தத்தின் போது இரு ஜாதகங்களின் தோஷங்கள் சமநிலையில் உள்ளனவா என்று ஆராய்வது தம்பதியரின் நீண்டகால மகிழ்ச்சிக்கு அடிப்படையாகும்."
                  : "In Vedic and Tamil astrology, a 'Dosham' represents an astrological blemish or flaw caused by unfavorable planetary placements in a person's birth chart (Jathagam). Evaluating these doshams is a crucial first step in checking marriage compatibility (Porutham). Balancing these cosmic alignments between partners ensures long-term marital peace, health, and mutual understanding."}
              </p>
            </div>

            <hr className="my-8 border-[#F5E6C9]" />

            {/* Accordion list of doshas */}
            <div className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-[#9B0B00] mb-6">
                {isTamil ? "முக்கிய ஜாதக தோஷங்கள்" : "The 6 Major Horoscope Doshams"}
              </h2>

              <div className="space-y-4">
                {DOSHAS.map((dosha, idx) => {
                  const isOpen = activeDosha === idx;
                  return (
                    <div
                      key={dosha.id}
                      className="border border-[#F3E5C8] rounded-xl overflow-hidden shadow-sm"
                    >
                      {/* Accordion Header */}
                      <button
                        onClick={() => toggleDosha(idx)}
                        className={`w-full flex items-center justify-between px-6 py-4 text-left font-bold text-sm sm:text-base transition-colors ${
                          isOpen ? "bg-[#FFF8EA] text-[#9B0B00]" : "bg-white text-[#4A0602]"
                        }`}
                      >
                        <span>{isTamil ? dosha.titleTa : dosha.titleEn}</span>
                        <span
                          className={`transform transition-transform text-xs text-[#9B0B00] ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                        >
                          ▼
                        </span>
                      </button>

                      {/* Accordion Body */}
                      {isOpen && (
                        <div className="bg-[#FFFDF9] border-t border-[#F3E5C8] p-6 text-sm text-gray-700 space-y-4 leading-relaxed">
                          <p>{isTamil ? dosha.descTa : dosha.descEn}</p>
                          <div className="space-y-3 pt-2">
                            {(isTamil ? dosha.detailsTa : dosha.detailsEn).map((detail, dIdx) => (
                              <div key={dIdx}>
                                <h4 className="font-bold text-[#9B0B00] flex items-center">
                                  <span className="mr-1.5">•</span> {detail.label}
                                </h4>
                                <p className="pl-4 text-gray-600 mt-0.5">{detail.text}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <hr className="my-8 border-[#F5E6C9]" />

            {/* FAQs */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#9B0B00] mb-6">
                {isTamil ? "அடிக்கடி கேட்கப்படும் கேள்விகள்" : "Frequently Asked Questions"}
              </h2>

              <div className="space-y-6">
                {FAQS.map((faq, idx) => (
                  <div key={idx} className="space-y-2">
                    <h3 className="font-bold text-base sm:text-lg text-[#4A0602]">
                      Q: {isTamil ? faq.qTa : faq.qEn}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {isTamil ? faq.aTa : faq.aEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="bg-[#FFF8EA] border border-[#F0D59E] rounded-2xl p-6 sm:p-8 text-center flex flex-col items-center shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/dc3dylylv/image/upload/q_auto,f_auto/v1671261696/pillyar-sulipng_skoxx7.png"
                alt="Auspicious Ganesha Suli"
                className="w-8 h-auto mb-4"
              />
              <h2 className="text-lg font-bold text-[#9B0B00] mb-3 leading-snug">
                {isTamil
                  ? "உங்கள் ஜாதகப் பொருத்தத்தை இலவசமாகச் சரிபார்க்கவும்"
                  : "Check Your Horoscope Matching for Free"}
              </h2>
              <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                {isTamil
                  ? "கல்யாணவரன் தளம் மூலம் உங்கள் பொருத்தமான வரனைத் தேடுங்கள். இன்றே பதிவு செய்து இலவசமாக ஜாதகம் பதிவேற்றவும்."
                  : "Find your life partner and verify complete horoscope matchings (Dosha Samyam) automatically. Register today!"}
              </p>
              <a
                href="https://www.kalyanawaran.com/register"
                className="w-full inline-flex items-center justify-center rounded-lg bg-[#9B0B00] px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#7A0C02] transition-colors"
              >
                {isTamil ? "இலவசமாகப் பதிவு செய்ய" : "Register Free Now"}
              </a>
              <div className="mt-4 text-xs">
                <a
                  href="https://www.kalyanawaran.com/login"
                  className="text-[#9B0B00] underline hover:text-[#7A0C02] font-semibold"
                >
                  {isTamil ? "ஏற்கனவே கணக்கு உள்ளதா? உள்நுழைக" : "Already have an account? Login"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
