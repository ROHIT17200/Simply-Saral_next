"use client";
import React, { useState, useEffect } from "react";
import {
  GraduationCap,
  BookOpen,
  Sprout,
  Heart,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Check,
} from "lucide-react";

// FAN CARD DECK
function FannedDeck({ cards, renderCard, cardWidth = 480 }) {
  const [focused, setFocused] = useState(null);
  const [hovered, setHovered] = useState(null);

  // To trigger recalculation when resizing window
  const [, setRender] = useState(0);

  // Dynamically calculate overlap for "spread out" effect
  const getOverlapAmount = () => {
    if (hovered !== null && focused === null) {
      const totalWidth = Math.min(window.innerWidth - 40, 1400); // 20px padding on each side
      const n = cards.length;
      // (cardWidth) + (n-1)*overlap = totalWidth  ==> overlap = (totalWidth - cardWidth) / (n-1)
      return Math.min(
        Math.max((totalWidth - cardWidth) / (n - 1), 24), // min 24px overlap
        cardWidth - 40 // max is so cards are still touching
      );
    }
    return 120; // default overlap
  };

  useEffect(() => {
    const onResize = () => setRender(r => r + 1); // force a re-render to recalc overlap
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const centerIdx = Math.floor((cards.length - 1) / 2);

  const getCardStyle = (i) => {
    const isFocused = focused === i;
    const overlapAmount = getOverlapAmount();
    const offset = (i - centerIdx) * overlapAmount;
    if (isFocused) {
      return {
        left: "50%",
        top: "0px",
        transform: "translateX(-50%) rotate(0deg) scale(1.15)",
        zIndex: cards.length + 999,
        boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
      };
    }
    if (focused !== null) {
      return {
        left: `calc(50% + ${offset}px)`,
        top: "80px",
        transform: "translateX(-50%) rotate(0deg) scale(0.88)",
        zIndex: i,
        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        filter: "brightness(0.90) blur(0.5px)",
        transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
      };
    }
    return {
      left: `calc(50% + ${offset}px)`,
      top: "50px",
      transform: "translateX(-50%) rotate(0deg) scale(1)",
      zIndex: i,
      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
      transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
    };
  };

  const handleDeckClick = () => setFocused(null);

  return (
    <div
      style={{
        position: "relative",
        height: 450,
        width: "100%",
        maxWidth: 1400,
        margin: "0 auto",
        padding: "0 20px",
      }}
      onClick={handleDeckClick}
    >
      {cards.map((card, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: cardWidth,
            cursor: focused === i ? "default" : "pointer",
            ...getCardStyle(i),
          }}
          onMouseEnter={() => focused === null && setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          onClick={(e) => {
            e.stopPropagation();
            setFocused(focused === i ? null : i);
            setHovered(null);
          }}
        >
          {renderCard(card, i, focused === i, focused)}
        </div>
      ))}
    </div>
  );
}

// ------------------------------------

const SchemesPage = () => {
  const [theme, setTheme] = useState("light");
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isDark = theme === "dark";

  const schemes = [
    {
      id: 1,
      title: "Secondary Education",
      subtitle: "Scholarships & Competitive Exams",
      description:
        "Empowering Future Leaders - Explore scholarships, competitive exam support, and learning materials designed to help students excel.",
      icon: GraduationCap,
      color: "blue",
      link: "/schemes/secondary_Education",
      features: [
        "Merit-based scholarships",
        "Exam preparation resources",
        "Career counseling support",
      ],
    },
    {
      id: 2,
      title: "Higher Education",
      subtitle: "Scholarships & Career Guidance",
      description:
        "Unlocking Opportunities for Success - Discover scholarships, career guidance, and academic resources tailored for college students.",
      icon: BookOpen,
      color: "blue",
      link: "/schemes/higher_Education",
      features: [
        "College scholarships",
        "Professional development",
        "Research opportunities",
      ],
    },
    {
      id: 3,
      title: "Farmer's Welfare",
      subtitle: "Agricultural Support Programs",
      description:
        "Access agricultural subsidies, crop insurance, soil health cards, and other support programs designed for farmers.",
      icon: Sprout,
      color: "green",
      link: "/schemes/farmer_Welfare",
      features: [
        "Crop insurance schemes",
        "Agricultural subsidies",
        "Soil health monitoring",
      ],
    },
    {
      id: 4,
      title: "Women's Welfare",
      subtitle: "Empowerment & Support Programs",
      description:
        "Discover programs for women's education, entrepreneurship support, maternal health services, and empowerment initiatives.",
      icon: Heart,
      color: "purple",
      link: "/schemes/women_Welfare",
      features: [
        "Education scholarships",
        "Business grants",
        "Healthcare support",
      ],
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        card: isDark
          ? "bg-gradient-to-br from-slate-800 to-slate-900"
          : "bg-white",
        accent: isDark ? "bg-blue-600" : "bg-blue-600",
        icon: isDark ? "text-blue-400" : "text-blue-600",
        text: isDark ? "text-slate-200" : "text-gray-800",
        subtitle: isDark ? "text-slate-400" : "text-gray-600",
        button: isDark
          ? "bg-blue-600 hover:bg-blue-700"
          : "bg-blue-600 hover:bg-blue-700",
      },
      green: {
        card: isDark
          ? "bg-gradient-to-br from-slate-800 to-slate-900"
          : "bg-white",
        accent: isDark ? "bg-green-600" : "bg-green-600",
        icon: isDark ? "text-green-400" : "text-green-600",
        text: isDark ? "text-slate-200" : "text-gray-800",
        subtitle: isDark ? "text-slate-400" : "text-gray-600",
        button: isDark
          ? "bg-green-600 hover:bg-green-700"
          : "bg-green-600 hover:bg-green-700",
      },
      purple: {
        card: isDark
          ? "bg-gradient-to-br from-slate-800 to-slate-900"
          : "bg-white",
        accent: isDark ? "bg-purple-600" : "bg-purple-600",
        icon: isDark ? "text-purple-400" : "text-purple-600",
        text: isDark ? "text-slate-200" : "text-gray-800",
        subtitle: isDark ? "text-slate-400" : "text-gray-600",
        button: isDark
          ? "bg-purple-600 hover:bg-purple-700"
          : "bg-purple-600 hover:bg-purple-700",
      },
    };
    return colors[color];
  };

  return (
    <div
      className={`${
        isDark ? "dark bg-slate-900" : "bg-white"
      } min-h-screen transition-colors duration-500`}
    >
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? isDark
              ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
              : "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span
                className={`text-2xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                SchemesHub
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className={`${
                  isDark
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-gray-900"
                } transition-colors`}
              >
                Home
              </a>
              <a
                href="#"
                className={`${
                  isDark
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-gray-900"
                } transition-colors`}
              >
                Programs
              </a>
              <a
                href="#"
                className={`${
                  isDark
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-gray-900"
                } transition-colors`}
              >
                About
              </a>
              <a
                href="#"
                className={`${
                  isDark
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-gray-900"
                } transition-colors`}
              >
                Contact
              </a>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${
                  isDark
                    ? "bg-slate-800 text-yellow-400"
                    : "bg-gray-100 text-gray-700"
                } hover:scale-110 transition-transform`}
              >
                {isDark ? "☀️" : "🌙"}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className={`pt-32 pb-20 ${
          isDark
            ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
            : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className={`text-5xl md:text-6xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Discover Government Schemes
          </h1>
          <p
            className={`text-xl md:text-2xl mb-8 ${
              isDark ? "text-slate-300" : "text-gray-600"
            } max-w-3xl mx-auto`}
          >
            Empowering citizens through accessible information about educational opportunities, welfare programs, and support initiatives
          </p>
        </div>
      </section>

      {/* Fanned Card Section */}
      <section className={`py-24 ${isDark ? "bg-slate-900" : "bg-gray-50"}`}>
        <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
          <h2
            className={`text-4xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Our Programs
          </h2>
          <p className={`text-lg ${isDark ? "text-slate-400" : "text-gray-600"}`}>
            Hover to reveal more content. Click to focus. Click outside to reset.
          </p>
        </div>
        <FannedDeck
          cards={schemes}
          renderCard={(scheme, idx, isFocused, focused) => {
            const colorClasses = getColorClasses(scheme.color);
            const IconComponent = scheme.icon;
            return (
              <div
                className={`${colorClasses.card} rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 border ${
                  isFocused
                    ? (scheme.color === "blue"
                        ? "border-blue-500"
                        : scheme.color === "green"
                        ? "border-green-500"
                        : "border-purple-500") + " border-4"
                    : isDark
                    ? "border-slate-700"
                    : "border-gray-200"
                }`}
                style={{
                  minHeight: 320,
                  opacity: 1,
                }}
              >
                <div className="flex h-full">
                  {/* Accent Bar: vertical name or icon */}
                  <div
                    className={`${colorClasses.accent} w-24 flex flex-col items-center justify-center flex-shrink-0 relative`}
                    style={{ padding: 0, minHeight: 320 }}
                  >
                    {isFocused ? (
                      <IconComponent className="text-white w-10 h-10" strokeWidth={2} />
                    ) : (
                      <span
                        className="absolute left-1/2 bottom-4 transform -translate-x-1/2"
                        style={{
                          writingMode: "vertical-lr",
                          direction: "rtl",
                          transform: "rotate(180deg)",
                          textAlign: "center",
                          whiteSpace: "nowrap",
                          fontSize: "1.05rem",
                          fontWeight: 800,
                          letterSpacing: "0.11em",
                          color: "white",
                          lineHeight: "1.2",
                        }}
                      >
                        {scheme.title}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    {/* Top Section */}
                    <div>
                      <h3 className={`text-2xl font-bold mb-2 ${isFocused ? "text-blue-500 underline" : colorClasses.text}`}>
                        {scheme.title}
                      </h3>
                      <p className={`text-sm mb-3 ${colorClasses.subtitle}`}>
                        {scheme.subtitle}
                      </p>
                      <p className={`text-sm mb-4 ${colorClasses.subtitle} leading-relaxed`}>
                        {scheme.description}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {scheme.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className={`${colorClasses.icon} flex-shrink-0 mt-0.5 w-4 h-4`} strokeWidth={3} />
                            <span className={`text-sm ${colorClasses.subtitle}`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Bottom Section */}
                    <div>
                      <a
                        href={scheme.link}
                        className={`inline-flex items-center px-5 py-2.5 ${colorClasses.button} text-white rounded-lg font-semibold transition-all hover:shadow-lg text-sm group`}
                      >
                        Explore Programs
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        />
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${isDark ? "bg-slate-800" : "bg-blue-600"}`}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Help Finding the Right Program?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to guide you through the application process and answer any questions
          </p>
          <button
            className={`px-8 py-4 ${isDark ? "bg-blue-600 hover:bg-blue-700" : "bg-white text-blue-600 hover:bg-gray-100"} rounded-full font-semibold transition-all hover:shadow-lg hover:-translate-y-1`}
          >
            Contact Support
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`${
          isDark
            ? "bg-slate-900 border-t border-slate-800"
            : "bg-gray-900"
        } text-white py-12`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">SchemesHub</h3>
              <p className="text-gray-400">
                Connecting citizens with government schemes and opportunities
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Programs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Resources
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>1800-XXX-XXXX</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>info@schemeshub.gov</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>New Delhi, India</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 SchemesHub. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all hover:-translate-y-1 z-50 text-xl"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default SchemesPage;
