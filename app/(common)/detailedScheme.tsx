"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "@/app/context/ThemeContext";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  Moon,
  Sun,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ChevronRight,
  Calendar,
  IndianRupee,
  FileText,
  Clock,
  CheckCircle,
  Info,
  Users,
  HelpCircle,
  ExternalLink,
  Play,
  ChevronDown,
  Home,
  Book,
  User,
  X as CloseIcon,
} from "lucide-react";

// ============================================================================
// CONSTANTS & CONFIGURATION
// ============================================================================


const NAVIGATION_SECTIONS = [
  { id: "key-info", icon: Info, label: "Key Information" },
  { id: "about", icon: Book, label: "About Scheme" },
  { id: "eligibility", icon: CheckCircle, label: "Eligibility" },
  { id: "documents", icon: FileText, label: "Documents" },
  { id: "application", icon: Users, label: "How to Apply" },
  { id: "faqs", icon: HelpCircle, label: "FAQs" },
];

// ============================================================================
// SHARED COMPONENTS
// ============================================================================


interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  documentName: string;
}

//======================================================================

export interface IRequiredDocument {
  name: string;
  description: string;
  image?: string;
  officialLink?: string;
  videoGuide?: string;
  importance?: "High" | "Medium" | "Low";
}

export interface IApplicationProcess {
  online: string[];
  offline: string[];
}

export interface IFaq {
  question: string;
  answer: string;
}

export interface IKeyInfo {
  duration: string;
  amount: string;
  applyFrom?: string;
  lastDate?: string;
}

export interface IWW {
  title: string;
  shortName: string;
  keyInfo: IKeyInfo;
  shortDescription: string;
  detailedDescription: string[];
  portalLink: string;
  benefits: string[];
  eligibilityCriteria: string[];
  nonEligible: string[];
  requiredDocuments: IRequiredDocument[];
  applicationProcess: IApplicationProcess;
  faqs: IFaq[];
  imageUrl?: string;
  launchedYear?: number;
  category?: string;
  detailedPage?: string;
  icon?: string;
}

//=====================================================================================================================
const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  documentName,
}) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative max-w-4xl max-h-[90vh] mx-4">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
        >
          <CloseIcon className="w-8 h-8" />
        </button>

        <div className="bg-white rounded-lg overflow-hidden">
          <img
            src={imageUrl}
            alt={`Sample of ${documentName}`}
            className="w-full h-auto max-h-[70vh] object-contain"
          />
          <div className="p-4 bg-white border-t">
            <h3 className="text-lg font-semibold text-gray-900">
              {documentName} - Sample
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

