"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/app/context/ThemeContext";
import createScheme from './newServerAction'
import { useActionState } from "react";
import {
  ArrowLeft,
  Save,
  Plus,
  Trash2,
  Upload,
  Calendar,
  IndianRupee,
  CheckCircle,
  XCircle,
  Link as LinkIcon,
  Video,
} from "lucide-react";


// Interface for Required Documents
interface IRequiredDocument {
  name: string;
  description: string;
  image?: string;
  officialLink?: string;
  videoGuide?: string;
  importance?: "High" | "Medium" | "Low";
}

// Interface for FAQA
interface IFaq {
  question: string;
  answer: string;
}

// Interface for EC
interface EligibilityState {
  eligible: string[];
  nonEligible: string[];
};

// Interface for AP
interface ApplicationProcessState  {
  online: string[];
  offline: string[];
};

export interface SchemeFormData {
  title: string;
  shortName: string;
  shortDescription: string;
  detailedDescription: string[];
  portalLink: string;
  imageUrl: string;
  launchedYear: string;
  category: string;
  detailedPage: string;
  icon: string;
  keyInfo: {
    duration: string;
    amount: string;
    applyFrom: string;
    lastDate: string;
  };
  benefits: string[];
  eligibilityCriteria: string[];
  nonEligible: string[];
  requiredDocuments: IRequiredDocument[];
  applicationProcess: {
    online: string[];
    offline: string[];
  };
  faqs: IFaq[];
}


