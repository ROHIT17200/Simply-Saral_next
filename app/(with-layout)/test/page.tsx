"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
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
  Download,
  Play,
  ChevronDown,
  Home,
  Book,
  Shield,
  User,
  School,
  Heart,
  X as CloseIcon,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

// ============================================================================
// CONSTANTS & CONFIGURATION
// ============================================================================

const SCHEME_DATA ={
    title: "Ladki Bahin Yojana (Mukhya Mantri Mazi Ladki Bahin Yojana)",

    shortName: "Ladki Bahin Yojana",

    keyInfo: {
    duration: "Ongoing Scheme",
    amount: "₹1,500 per month",
    applyFrom: "August 1, 2024",
    lastDate: "March 31, 2025",
  },

    shortDescription: "A transformative scheme providing monthly financial assistance of ₹1,500 to eligible women across the state for economic empowerment and social welfare.",

    detailedDescription:["The Mukhyamantri Ladki Bahin Yojana is a flagship initiative launched by the state government to provide financial security and empowerment to women aged 21 to 60 years. This revolutionary scheme aims to support women's economic independence and improve their quality of life",
      "Under this scheme, eligible women receive ₹1,500 per month directly in their bank accounts through Direct Benefit Transfer (DBT). The financial assistance is provided without any restrictions on usage, enabling women to utilize the funds according to their personal needs - whether for education, healthcare, skill development, or household expenses.",
      "The scheme particularly focuses on women from economically weaker sections, with special provisions for widows, divorced women, and women from marginalized communities to ensure inclusive growth and social justice."],

    portalLink: "https://ladakibahin.maharashtra.gov.in",

    benefits: [
      "Monthly financial assistance of ₹1,500 directly transferred to bank accounts",
      "No restrictions on usage of funds - complete freedom for beneficiaries",
      "Special priority for widows, divorced women, and women from SC/ST communities",
      "Simple online application process with minimal documentation",
      "Dedicated helpline and support centers for assistance",
    ],


    eligibilityCriteria: [
      "Women residents of the state aged between 21 to 60 years",
      "Family annual income must be less than ₹2.5 lakh",
      "Must possess a valid Aadhaar card linked with mobile number",
      "Should have an active bank account in their name",
      "Not receiving any other similar financial assistance from government",
      "Special consideration for widows, divorced women, and women with disabilities",
    ],

    nonEligible: [
      "Women below 21 years or above 60 years of age",
      "Family annual income exceeding ₹2.5 lakh",
      "Women employed in government services or their family members",
      "Income tax payers or professionals filing IT returns",
      "Women already receiving other government pensions or similar benefits",
      "Non-residents of the state",
    ],

    requiredDocuments: [
     {
      id: 1,
      name: "Aadhaar Card",
      description:
        "Mandatory for identity verification and bank account linking",
      image: "/Images/aadharformat.jpeg",
      officialLink: "https://uidai.gov.in/",
      videoGuide: "https://youtu.be/EUJ4Lf2B0Nc",
      importance: "High",
    },
    {
      id: 2,
      name: "Age Proof Certificate",
      description:
        "Birth certificate, school certificate, or any government issued age proof",
      image: "/Images/age-proof.jpeg",
      officialLink: "https://edistrict.gov.in/",
      videoGuide: "https://youtu.be/ageproof",
      importance: "High",
    },
    {
      id: 3,
      name: "Income Certificate",
      description: "Issued by Tehsildar proving annual income below ₹2.5 lakh",
      image: "/Images/income-certificate.jpeg",
      officialLink: "https://edistrict.gov.in/",
      videoGuide: "https://youtu.be/incomecertificate",
      importance: "High",
    },
    {
      id: 4,
      name: "Bank Account Passbook",
      description: "First page with account holder name and IFSC code",
      image: "/Images/bankdetails.jpeg",
      officialLink: "https://www.npci.org.in/",
      videoGuide: "https://youtu.be/bankdetails",
      importance: "High",
    },
    {
      id: 5,
      name: "Residence Certificate",
      description: "Domicile certificate or valid address proof",
      image: "/Images/residence-proof.jpeg",
      officialLink: "https://edistrict.gov.in/",
      videoGuide: "https://youtu.be/residenceproof",
      importance: "Medium",
    },
    {
      id: 6,
      name: "Passport Photo",
      description: "2 recent passport-sized photographs",
      image: "/Images/photograph.jpeg",
      officialLink: "https://www.passportindia.gov.in/",
      videoGuide: "https://youtu.be/photoguide",
      importance: "Medium",
    },
    {
      id: 7,
      name: "Caste Certificate",
      description: "For SC/ST/OBC categories (if applicable)",
      image: "/Images/caste-certificate.jpeg",
      officialLink: "https://edistrict.gov.in/",
      videoGuide: "https://youtu.be/castecertificate",
      importance: "Medium",
    },
    ],
    applicationProcess: {
      online: [
        "Visit: https://ladakibahin.maharashtra.gov.in",
        "Register: Enter personal & financial details",
        "Upload Documents: Aadhaar, residence proof, income certificate, etc.",
        "Submit: Application will be processed for approval"
      ],
      offline: [
        "Collect form from Gram Panchayat / Municipal Office",
        "Fill details & attach required documents",
        "Submit to the respective authority"
      ]
    },
    faqs: [
    {
      question: "What is the application deadline for Ladki Bahin Yojana?",
      answer:
        "The scheme is open for applications until March 31, 2025. However, applying early helps avoid system congestion near the deadline.",
    },
    {
      question: "How will I receive the monthly amount?",
      answer:
        "The amount of ₹1,500 is transferred monthly through Direct Benefit Transfer into the registered bank account.",
    },
    {
      question: "Can working women apply for this scheme?",
      answer:
        "Working women can apply if their family’s annual income is below the specified limit and they meet other criteria.",
    },
    {
      question: "What if my application gets rejected?",
      answer:
        "An SMS is typically sent with the reason for rejection, and you can correct issues and reapply within the allowed period.",
    },
    {
      question: "Is there any application fee?",
      answer:
        "The official application process does not charge a fee, and applicants should avoid informal intermediaries.",
    },
    {
      question: "How can I check my application status?",
      answer:
        "Status can usually be checked on the official portal using the reference number or Aadhaar details.",
    },
    {
      question: "What documents are required for income certificate?",
      answer:
        "Commonly accepted proofs include salary slips, Form 16, agricultural income details, and relevant supporting documents.",
    },
  ],
    imageUrl: "/Images/women_welf/ladki_bahin.jpg",
    launchedYear:2023,
    category:"Financial Assistance & Social Security",
    detailedPage:"LBY",
    icon:'Shield'
  };

