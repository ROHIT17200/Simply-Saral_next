"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import {
  BookOpen,
  LayoutDashboard,
  ChevronRight,
  ChevronLeft,
  Sun,
  Moon,
  UserCircle,
  ChevronDown,
  Home as HomeIcon,
  ArrowUp,
  Search,
  Filter,
  Calendar,
  Award,
  GraduationCap,
  Shield,
  Flame,
  Heart,
  Users,
  Sparkles,
  ShieldCheck,
  HeartPulse,
  Briefcase,
  BadgeDollarSign,
  Megaphone,
  Banknote,
  Cog,
  Building,
  Leaf,
  Droplet,
} from "lucide-react";
import { useRouter } from "next/navigation";

export type IconName =
  | "BookOpen"
  | "LayoutDashboard"
  | "ChevronRight"
  | "ChevronLeft"
  | "Sun"
  | "Moon"
  | "UserCircle"
  | "ChevronDown"
  | "Home"
  | "ArrowUp"
  | "Search"
  | "Filter"
  | "Calendar"
  | "Award"
  | "GraduationCap"
  | "Shield"
  | "HomeIcon"
  | "Flame"
  | "Heart"
  | "Users"
  | "Sparkles"
  | "ShieldCheck"
  | "HeartPulse"
  | "Briefcase"
  | "BadgeDollarSign"
  | "Megaphone"
  | "Banknote"
  | "Cog"
  | "Building"
  | "Leaf"
  | "Droplet";

const iconMap: Record<IconName, React.ComponentType<any>> = {
  BookOpen,
  LayoutDashboard,
  ChevronRight,
  ChevronLeft,
  Sun,
  Moon,
  UserCircle,
  ChevronDown,
  Home: HomeIcon,
  ArrowUp,
  Search,
  Filter,
  Calendar,
  Award,
  GraduationCap,
  Shield,
  HomeIcon,
  Flame,
  Heart,
  Users,
  Sparkles,
  ShieldCheck,
  HeartPulse,
  Briefcase,
  BadgeDollarSign,
  Megaphone,
  Banknote,
  Cog,
  Building,
  Leaf,
  Droplet,
};

export interface RequiredDocumentSchema {
  name: string;
  sampleImage?: string;
  portalLink?: string;
  videoLink?: string;
}

export interface SchemeData {
  title: string;
  shortDescription: string;
  portalLink: string;
  detailedDescription: string;
  benefits: string[];
  eligibilityCriteria: string[];
  nonEligible: string[];
  requiredDocuments: RequiredDocumentSchema[];
  applicationProcess: {
    online: string[];
    offline: string[];
  };
  faqs: string[];
  imageUrl: string;
  launchedYear: string;
  category: string;
  detailedPage: string;
  icon: IconName;
}

export interface CarouselSlide {
  image: string;
  title: string;
  subtitle: string;
}

export interface FilterCategory {
  heading: string;
  items: Array<{
    label: string;
    icon: IconName;
  }>;
}

export interface WelfareSchemesProps {
  pageTitle: string;
  pageSubtitle: string;
  schemes: SchemeData[];
  carouselSlides: CarouselSlide[];
  filterCategories?: FilterCategory[];
  defaultCategory?: string;
  accentColor?: {
    light: string;
    dark: string;
  };
}

const SidebarHeader = ({
  open,
  setOpen,
  theme,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  theme: "light" | "dark";
}) => (
  <div className="relative flex items-center w-full h-20 mt-14 mb-3">
    <div className="flex flex-col items-center w-full mb-20">
      <img
        src="/Images/logo2.png"
        alt="Simply Saral Logo"
        className={`object-contain transition-all duration-300 ${
          open ? "w-25 h-25" : "w-16 h-16"
        }`}
      />
      {open && (
        <div
          className={`text-2xl font-bold tracking-tight ${
            theme === "dark" ? "text-white" : "text-blue-700"
          }`}
        >
          Simply <span className="text-amber-500">Saral</span>
        </div>
      )}
    </div>
    <button
      onClick={() => setOpen(!open)}
      aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
      className="absolute right-[-22px] top-1/2 -translate-y-1/2 z-10 border-2 border-blue-400 rounded-full w-8 h-8 flex items-center justify-center shadow-xl transition-transform duration-300 group"
    >
      {open
        ? React.createElement(iconMap["ChevronLeft"], { className: "text-blue-500 w-5 h-5" })
        : React.createElement(iconMap["ChevronRight"], { className: "text-blue-500 w-5 h-5" })}
    </button>
  </div>
);

