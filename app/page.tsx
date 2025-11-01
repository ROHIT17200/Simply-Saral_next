"use client"
import React, { useState, useEffect } from 'react';

const SchemesPage = () => {
  const [theme, setTheme] = useState('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isDark = theme === 'dark';

  const schemes = [
    {
      id: 1,
      title: 'Secondary Education',
      subtitle: 'Scholarships & Competitive Exams',
      description: 'Empowering Future Leaders - Explore scholarships, competitive exam support, and learning materials designed to help students excel in their secondary education and beyond.',
      icon: '🎓',
      color: 'blue',
      link: '/schemes/secondary_Education',
      features: [
        'Merit-based scholarships',
        'Exam preparation resources',
        'Career counseling support'
      ]
    },
    {
      id: 2,
      title: 'Higher Education',
      subtitle: 'Scholarships & Career Guidance',
      description: 'Unlocking Opportunities for Success - Discover scholarships, career guidance, and academic resources tailored for college and university students to achieve their academic and professional goals.',
      icon: '🎓',
      color: 'blue',
      link: '/schemes/higher_Education',
      features: [
        'College scholarships',
        'Professional development',
        'Research opportunities'
      ]
    },
    {
      id: 3,
      title: "Farmer's Welfare",
      subtitle: 'Agricultural Support Programs',
      description: 'Access agricultural subsidies, crop insurance, soil health cards, and other support programs designed for farmers.',
      icon: '🌾',
      color: 'green',
      link: '/schemes/farmer_Welfare',
      features: [
        'Crop insurance schemes',
        'Agricultural subsidies',
        'Soil health monitoring'
      ]
    },
    {
      id: 4,
      title: "Women's Welfare",
      subtitle: 'Empowerment & Support Programs',
      description: 'Discover programs for women\'s education, entrepreneurship support, maternal health services, and empowerment initiatives.',
      icon: '👩',
      color: 'purple',
      link: '/schemes/women_Welfare',
      features: [
        'Education scholarships',
        'Business grants',
        'Healthcare support'
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: isDark ? 'from-blue-600 to-blue-800' : 'from-blue-500 to-blue-700',
        hover: isDark ? 'hover:from-blue-500 hover:to-blue-700' : 'hover:from-blue-600 hover:to-blue-800',
        button: isDark ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700',
        icon: isDark ? 'bg-slate-800 border-slate-700' : 'bg-white',
        iconColor: isDark ? 'text-blue-400' : 'text-blue-600'
      },
      green: {
        bg: isDark ? 'from-green-600 to-green-800' : 'from-green-600 to-green-800',
        hover: isDark ? 'hover:from-green-500 hover:to-green-700' : 'hover:from-green-700 hover:to-green-900',
        button: isDark ? 'bg-green-600 hover:bg-green-700' : 'bg-green-700 hover:bg-green-800',
        icon: isDark ? 'bg-slate-800 border-slate-700' : 'bg-white',
        iconColor: isDark ? 'text-green-400' : 'text-green-600'
      },
      purple: {
        bg: isDark ? 'from-purple-600 to-purple-800' : 'from-purple-600 to-purple-800',
        hover: isDark ? 'hover:from-purple-500 hover:to-purple-700' : 'hover:from-purple-700 hover:to-purple-900',
        button: isDark ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-700 hover:bg-purple-800',
        icon: isDark ? 'bg-slate-800 border-slate-700' : 'bg-white',
        iconColor: isDark ? 'text-purple-400' : 'text-purple-600'
      }
    };
    return colors[color];
  };

  return (
    <div className={`${isDark ? 'dark bg-slate-900' : 'bg-white'} min-h-screen transition-colors duration-500`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 ${isDark ? 'bg-slate-900/95 border-b border-slate-700' : 'bg-white'} backdrop-blur-lg transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'shadow-sm py-3'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex justify-between items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold">
                <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>Simply</span>
                <span className="text-amber-500"> Saral</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="/" className={`px-4 py-2 rounded-full font-medium transition-all ${isDark ? 'text-slate-200 hover:bg-slate-800' : 'text-gray-700 hover:bg-blue-50'}`}>
                Home
              </a>
              <a href="/#about" className={`px-4 py-2 rounded-full font-medium transition-all ${isDark ? 'text-slate-200 hover:bg-slate-800' : 'text-gray-700 hover:bg-blue-50'}`}>
                About
              </a>
              <a href="/#features" className={`px-4 py-2 rounded-full font-medium transition-all ${isDark ? 'text-slate-200 hover:bg-slate-800' : 'text-gray-700 hover:bg-blue-50'}`}>
                Features
              </a>
              <a href="/#contact" className={`px-4 py-2 rounded-full font-medium transition-all ${isDark ? 'text-slate-200 hover:bg-slate-800' : 'text-gray-700 hover:bg-blue-50'}`}>
                Contact
              </a>
              <a href="/login" className={`px-6 py-2 rounded-full font-semibold transition-all ${isDark ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'} hover:shadow-lg hover:-translate-y-0.5`}>
                Log In
              </a>
              <button onClick={toggleTheme} className={`p-2 rounded-full border-2 transition-all ${isDark ? 'border-blue-400/40 text-blue-400 hover:bg-blue-400/10' : 'border-gray-300 text-gray-700 hover:bg-gray-100'} text-xl`}>
                {isDark ? '☀️' : '🌙'}
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              <span className={`text-2xl ${isDark ? 'text-white' : 'text-gray-700'}`}>
                {mobileMenuOpen ? '✕' : '☰'}
              </span>
            </button>
          </nav>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className={`md:hidden mt-4 pb-4 space-y-3 ${isDark ? 'bg-slate-800' : 'bg-white'} rounded-lg p-4`}>
              <a href="/" className={`block px-4 py-2 rounded-lg ${isDark ? 'text-slate-200 hover:bg-slate-700' : 'text-gray-700 hover:bg-gray-100'}`}>Home</a>
              <a href="/#about" className={`block px-4 py-2 rounded-lg ${isDark ? 'text-slate-200 hover:bg-slate-700' : 'text-gray-700 hover:bg-gray-100'}`}>About</a>
              <a href="/#features" className={`block px-4 py-2 rounded-lg ${isDark ? 'text-slate-200 hover:bg-slate-700' : 'text-gray-700 hover:bg-gray-100'}`}>Features</a>
              <a href="/#contact" className={`block px-4 py-2 rounded-lg ${isDark ? 'text-slate-200 hover:bg-slate-700' : 'text-gray-700 hover:bg-gray-100'}`}>Contact</a>
              <a href="/login" className="block px-4 py-2 rounded-lg bg-blue-600 text-white text-center font-semibold">Log In</a>
              <button onClick={toggleTheme} className={`w-full px-4 py-2 rounded-lg border-2 ${isDark ? 'border-blue-400 text-blue-400' : 'border-gray-300 text-gray-700'}`}>
                {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className={`relative overflow-hidden ${isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-blue-600 to-blue-900'} py-20`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-orange-400">Schemes</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover comprehensive government services and schemes available for different citizen groups, all on one platform.
          </p>
        </div>
      </section>

      {/* Schemes Grid */}
      <section className={`py-20 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {schemes.map((scheme) => {
              const colorClasses = getColorClasses(scheme.color);
              return (
                <div
                  key={scheme.id}
                  className={`${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white'} rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
                >
                  {/* Card Header */}
                  <div className={`bg-gradient-to-br ${colorClasses.bg} ${colorClasses.hover} p-8 relative overflow-hidden transition-all duration-300`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                    
                    <div className={`w-16 h-16 ${colorClasses.icon} ${isDark ? '' : 'shadow-lg'} rounded-full flex items-center justify-center mb-4 relative z-10 ${isDark ? 'border-2' : ''} text-3xl`}>
                      {scheme.icon}
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-2 relative z-10">{scheme.title}</h3>
                    <p className="text-white/90 text-sm relative z-10">{scheme.subtitle}</p>
                  </div>

                  {/* Card Body */}
                  <div className="p-8">
                    <p className={`${isDark ? 'text-slate-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
                      {scheme.description}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {scheme.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>
                          <span className={isDark ? 'text-slate-300' : 'text-gray-600'}>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={scheme.link}
                      className={`inline-flex items-center px-6 py-3 ${colorClasses.button} text-white rounded-full font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5 group`}
                    >
                      Explore Programs
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${isDark ? 'bg-gradient-to-br from-blue-900 to-slate-900' : 'bg-gradient-to-br from-blue-600 to-blue-800'}`}>
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Need Help Finding the Right Scheme?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Our team is here to assist you in discovering and applying for the schemes that best match your needs.
          </p>
          <a href="/#contact" className="inline-flex items-center px-10 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all hover:shadow-2xl hover:-translate-y-1 group">
            Contact Us
            <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDark ? 'bg-slate-950' : 'bg-blue-950'} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">About Simply Saral</h3>
              <p className="text-blue-200 mb-6">
                Making government services accessible to all citizens through a user-friendly digital platform.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                  📘
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                  🐦
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                  📸
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                  💼
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-blue-200">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="/schemes" className="hover:text-white transition-colors">Schemes</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="space-y-2 text-blue-200">
                <li><a href="/schemes/secondary_Education" className="hover:text-white transition-colors">Secondary Education</a></li>
                <li><a href="/schemes/higher_Education" className="hover:text-white transition-colors">Higher Education</a></li>
                <li><a href="/schemes/farmer_Welfare" className="hover:text-white transition-colors">Farmers Welfare</a></li>
                <li><a href="/schemes/women_Welfare" className="hover:text-white transition-colors">Women's Welfare</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-3 text-blue-200">
                <li>📍 DYPCOE Akurdi, Pune</li>
                <li>📞 +91 1800-123-4567</li>
                <li>✉️ support@simplysaral.com.in</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-blue-300 text-sm">
              © 2025 Simply Saral. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-blue-300">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
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