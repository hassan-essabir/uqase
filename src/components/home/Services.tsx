import React from 'react';
import { Lightbulb, Building2, GraduationCap, LineChart, Users, Briefcase, Leaf, Heart, School } from 'lucide-react';

const services = [
  {
    title: 'Agriculture Innovation',
    description: 'Transforming agriculture through smart farming and sustainable practices',
    icon: Leaf,
  },
  {
    title: 'Startups',
    description: 'Launch and scale your innovative projects with expert guidance',
    icon: Lightbulb,
  },
  {
    title: 'SMEs',
    description: 'Transform your business with digital innovation strategies',
    icon: Building2,
  },
  {
    title: 'Research Institutions',
    description: 'Access funding and partnerships for groundbreaking research',
    icon: GraduationCap,
  },
  {
    title: 'Large Enterprises',
    description: 'Drive digital transformation and innovation at scale',
    icon: LineChart,
  },
  {
    title: 'Public Administration',
    description: 'Modernize public services through digital innovation',
    icon: Users,
  },
  {
    title: 'Consulting Services',
    description: 'Leverage expert guidance, foster innovation, and drive sustainable growth with transformative strategies',
    icon: Briefcase,
  },
  {
    title: 'Education & Training',
    description: 'Equip teams with the skills needed to thrive in a digital-first world through tailored workshops and training programs',
    icon: Heart,
  },
  {
    title: 'Healthcare Innovation',
    description: 'Enhance healthcare delivery with cutting-edge technologies and patient-centric solutions',
    icon: School,
  }
];

export default function Services() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive innovation and digital transformation solutions for every sector
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="pt-6"
              >
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                        <service.icon className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}