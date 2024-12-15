import React from 'react';
import { EuroIcon, Globe, Clock, Target } from 'lucide-react';

const fundingPrograms = [
  {
    title: 'Horizon Europe',
    description: 'The EUs key funding programme for research and innovation with a budget of €95.5 billion.',
    budget: '€95.5 billion',
    deadline: '2021-2027',
    areas: [
      'Digital Technologies',
      'Health',
      'Climate Change',
      'Smart Cities',
      'Agriculture'
    ]
  },
  {
    title: 'Africa Innovation Fund',
    description: 'Supporting innovative projects across Africa with a focus on digital transformation and sustainable development.',
    budget: '€50 million',
    deadline: '2024-2025',
    areas: [
      'Digital Innovation',
      'AgriTech',
      'Clean Energy',
      'Healthcare',
      'Education'
    ]
  }
];

export default function FundingPage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Funding Programs
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Access to innovative funding opportunities for your projects
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {fundingPrograms.map((program) => (
            <div key={program.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900">{program.title}</h2>
                <p className="mt-4 text-gray-500">{program.description}</p>
                
                <div className="mt-8 space-y-4">
                  <div className="flex items-center">
                    <EuroIcon className="h-6 w-6 text-blue-600" />
                    <span className="ml-3 text-gray-700">Budget: {program.budget}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-blue-600" />
                    <span className="ml-3 text-gray-700">Period: {program.deadline}</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900">Focus Areas:</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {program.areas.map((area) => (
                      <span
                        key={area}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}