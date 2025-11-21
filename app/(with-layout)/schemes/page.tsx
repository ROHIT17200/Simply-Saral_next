"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from '../../context/ThemeContext';
import {
  GraduationCap,
  BookOpen,
  Sprout,
  Heart,
  Check,
  ArrowUp,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  MapPinned,
} from "lucide-react";
import Link from "next/link";

// ============================================================================
// CONSTANTS & CONFIGURATION
// ============================================================================

const ANIMATION_CONFIG = {
  defaultCardOverlap: 90,
  hoverCardOverlap: { min: 60, max: 400 },
  containerPadding: 40,
  cardTopPosition: { default: 50, focused: 0, blurred: 80 },
  cardScale: { focused: 1.15, blurred: 0.88, default: 1 },
  blurEffect: "brightness(0.92) blur(0.3px)",
  boxShadow: {
    focused: "0 25px 70px rgba(0,0,0,0.35)",
    default: "0 10px 30px rgba(0,0,0,0.15)",
  },
  transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
  cardLeftShift: -100,
  maxContainerWidth: 1400,
};


const SCHEME_DATA = [
  {
    id: "secondary-education",
    title: "Secondary Education",
    subtitle: "Scholarships & Competitive Exams",
    description:
      "Empowering Future Leaders - Explore scholarships, competitive exam support, and learning materials designed to help students excel in their secondary education and beyond.",
    icon: GraduationCap,
    colorTheme: "blue",
    link: "/schemes/secondary_education",
    features: [
      "Merit-based scholarships",
      "Exam preparation resources",
      "Career counseling support",
    ],
  },
  {
    id: "higher-education",
    title: "Higher Education",
    subtitle: "Scholarships & Career Guidance",
    description:
      "Unlocking Opportunities for Success - Discover scholarships, career guidance, and academic resources tailored for college and university students to achieve their academic and professional goals.",
    icon: BookOpen,
    colorTheme: "blue",
    link: "/schemes/higher_education",
    features: [
      "College scholarships",
      "Professional development",
      "Research opportunities",
    ],
  },
  {
    id: "farmer-welfare",
    title: "Farmer's Welfare",
    subtitle: "Agricultural Support Programs",
    description:
      "Access agricultural subsidies, crop insurance, soil health cards, and other support programs designed for farmers.",
    icon: Sprout,
    colorTheme: "green",
    link: "/schemes/farmer_welfare",
    features: [
      "Crop insurance schemes",
      "Agricultural subsidies",
      "Soil health monitoring",
    ],
  },
  {
    id: "women-welfare",
    title: "Women's Welfare",
    subtitle: "Empowerment & Support Programs",
    description:
      "Discover programs for women's education, entrepreneurship support, maternal health services, and empowerment initiatives.",
    icon: Heart,
    colorTheme: "purple",
    link: "/schemes/women_welfare",
    features: [
      "Education scholarships",
      "Business grants",
      "Healthcare support",
    ],
  },
];


// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

const getThemeColorClasses = (colorTheme, isDarkMode) => {
  const themeColors = {
    blue: {
      card: isDarkMode
        ? "bg-gradient-to-br from-slate-800 to-slate-900"
        : "bg-white",
      accent: "bg-blue-600",
      icon: isDarkMode ? "text-blue-400" : "text-blue-600",
      text: isDarkMode ? "text-slate-200" : "text-gray-800",
      subtitle: isDarkMode ? "text-slate-400" : "text-gray-600",
      button: "bg-blue-600 hover:bg-blue-700",
      border: "border-blue-500",
    },
    green: {
      card: isDarkMode
        ? "bg-gradient-to-br from-slate-800 to-slate-900"
        : "bg-white",
      accent: "bg-green-600",
      icon: isDarkMode ? "text-green-400" : "text-green-600",
      text: isDarkMode ? "text-slate-200" : "text-gray-800",
      subtitle: isDarkMode ? "text-slate-400" : "text-gray-600",
      button: "bg-green-600 hover:bg-green-700",
      border: "border-green-500",
    },
    purple: {
      card: isDarkMode
        ? "bg-gradient-to-br from-slate-800 to-slate-900"
        : "bg-white",
      accent: "bg-purple-600",
      icon: isDarkMode ? "text-purple-400" : "text-purple-600",
      text: isDarkMode ? "text-slate-200" : "text-gray-800",
      subtitle: isDarkMode ? "text-slate-400" : "text-gray-600",
      button: "bg-purple-600 hover:bg-purple-700",
      border: "border-purple-500",
    },
  };
  return themeColors[colorTheme] || themeColors.blue;
};

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

