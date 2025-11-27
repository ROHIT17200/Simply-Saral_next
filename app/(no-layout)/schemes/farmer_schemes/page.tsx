"use client";

import { useEffect, useState } from "react";
import WelfareSchemesPage, { SchemeData, CarouselSlide, FilterCategory, IconName } from "../../../(common)/_welfSchComp";
import axios from "axios";

const FARMER_CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    image: "/Images/farmer_welf/kisan_Credit_Card.jpg",
    title: "Kisan Credit Card",
    subtitle: "Providing financial support to farmers"
  },
  {
    image: "/Images/farmer_welf/pm_Kisan_Samman.jpg", 
    title: "PM Kisan Samman",
    subtitle: "Direct benefit transfer for farmers"
  },
  {
    image: "/Images/farmer_welf/PMKSY.jpg",
    title: "PMKSY Scheme",
    subtitle: "Promoting efficient water use in farming"
  },
  {
    image: "/Images/farmer_welf/pradhan_Mantri_Fasal.jpg", 
    title: "Fasal Bima Yojana",
    subtitle: "Crop insurance for risk-free farming"
  }
];

const FARMER_FILTER_CATEGORIES: FilterCategory[] = [
  {
    heading: "Category",
    items: [
      { label: "All", icon: "Sparkles" },
      { label: "Income Support Schemes", icon: "BadgeDollarSign" },
      { label: "Crop Insurance & Risk Management", icon: "ShieldCheck" },
      { label: "Credit & Loan Schemes", icon: "Banknote" },
      { label: "Irrigation & Water Management", icon: "Droplet" },
      { label: "Farm Mechanization & Equipment Subsidy", icon: "Cog" },
      { label: "Agricultural Infrastructure & Development", icon: "Building" },
      { label: "Seeds, Fertilizers & Input Support", icon: "Leaf" },
      { label: "Training, Education & Skill Development", icon: "GraduationCap" },
      { label: "Welfare & Social Security Schemes", icon: "HeartPulse" }
    ],
  },
];

export default function FarmerSchemesPage() {
  const [schemes, setSchemes] = useState<SchemeData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        const response = await axios.get("/schemes/farmer_schemes/api");
        setSchemes(response.data.data || []);
        console.log('Farmer schemes loaded:', response.data.data);
      } catch (err) {
        console.error('Error fetching farmer schemes:', err);
        setError('Failed to load schemes');
      } finally {
        setLoading(false);
      }
    };

    fetchSchemes();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading farmer welfare schemes...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-red-600">
          <p className="text-xl font-semibold mb-2">Error Loading Schemes</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <WelfareSchemesPage
      pageTitle="Farmer Welfare Schemes"
      pageSubtitle="Discover government initiatives empowering farmers across India"
      schemes={schemes}
      carouselSlides={FARMER_CAROUSEL_SLIDES}
      filterCategories={FARMER_FILTER_CATEGORIES}
      accentColor={{ light: "blue-700", dark: "orange-400" }}
    />
  );
}