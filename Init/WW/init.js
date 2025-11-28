import dotenv from 'dotenv'; // Note: You need the full import now

// Calculate the path to the project root directory
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// The .env file is 3 levels up from the current file's directory:
// init.js -> Init/SE/init.js
// .env is in -> Simply-Saral_next/
const envPath = resolve(__dirname, '../../.env'); 

dotenv.config({ path: envPath });

import connection from "../../lib/conn.js";
import WW from "../../models/WomenWelfare.js"

const data= [
  {
  title: "Beti Bachao Beti Padhao (BBBP)",
  shortName: "Beti Bachao Beti Padhao",
  keyInfo: {
    duration: "Ongoing Scheme",
    amount: "No direct monthly cash benefit; linked to Sukanya Samriddhi and awareness activities",
    applyFrom: "22 January 2015",
    lastDate: "No fixed last date (continuing scheme)"
  },

  shortDescription:
    "A national campaign and scheme to address declining child sex ratio, prevent gender-biased sex selection, and promote education and empowerment of the girl child across India.",

  detailedDescription: [
    "Beti Bachao Beti Padhao (BBBP) is a flagship national initiative launched in 2015 to tackle the declining Child Sex Ratio (CSR) and related issues of discrimination and neglect of the girl child.",
    "The scheme is implemented as a tri-ministerial effort by the Ministry of Women and Child Development, Ministry of Health and Family Welfare, and Ministry of Education, combining awareness campaigns and multi-sectoral interventions in targeted districts.",
    "BBBP promotes attitudinal change, prevention of gender-biased sex selection, improved girl child survival, and universal access to quality education for girls through coordinated action of government departments and community participation."
  ],

  portalLink: "https://wcd.nic.in/bbbp-schemes",

  benefits: [
    "Address the declining child sex ratio and prevent gender-biased sex selection",
    "Promote gender equality and the value of the girl child in family and society",
    "Improve survival, health, and education outcomes for girls through convergent government action",
    "Support opening and promotion of Sukanya Samriddhi Accounts for girl children along with tax and interest benefits",
    "Encourage community participation, local campaigns, and behavioral change communication in identified districts"
  ],

  eligibilityCriteria: [
    "Families with at least one girl child, generally below 10 years of age, for benefits linked to Sukanya Samriddhi Accounts",
    "The girl child must be an Indian citizen",
    "A Sukanya Samriddhi Account should be opened in the name of the eligible girl at a designated bank or post office for linked financial benefits",
    "Residents of districts and areas where BBBP interventions and campaigns are being actively implemented"
  ],

  nonEligible: [
    "Non-resident Indians (NRIs) for Sukanya Samriddhi / linked financial benefits",
    "Families without a girl child for girl-child-specific financial components",
    "Applicants who do not meet age, residency, or account-opening conditions prescribed for Sukanya Samriddhi or related benefits"
  ],

  requiredDocuments: [
    {
      id: 1,
      name: "Girl Child Birth Certificate",
      description:
        "Official birth certificate of the girl child issued by a recognized hospital or government authority",
      image: "/Images/bbbp/birth-certificate.jpeg",
      officialLink: "https://wcd.nic.in/",
      videoGuide: "https://youtu.be/bbbp-birthcertificate",
      importance: "High"
    },
    {
      id: 2,
      name: "Identity Proof of Parents/Guardian",
      description:
        "Aadhaar card, PAN card, ration card, or any valid government-issued identity proof of parents or guardian",
      image: "/Images/bbbp/parent-id.jpeg",
      officialLink: "https://uidai.gov.in/",
      videoGuide: "https://youtu.be/bbbp-parentid",
      importance: "High"
    },
    {
      id: 3,
      name: "Address Proof",
      description:
        "Passport, voter ID, ration card, driving licence, or recent utility bills (electricity, water, telephone, etc.) as address proof",
      image: "/Images/bbbp/address-proof.jpeg",
      officialLink: "https://www.india.gov.in/",
      videoGuide: "https://youtu.be/bbbp-addressproof",
      importance: "High"
    },
    {
      id: 4,
      name: "Passport Size Photographs",
      description:
        "Recent passport-sized photographs of the girl child and parents/guardian as required by bank or post office",
      image: "/Images/bbbp/photograph.jpeg",
      officialLink: "https://www.passportindia.gov.in/",
      videoGuide: "https://youtu.be/bbbp-photos",
      importance: "Medium"
    },
    {
      id: 5,
      name: "Sukanya Samriddhi Account Form",
      description:
        "Filled application form for Sukanya Samriddhi Account or BBBP-linked savings account at bank or post office",
      image: "/Images/bbbp/ssa-form.jpeg",
      officialLink: "https://www.indiapost.gov.in/",
      videoGuide: "https://youtu.be/bbbp-ssaform",
      importance: "Medium"
    }
  ],

  applicationProcess: {
    online: [
      "Visit the official Women and Child Development portal or the Sukanya Samriddhi information page for scheme details and latest instructions",
      "Check eligible banks or post offices that provide Sukanya Samriddhi Accounts and BBBP-linked services",
      "Download or access the Sukanya Samriddhi Account application form and gather required documents for the girl child and parents",
      "Follow any online appointment or enquiry process offered by the selected bank or post office, if available"
    ],
    offline: [
      "Visit a nearby participating bank branch or post office where Sukanya Samriddhi Accounts are offered",
      "Obtain and fill the application form for Sukanya Samriddhi / BBBP-linked account in the name of the girl child",
      "Attach required documents such as birth certificate, identity proof, address proof, and photographs",
      "Submit the completed form and initial deposit at the same bank or post office and obtain the passbook or account details",
      "Contact local Women and Child Development, Health, or Education department offices for information on BBBP awareness activities and support"
    ]
  },

  faqs: [
    {
      question: "What is the main objective of Beti Bachao Beti Padhao?",
      answer:
        "The scheme aims to improve the child sex ratio, prevent gender-biased sex selection, and promote survival, protection, and education of the girl child across India."
    },
    {
      question: "Is there any direct cash transfer benefit under BBBP?",
      answer:
        "BBBP primarily focuses on awareness and convergence of services; financial benefits are usually linked through schemes like Sukanya Samriddhi Accounts opened in the name of the girl child."
    },
    {
      question: "Who can open a Sukanya Samriddhi Account under this scheme?",
      answer:
        "Parents or legal guardians of an Indian girl child below a specified age (generally below 10 years) can open a Sukanya Samriddhi Account at designated banks or post offices."
    },
    {
      question: "Where can application forms for BBBP-linked benefits be obtained?",
      answer:
        "Forms for Sukanya Samriddhi or other linked savings products are available at participating bank branches and post offices, and basic scheme information is available on official government portals."
    },
    {
      question: "Is there any fee for enrolling in BBBP?",
      answer:
        "There is no fee for participating in awareness activities; for savings components like Sukanya Samriddhi, only the prescribed deposit amount and usual bank or post office norms apply."
    }
  ],

  imageUrl: "/Images/women_welf/beti_bachao_beti_padhao.jpg",
  launchedYear: 2015,
  category: "Education & Skill Development",
  detailedPage: "BBBP",
  icon: "GraduationCap"
},
  {
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
  }
];

const InsertData=async()=>{
    connection();
    await WW.deleteMany();
    const ack=await WW.insertMany(data);
}
InsertData()