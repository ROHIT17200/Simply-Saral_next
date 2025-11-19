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
import HE from "../../models/HigherEducation.js"

const data = [
  {
    title: "Dr. Panjabrao Deshmukh Vastigruh Nirvah Bhatta Yojna (DTE) – Maharashtra Guide",
    shortDescription: "Hostel and living expense assistance for eligible students pursuing technical and professional courses in Maharashtra.",
    portalLink: "https://mahadbt.maharashtra.gov.in",
    detailedDescription: "The Dr. Panjabrao Deshmukh Vastigruh Nirvah Bhatta Yojna is a hostel and living expense assistance scheme provided by the Government of Maharashtra. It targets students from EWS, SC, ST, OBC, and other eligible categories pursuing technical and professional courses in Maharashtra, offering financial support for hostel and living expenses.",
    benefits: [
      "Hostel expense assistance: ₹30,000/year in metro cities, ₹20,000/year in other cities, ₹10,000/year for rented accommodations.",
      "Grant-based scholarship with no repayment.",
      "Additional ₹5,000/year for female and disabled students.",
      "Merit incentives for students scoring above 80%."
    ],
    eligibilityCriteria: [
      "Must be a resident of Maharashtra.",
      "Enrolled in a technical or professional course in a DTE-approved institution.",
      "No income limit for government hostel students.",
      "Family income below ₹8 lakh per annum for private hostels.",
      "Not availing other hostel benefits."
    ],
    nonEligible: [
      "Students availing other hostel benefits."
    ],
    requiredDocuments: [
      {
        name: "Identity Proof",
        sampleImage: "",
        portalLink: "https://mahadbt.maharashtra.gov.in/sample-form",
        videoLink: ""
      },
      {
        name: "Address Proof",
        sampleImage: "",
        portalLink: "https://mahadbt.maharashtra.gov.in/sample-form",
        videoLink: ""
      },
      {
        name: "Income Certificate",
        sampleImage: "",
        portalLink: "https://mahadbt.maharashtra.gov.in/sample-form",
        videoLink: ""
      },
      {
        name: "Domicile Certificate",
        sampleImage: "",
        portalLink: "https://mahadbt.maharashtra.gov.in/sample-form",
        videoLink: ""
      },
      {
        name: "Admission Letter",
        sampleImage: "",
        portalLink: "https://mahadbt.maharashtra.gov.in/sample-form",
        videoLink: ""
      },
      {
        name: "Hostel Fee Receipt",
        sampleImage: "",
        portalLink: "https://mahadbt.maharashtra.gov.in/sample-form",
        videoLink: ""
      },
      {
        name: "Bank Account Details",
        sampleImage: "",
        portalLink: "https://mahadbt.maharashtra.gov.in/sample-form",
        videoLink: ""
      }
    ],
    applicationProcess: {
      online: [
        "Register at https://mahadbt.maharashtra.gov.in",
        "Create a student profile and select the Dr. Panjabrao Deshmukh Vastigruh Nirvah Bhatta Yojna scheme.",
        "Fill out the scholarship application form with personal, educational, and hostel details.",
        "Upload necessary documents and submit the application.",
        "Track application status on the portal."
      ],
      offline: [
        "Visit your college/university’s scholarship department.",
        "Fill out the Hostel Assistance form and attach the necessary documents.",
        "The institution forwards the application to the Directorate of Technical Education (DTE), Maharashtra for approval."
      ]
    },
    faqs: [],
    imageUrl: ""
  },
  {
    title: "Tuition Fees and Examination Fees Reimbursement Scheme – Maharashtra Guide",
    shortDescription: "Financial aid to cover tuition and examination fees for OBC, SEBC, VJ, NT, SBC students pursuing post-matric education in Maharashtra.",
    portalLink: "https://mahadbt.maharashtra.gov.in",
    detailedDescription: "This scheme supports students from OBC, SEBC, VJ, NT, and SBC categories by reimbursing tuition and examination fees for post-matric courses in government-approved institutions.",
    benefits: [
      "100% tuition fee reimbursement for students in government-aided colleges.",
      "100% examination fee reimbursement for eligible students.",
      "Grant-based scholarship with no repayment.",
      "Additional ₹5,000 per year for female and disabled students.",
      "Merit incentives for students scoring above 80%."
    ],
    eligibilityCriteria: [
      "Must be a resident of Maharashtra.",
      "Enrolled in a recognized post-matric course in an approved institution.",
      "Belong to OBC, SEBC, VJ, NT, SBC categories.",
      "Family income below ₹8 lakh per annum.",
      "Minimum 75% attendance in previous semester.",
      "Not availing other scholarships."
    ],
    nonEligible: [
      "Students exceeding income limit or availing other scholarships."
    ],
    requiredDocuments: [
      {
        name: "Identity Proof",
        sampleImage: "",
        portalLink: "https://mahadbt.maharashtra.gov.in/sample-form",
        videoLink: ""
      },
      {
        name: "Address Proof",
        sampleImage: "",
        portalLink: "https://mahadbt.maharashtra.gov.in/sample-form",
        videoLink: ""
      },
      {
        name: "Income Certificate",
        sampleImage: "",
        portalLink: "https://mahadbt.maharashtra.gov.in/sample-form",
        videoLink: ""
      },
      {
        name: "Caste Certificate",
        sampleImage: "",
        portalLink: "https://mahadbt.maharashtra.gov.in/sample-form",
        videoLink: ""
      },
      {
        name: "Educational Certificates",
        sampleImage: "",
        portalLink: "https://mahadbt.maharashtra.gov.in/sample-form",
        videoLink: ""
      },
      {
        name: "Bank Account Details",
        sampleImage: "",
        portalLink: "https://mahadbt.maharashtra.gov.in/sample-form",
        videoLink: ""
      }
    ],
    applicationProcess: {
      online: [
        "Register at https://mahadbt.maharashtra.gov.in",
        "Create a student profile and select the applicable scholarship scheme.",
        "Fill out the scholarship application form with personal and educational details.",
        "Upload required documents and submit the application.",
        "Track application status on the portal."
      ],
      offline: [
        "Visit your college/university’s scholarship department.",
        "Collect and fill out the scholarship form.",
        "Submit required documents for verification.",
        "The institution forwards the application to the Social Justice and Special Assistance Department for approval."
      ]
    },
    faqs: [],
    imageUrl: ""
  },
  {
    title: "Post Matric Scholarship – Maharashtra",
    shortDescription: "Scholarships for economically weaker students from SC, ST, OBC, EWS and minority communities covering tuition, exam fees, and hostel expenses.",
    portalLink: "https://mahadbt.maharashtra.gov.in",
    detailedDescription: "The Maharashtra Government offers Post Matric Scholarships to economically weaker students from SC, ST, OBC, EWS, and minority communities to cover tuition fees, exam fees, hostel expenses, and other education costs beyond the 10th standard.",
    benefits: [
      "Covers 100% of tuition and exam fees for eligible students.",
      "Includes hostel expense coverage.",
      "Grant-based scholarship with no repayment.",
      "Additional benefits of ₹2,000 to ₹5,000 for female, disabled, and high-merit students."
    ],
    eligibilityCriteria: [
      "Permanent resident of Maharashtra.",
      "Passed Class 10 and enrolled in a recognized post-matric course.",
      "Belongs to SC, ST, OBC, EWS or minority communities.",
      "Income limits vary: No limit for SC/ST, ₹8 lakh for OBC/SBC/VJNT/EWS, ₹2.5 lakh for minorities.",
      "Minimum attendance as per guidelines.",
      "Not availing other scholarships."
    ],
    nonEligible: [
      "Students exceeding income limits or availing other scholarships."
    ],
    requiredDocuments: [
      {
        name: "Identity Proof",
        sampleImage: "",
        portalLink: "https://mahadbt.maharashtra.gov.in/sample-form",
        videoLink: ""
      },
      {
        name: "Address Proof",
        sampleImage: "",
        portalLink: "https://mahadbt.maharashtra.gov.in/sample-form",
        videoLink: ""
      },
      {
        name: "Income Certificate",
        sampleImage: "",
        portalLink: "https://mahadbt.maharashtra.gov.in/sample-form",
        videoLink: ""
      },
      {
        name: "Caste Certificate",
        sampleImage: "",
        portalLink: "https://mahadbt.maharashtra.gov.in/sample-form",
        videoLink: ""
      },
      {
        name: "Educational Certificates",
        sampleImage: "",
        portalLink: "https://mahadbt.maharashtra.gov.in/sample-form",
        videoLink: ""
      },
      {
        name: "Bank Account Details",
        sampleImage: "",
        portalLink: "https://mahadbt.maharashtra.gov.in/sample-form",
        videoLink: ""
      }
    ],
    applicationProcess: {
      online: [
        "Register at https://mahadbt.maharashtra.gov.in",
        "Create a student profile and select the applicable scholarship scheme.",
        "Fill out the scholarship application form with personal and educational details.",
        "Upload required documents and submit the application.",
        "Track application status on the portal."
      ],
      offline: [
        "Visit your college/university’s scholarship department.",
        "Collect and fill out the scholarship form.",
        "Submit required documents for verification.",
        "The institution forwards the application to the Social Justice and Special Assistance Department for approval."
      ]
    },
    faqs: [],
    imageUrl: ""
  }
];

export default data;


const InsertData=async()=>{
    connection();
    await HE.deleteMany();
    const ack=await HE.insertMany(data);
}
InsertData()