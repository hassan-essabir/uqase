import React from 'react';
import { Server, Cpu, Leaf, Building2, Lightbulb, Activity } from 'lucide-react';

const expertiseAreas = [
  {
    icon: Server,
    title: 'Digital Transformation',
    description: 'End-to-end digital transformation services for organizations of all sizes.',
    capabilities: [
      'Digital strategy development',
      'Process automation',
      'Cloud migration',
      'Data analytics',
      'Digital workplace solutions'
    ]
  },
  {
    icon: Cpu,
    title: 'Smart Technologies',
    description: 'Implementation of cutting-edge smart technologies and IoT solutions.',
    capabilities: [
      'IoT implementation',
      'AI & Machine Learning',
      'Blockchain solutions',
      'Smart city technologies',
      'Industrial IoT'
    ]
  },
  {
    icon: Leaf,
    title: 'Sustainable Innovation',
    description: 'Green technology and sustainable innovation solutions.',
    capabilities: [
      'Green tech solutions',
      'Sustainable practices',
      'Environmental impact assessment',
      'Circular economy initiatives',
      'Energy efficiency'
    ]
  }
];

export default function ExpertisePage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Our Expertise
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Specialized knowledge and experience in key innovation areas
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {expertiseAreas.map((area) => (
            <div key={area.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mx-auto">
                  <area.icon className="h-8 w-8 text-blue-600" />
                </div>
                
                <h2 className="mt-6 text-2xl font-bold text-center text-gray-900">
                  {area.title}
                </h2>
                
                <p className="mt-4 text-gray-500 text-center">
                  {area.description}
                </p>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900">Capabilities:</h3>
                  <ul className="mt-4 space-y-3">
                    {area.capabilities.map((capability) => (
                      <li key={capability} className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="h-2 w-2 mt-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <p className="ml-3 text-gray-500">{capability}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}