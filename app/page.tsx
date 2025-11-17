'use client';

import React from "react";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Moon, 
  Sun, 
  Menu, 
  X, 
  ArrowUp, 
  GraduationCap, 
  Sprout, 
  Users as UsersIcon,
  ArrowRight,
  Layers,
  Shield,
  Clock,
  TrendingUp,
  FileText,
  MapPin,
  Handshake,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  MapPinned
} from 'lucide-react';

export default function HomePage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Back to top button
      setShowBackToTop(window.scrollY > 600);

      // Window effect at bottom
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;
      const scrolled = window.scrollY;
      const isAtBottom = (scrolled + windowHeight) > (docHeight * 0.95);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style jsx global>{`
        /* Light mode colors (default) */
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

        /* Dark mode colors */
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

        .bg-primary { background-color: var(--bg-primary); }
        .bg-secondary { background-color: var(--bg-secondary); }
        .bg-card { background-color: var(--card-bg); }
        .text-primary { color: var(--text-primary); }
        .text-secondary { color: var(--text-secondary); }
        .text-tertiary { color: var(--text-tertiary); }
        .border-custom { border-color: var(--border-color); }
      `}</style>

      <div className="min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-50 shadow-md backdrop-blur-sm transition-all duration-300" style={{ backgroundColor: 'var(--header-bg)', borderBottom: `1px solid ${theme === 'dark' ? 'rgba(51, 65, 85, 0.5)' : 'transparent'}` }}>
          <div className="max-w-7xl mx-auto px-1">
            <nav className="flex justify-between items-center py-4">
              <Link href="/" className="flex items-center">
                {/* Logo image - adjust width/height as needed */}
                <img
                  src="/Images/logo2.png"
                  alt="Simply Saral Logo"
                  className="mr-2 h-10 w-16"
                  style={{ borderRadius: "0%" }} // Optional for rounded logo
                />
                
                <div className="text-3xl font-bold" style={{ color: theme === 'dark' ? '#60a5fa' : '#1d4ed8' }}>
                  Simply <span className="text-amber-500">Saral</span>
                </div>
              </Link>


              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-2">
                <Link href="/login" className="px-6 py-2 text-white rounded-full font-semibold transform hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group" style={{ backgroundColor: theme === 'dark' ? '#2563eb' : '#1d4ed8' }}>
                  <span className="relative z-10">Log In</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                </Link>
                <Link href="/signup" className="px-6 py-2 text-white rounded-full font-semibold transform hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group" style={{ backgroundColor: theme === 'dark' ? '#2563eb' : '#1d4ed8' }}>
                  <span className="relative z-10">Sign Up</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                </Link>
                <Link href="/management" className="px-6 py-2 text-white rounded-full font-semibold transform hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group" style={{ backgroundColor: theme === 'dark' ? '#2563eb' : '#1d4ed8' }}>
                  <span className="relative z-10">Management</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                </Link>
                <button
                  onClick={toggleTheme}
                  className="ml-4 w-9 h-9 rounded-full border-2 flex items-center justify-center transform hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
                  style={{ 
                    borderColor: theme === 'dark' ? 'rgba(96, 165, 250, 0.4)' : '#d1d5db',
                    backgroundColor: theme === 'dark' ? 'rgba(96, 165, 250, 0.1)' : 'transparent',
                    boxShadow: theme === 'dark' ? '0 4px 6px rgba(96, 165, 250, 0.2)' : 'none'
                  }}
                >
                  {theme === 'light' ? (
                    <Moon className="w-5 h-5" style={{ color: '#374151' }} />
                  ) : (
                    <Sun className="w-5 h-5" style={{ color: '#93c5fd' }} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden"
                style={{ color: theme === 'dark' ? '#e5e7eb' : '#374151' }}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 flex flex-col gap-4">
                <Link href="/login" className="px-6 py-2 bg-blue-700 text-white rounded-full font-semibold text-center">
                  Log In
                </Link>
                <Link href="/signup" className="px-6 py-2 bg-blue-700 text-white rounded-full font-semibold text-center">
                  Sign Up
                </Link>
                <Link href="/management" className="px-6 py-2 bg-blue-700 text-white rounded-full font-semibold text-center">
                  Management
                </Link>
                <button
                  onClick={toggleTheme}
                  className="w-9 h-9 mx-auto rounded-full border-2 border-gray-300 flex items-center justify-center"
                >
                  {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative text-white overflow-hidden" style={{ background: theme === 'dark' ? 'linear-gradient(to bottom right, #1e293b, #020617)' : 'linear-gradient(to bottom right, #1d4ed8, #172554)' }}>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/Images/HomePage.png')", opacity: theme === 'dark' ? 0.3 : 0.4 }}></div>
          {theme === 'dark' && <div className="absolute inset-0 bg-gradient-to-r from-blue-400/15 to-transparent"></div>}
          
          <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                  Various Programs <span className="text-orange-300">At Your Fingertips</span>
                </h1>
                <p className="text-xl mb-8 text-white/90">
                  Navigate scholarships, welfare schemes, and government programs with ease - all in one place, designed for the citizens of India.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link href="#services" className="px-6 py-3 text-white rounded-full font-semibold transform hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group" style={{ backgroundColor: theme === 'dark' ? '#2563eb' : '#1d4ed8' }}>
                    <span className="relative z-10">Explore Services</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                  </Link>
                  <Link href="#features" className="px-6 py-3 text-white rounded-full font-semibold transform hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group" style={{ backgroundColor: theme === 'dark' ? '#2563eb' : '#1d4ed8' }}>
                    <span className="relative z-10">Why Choose Us</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        
      {/* How Simply Saral Works Section -- place this after the Hero section, replacing the service cards */}
         <section
      className="py-20 relative overflow-hidden"
      style={{
        background: theme === 'dark'
          ? 'radial-gradient(ellipse at top left, #2563eb30 0%, #1e293b 80%)'
          : 'radial-gradient(ellipse at top right, #dbeafe 0%, #fff 80%)',
        zIndex: 1
      }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20 z-0 pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}>
      </div>
      <div className="relative max-w-7xl mx-auto px-8 z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
              style={{
                color: theme === 'dark' ? '#60a5fa' : '#1d4ed8',
                letterSpacing: '-.03em'
              }}>
            How Simply Saral Works
          </h2>
          <p className="text-xl mt-5 font-medium"
            style={{ color: theme === 'dark' ? '#9ca3af' : '#4b5563' }}>
            Get started in just four simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row gap-12 md:gap-0 justify-between items-center mb-12">
  {[
    {
      icon: <UsersIcon className="w-8 h-8" />, 
      color: 'from-blue-400 to-blue-600',
      title: "Create Account",
      desc: "Quick and secure registration."
    },
    {
      icon: <Layers className="w-8 h-8" />, 
      color: 'from-green-400 to-teal-500',
      title: "Browse Schemes",
      desc: "Explore 20+ schemes by category."
    },
    {
      icon: <Shield className="w-8 h-8" />, 
      color: 'from-amber-400 to-orange-500',
      title: "Check Eligibility",
      desc: "See which schemes match your profile."
    },
    {
      icon: <FileText className="w-8 h-8" />, 
      color: 'from-pink-400 to-rose-500',
      title: "Apply Online",
      desc: "Submit applications with ease."
    }
  ].map((step, idx, arr) => (
    <React.Fragment key={idx}>
      <div
        className="relative flex flex-col items-center group transition-transform duration-300 hover:-translate-y-2"
        style={{ zIndex: 1 }}
      >
        <div
          className={`w-16 h-16 flex items-center justify-center mb-3 rounded-full shadow-lg bg-gradient-to-br ${step.color}`}
          style={{
            boxShadow:
              theme === 'dark'
                ? '0 4px 14px 2px #2563eb50'
                : '0 6px 24px 1px #93c5fd30',
            border: theme === 'dark' ? '2px solid #334155' : '2px solid #dbeafe',
            transition: 'box-shadow 0.3s'
          }}
        >
          {React.cloneElement(step.icon, { className: "w-7 h-7", color: "#fff" })}
        </div>
        <div className="text-xl font-bold mt-1"
          style={{ color: theme === 'dark' ? '#fff' : '#111827' }}>
          {step.title}
        </div>
        <div className="mt-2 text-gray-600 dark:text-gray-300 text-center max-w-[230px]">{step.desc}</div>
      </div>
      {/* Connector line except last */}
      {idx !== arr.length - 1 && (
        <div className="hidden md:block flex-1 h-2 border-b-2 border-dashed border-blue-300 dark:border-blue-800 mx-2"
          aria-hidden="true"
          style={{ minWidth: 40, maxWidth: 130 }} />
      )}
    </React.Fragment>
  ))}
        </div>

        <div className="text-center">
          <Link
            href="/schemes"
            className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-full font-semibold text-lg shadow-md transition hover:scale-105 hover:shadow-xl"
            style={{
              background: 'linear-gradient(90deg, #2563eb 50%, #1e40af 100%)',
              letterSpacing: '0.02em'
            }}>
            Explore All Schemes
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>


        {/* Features Section */}
        <section id="features" className="py-16 relative overflow-hidden" style={{ backgroundColor: theme === 'dark' ? '#1e293b' : '#f9fafb' }}>
          <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")", opacity: theme === 'dark' ? 0.15 : 0.5 }}></div>
          
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: theme === 'dark' ? '#60a5fa' : '#1d4ed8' }}>Why Choose Simply Saral?</h2>
                <ul className="space-y-8">
                  <FeatureItem
                    theme={theme}
                    icon={<Layers className="w-6 h-6" />}
                    title="One Platform, Multiple Services"
                    description="Access all government schemes and services through a single, unified platform without navigating multiple websites."
                  />
                  <FeatureItem
                    theme={theme}
                    icon={<Shield className="w-6 h-6" />}
                    title="Secure & Reliable"
                    description="Your personal information is protected with enterprise-grade security measures ensuring complete data privacy."
                  />
                  <FeatureItem
                    theme={theme}
                    icon={<Clock className="w-6 h-6" />}
                    title="Time-Saving Process"
                    description="Streamlined application processes reduce paperwork and save valuable time when applying for government services."
                  />
                  <FeatureItem
                    theme={theme}
                    icon={<TrendingUp className="w-6 h-6" />}
                    title="Real-Time Status Tracking"
                    description="Track your application status in real-time and receive timely updates on approvals and next steps."
                  />
                </ul>
              </div>
              <div>
                <img
                  src="https://img.freepik.com/free-vector/professionals-analyzing-growth-charts_23-2148866843.jpg"
                  alt="Features"
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-white py-12" style={{ backgroundColor: theme === 'dark' ? '#020617' : '#172554' }}>
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-0.5 after:bg-orange-500 after:rounded-full">
                  About Simply Saral
                </h3>
                <p className="text-white/80 mb-6">
                  Simply Saral is dedicated to making government services accessible to all citizens through a user-friendly digital platform that simplifies complex processes.
                </p>
                <div className="flex gap-3">
                  <SocialLink href="#" icon={<Facebook className="w-4 h-4" />} />
                  <SocialLink href="#" icon={<Twitter className="w-4 h-4" />} />
                  <SocialLink href="#" icon={<Instagram className="w-4 h-4" />} />
                  <SocialLink href="#" icon={<Linkedin className="w-4 h-4" />} />
                  <SocialLink href="#" icon={<Youtube className="w-4 h-4" />} />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-0.5 after:bg-orange-500 after:rounded-full">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <FooterLink href="/" text="Home" />
                  <FooterLink href="#services" text="Services" />
                  <FooterLink href="#features" text="Why Us" />
                  <FooterLink href="#contact" text="Contact" />
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-0.5 after:bg-orange-500 after:rounded-full">
                  Services
                </h3>
                <ul className="space-y-2">
                  <FooterLink href="/schemes/secondary_Education" text="Secondary Education" />
                  <FooterLink href="/schemes/higher_Education" text="Higher Education" />
                  <FooterLink href="/schemes/farmer_Welfare" text="Farmer Programs" />
                  <FooterLink href="/schemes/women_Welfare" text="Women's Welfare" />
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-0.5 after:bg-orange-500 after:rounded-full">
                  Contact Us
                </h3>
                <div className="space-y-3 text-white/80">
                  <div className="flex items-start gap-3">
                    <MapPinned className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>DYPCOE Akurdi, Pune</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>+91 1800-123-4567</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>support@simplysaral.com.in</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-white/60 text-sm">
                  © 2025 Simply Saral. All rights reserved. Designed to empower Indian citizens.
                </p>
                <div className="flex gap-6 text-sm text-white/60">
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                  <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Back to Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 text-white rounded-full flex items-center justify-center shadow-lg transform hover:-translate-y-1 transition-all duration-300 z-50"
            style={{ backgroundColor: theme === 'dark' ? '#2563eb' : '#1d4ed8' }}
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </>
  );
}