// Scheme Card Component
const SchemeCard = ({ scheme, isFocused, isDarkMode }) => {
  const colorClasses = getThemeColorClasses(scheme.colorTheme, isDarkMode);
  const IconComponent = scheme.icon;

  return (
    <div
      className={`${colorClasses.card} rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 border ${
        isFocused
          ? `${colorClasses.border} border-[1px]`
          : isDarkMode
          ? "border-slate-700 hover:border-slate-500"
          : "border-gray-200 hover:border-gray-300"
      }`}
      style={{ minHeight: 320 }}
    >
      <div className="flex h-full overflow-hidden rounded-2xl">
        {/* Accent Sidebar */}
        <div
          className={`${colorClasses.accent} w-20 flex flex-col items-center justify-center flex-shrink-0 relative`}
          style={{ minHeight: 320 }}
        >
          {isFocused ? (
            <IconComponent className="text-white w-8 h-8" strokeWidth={2} />
          ) : (
            <span
              className="absolute left-1/2 bottom-4 transform -translate-x-1/2"
              style={{
                writingMode: "vertical-lr",
                direction: "rtl",
                transform: "rotate(180deg)",
                fontSize: "0.95rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                color: "white",
                whiteSpace: "nowrap",
              }}
            >
              {scheme.title}
            </span>
          )}
        </div>
        {/* Card Content */}
        <div className="flex-1 p-5 flex flex-col justify-between">
          <div>
            <h3
              className={`text-xl font-bold mb-2 transition-all duration-300 ${
                isFocused
                  ? `${colorClasses.icon} underline decoration-2 underline-offset-4`
                  : colorClasses.text
              }`}
            >
              {scheme.title}
            </h3>
            <p className={`text-xs mb-3 ${colorClasses.subtitle}`}>
              {scheme.subtitle}
            </p>
            <p
              className={`text-xs mb-4 ${colorClasses.subtitle} leading-relaxed`}
            >
              {scheme.description}
            </p>
            <ul className="space-y-1 mb-4">
              {scheme.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check
                    className={`${colorClasses.icon} flex-shrink-0 mt-0.5 w-3 h-3`}
                    strokeWidth={3}
                  />
                  <span className={`text-xs ${colorClasses.subtitle}`}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <a
              href={scheme.link}
              className={`inline-flex items-center px-4 py-2 ${colorClasses.button} text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg text-xs group hover:scale-105`}
            >
              Explore Programs
              <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Fanned Card Deck Component
const FannedDeck = ({ cards, isDarkMode, cardWidth = 480 }) => {
  const [focusedCardIndex, setFocusedCardIndex] = useState(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const calculateCardOverlap = () => {
    if (hoveredCardIndex !== null && focusedCardIndex === null) {
      const totalWidth = Math.min(
        windowWidth - ANIMATION_CONFIG.containerPadding * 2,
        ANIMATION_CONFIG.maxContainerWidth
      );
      const cardCount = cards.length;
      const calculatedOverlap = Math.min(
        Math.max(
          (totalWidth - cardWidth) / (cardCount - 1),
          ANIMATION_CONFIG.hoverCardOverlap.min
        ),
        ANIMATION_CONFIG.hoverCardOverlap.max
      );
      return Math.min(
        calculatedOverlap,
        ((totalWidth - cardWidth - ANIMATION_CONFIG.containerPadding * 2) * 2) /
          (cardCount - 1)
      );
    }
    return ANIMATION_CONFIG.defaultCardOverlap;
  };

  const centerCardIndex = Math.floor((cards.length - 1) / 2);
  const getCardPositionStyle = (cardIndex) => {
    const isFocused = focusedCardIndex === cardIndex;
    const overlapAmount = calculateCardOverlap();
    const baseOffset = (cardIndex - centerCardIndex) * overlapAmount;
    const offset = baseOffset + ANIMATION_CONFIG.cardLeftShift;
    const totalWidth = Math.min(
      windowWidth - ANIMATION_CONFIG.containerPadding * 2,
      ANIMATION_CONFIG.maxContainerWidth
    );
    const maxOffset =
      (totalWidth - cardWidth) / 2 - ANIMATION_CONFIG.containerPadding;
    const clampedOffset = Math.max(Math.min(offset, maxOffset), -maxOffset);
    if (isFocused) {
      return {
        left: "50%",
        top: `${ANIMATION_CONFIG.cardTopPosition.focused}px`,
        transform: `translateX(-50%) rotate(0deg) scale(${ANIMATION_CONFIG.cardScale.focused})`,
        zIndex: cards.length + 999,
        boxShadow: ANIMATION_CONFIG.boxShadow.focused,
        transition: ANIMATION_CONFIG.transition,
      };
    }
    if (focusedCardIndex !== null) {
      return {
        left: `calc(50% + ${clampedOffset}px)`,
        top: `${ANIMATION_CONFIG.cardTopPosition.blurred}px`,
        transform: `translateX(-50%) rotate(0deg) scale(${ANIMATION_CONFIG.cardScale.blurred})`,
        zIndex: cardIndex,
        boxShadow: ANIMATION_CONFIG.boxShadow.default,
        filter: ANIMATION_CONFIG.blurEffect,
        transition: ANIMATION_CONFIG.transition,
      };
    }
    return {
      left: `calc(50% + ${clampedOffset}px)`,
      top: `${ANIMATION_CONFIG.cardTopPosition.default}px`,
      transform: `translateX(-50%) rotate(0deg) scale(${ANIMATION_CONFIG.cardScale.default})`,
      zIndex: cardIndex,
      boxShadow: ANIMATION_CONFIG.boxShadow.default,
      transition: ANIMATION_CONFIG.transition,
    };
  };

  const handleDeckClick = () => setFocusedCardIndex(null);
  const handleCardClick = (e, cardIndex) => {
    e.stopPropagation();
    setFocusedCardIndex(focusedCardIndex === cardIndex ? null : cardIndex);
    setHoveredCardIndex(null);
  };

  return (
    <div
      style={{
        position: "relative",
        height: 500,
        width: "100%",
        maxWidth: ANIMATION_CONFIG.maxContainerWidth,
        margin: "0 auto",
        padding: `0 ${ANIMATION_CONFIG.containerPadding}px`,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
      onClick={handleDeckClick}
    >
      {cards.map((card, index) => (
        <div
          key={card.id}
          style={{
            position: "absolute",
            width: cardWidth,
            cursor: focusedCardIndex === index ? "default" : "pointer",
            ...getCardPositionStyle(index),
          }}
          onMouseEnter={() =>
            focusedCardIndex === null && setHoveredCardIndex(index)
          }
          onMouseLeave={() => setHoveredCardIndex(null)}
          onClick={(e) => handleCardClick(e, index)}
        >
          <SchemeCard
            scheme={card}
            isFocused={focusedCardIndex === index}
            isDarkMode={isDarkMode}
          />
        </div>
      ))}
    </div>
  );
};

// Hero Section Component
const HeroSection = ({ isDarkMode }) => (
  <section
    className={`relative overflow-hidden ${
      isDarkMode
        ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        : "bg-gradient-to-br from-blue-600 to-blue-900"
    } py-6`}
  >
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage:
          'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      }}
    ></div>
    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center text-white">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Our <span className="text-orange-400">Schemes</span>
      </h1>
      <p className="text-xl text-blue-100 max-w-3xl mx-auto">
        Discover comprehensive government services and schemes available for different citizen groups, all on one platform.
      </p>
    </div>
  </section>
);

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

const SchemesPage = () => {
  const { theme } = useTheme();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isDarkMode = theme === "dark";

  return (
    <>
      <style jsx global>{`
        body {
          --bg-primary: #ffffff;
          --bg-secondary: #f9fafb;
          --bg-tertiary: #1e40af;
          --text-primary: #111827;
          --text-secondary: #4b5563;
          --text-tertiary: #6b7280;
          --border-color: #e5e7eb;
          --shadow: rgba(0, 0, 0, 0.1);
          --card-bg: #ffffff;
          --header-bg: rgba(255, 255, 255, 0.95);
          transition: background-color 0.3s, color 0.3s;
        }
        body.dark {
          --bg-primary: #0f172a;
          --bg-secondary: #1e293b;
          --bg-tertiary: #2563eb;
          --text-primary: #f1f5f9;
          --text-secondary: #cbd5e1;
          --text-tertiary: #94a3b8;
          --border-color: #334155;
          --shadow: rgba(0, 0, 0, 0.3);
          --card-bg: #1e293b;
          --header-bg: rgba(15, 23, 42, 0.95);
        }
        body {
          background-color: var(--bg-primary);
          color: var(--text-primary);
        }
        .bg-primary {
          background-color: var(--bg-primary);
        }
        .bg-secondary {
          background-color: var(--bg-secondary);
        }
        .bg-card {
          background-color: var(--card-bg);
        }
        .text-primary {
          color: var(--text-primary);
        }
        .text-secondary {
          color: var(--text-secondary);
        }
        .text-tertiary {
          color: var(--text-tertiary);
        }
        .border-custom {
          border-color: var(--border-color);
        }
      `}</style>
      <div className="min-h-screen transition-colors duration-500">
        <HeroSection isDarkMode={isDarkMode} />
        <section className={`py-14 ${isDarkMode ? "bg-slate-900" : "bg-gray-100"}`}>
          <FannedDeck cards={SCHEME_DATA} isDarkMode={isDarkMode} />
        </section>
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 text-white rounded-full flex items-center justify-center shadow-lg transform hover:-translate-y-1 transition-all duration-300 z-50"
            style={{
              backgroundColor: isDarkMode ? "#2563eb" : "#1d4ed8",
            }}
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </>
  );
};

export default SchemesPage;