const NAVIGATION_ITEMS = [
  { label: "Home", icon: "Home", path: "/" },
  { label: "Schemes", icon: "LayoutDashboard", path: "/schemes" },
];

const Sidebar = ({
  theme,
  toggleTheme,
  open,
  setOpen,
  selectedCategory,
  setSelectedCategory,
  filterCategories = [],
}: {
  theme: "light" | "dark";
  toggleTheme: () => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  filterCategories?: FilterCategory[];
}) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    filterCategories.length > 0 ? filterCategories[0].heading : null
  );
  const router = useRouter();
  const isDark = theme === "dark";
  const handleNavigation = (path: string) => router.push(path);
  const handleCategorySelect = (category: string) => setSelectedCategory(category);
  const toggleSection = (heading: string) =>
    setExpandedSection((prev) => (prev === heading ? null : heading));
  const renderNavigationItem = (item: typeof NAVIGATION_ITEMS[0]) => (
    <li key={item.label}>
      <button
        onClick={() => handleNavigation(item.path)}
        className={`w-full flex ${open ? "flex-row items-center gap-3 px-3" : "flex-col items-center gap-1 px-2"} py-2.5 rounded-lg transition-colors ${
          isDark ? "hover:bg-gray-800 text-gray-300 hover:text-white" : "hover:bg-gray-100 text-gray-700 hover:text-gray-900"
        }`}
        title={item.label}
      >
        {iconMap[item.icon]
          ? React.createElement(iconMap[item.icon], { className: `flex-shrink-0 transition-all duration-300 ${open ? "w-5 h-5" : "w-6 h-6"}` })
          : React.createElement(iconMap["Sparkles"], { className: `flex-shrink-0 w-5 h-5 text-red-500` })}
        {!open && <span className="text-xs font-medium text-center leading-tight">{item.label}</span>}
        {open && <span className="text-sm font-medium tracking-wide">{item.label}</span>}
      </button>
    </li>
  );
  const renderFilterSection = (section: FilterCategory) => (
    <div key={section.heading} className="mb-2">
      <button
        onClick={() => toggleSection(section.heading)}
        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg font-semibold uppercase tracking-wide text-xs ${
          isDark ? "hover:bg-gray-800 text-gray-400 hover:text-gray-200" : "hover:bg-gray-100 text-gray-600 hover:text-gray-800"
        }`}
      >
        <span>{section.heading}</span>
        {iconMap["ChevronDown"]
          ? React.createElement(iconMap["ChevronDown"], {
              className: `w-4 h-4 transition-transform ${expandedSection === section.heading ? "rotate-180" : ""}`,
            })
          : React.createElement(iconMap["Sparkles"], { className: `w-4 h-4 text-red-500` })}
      </button>
      {expandedSection === section.heading && (
        <ul className="mt-1 ml-3 space-y-1 border-l-2 border-pink-500 pl-3">
          {section.items.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => handleCategorySelect(item.label)}
                className={`w-full flex items-center gap-2 text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  selectedCategory === item.label
                    ? isDark
                      ? "bg-blue-600 text-white"
                      : "bg-pink-100 text-pink-700 font-semibold"
                    : isDark
                    ? "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                }`}
              >
                {iconMap[item.icon]
                  ? React.createElement(iconMap[item.icon], { className: "w-4 h-4 flex-shrink-0" })
                  : React.createElement(iconMap["Sparkles"], { className: "w-4 h-4 text-red-500 flex-shrink-0" })}
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  return (
    <aside
      className={`fixed left-0 top-0 h-full z-50 flex flex-col transition-all duration-300 ease-in-out ${open ? "w-60" : "w-20"} ${
        isDark ? "bg-gray-900 text-gray-100 border-gray-800" : "bg-blue-100 text-gray-800 border-blue-400"
      } border-r shadow-md`}
    >
      <SidebarHeader open={open} setOpen={setOpen} theme={theme} />
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-2 px-2">{NAVIGATION_ITEMS.map(renderNavigationItem)}</ul>
        {open && filterCategories.length > 0 && <div className="mt-6 px-2 space-y-1">{filterCategories.map(renderFilterSection)}</div>}
      </nav>
      <div className={`border-t ${isDark ? "border-gray-700" : "border-blue-400"} p-2 space-y-2`}>
        <button
          onClick={toggleTheme}
          className={`w-full flex ${open ? "flex-row items-center gap-3 px-3" : "flex-col items-center gap-1 px-2"} py-2.5 rounded-lg transition-colors ${
            isDark ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700"
          }`}
          title={isDark ? "Light mode" : "Dark mode"}
        >
          {isDark
            ? React.createElement(iconMap["Sun"], { className: `flex-shrink-0 transition-all duration-300 ${open ? "w-5 h-5" : "w-6 h-6"}` })
            : React.createElement(iconMap["Moon"], { className: `flex-shrink-0 transition-all duration-300 ${open ? "w-5 h-5" : "w-6 h-6"}` })}
          {!open && <span className="text-xs font-medium text-center leading-tight">{isDark ? "Light" : "Dark"}</span>}
          {open && <span className="text-sm font-medium tracking-wide">{isDark ? "Light Mode" : "Dark Mode"}</span>}
        </button>
        <button
          onClick={() => handleNavigation("/profile")}
          className={`w-full flex ${open ? "flex-row items-center gap-3 px-3" : "flex-col items-center gap-1 px-2"} py-2.5 rounded-lg transition-colors ${
            isDark ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700"
          }`}
          title="Profile"
        >
          {React.createElement(iconMap["UserCircle"], { className: `flex-shrink-0 transition-all duration-300 ${open ? "w-5 h-5" : "w-6 h-6"}` })}
          {!open && <span className="text-xs font-medium text-center leading-tight">Profile</span>}
          {open && <span className="text-sm font-medium tracking-wide">Profile</span>}
        </button>
      </div>
    </aside>
  );
};

