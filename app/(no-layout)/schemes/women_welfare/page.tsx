import WelfareSchemesPage, { SchemeData, CarouselSlide, FilterCategory, IconName } from "../../../_welfSchComp";
import axios from "axios";

const getData = async () => {
  const Fdata = await axios.get("http://localhost:3000/schemes/women_welfare/api");
  console.log(Fdata);
}

getData();

// Use string identifiers for icons
const WOMEN_WELFARE_SCHEMES: SchemeData[] =[
  {
    title: "Beti Bachao Beti Padhao (BBBP)",
    shortDescription: "hello",
    portalLink: "https://wcd.nic.in/bbbp-schemes",
    detailedDescription: "hello",
    benefits: [
      "Address the declining child sex ratio",
      "Promote gender equality",
      "Ensure education for the girl child"
    ],
    eligibilityCriteria: [], // Not provided explicitly for this scheme in original data
    nonEligible: [], // Not provided explicitly for this scheme in original data
    requiredDocuments: [
      // No direct mapping of documents array from original data, only photos and PDFs described
    ],
    applicationProcess: {
      online: [
        // No explicit online application steps given for this scheme
      ],
      offline: [
        // No explicit offline application steps given for this scheme
      ]
    },
    faqs: [], // No FAQs given
    imageUrl: "", 
    launchedYear:2015,
    category:"Education & Skill Development",
    detailedPage:"BBBP",
    icon:"GraduationCap"
  },
  {
    title: "Ladki Bahin Yojana (Mukhya Mantri Mazi Ladki Bahin Yojana)",
    shortDescription: "hello",
    portalLink: "https://ladakibahin.maharashtra.gov.in",
    detailedDescription: "hello",
    benefits: [
      "Provide financial support to women",
      "Empower women through direct financial assistance"
    ],
    eligibilityCriteria: [
      "Resident of Maharashtra",
      "Women aged 21–65 years",
      "Annual family income less than ₹2.5 lakh",
      "Not an Income Tax payer",
      "Must not own luxury assets (e.g., four-wheelers, AC, high-value gold/silver)"
    ],
    nonEligible: [], // Not explicitly given
    requiredDocuments: [
      { name: "Aadhaar Card" },
      { name: "Residence Proof" },
      { name: "Income Certificate" },
      { name: "Bank Passbook Copy" },
      { name: "Recent Photograph" }
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
    faqs: [], // Not provided
    imageUrl: "",
    launchedYear:2023,
    category:"Financial Assistance & Social Security",
    detailedPage:"LBY",
    icon:'Shield'
  }
];

const WOMEN_CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    image: "/Images/women_welf/beti_Bachao.jpg",
    title: "Education Empowerment",
    subtitle: "Building brighter futures through education"
  },
  {
    image: "/Images/women_welf/ladki_bahin.jpg",
    title: "Financial Independence",
    subtitle: "Supporting women's economic growth"
  },
  {
    image: "/Images/women_welf/swadhar_grih.jpg",
    title: "Social Support",
    subtitle: "Creating safe spaces for women"
  },
  {
    image: "/Images/women_welf/women-emp.webp",
    title: "Women Empowerment",
    subtitle: "Transforming lives, building nation"
  }
];

const WOMEN_FILTER_CATEGORIES: FilterCategory[] = [
  {
    heading: "Category",
    items: [
      { label: "All", icon: "Sparkles" },
      { label: "Health & Welfare", icon: "HeartPulse" },
      { label: "Education", icon: "GraduationCap" },
      { label: "Financial Assistance", icon: "BadgeDollarSign" },
      { label: "Social Support", icon: "Home" },
      // { label: "Women Safety", icon: "ShieldCheck" },
      // { label: "Employment & Entrepreneurship", icon: "Briefcase" },
    ],
  },
];

// Your API call (unchanged)

export default function WomenWelfarePage() {
  return (
    <WelfareSchemesPage
      pageTitle="Women Welfare Schemes"
      pageSubtitle="Discover government initiatives empowering women across India"
      schemes={WOMEN_WELFARE_SCHEMES}
      carouselSlides={WOMEN_CAROUSEL_SLIDES}
      filterCategories={WOMEN_FILTER_CATEGORIES}
      accentColor={{ light: "blue-700", dark: "orange-400" }}
    />
  );
}
