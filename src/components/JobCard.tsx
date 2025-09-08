// import React from "react";

// interface JobCardProps {
//   title: string;
//   location: string;
//   description: string;
//   responsibilities: string[];
//   qualifications: string[];
//   attributes: string[];
// }

// const JobCard: React.FC<JobCardProps> = ({
//   title,
//   location,
//   description,
//   responsibilities,
//   qualifications,
//   attributes,
// }) => {
//   return (
//     <div className="bg-transparent rounded-2xl  mb-16  max-w-2xl mx-auto">
//      {/* <div className="max-w-5xl mx-auto bg-gradient-to-r from-orange-100 via-orange-50 to-orange-100 shadow-md rounded-lg p-12 mb-16"> */}
//       {/* Job Title + Location */}
//       <div className="mb-6">
//         <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
//         <p className="text-lg text-gray-700 mt-1">{location}</p>
//       </div>

//       <hr className="border-gray-300 mb-8" />

//       {/* Job Description */}
//       <p className="text-gray-800 text-lg leading-relaxed mb-10">{description}</p>

//       {/* Responsibilities */}
//       {responsibilities.length > 0 && (
//         <div className="mb-10">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-3">
//             Responsibilities
//           </h2>
//           <ul className="list-disc list-inside text-lg text-gray-800 space-y-2">
//             {responsibilities.map((item, idx) => (
//               <li key={idx}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Qualifications */}
//       {qualifications.length > 0 && (
//         <div className="mb-10">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-3">
//             Qualifications
//           </h2>
//           <ul className="list-disc list-inside text-lg text-gray-800 space-y-2">
//             {qualifications.map((item, idx) => (
//               <li key={idx}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Personal Attributes */}
//       {attributes.length > 0 && (
//         <div className="mb-12">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-3">
//             Personal Attributes
//           </h2>
//           <ul className="list-disc list-inside text-lg text-gray-800 space-y-2">
//             {attributes.map((item, idx) => (
//               <li key={idx}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       <button className="px-12 py-2 rounded-full bg-gradient-to-r from-green-200 to-orange-200 text-brown-700 font-semibold shadow-md border border-brown-200 hover:from-green-300 hover:to-orange-300 transition-all duration-300">
//       Apply Now
//     </button>
//     </div>
//   );
// };

// export default JobCard;

import React from "react";

type JobCardProps = {
  title: string
  location: string
  description: string
  responsibilities: string[]
  qualifications: string[]
  attributes: string[]
}

export default function JobCard({
  title,
  location,
  description,
  responsibilities,
  qualifications,
  attributes,
}: JobCardProps) {
  return (
    <div className="bg-transparent rounded-2xl max-w-2xl text-justify mx-auto mb-16">
      {/* Title & Location */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
        <p className="text-lg text-gray-700 mt-2">{location}</p>
      </div>

      <hr className="border-gray-300 mb-8" />

      {/* Description */}
      <p className="text-lg text-gray-800 leading-relaxed mb-8">{description}</p>

      {/* Responsibilities */}
      {responsibilities.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Responsibilities</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            {responsibilities.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      )}

      {/* Qualifications */}
      {qualifications.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Qualifications</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            {qualifications.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      )}

      {/* Attributes */}
      {attributes.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Personal Attributes</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            {attributes.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      )}

      {/* Apply Button */}
      <button className="px-10 py-2 rounded-full bg-gradient-to-r from-green-200 to-orange-200 text-gray-800 font-semibold shadow hover:from-green-300 hover:to-orange-300 transition">
        Apply Now
      </button>
    </div>
  )
}