// Service Card Component
function ServiceCard({ theme, title, subtitle, description, icon, href, gradientFrom, gradientTo, iconColor, buttonColor }: {
  theme: 'light' | 'dark';
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  gradientFrom: string;
  gradientTo: string;
  iconColor: string;
  buttonColor: string;
}) {
  return (
    <div className="rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden" style={{ 
      backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
      border: theme === 'dark' ? '1px solid #334155' : 'none',
      boxShadow: theme === 'dark' ? '0 20px 25px -5px rgba(15, 23, 42, 0.5)' : undefined
    }}>
      <div className="p-6 relative overflow-hidden" style={{ background: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo})` }}>
        <div className="absolute -right-5 -bottom-5 w-30 h-30 bg-white/10 rounded-full"></div>
        <div className="absolute -left-5 -top-5 w-20 h-20 bg-white/10 rounded-full"></div>
        <div className="relative z-10">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg" style={{ 
            backgroundColor: theme === 'dark' ? '#334155' : '#ffffff',
            border: theme === 'dark' ? '1px solid #475569' : 'none',
            boxShadow: theme === 'dark' ? '0 4px 6px rgba(96, 165, 250, 0.2)' : undefined
          }}>
            <div style={{ color: theme === 'dark' ? '#93c5fd' : iconColor }}>
              {icon}
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
          <p className="text-white/80 text-sm mb-4">{subtitle}</p>
        </div>
      </div>
      
      <div className="p-6 flex-grow">
        <p className="mb-6" style={{ color: theme === 'dark' ? '#cbd5e1' : '#4b5563' }}>{description}</p>
        <Link href={href} className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold transform hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group" style={{ backgroundColor: buttonColor }}>
          <span className="relative z-10">Learn More</span>
          <ArrowRight className="w-5 h-5 relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
        </Link>
      </div>
    </div>
  );
}

// Stat Card Component
function StatCard({ icon, number, text }: { icon: React.ReactNode; number: string; text: string }) {
  return (
    <div className="text-center p-6 rounded-lg backdrop-blur-sm transform hover:-translate-y-1 transition-all duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
      <div className="flex justify-center mb-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
        {icon}
      </div>
      <div className="text-4xl font-bold mb-2">{number}</div>
      <div style={{ color: 'rgba(255, 255, 255, 0.9)' }}>{text}</div>
    </div>
  );
}

// Feature Item Component
function FeatureItem({ theme, icon, title, description }: { theme: 'light' | 'dark'; icon: React.ReactNode; title: string; description: string }) {
  return (
    <li className="flex gap-4">
      <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ 
        backgroundColor: theme === 'dark' ? 'rgba(96, 165, 250, 0.2)' : '#dbeafe',
        boxShadow: theme === 'dark' ? '0 4px 6px rgba(96, 165, 250, 0.2)' : 'none'
      }}>
        <div style={{ color: theme === 'dark' ? '#93c5fd' : '#1d4ed8' }}>
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2" style={{ color: theme === 'dark' ? '#ffffff' : '#111827' }}>{title}</h3>
        <p style={{ color: theme === 'dark' ? '#9ca3af' : '#4b5563' }}>{description}</p>
      </div>
    </li>
  );
}

// Social Link Component
function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full flex items-center justify-center transform hover:-translate-y-1 transition-all duration-300"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
    >
      {icon}
    </a>
  );
}

// Footer Link Component
function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <li>
      <Link href={href} className="flex items-center gap-2 transform hover:translate-x-1 transition-all duration-300" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
        <ChevronRight className="w-3 h-3" />
        {text}
      </Link>
    </li>
  );
}