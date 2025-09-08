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
    <div className="bg-transparent rounded-2xl w-full max-w-2xl text-justify mx-auto mb-16 px-4 sm:px-6 md:px-8">
      <div className="mb-6 text-center md:text-left">
        <h1 className="text-heading40 font-heading text-gray-900">{title}</h1>
        <p className="text-body18 font-body text-gray-700 mt-2">{location}</p>
      </div>

      <hr className="border-gray-300 mb-8" />

      <p className="text-[16px] font-semibold font-heading text-gray-800 leading-relaxed mb-8">
        {description}
      </p>

      {responsibilities.length > 0 && (
        <div className="mb-8">
          <h5 className="text-[20px] font-semibold font-heading text-gray-900 mb-3">
            Responsibilities
          </h5>
          <ul className="list-disc list-inside font-body text-body16 space-y-2 text-gray-800 pl-4 sm:pl-6">
            {responsibilities.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      )}

      {qualifications.length > 0 && (
        <div className="mb-8">
          <h5 className="text-[20px] font-semibold font-heading text-gray-900 mb-3">
            Qualifications
          </h5>
          <ul className="list-disc list-inside font-body text-body16 space-y-2 text-gray-800 pl-4 sm:pl-6">
            {qualifications.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      )}
      {attributes.length > 0 && (
        <div className="mb-10">
          <h5 className="text-[20px] font-semibold font-heading text-gray-900 mb-3">
            Personal Attributes
          </h5>
          <ul className="list-disc list-inside font-body text-body16 space-y-2 text-gray-800 pl-4 sm:pl-6">
            {attributes.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      )}
      <div className="flex justify-center md:justify-start">
        <button className="px-10 py-2 rounded-full bg-gradient-to-r from-green-200 to-orange-200 text-body18 font-body text-gray-800 shadow hover:from-green-300 hover:to-orange-300 transition">
          Apply Now
        </button>
      </div>
    </div>
  )
}