const getUniqueCategories = (schemes: SchemeData[]) => [
  "All",
  ...Array.from(new Set(schemes.map((scheme) => scheme.category))),
];

const getUniqueYears = (schemes: SchemeData[]) => [
  "All Years",
  ...Array.from(new Set(schemes.map((scheme) => scheme.launchedYear))).sort(),
];

const SchemeCard = ({ scheme, theme, accentColor }: { scheme: SchemeData; theme: "light" | "dark"; accentColor?: { light: string; dark: string } }) => {
  const SchemeIcon = iconMap[scheme.icon];
  const isDark = theme === "dark";
  const lightAccent = accentColor?.light || "blue-500";
  const darkAccent = accentColor?.dark || "blue-400";
  return (
    <div className={`rounded-xl p-6 transition-all duration-400 hover:shadow-xl border ${isDark ? "bg-slate-900 border-slate-700" : "bg-white border-gray-200"}`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <div className={`p-2 rounded-lg ${isDark ? "bg-orange-500/20" : "bg-blue-100"}`}>
              {SchemeIcon ? React.createElement(SchemeIcon, { className: `w-5 h-5 ${isDark ? `text-${darkAccent}` : `text-${lightAccent}`}` }) : null}
            </div>
            <h3 className={`text-xl font-semibold ${isDark ? `text-${darkAccent}` : `text-${lightAccent}`}`}>{scheme.title}</h3>
          </div>
          <div className={`text-sm flex items-center gap-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            <span className="flex items-center gap-2 font-semibold text-green-600">
              {React.createElement(iconMap["Award"], { size: 16 })}
              {scheme.category}
            </span>
            <span className="flex items-center gap-2">
              {React.createElement(iconMap["Calendar"], { size: 16 })}
              Launched: {scheme.launchedYear}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center ml-6">
          <a
            href={scheme.detailedPage}
            className={`inline-flex items-center px-4 py-2 rounded-lg font-medium text-base transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 relative overflow-hidden group ${
              isDark ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-500 hover:to-blue-500" : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-500 hover:to-blue-500"
            }`}
          >
            {React.createElement(iconMap["BookOpen"], { size: 18, className: "mr-2" })}
            Read More
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </a>
        </div>
      </div>
    </div>
  );
};

const WelfareSchemesPage: React.FC<WelfareSchemesProps> = ({
  pageTitle,
  pageSubtitle,
  schemes,
  carouselSlides,
  filterCategories = [],
  defaultCategory = "All",
  accentColor = { light: "blue-600", dark: "orange-400" },
}) => {
  const { theme, setTheme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const categoryOptions = getUniqueCategories(schemes);
  const yearOptions = getUniqueYears(schemes);

  const hasActiveFilters = searchQuery !== "" || selectedCategory !== "All" || selectedYear !== "All Years";
  const displayedSchemes = schemes.filter((scheme) => {
    const matchesCategory = selectedCategory === "All" || scheme.category === selectedCategory;
    const matchesYear = selectedYear === "All Years" || scheme.launchedYear === selectedYear;
    const matchesSearch =
      searchQuery === "" ||
      scheme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scheme.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scheme.benefits.some((benefit) => benefit.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesYear && matchesSearch;
  });

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as "light" | "dark") || "light";
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
  }, [setTheme]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 4000);
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [carouselSlides.length]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem("theme", newTheme);
    window.dispatchEvent(new CustomEvent("themeChange", { detail: newTheme }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans ${
        theme === "dark" ? "bg-slate-950 text-slate-100" : "bg-gradient-to-br from-blue-50 via-orange-50 to-green-50 text-gray-900"
      }`}
    >
      <Sidebar
        theme={theme}
        toggleTheme={toggleTheme}
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        filterCategories={filterCategories}
      />
      <div className={`transition-all duration-300 ${sidebarOpen ? "ml-60" : "ml-20"}`}>
        <div className="p-5">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">
              <span className={`${theme === "dark" ? `text-${accentColor.dark}` : `text-${accentColor.light}`}`}>{pageTitle}</span>
            </h1>
            <p className={`text-base ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>{pageSubtitle}</p>
          </div>
          <div className="bg-black rounded-2xl overflow-hidden mb-5 h-70 relative shadow-2xl">
            <div className="relative w-full h-full">
              {carouselSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
                  style={{
                    backgroundImage: `url('${slide.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-transparent to-transparent px-8 py-6 text-white">
              <h2 className="text-2xl font-bold mb-2 tracking-wide">{carouselSlides[currentSlide].title}</h2>
              <p className="text-lg text-gray-200 font-light">{carouselSlides[currentSlide].subtitle}</p>
            </div>
            <div className="absolute bottom-4 right-8 flex gap-2">
              {carouselSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className={`rounded-2xl p-2 mb-6 shadow-xl ${theme === "dark" ? "bg-slate-900" : "bg-white"}`}>
            <div className="flex gap-2 mb-1">
              <div className="relative flex-1">
                {React.createElement(iconMap["Search"], {
                  className: `absolute left-4 top-1/2 transform -translate-y-1/2 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`,
                  size: 20,
                })}
                <input
                  type="text"
                  placeholder="Search schemes by name, category, or benefits..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-12 pr-1 py-3 rounded-xl border text-base transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-slate-800 border-slate-700 text-white placeholder-gray-400 focus:border-orange-500"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                  } focus:outline-none`}
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold border transition-all duration-300 ${
                  showFilters
                    ? theme === "dark"
                      ? "bg-orange-600 text-white border-orange-600 shadow-lg shadow-orange-500/30"
                      : "bg-blue-600 text-white border-blue-600 shadow-lg"
                    : theme === "dark"
                      ? "bg-slate-800 border-slate-700 text-gray-300 hover:bg-slate-700 hover:border-orange-500"
                      : "bg-white border-gray-300 text-blue-800 hover:bg-blue-50 hover:border-blue-400"
                }`}
              >
                {React.createElement(iconMap["Filter"], { size: 20 })}
                <span className="text-base">Filters</span>
                {(selectedCategory !== "All" || selectedYear !== "All Years") && (
                  <span
                    className={`ml-1 px-2 py-1 rounded-full text-xs font-bold ${
                      theme === "dark" ? "bg-orange-500" : "bg-orange-500 text-white"
                    }`}
                  >
                    {[selectedCategory !== "All" ? 1 : 0, selectedYear !== "All Years" ? 1 : 0].reduce((a, b) => a + b)}
                  </span>
                )}
              </button>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${showFilters ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="space-y-6 pt-4">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    {React.createElement(iconMap["Award"], {
                      size: 18,
                      className: theme === "dark" ? "text-orange-400" : "text-blue-600",
                    })}
                    <span className={`font-bold text-base ${theme === "dark" ? "text-orange-400" : "text-blue-700"}`}>Filter by Category</span>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {categoryOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => setSelectedCategory(option)}
                        className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all duration-300 flex items-center gap-2 ${
                          selectedCategory === option
                            ? theme === "dark"
                              ? "bg-orange-600 text-white border-orange-600 shadow-lg shadow-orange-500/30"
                              : "bg-blue-600 text-white border-blue-600 shadow-lg"
                            : theme === "dark"
                              ? "bg-slate-800 border-slate-700 text-gray-300 hover:bg-slate-700 hover:border-orange-500"
                              : "bg-white border-gray-300 text-blue-800 hover:bg-blue-50 hover:border-blue-400"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    {React.createElement(iconMap["Calendar"], {
                      size: 18,
                      className: theme === "dark" ? "text-green-400" : "text-green-600",
                    })}
                    <span className={`font-bold text-base ${theme === "dark" ? "text-green-400" : "text-green-700"}`}>Filter by Launch Year</span>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {yearOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => setSelectedYear(option)}
                        className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all duration-300 ${
                          selectedYear === option
                            ? theme === "dark"
                              ? "bg-green-600 text-white border-green-600 shadow-lg shadow-green-500/30"
                              : "bg-green-600 text-white border-green-600 shadow-lg"
                            : theme === "dark"
                              ? "bg-slate-800 border-slate-700 text-gray-300 hover:bg-slate-700 hover:border-green-500"
                              : "bg-white border-gray-300 text-green-800 hover:bg-green-50 hover:border-green-400"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {hasActiveFilters && (
              <div className={`mt-2 pt-2 border-t ${theme === "dark" ? "border-slate-700" : "border-gray-200"}`}>
                <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                  Showing <span className="font-bold text-orange-600">{displayedSchemes.length}</span> of{" "}
                  <span className="font-bold">{schemes.length}</span> schemes
                </p>
              </div>
            )}
          </div>
          {displayedSchemes.length > 0 ? (
            <div className="grid gap-2">
              {displayedSchemes.map((scheme) => (
                <SchemeCard key={scheme.title} scheme={scheme} theme={theme} accentColor={accentColor} />
              ))}
            </div>
          ) : (
            <div className={`text-center py-16 rounded-xl ${theme === "dark" ? "bg-slate-900" : "bg-white"} shadow-lg`}>
              {React.createElement(iconMap["Search"], {
                size: 48,
                className: `mx-auto mb-4 ${theme === "dark" ? "text-gray-600" : "text-gray-400"}`,
              })}
              <p className={`text-lg font-semibold mb-2 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>No schemes found</p>
              <p className={`text-base ${theme === "dark" ? "text-gray-500" : "text-gray-500"}`}>Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group ${
              theme === "dark" ? "bg-orange-600 text-white hover:bg-orange-700" : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
            title="Back to Top"
          >
            {React.createElement(iconMap["ArrowUp"], { size: 20 })}
            <div className="absolute inset-0 rounded-full bg-white/20 group-hover:animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        )}
      </div>
    </div>
  );
};

export default WelfareSchemesPage;