// Hero Section
interface HeroSectionProps {
  isDarkMode: boolean;
  shortName: string;
  imageUrl?: string;
  shortDescription: string;
  portalLink: string;
  title: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isDarkMode, shortName,imageUrl,shortDescription,portalLink,title }) => {
  return (
    <section
      className="hero-section"
      role="region"
      aria-label={`${shortName} hero`}
    >
      <img
        src={imageUrl}
        alt={`${shortName} Scheme Banner`}
        className="hero-image"
      />
      <div className="hero-overlay">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{shortDescription}</p>
        <a
          href={portalLink}
          className="cta-button"
          aria-label={`Apply for ${shortName} on official site`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <User className="w-5 h-5" aria-hidden="true" />
          Apply Now
        </a>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          height: 300px;
          overflow: hidden;
          border-radius: 20px;
          margin: 0 0 32px;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 6s ease;
          will-change: transform;
        }

        .hero-section:hover .hero-image {
          transform: scale(1.05);
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(123, 97, 255, 0.85) 0%,
            rgba(123, 97, 255, 0.4) 100%
          );
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 48px;
          gap: 12px;
        }

        .hero-title {
          color: #fff;
          font-size: 2rem;
          font-weight: 700;
          margin: 0;
          max-width: 720px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          line-height: 1.1;
          font-family: "Poppins", sans-serif;
        }

        .hero-subtitle {
          color: rgba(255, 255, 255, 0.95);
          font-size: 1.1rem;
          margin: 0;
          max-width: 600px;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: #ff7b00;
          color: #fff;
          font-weight: 600;
          padding: 12px 22px;
          border-radius: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: background-color 0.25s, transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
          text-decoration: none;
          font-size: 1rem;
          width: fit-content;
        }

        .cta-button:hover {
          background-color: #1b3b6f;
          transform: translateY(-3px);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.12);
        }

        @media (max-width: 992px) {
          .hero-section {
            height: 260px;
          }
          .hero-overlay {
            padding: 32px;
          }
          .hero-title {
            font-size: 1.8rem;
          }
          .hero-subtitle {
            font-size: 1rem;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            height: 200px;
            border-radius: 12px;
            margin: 24px 0;
          }
          .hero-overlay {
            padding: 16px;
          }
          .hero-title {
            font-size: 1.1rem;
          }
          .hero-subtitle {
            font-size: 0.9rem;
            max-width: 100%;
          }
          .cta-button {
            padding: 10px 14px;
            font-size: 0.9rem;
            border-radius: 10px;
          }
        }
      `}</style>
    </section>
  );
};

// ============================================================================
// MAIN PAGE
// ============================================================================

interface SchemeDetailLayoutProps {
  IWW: IWW;
}

const SchemeDetailPage: React.FC<SchemeDetailLayoutProps> = ({ IWW }) => {
  const {
  title,
  shortName,
  keyInfo,
  shortDescription,
  detailedDescription,
  portalLink,
  benefits,
  eligibilityCriteria,
  nonEligible,
  requiredDocuments,
  applicationProcess,
  faqs,
  imageUrl,
  launchedYear,
  category,
  detailedPage,
  icon,
 } = IWW;
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeFAQIndex, setActiveFAQIndex] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    name: string;
  } | null>(null);

  const isDarkMode = theme === "dark";

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedTheme =
      (localStorage.getItem("theme") as "light" | "dark") || "light";
    setTheme(savedTheme);
    document.body.className = savedTheme;

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "theme" && e.newValue) {
        const newTheme = e.newValue as "light" | "dark";
        setTheme(newTheme);
        document.body.className = newTheme;
      }
    };

    const handleThemeChange = (e: Event) => {
      const custom = e as CustomEvent<"light" | "dark">;
      const newTheme = custom.detail;
      setTheme(newTheme);
      document.body.className = newTheme;
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("themeChange", handleThemeChange as EventListener);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener(
        "themeChange",
        handleThemeChange as EventListener
      );
    };
  }, [setTheme]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      document.body.className = newTheme;
      localStorage.setItem("theme", newTheme);
      window.dispatchEvent(
        new CustomEvent<"light" | "dark">("themeChange", { detail: newTheme })
      );
    }
  };

  const scrollToTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 100;
      const elementPosition = el.getBoundingClientRect().top;
      const offset = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const toggleFAQ = (index: number) => {
    setActiveFAQIndex((prev) => (prev === index ? null : index));
  };

  const openImageModal = (url: string, name: string) => {
    setSelectedImage({ url, name });
  };

  const closeImageModal = () => setSelectedImage(null);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-slate-950 text-slate-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <HeroSection isDarkMode={isDarkMode} shortName={shortName} imageUrl={imageUrl} title={title} shortDescription={shortDescription} portalLink={portalLink}/>
      </div>

      <main className="max-w-7xl mx-auto px-6 pb-16 relative z-20">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <div className="sticky top-24 space-y-6">
              <div
                className={`rounded-2xl p-6 shadow-lg border ${
                  isDarkMode
                    ? "bg-slate-900 border-slate-800"
                    : "bg-white border-gray-200"
                }`}
              >
                <h3
                  className={`font-bold text-lg mb-4 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Quick Navigation
                </h3>
                <nav className="space-y-2">
                  {NAVIGATION_SECTIONS.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 ${
                        isDarkMode
                          ? "hover:bg-slate-800 text-slate-300"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      <section.icon className="w-4 h-4" />
                      {section.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div
                className={`rounded-2xl p-4 shadow-lg border ${
                  isDarkMode
                    ? "bg-slate-900 border-slate-800"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="flex items-center gap-2 text-sm flex-wrap">
                  <Link
                    href="/"
                    className={`flex items-center gap-1 ${
                      isDarkMode
                        ? "text-blue-400 hover:underline"
                        : "text-blue-600 hover:underline"
                    }`}
                  >
                    <Home className="w-4 h-4" />
                    Home
                  </Link>
                  <ChevronRight className="w-3 h-3" />
                  <Link
                    href="/schemes"
                    className={
                      isDarkMode
                        ? "text-blue-400 hover:underline"
                        : "text-blue-600 hover:underline"
                    }
                  >
                    Schemes
                  </Link>
                  <ChevronRight className="w-3 h-3" />
                  <span
                    className={
                      isDarkMode ? "text-slate-400" : "text-gray-600"
                    }
                  >
                    {shortName}
                  </span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <section className="lg:col-span-9 space-y-8">
            {/* Key Info */}
            <div
              id="key-info"
              className={`rounded-2xl p-6 shadow-lg border ${
                isDarkMode
                  ? "bg-slate-900 border-slate-800"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  {
                    icon: Calendar,
                    label: "Duration",
                    value: keyInfo.duration,
                    color: "purple",
                  },
                  {
                    icon: IndianRupee,
                    label: "Amount",
                    value: keyInfo.amount,
                    color: "green",
                  },
                  {
                    icon: FileText,
                    label: "Apply From",
                    value: keyInfo.applyFrom ?? "N/A",
                    color: "blue",
                  },
                  {
                    icon: Clock,
                    label: "Last Date",
                    value: keyInfo.lastDate ?? "N/A",
                    color: "red",
                  },
                ].map((item, index) => {
                  const bgClass =
                    item.color === "purple"
                      ? isDarkMode
                        ? "bg-purple-900"
                        : "bg-purple-100"
                      : item.color === "green"
                      ? isDarkMode
                        ? "bg-green-900"
                        : "bg-green-100"
                      : item.color === "blue"
                      ? isDarkMode
                        ? "bg-blue-900"
                        : "bg-blue-100"
                      : isDarkMode
                      ? "bg-red-900"
                      : "bg-red-100";

                  const textClass =
                    item.color === "purple"
                      ? isDarkMode
                        ? "text-purple-400"
                        : "text-purple-600"
                      : item.color === "green"
                      ? isDarkMode
                        ? "text-green-400"
                        : "text-green-600"
                      : item.color === "blue"
                      ? isDarkMode
                        ? "text-blue-400"
                        : "text-blue-600"
                      : isDarkMode
                      ? "text-red-400"
                      : "text-red-600";

                  return (
                    <div key={index} className="text-center p-4">
                      <div
                        className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center ${bgClass}`}
                      >
                        <item.icon className={`w-8 h-8 ${textClass}`} />
                      </div>
                      <h4
                        className={`text-sm font-semibold uppercase tracking-wide mb-1 ${
                          isDarkMode ? "text-slate-400" : "text-gray-600"
                        }`}
                      >
                        {item.label}
                      </h4>
                      <p
                        className={`text-lg font-bold ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {item.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* About */}
            <div
              id="about"
              className={`rounded-2xl p-8 shadow-lg border ${
                isDarkMode
                  ? "bg-slate-900 border-slate-800"
                  : "bg-white border-gray-200"
              }`}
            >
              <h2
                className={`text-2xl font-bold mb-6 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                About {shortName}
              </h2>
              <div className="space-y-4">
                {detailedDescription.map((para, idx) => (
                  <p
                    key={idx}
                    className={
                      isDarkMode
                        ? "text-slate-300 leading-relaxed"
                        : "text-gray-700 leading-relaxed"
                    }
                  >
                    {para}
                  </p>
                ))}
                <div className="mt-6">
                  <h3
                    className={`text-lg font-semibold mb-3 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Key Highlights
                  </h3>
                  <ul className="space-y-2">
                    {benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span
                          className={
                            isDarkMode
                              ? "text-slate-300"
                              : "text-gray-700"
                          }
                        >
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Eligibility */}
            <div
              id="eligibility"
              className={`rounded-2xl p-8 shadow-lg border ${
                isDarkMode
                  ? "bg-slate-900 border-slate-800"
                  : "bg-white border-gray-200"
              }`}
            >
              <h2
                className={`text-2xl font-bold mb-6 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Eligibility Criteria
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3
                    className={`text-lg font-semibold mb-4 flex items-center gap-2 ${
                      isDarkMode ? "text-green-400" : "text-green-600"
                    }`}
                  >
                    <CheckCircle className="w-5 h-5" />
                    Eligible Applicants
                  </h3>
                  <ul className="space-y-3">
                    {eligibilityCriteria.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3"
                      >
                        <span className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                        <span
                          className={
                            isDarkMode
                              ? "text-slate-300"
                              : "text-gray-700"
                          }
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3
                    className={`text-lg font-semibold mb-4 flex items-center gap-2 ${
                      isDarkMode ? "text-red-400" : "text-red-600"
                    }`}
                  >
                    <X className="w-5 h-5" />
                    Not Eligible
                  </h3>
                  <ul className="space-y-3">
                    {nonEligible.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3"
                      >
                        <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                        <span
                          className={
                            isDarkMode
                              ? "text-slate-300"
                              : "text-gray-700"
                          }
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Documents */}
            <div
              id="documents"
              className={`rounded-2xl p-8 shadow-lg border ${
                isDarkMode
                  ? "bg-slate-900 border-slate-800"
                  : "bg-white border-gray-200"
              }`}
            >
              <h2
                className={`text-2xl font-bold mb-6 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Required Documents
              </h2>
              <p
                className={`mb-6 ${
                  isDarkMode ? "text-slate-300" : "text-gray-700"
                }`}
              >
                Ensure you have all the following documents ready before
                starting your application process. All documents should be
                clear, legible, and in the specified format.
              </p>

              <div className="overflow-x-auto">
                <table
                  className={`w-full border-collapse ${
                    isDarkMode ? "text-slate-300" : "text-gray-700"
                  }`}
                >
                  <thead>
                    <tr
                      className={`border-b ${
                        isDarkMode
                          ? "border-slate-700"
                          : "border-gray-200"
                      }`}
                    >
                      <th className="text-left py-4 px-4 font-semibold">
                        Sr. No.
                      </th>
                      <th className="text-left py-4 px-4 font-semibold">
                        Document Name
                      </th>
                      <th className="text-left py-4 px-4 font-semibold">
                        Sample Image
                      </th>
                      <th className="text-left py-4 px-4 font-semibold">
                        Official Link
                      </th>
                      <th className="text-left py-4 px-4 font-semibold">
                        Video Guide
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {requiredDocuments.map((doc, index) => (
                      <tr
                        key={doc.name + index}
                        className={`border-b ${
                          isDarkMode
                            ? "border-slate-700 hover:bg-slate-800"
                            : "border-gray-200 hover:bg-gray-50"
                        } transition-colors`}
                      >
                        <td className="py-4 px-4 font-medium">
                          {index + 1}
                        </td>
                        <td className="py-4 px-4">
                          <div>
                            <p className="font-semibold">{doc.name}</p>
                            <p
                              className={`text-sm ${
                                isDarkMode
                                  ? "text-slate-400"
                                  : "text-gray-600"
                              } mt-1`}
                            >
                              {doc.description}
                            </p>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          {doc.image ? (
                            <button
                              onClick={() =>
                                openImageModal(doc.image!, doc.name)
                              }
                              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                                isDarkMode
                                  ? "bg-blue-600 text-white hover:bg-blue-700"
                                  : "bg-blue-500 text-white hover:bg-blue-600"
                              }`}
                            >
                              <FileText className="w-4 h-4" />
                              View Sample
                            </button>
                          ) : (
                            <span
                              className={
                                isDarkMode
                                  ? "text-slate-500 text-sm"
                                  : "text-gray-500 text-sm"
                              }
                            >
                              Not available
                            </span>
                          )}
                        </td>
                        <td className="py-4 px-4">
                          {doc.officialLink ? (
                            <a
                              href={doc.officialLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Official Site
                            </a>
                          ) : (
                            <span
                              className={
                                isDarkMode
                                  ? "text-slate-500 text-sm"
                                  : "text-gray-500 text-sm"
                              }
                            >
                              Not applicable
                            </span>
                          )}
                        </td>
                        <td className="py-4 px-4">
                          {doc.videoGuide ? (
                            <a
                              href={doc.videoGuide}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                            >
                              <Play className="w-4 h-4" />
                              Video Guide
                            </a>
                          ) : (
                            <span
                              className={
                                isDarkMode
                                  ? "text-slate-500 text-sm"
                                  : "text-gray-500 text-sm"
                              }
                            >
                              Not available
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Application Process */}
            <div
              id="application"
              className={`rounded-2xl p-8 shadow-lg border ${
                isDarkMode
                  ? "bg-slate-900 border-slate-800"
                  : "bg-white border-gray-200"
              }`}
            >
              <h2
                className={`text-2xl font-bold mb-6 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Application Process
              </h2>
              <p
                className={`mb-6 ${
                  isDarkMode ? "text-slate-300" : "text-gray-700"
                }`}
              >
                Choose your preferred method to apply for the{" "}
                {shortName} scheme:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {/* Online */}
                <div
                  className={`rounded-xl p-6 border h-full ${
                    isDarkMode
                      ? "bg-slate-800 border-slate-700"
                      : "bg-gray-50 border-gray-200"
                  }`}
                >
                  <h3
                    className={`text-xl font-semibold mb-4 flex items-center gap-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    <span
                      className={`text-2xl ${
                        isDarkMode ? "text-purple-400" : "text-purple-600"
                      }`}
                    >
                      🌐
                    </span>
                    Online Application
                  </h3>
                  <div className="space-y-3">
                    {applicationProcess.online.map((step, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${
                          isDarkMode
                            ? "bg-slate-700 hover:bg-slate-600"
                            : "bg-white hover:bg-gray-100"
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm ${
                            isDarkMode
                              ? "bg-purple-600 text-white"
                              : "bg-purple-100 text-purple-600"
                          }`}
                        >
                          {idx + 1}
                        </div>
                        <p
                          className={`pt-0.5 text-sm leading-relaxed ${
                            isDarkMode
                              ? "text-slate-300"
                              : "text-gray-700"
                          }`}
                        >
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Offline */}
                <div
                  className={`rounded-xl p-6 border h-full ${
                    isDarkMode
                      ? "bg-slate-800 border-slate-700"
                      : "bg-gray-50 border-gray-200"
                  }`}
                >
                  <h3
                    className={`text-xl font-semibold mb-4 flex items-center gap-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    <span
                      className={`text-2xl ${
                        isDarkMode ? "text-blue-400" : "text-blue-600"
                      }`}
                    >
                      📄
                    </span>
                    Offline Application
                  </h3>
                  <div className="space-y-3">
                    {applicationProcess.offline.map((step, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${
                          isDarkMode
                            ? "bg-slate-700 hover:bg-slate-600"
                            : "bg-white hover:bg-gray-100"
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm ${
                            isDarkMode
                              ? "bg-blue-600 text-white"
                              : "bg-blue-100 text-blue-600"
                          }`}
                        >
                          {idx + 1}
                        </div>
                        <p
                          className={`pt-0.5 text-sm leading-relaxed ${
                            isDarkMode
                              ? "text-slate-300"
                              : "text-gray-700"
                          }`}
                        >
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div
              id="faqs"
              className={`rounded-2xl p-8 shadow-lg border ${
                isDarkMode
                  ? "bg-slate-900 border-slate-800"
                  : "bg-white border-gray-200"
              }`}
            >
              <h2
                className={`text-2xl font-bold mb-6 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => {
                  const active = activeFAQIndex === idx;
                  return (
                    <div
                      key={idx}
                      className={`border rounded-xl overflow-hidden transition-all ${
                        isDarkMode ? "border-slate-800" : "border-gray-200"
                      }`}
                    >
                      <button
                        onClick={() => toggleFAQ(idx)}
                        className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors ${
                          isDarkMode
                            ? "hover:bg-slate-800"
                            : "hover:bg-gray-50"
                        } ${
                          active
                            ? isDarkMode
                              ? "bg-slate-800"
                              : "bg-gray-50"
                            : ""
                        }`}
                      >
                        <span
                          className={`font-semibold ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${
                            active ? "rotate-180" : ""
                          } ${
                            isDarkMode
                              ? "text-slate-400"
                              : "text-gray-400"
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          active ? "max-h-96" : "max-h-0"
                        }`}
                      >
                        <div
                          className={`px-6 py-4 border-t ${
                            isDarkMode
                              ? "border-slate-800 bg-slate-800/50"
                              : "border-gray-200 bg-gray-50"
                          }`}
                        >
                          <p
                            className={
                              isDarkMode
                                ? "text-slate-300 leading-relaxed"
                                : "text-gray-700 leading-relaxed"
                            }
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Help Section */}
            <div
              className={`rounded-2xl p-8 text-white shadow-lg ${
                isDarkMode
                  ? "bg-gradient-to-r from-purple-900 to-pink-900"
                  : "bg-gradient-to-r from-purple-600 to-pink-600"
              }`}
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">
                    Need Help with Your Application?
                  </h3>
                  <p className="text-white/90">
                    Our support team is here to help you with any queries about{" "}
                    {shortName}. Get personalized assistance for document
                    preparation and application submission.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all whitespace-nowrap hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <Phone className="w-4 h-4" />
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={closeImageModal}
        imageUrl={selectedImage?.url || ""}
        documentName={selectedImage?.name || ""}
      />

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 text-white rounded-full flex items-center justify-center shadow-lg transform hover:-translate-y-1 transition-all duration-300 z-50"
          style={{
            backgroundColor: isDarkMode ? "#7c3aed" : "#9333ea",
          }}
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default SchemeDetailPage;

