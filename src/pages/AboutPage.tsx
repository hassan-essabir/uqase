import React from 'react';
import { Target, Users, Globe, Award } from 'lucide-react';

const stats = [
  { label: 'Years of Experience', value: '10+' },
  { label: 'Successful Projects', value: '500+' },
  { label: 'Countries Served', value: '25+' },
  { label: 'Team Members', value: '50+' }
];

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'We prioritize innovative solutions that drive real impact and transformation.'
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'We work closely with our clients to ensure their success is our success.'
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'We bring international expertise with local understanding.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do.'
  }
];

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About Uqase
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Your trusted partner in innovation and digital transformation
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9">
              <img
                className="object-cover rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                alt="Team collaboration"
              />
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <p className="mt-4 text-lg text-gray-500">
              Founded in 2014, Uqase has been at the forefront of digital innovation in Africa. 
              We started with a simple mission: to help organizations embrace digital transformation 
              and drive sustainable innovation. Today, we're proud to be a leading force in 
              shaping the future of African innovation.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-extrabold text-blue-600">{stat.value}</p>
                <p className="mt-2 text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mx-auto">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{value.title}</h3>
                  <p className="mt-2 text-gray-500">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}