const NAVIGATION_SECTIONS = [
  { id: "key-info", icon: Info, label: "Key Information" },
  { id: "about", icon: Book, label: "About Scheme" },
  { id: "eligibility", icon: CheckCircle, label: "Eligibility" },
  { id: "documents", icon: FileText, label: "Documents" },
  { id: "application", icon: Users, label: "How to Apply" },
  { id: "faqs", icon: HelpCircle, label: "FAQs" },
];


interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  documentName: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  documentName,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

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

// Hero Section Component
interface HeroSectionProps {
  isDarkMode: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isDarkMode }) => {
  return (
    <section
      className="hero-section"
      role="region"
      aria-label="Ladki Bahin Yojana hero"
    >
      <img
        src={SCHEME_DATA.imageUrl}
        alt="Ladki Bahin Yojana Scheme Banner"
        className="hero-image"
      />
      <div className="hero-overlay">
        <h1 className="hero-title">{SCHEME_DATA.title}</h1>
        <p className="hero-subtitle">{SCHEME_DATA.shortDescription}</p>
        <a
          href={SCHEME_DATA.portalLink}
          className="cta-button"
          aria-label={`Apply for ${SCHEME_DATA.shortName} on official site`}
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
          margin: 32px 0;
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
// MAIN PAGE COMPONENT
// ============================================================================

const SchemeDetailPage: React.FC = () => {
  const {theme,setTheme} = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeFAQIndex, setActiveFAQIndex] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    name: string;
  } | null>(null);

  const isDarkMode = theme === "dark";

  // Initialize theme from localStorage and sync across pages
  useEffect(() => {
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

    const handleThemeChange = (e: CustomEvent) => {
      const newTheme = e.detail as "light" | "dark";
      setTheme(newTheme);
      document.body.className = newTheme;
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("themeChange" as any, handleThemeChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("themeChange" as any, handleThemeChange);
    };
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const toggleFAQ = (index: number) => {
    setActiveFAQIndex(activeFAQIndex === index ? null : index);
  };

  const openImageModal = (imageUrl: string, documentName: string) => {
    setSelectedImage({ url: imageUrl, name: documentName });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode
          ? "bg-slate-950 text-slate-100"
          : "bg-gray-50 text-gray-900"
      }`}
    >

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6">
        <HeroSection isDarkMode={isDarkMode} />
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pb-16 relative z-20">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <div className="sticky top-24 space-y-6">
              {/* Quick Navigation */}
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

              {/* Breadcrumb */}
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
                    {SCHEME_DATA.shortName}
                  </span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <section className="lg:col-span-9 space-y-8">
            {/* Key Info Cards */}
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
                    value: SCHEME_DATA.keyInfo.duration,
                    color: "purple",
                  },
                  {
                    icon: IndianRupee,
                    label: "Amount",
                    value: SCHEME_DATA.keyInfo.amount,
                    color: "green",
                  },
                  {
                    icon: FileText,
                    label: "Apply From",
                    value: SCHEME_DATA.keyInfo.applyFrom,
                    color: "blue",
                  },
                  {
                    icon: Clock,
                    label: "Last Date",
                    value: SCHEME_DATA.keyInfo.lastDate,
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
                        <item.icon
                          className={`w-8 h-8 ${textClass}`}
                        />
                      </div>
                      <h4
                        className={`text-sm font-semibold uppercase tracking-wide mb-1 ${
                          isDarkMode
                            ? "text-slate-400"
                            : "text-gray-600"
                        }`}
                      >
                        {item.label}
                      </h4>
                      <p
                        className={`text-lg font-bold ${
                          isDarkMode
                            ? "text-white"
                            : "text-gray-900"
                        }`}
                      >
                        {item.value}
                      </p>
                    </div>
                  );
                })}
              </div>
              
            </div>

            {/* About Section */}
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
                About {SCHEME_DATA.shortName}
              </h2>
              <div className="space-y-4">
                {SCHEME_DATA.detailedDescription.map((para, idx) => (
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
                    {SCHEME_DATA.benefits.map(
                      (highlight, idx) => (
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
                            {highlight}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Eligibility Section */}
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
                      isDarkMode
                        ? "text-green-400"
                        : "text-green-600"
                    }`}
                  >
                    <CheckCircle className="w-5 h-5" />
                    Eligible Applicants
                  </h3>
                  <ul className="space-y-3">
                    {SCHEME_DATA.eligibilityCriteria.map(
                      (item, idx) => (
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
                      )
                    )}
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
                    {SCHEME_DATA.nonEligible.map(
                      (item, idx) => (
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
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Documents Section - UPDATED WITHOUT PDF GUIDE */}
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
                    isDarkMode
                      ? "text-slate-300"
                      : "text-gray-700"
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
                    {SCHEME_DATA.requiredDocuments.map((doc, index) => (
                      <tr
                        key={doc.id ?? index}
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
                            <p className="font-semibold">
                              {doc.name}
                            </p>
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
                          <button
                            onClick={() =>
                              openImageModal(doc.image, doc.name)
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
                        </td>
                        <td className="py-4 px-4">
                          <a
                            href={doc.officialLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Official Site
                          </a>
                        </td>
                        <td className="py-4 px-4">
                          <a
                            href={doc.videoGuide}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                          >
                            <Play className="w-4 h-4" />
                            Video Guide
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Application Process Section */}
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
            {SCHEME_DATA.shortName} scheme:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Online Process */}
            <div className={`rounded-xl p-6 border h-full ${
              isDarkMode
                ? "bg-slate-800 border-slate-700"
                : "bg-gray-50 border-gray-200"
            }`}>
              <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}>
                <span className={`text-2xl ${isDarkMode ? "text-purple-400" : "text-purple-600"}`}>
                  🌐
                </span>
                Online Application
              </h3>
              <div className="space-y-3">
                {SCHEME_DATA.applicationProcess.online.map((step, idx) => (
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

            {/* Offline Process */}
            <div className={`rounded-xl p-6 border h-full ${
              isDarkMode
                ? "bg-slate-800 border-slate-700"
                : "bg-gray-50 border-gray-200"
            }`}>
              <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}>
                <span className={`text-2xl ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                  📄
                </span>
                Offline Application
              </h3>
              <div className="space-y-3">
                {SCHEME_DATA.applicationProcess.offline.map((step, idx) => (
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

            {/* FAQs Section */}
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
                {SCHEME_DATA.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className={`border rounded-xl overflow-hidden transition-all ${
                      isDarkMode
                        ? "border-slate-800"
                        : "border-gray-200"
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors ${
                        isDarkMode
                          ? "hover:bg-slate-800"
                          : "hover:bg-gray-50"
                      } ${
                        activeFAQIndex === idx
                          ? isDarkMode
                            ? "bg-slate-800"
                            : "bg-gray-50"
                          : ""
                      }`}
                    >
                      <span
                        className={`font-semibold ${
                          isDarkMode
                            ? "text-white"
                            : "text-gray-900"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          activeFAQIndex === idx ? "rotate-180" : ""
                        } ${
                          isDarkMode
                            ? "text-slate-400"
                            : "text-gray-400"
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeFAQIndex === idx
                          ? "max-h-96"
                          : "max-h-0"
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
                ))}
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
                    Our support team can assist with queries related to{" "}
                    {SCHEME_DATA.shortName}. Get help for document
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
                  <a
                    href='#'
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all whitespace-nowrap hover:-translate-y-0.5"
                  >
                    <Mail className="w-4 h-4" />
                    Email Support
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Image Modal */}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={closeImageModal}
        imageUrl={selectedImage?.url || ""}
        documentName={selectedImage?.name || ""}
      />

      {/* Back to Top Button */}
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