export default function CreateSchemePage() {
  const { theme } = useTheme();
  const router = useRouter();

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [externalImageUrl, setExternalImageUrl] = useState("");

  
  // <----------------------------------------->
  // <----------------------------------------->


//state for Required documents
  const [documents, setDocuments] = useState<IRequiredDocument[]>([
    {
     name: "",
    description: "",
    image:"",
    officialLink:"",
    videoGuide:"",
    importance:"Low",
    }
  ]);

//state for eligibility criteria 
  const [eligibilityState, setEligibilityState] =
  useState<EligibilityState>({
    eligible: [""],
    nonEligible: [""],
  });


//state for Application Process
const [applicationProcess, setApplicationProcess] =useState<ApplicationProcessState>({
    online: [""],
    offline: [""],
  });


//state for FAQ's
  const [faqs, setFaqs] = useState<IFaq[]>([
  { question: "", answer: "" },
]);

//state for detailed description
const [detailedDescription, setDetailedDescription] = useState<string[]>([
  "",
]);

//state for benefits
const [benefits, setBenefits] = useState<string[]>([""]);




// <------------------------------------------->
// <----------------------------------------->


  // helper1

  // Update field
  const updateDocument = <K extends keyof IRequiredDocument>(
  index: number,
  field: K,
  value: IRequiredDocument[K]
) => {
  const copy = [...documents];
  copy[index][field] = value;
  setDocuments(copy);
};

// Add new document
  const addDocument = () => {
    setDocuments([
      ...documents,
      {
        name: "",
        description: "",
        image: "",
        officialLink: "",
        videoGuide: "",
        importance: "Medium",
      },
    ]);
  };


  //helper 2

  const updateEligibility = (
  section: "eligible" | "nonEligible",
  index: number,
  value: string
) => {
  const copy = { ...eligibilityState };
  copy[section][index] = value;
  setEligibilityState(copy);
};

const addEligibility = (section: "eligible" | "nonEligible") => {
  setEligibilityState({
    ...eligibilityState,
    [section]: [...eligibilityState[section], ""],
  });
};

const removeEligibility = (
  section: "eligible" | "nonEligible",
  index: number
) => {
  setEligibilityState({
    ...eligibilityState,
    [section]: eligibilityState[section].filter((_, i) => i !== index),
  });
};

//helper 3
const updateProcessStep = (
  type: "online" | "offline",
  index: number,
  value: string
) => {
  const copy = { ...applicationProcess };
  copy[type][index] = value;
  setApplicationProcess(copy);
};

const addProcessStep = (type: "online" | "offline") => {
  setApplicationProcess({
    ...applicationProcess,
    [type]: [...applicationProcess[type], ""],
  });
};

const removeProcessStep = (
  type: "online" | "offline",
  index: number
) => {
  setApplicationProcess({
    ...applicationProcess,
    [type]: applicationProcess[type].filter((_, i) => i !== index),
  });
};

// <----------------------------------------->

//helper4
const updateFaq = (
  index: number,
  field: keyof IFaq,
  value: string
) => {
  const copy = [...faqs];
  copy[index][field] = value;
  setFaqs(copy);
};

const addFaq = () => {
  setFaqs([...faqs, { question: "", answer: "" }]);
};

const removeFaq = (index: number) => {
  setFaqs(faqs.filter((_, i) => i !== index));
};

  const isDark = theme === "dark";

  //helper 5
  const updateDescription = (index: number, value: string): void => {
  setDetailedDescription((prev) =>
    prev.map((item, i) => (i === index ? value : item))
  );
};

const addDescription = (): void => {
  setDetailedDescription((prev) => [...prev, ""]);
};

const removeDescription = (index: number): void => {
  setDetailedDescription((prev) => prev.filter((_, i) => i !== index));
};

//helper5

const updateBenefit = (index: number, value: string): void => {
  setBenefits((prev) =>
    prev.map((item, i) => (i === index ? value : item))
  );
};

const addBenefit = (): void => {
  setBenefits((prev) => [...prev, ""]);
};

const removeBenefit = (index: number): void => {
  setBenefits((prev) => prev.filter((_, i) => i !== index));
};


const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;

  setImagePreview(URL.createObjectURL(file));
  setExternalImageUrl(""); // clear URL if file chosen
};


  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <button
            onClick={() => router.back()}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium mb-4 ${
              isDark
                ? "bg-slate-800 hover:bg-slate-700"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <h1 className="text-2xl lg:text-3xl font-bold">Create New Scheme</h1>
          <p className={isDark ? "text-gray-400" : "text-gray-600"}>
            Fill in all required details for the new government scheme
          </p>
        </div>
      </div>

      <form action={createScheme} encType="multipart/form-data" className="space-y-8">
            <div
              className={`p-6 rounded-xl shadow-lg ${
                isDark ? "bg-slate-800" : "bg-white"
              }`}
            >
              <h2 className="text-xl font-bold mb-6 pb-4 border-b">
                Basic Information
              </h2>

              {/* title */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Scheme Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      isDark
                        ? "bg-slate-700 border-slate-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                    placeholder="Enter scheme title"
                  />
                </div>

              {/* shortName */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Short Name *
                  </label>
                  <input
                    type="text"
                    name="shortName"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      isDark
                        ? "bg-slate-700 border-slate-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                    placeholder="Enter short name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Category *
                  </label>
                  <select
                    
                    name="group"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      isDark
                        ? "bg-slate-700 border-slate-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                  >
                    <option value="farmer">Farmers</option>
                    <option value="women">Women</option>
                    <option value="secondary">Senior Citizens</option>
                    <option value="higher">Healthcare</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Launched Year *
                  </label>
                  <input
                    type="number"
                    
                    min="2000"
                    max="2030"
                    name="launchedYear"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      isDark
                        ? "bg-slate-700 border-slate-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                    placeholder="2024"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">
                    Short Description *
                  </label>
                  <textarea
                    rows={3}
                    name="shortDescription"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      isDark
                        ? "bg-slate-700 border-slate-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                    placeholder="Brief description of the scheme"
                  />
                </div>

              {/* detailedDescription */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">
                Detailed Description
              </label>

              {detailedDescription.map((desc, index) => (
                <div key={index} className="flex gap-2 mb-3">
                  <textarea
                    value={desc}
                    onChange={(e) => updateDescription(index, e.target.value)}
                    className={`flex-1 px-4 py-2 rounded-lg border ${
                      isDark
                        ? "bg-slate-700 border-slate-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                    placeholder={`Paragraph ${index + 1}`}
                    rows={2}
                  />

                  {detailedDescription.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeDescription(index)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  )}
                </div>
              ))}

              <button
                type="button"
                onClick={addDescription}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                  isDark
                    ? "bg-slate-700 hover:bg-slate-600"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <Plus className="w-4 h-4" />
                Add Paragraph
              </button>

              {/* Hidden input for submission */}
              <input
                type="hidden"
                name="detailedDescription"
                value={JSON.stringify(detailedDescription)}
              />
            </div>


              {/* Portal Link */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">
                    Portal Link *
                  </label>
                  <div className="flex gap-2">
                    <LinkIcon
                      className={`w-5 h-5 mt-2 ${
                        isDark ? "text-gray-400" : "text-gray-500"
                      }`}
                    />
                    <input
                      type="url"
                      name="portalLink"
                      className={`flex-1 px-4 py-2 rounded-lg border ${
                        isDark
                          ? "bg-slate-700 border-slate-600 text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      }`}
                      placeholder="https://official-portal.gov.in"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Key Information */}
            <div
              className={`p-6 rounded-xl shadow-lg ${
                isDark ? "bg-slate-800" : "bg-white"
              }`}
            >
              <h2 className="text-xl font-bold mb-6 pb-4 border-b">
                Key Information
              </h2>

              {/* Duration */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Duration
                  </label>
                  <input
                    type="text"
                    name="duration"
          
                    className={`w-full px-4 py-2 rounded-lg border ${
                      isDark
                        ? "bg-slate-700 border-slate-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                    placeholder="e.g., 1 Year"
                  />
                </div>

              {/* Amount/Benefits */}
                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <IndianRupee className="w-4 h-4" />
                    Amount/Benefit
                  </label>
                  <input
                    type="text"
                    name="amount"
                   
                    className={`w-full px-4 py-2 rounded-lg border ${
                      isDark
                        ? "bg-slate-700 border-slate-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                    placeholder="e.g., ₹50,000 per year"
                  />
                </div>

              {/* Apply Form */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Apply From
                  </label>
                  <input
                    type="date"
                    name="applyFrom"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      isDark
                        ? "bg-slate-700 border-slate-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                  />
                </div>

              {/* Last Date */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Last Date
                  </label>
                  <input
                    type="date"
                    name="lastDate"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      isDark
                        ? "bg-slate-700 border-slate-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Image Upload */}
           <div
              className={`p-6 rounded-xl shadow-lg ${
                isDark ? "bg-slate-800" : "bg-white"
              }`}
            >
              <h2 className="text-xl font-bold mb-6 pb-4 border-b">
                Scheme Image
              </h2>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* FILE UPLOAD */}
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">
                Upload Scheme Image *
              </label>

            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center ${
                isDark
                  ? "border-slate-600 hover:border-slate-500"
                  : "border-gray-300 hover:border-gray-400"
              } transition-colors`}
            >
            <input
              type="file"
              id="image-upload"
              name="image" 
              accept="image/*"
              onChange={handleImageUpload}
              disabled={externalImageUrl.length > 0}
              className="hidden"
            />

        <label htmlFor="image-upload" className="cursor-pointer">
          {imagePreview ? (
            <div className="flex flex-col items-center">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-lg mb-4"
              />
              <p className="text-sm text-gray-500">
                Click to change image
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <Upload className="w-12 h-12 text-gray-400 mb-4" />
              <p className="font-medium mb-2">
                Click to upload image
              </p>
              <p className="text-sm text-gray-500">
                PNG, JPG, WEBP up to 5MB
              </p>
            </div>
          )}
        </label>
      </div>
    </div>

    {/* IMAGE URL */}
    <div className="flex-1">
      <label className="block text-sm font-medium mb-2">
        Or Enter Image URL
      </label>

      <input
        type="url"
        name="externalImageUrl"
        value={externalImageUrl}
        onChange={(e) => {
          setExternalImageUrl(e.target.value);
          setImagePreview(null); // clear file preview
        }}
        disabled={!!imagePreview}
        placeholder="https://example.com/image.jpg"
        className={`w-full px-4 py-2 rounded-lg border mb-4 ${
          isDark
            ? "bg-slate-700 border-slate-600 text-white"
            : "bg-white border-gray-300 text-gray-900"
        }`}
      />

      {/* ICON */}
      <div className="mt-4">
        <label className="block text-sm font-medium mb-2">
          Icon
        </label>
        <select
          name="icon"
          className={`w-full px-4 py-2 rounded-lg border ${
            isDark
              ? "bg-slate-700 border-slate-600 text-white"
              : "bg-white border-gray-300 text-gray-900"
          }`}
        >
          <option value="BookOpen">Book Open</option>
          <option value="GraduationCap">Graduation Cap</option>
          <option value="Heart">Heart</option>
          <option value="Sprout">Sprout</option>
          <option value="Shield">Shield</option>
          <option value="Briefcase">Briefcase</option>
          <option value="Users">Users</option>
          <option value="Home">Home</option>
        </select>
      </div>
    </div>
  </div>
</div>


            {/* Benefits */}
           <div
              className={`p-6 rounded-xl shadow-lg ${
                isDark ? "bg-slate-800" : "bg-white"
              }`}
            >
              <h2 className="text-xl font-bold mb-6 pb-4 border-b">
                Benefits
              </h2>

              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-2 mb-3">
                  <div className="flex items-start pt-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>

                  <textarea
                    value={benefit}
                    onChange={(e) => updateBenefit(index, e.target.value)}
                    className={`flex-1 px-4 py-2 rounded-lg border ${
                      isDark
                        ? "bg-slate-700 border-slate-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                    placeholder={`Benefit ${index + 1}`}
                    rows={2}
                  />

                  {benefits.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeBenefit(index)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg mt-2"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  )}
                </div>
              ))}

              <button
                type="button"
                onClick={addBenefit}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                  isDark
                    ? "bg-slate-700 hover:bg-slate-600"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <Plus className="w-4 h-4" />
                Add Benefit
              </button>

              {/* 🔒 Hidden input for form submission */}
              <input
                type="hidden"
                name="benefits"
                value={JSON.stringify(benefits)}
              />
        </div>


            {/* Eligibility Criteria */}
          <div
             className={`p-6 rounded-xl shadow-lg ${
                  isDark ? "bg-slate-800" : "bg-white"
                }`}
              >
                <h2 className="text-xl font-bold mb-6 pb-4 border-b">
                  Eligibility Criteria
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* ELIGIBLE */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-green-600">
                      Eligible Applicants
                    </h3>

                  {eligibilityState.eligible.map((item, index) => (
                    <div
                      key={index}
                      className={`p-5 rounded-lg border-l-4 border-green-500 ${
                        isDark ? "bg-slate-700/50" : "bg-green-50/50"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold">
                          Eligibility #{index + 1}
                        </h4>

                        {eligibilityState.eligible.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeEligibility("eligible", index)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        )}
                      </div>

                      <textarea
                        placeholder="Description"
                        value={item}
                        onChange={(e) =>
                          updateEligibility("eligible", index, e.target.value)
                        }
                        rows={2}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          isDark
                            ? "bg-slate-700 border-slate-600 text-white"
                            : "bg-white border-gray-300"
                        }`}
                      />
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={() => addEligibility("eligible")}
                    className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg ${
                      isDark ? "bg-slate-700" : "bg-gray-100"
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                    Add Eligible Criteria
                  </button>
                </div>

                {/* NOT ELIGIBLE */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-red-600">
                    Not Eligible
                  </h3>

                  {eligibilityState.nonEligible.map((item, index) => (
                    <div
                      key={index}
                      className={`p-5 rounded-lg border-l-4 border-red-500 ${
                        isDark ? "bg-slate-700/50" : "bg-red-50/50"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold">
                          Restriction #{index + 1}
                        </h4>

                        {eligibilityState.nonEligible.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeEligibility("nonEligible", index)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        )}
                      </div>

                      <textarea
                        placeholder="Description"
                        value={item}
                        onChange={(e) =>
                          updateEligibility("nonEligible", index, e.target.value)
                        }
                        rows={2}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          isDark
                            ? "bg-slate-700 border-slate-600 text-white"
                            : "bg-white border-gray-300"
                        }`}
                      />
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={() => addEligibility("nonEligible")}
                    className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg ${
                      isDark ? "bg-slate-700" : "bg-gray-100"
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                    Add Non-Eligible Case
                  </button>
                </div>
              </div>

              <input
                type="hidden"
                name="eligibility"
                value={JSON.stringify({
                  eligible: eligibilityState.eligible,
                  nonEligible: eligibilityState.nonEligible,
                })}
              />
        </div>

           {/* Required Documents */}
            <div
              className={`p-6 rounded-xl shadow-lg ${
                isDark ? "bg-slate-800" : "bg-white"
              }`}
            >
              <h2 className="text-xl font-bold mb-6 pb-4 border-b flex items-center gap-2">
                <Video className="w-5 h-5" />
                Required Documents
              </h2>

              <div className="space-y-6">
                {documents.map((doc, index) => (
                  <div 
                    key={index} 
                    className={`p-6 rounded-lg border-l-4 ${
                      doc.importance === "High" 
                        ? "border-red-500 bg-red-50/50" 
                        : doc.importance === "Medium"
                        ? "border-yellow-500 bg-yellow-50/50"
                        : "border-blue-500 bg-blue-50/50"
                    } ${isDark ? "bg-slate-700/50" : ""}`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        Document #{index + 1}
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          doc.importance === "High" 
                            ? "bg-red-100 text-red-800" 
                            : doc.importance === "Medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                        } ${isDark ? "bg-slate-600 text-slate-200" : ""}`}>
                          {doc.importance}
                        </span>
                      </h3>
                      
                      {documents.length > 1 && (
                        <button
                          type="button"
                          onClick={() => {
                            setDocuments(documents.filter((_, i) => i !== index));
                          }}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Remove document"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Document Name */}
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                          Document Name *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., Aadhaar Card"
                          value={doc.name}
                          onChange={(e) => updateDocument(index, "name", e.target.value)}
                          className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 ${
                            isDark
                              ? "bg-slate-700 border-slate-600 text-white"
                              : "bg-white border-gray-300 text-gray-900"
                          }`}
                        />
                      </div>

                      {/* Description */}
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                          Description
                        </label>
                        <textarea
                          placeholder="Brief description of what this document contains and why it's needed"
                          value={doc.description}
                          onChange={(e) => updateDocument(index, "description", e.target.value)}
                          rows={2}
                          className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 ${
                            isDark
                              ? "bg-slate-700 border-slate-600 text-white"
                              : "bg-white border-gray-300 text-gray-900"
                          }`}
                        />
                      </div>

                      {/* Image/Document Preview */}
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 flex items-center gap-2">
                          <img className="w-4 h-4" src="/document-icon.svg" alt="" />
                          Image/Document
                        </label>
                        <div className="relative">
                          <input
                            type="url"
                            placeholder="https://example.com/document-image.jpg"
                            value={doc.image || ""}
                            onChange={(e) => updateDocument(index, "image", e.target.value)}
                            className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 pr-10 ${
                              isDark
                                ? "bg-slate-700 border-slate-600 text-white"
                                : "bg-white border-gray-300 text-gray-900"
                            }`}
                          />
                          {doc.image && (
                            <LinkIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
                          )}
                        </div>
                      </div>

                      {/* Official Link */}
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 flex items-center gap-2">
                          <LinkIcon className="w-4 h-4" />
                          Official Link
                        </label>
                        <input
                          type="url"
                          placeholder="https://gov.in/official-document-link"
                          value={doc.officialLink || ""}
                          onChange={(e) => updateDocument(index, "officialLink", e.target.value)}
                          className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 ${
                            isDark
                              ? "bg-slate-700 border-slate-600 text-white"
                              : "bg-white border-gray-300 text-gray-900"
                          }`}
                        />
                      </div>

                      {/* Video Guide */}
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-2 text-gray-700 flex items-center gap-2">
                          <Video className="w-4 h-4" />
                          Video Guide (Optional)
                        </label>
                        <input
                          type="url"
                          placeholder="https://youtube.com/how-to-upload-document"
                          value={doc.videoGuide || ""}
                          onChange={(e) => updateDocument(index, "videoGuide", e.target.value)}
                          className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 ${
                            isDark
                              ? "bg-slate-700 border-slate-600 text-white"
                              : "bg-white border-gray-300 text-gray-900"
                          }`}
                        />
                      </div>

                      {/* Importance */}
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                          Importance Level
                        </label>
                        <select
                          value={doc.importance}
                          onChange={(e) =>
                            updateDocument(index, "importance", e.target.value as "High" | "Medium" | "Low")
                          }
                          className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 ${
                            isDark
                              ? "bg-slate-700 border-slate-600 text-white"
                              : "bg-white border-gray-300 text-gray-900"
                          }`}
                        >
                          <option value="Low">Low Priority</option>
                          <option value="Medium">Medium Priority</option>
                          <option value="High">High Priority</option>
                        </select>
                      </div>

                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addDocument}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    isDark
                      ? "bg-slate-700 hover:bg-slate-600 border border-slate-600"
                      : "bg-gray-100 hover:bg-gray-200 border border-gray-300"
                  }`}
                >
                  <Plus className="w-5 h-5" />
                  Add Required Document
                </button>
              </div>

              {/* SERVER ACTION PAYLOAD */}
              <input
                  type="hidden"
                  name="documents"
                  value={JSON.stringify(documents)}
                />
              </div>


          {/* Application Process */}
              <div
                className={`p-6 rounded-xl shadow-lg ${
                  isDark ? "bg-slate-800" : "bg-white"
                }`}
              >
                <h2 className="text-xl font-bold mb-6 pb-4 border-b">
                  Application Process
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* ONLINE */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-blue-600">
                      Online Application Steps
                    </h3>

                    {applicationProcess.online.map((step, index) => (
                      <div key={`online-${index}`} className="flex gap-2">
                        <textarea
                          value={step}
                          onChange={(e) =>
                            updateProcessStep("online", index, e.target.value)
                          }
                          placeholder={`Step ${index + 1}`}
                          rows={2}
                          className={`flex-1 px-4 py-2 rounded-lg border ${
                            isDark
                              ? "bg-slate-700 border-slate-600 text-white"
                              : "bg-white border-gray-300"
                          }`}
                        />

                        {applicationProcess.online.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeProcessStep("online", index)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={() => addProcessStep("online")}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                        isDark ? "bg-slate-700" : "bg-gray-100"
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                      Add Step
                    </button>
                  </div>

                  {/* OFFLINE */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-green-600">
                      Offline Application Steps
                    </h3>

                    {applicationProcess.offline.map((step, index) => (
                      <div key={`offline-${index}`} className="flex gap-2">
                        <textarea
                          value={step}
                          onChange={(e) =>
                            updateProcessStep("offline", index, e.target.value)
                          }
                          placeholder={`Step ${index + 1}`}
                          rows={2}
                          className={`flex-1 px-4 py-2 rounded-lg border ${
                            isDark
                              ? "bg-slate-700 border-slate-600 text-white"
                              : "bg-white border-gray-300"
                          }`}
                        />

                        {applicationProcess.offline.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeProcessStep("offline", index)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={() => addProcessStep("offline")}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                        isDark ? "bg-slate-700" : "bg-gray-100"
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                      Add Step
                    </button>
                  </div>
                </div>

                {/* SERVER ACTION PAYLOAD */}
                <input
                  type="hidden"
                  name="applicationProcess"
                  value={JSON.stringify(applicationProcess)}
                />
              </div>


              {/* FAQs */}
              <div
              className={`p-6 rounded-xl shadow-lg ${
                isDark ? "bg-slate-800" : "bg-white"
              }`}
            >
              <h2 className="text-xl font-bold mb-6 pb-4 border-b">
                Frequently Asked Questions (FAQs)
              </h2>

              <div className="space-y-6">
                {faqs.map((faq, index) => ( 
                  <div
                    key={index}
                    className={`p-6 rounded-lg border-l-4 ${
                      isDark ? "bg-slate-700/50 border-slate-500" : "bg-gray-50 border-gray-300"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">
                        FAQ #{index + 1}
                      </h3>

                      {faqs.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeFaq(index)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      )}
                    </div>

                    <div className="space-y-4">

                      {/* QUESTION */}
                      <input
                        type="text"
                        
                        value={faq.question}
                        onChange={(e) =>
                          updateFaq(index, "question", e.target.value)
                        }
                        placeholder="Enter question"
                        className={`w-full px-4 py-2 rounded-lg border ${
                          isDark
                            ? "bg-slate-600 border-slate-500 text-white"
                            : "bg-white border-gray-300 text-gray-900"
                        }`}
                      />

                      {/* ANSWER */}
                      <textarea
                        
                        value={faq.answer}
                        onChange={(e) =>
                          updateFaq(index, "answer", e.target.value)
                        }
                        placeholder="Enter answer"
                        rows={3}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          isDark
                            ? "bg-slate-600 border-slate-500 text-white"
                            : "bg-white border-gray-300 text-gray-900"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={addFaq}
                className={`mt-6 flex items-center gap-2 px-4 py-2 rounded-lg ${
                  isDark
                    ? "bg-slate-700 hover:bg-slate-600"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <Plus className="w-4 h-4" />
                Add Another FAQ
              </button>

              {/* SERVER ACTION PAYLOAD */}
              <input
                type="hidden"
                name="faqs"
                value={JSON.stringify(faqs)}
              />
              </div>


              {/* Submit Buttons */}
              <div className="flex justify-end gap-4 pt-6 border-t">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className={`px-6 py-3 rounded-lg font-medium ${
                    isDark
                      ? "bg-slate-800 hover:bg-slate-700"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
                >
                  <Save className="w-5 h-5" />
                  Create Scheme
                </button>
              </div>
      </form>
    </div>
  );
}
