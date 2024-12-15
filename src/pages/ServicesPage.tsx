import React from 'react';
import { Leaf, Lightbulb, Building2, GraduationCap, LineChart, Users } from 'lucide-react';

const services = [
  {
    icon: Leaf,
    title: 'Agriculture Innovation',
    description: 'Transform your agricultural business with cutting-edge technology and sustainable practices.',
    features: [
      'Smart farming solutions',
      'Precision agriculture',
      'Supply chain optimization',
      'Sustainable practices',
      'Data-driven decision making'
    ]
  },
  {
    icon: Lightbulb,
    title: 'Innovation Strategy',
    description: 'Develop and implement comprehensive innovation strategies tailored to your organization.',
    features: [
      'Innovation assessment',
      'Strategy development',
      'Digital transformation',
      'Change management',
      'Innovation culture'
    ]
  },
  {
    icon: Building2,
    title: 'Business Development',
    description: 'Accelerate your business growth with our expert guidance and support.',
    features: [
      'Market analysis',
      'Growth strategy',
      'Partnership development',
      'Business modeling',
      'Scale-up support'
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive solutions to drive innovation and digital transformation
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {services.map((service, index) => (
            <div key={service.title} className={`flex flex-col lg:flex-row gap-12 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className="lg:w-1/2">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                  <service.icon className="h-24 w-24 text-blue-600" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                <p className="mt-4 text-lg text-gray-500">{service.description}</p>
                <ul className="mt-8 space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <p className="ml-3 text-lg text-gray-500">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}