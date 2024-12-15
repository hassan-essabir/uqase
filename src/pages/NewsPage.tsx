import React from 'react';
import { Calendar, User } from 'lucide-react';

const newsArticles = [
  {
    title: 'Africa Innovation Summit 2024',
    excerpt: 'Join us for the largest innovation conference in Africa, featuring leading experts and entrepreneurs.',
    content: `The Africa Innovation Summit 2024 brings together innovators, entrepreneurs, and industry leaders from across the continent. This year's focus will be on digital transformation, sustainable development, and fostering innovation ecosystems.`,
    date: '2024-03-20',
    author: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Events'
  },
  {
    title: 'Digital Africa Initiative Launch',
    excerpt: 'New program to accelerate digital transformation across African startups and SMEs.',
    content: `The Digital Africa Initiative aims to support over 1000 startups and SMEs in their digital transformation journey. The program includes funding, mentorship, and technical support.`,
    date: '2024-03-15',
    author: 'Michael Chen',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Programs'
  },
  {
    title: 'AgriTech Revolution in Africa',
    excerpt: 'How digital innovation is transforming agriculture across the continent.',
    content: `Digital technologies are revolutionizing agriculture in Africa. From drone-based crop monitoring to IoT-enabled irrigation systems, learn how AgriTech is boosting productivity and sustainability.`,
    date: '2024-03-10',
    author: 'David Okonjo',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Technology'
  }
];

export default function NewsPage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Latest News
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Stay updated with the latest developments in African innovation
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {newsArticles.map((article) => (
            <article key={article.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="lg:flex">
                <div className="lg:w-1/3">
                  <img
                    className="h-64 w-full object-cover lg:h-full"
                    src={article.image}
                    alt={article.title}
                  />
                </div>
                <div className="lg:w-2/3 p-8">
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {article.category}
                    </span>
                  </div>
                  <h2 className="mt-4 text-2xl font-bold text-gray-900">
                    {article.title}
                  </h2>
                  <p className="mt-4 text-gray-500">
                    {article.content}
                  </p>
                  <div className="mt-6 flex items-center space-x-6">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <span className="ml-2 text-sm text-gray-500">
                        {new Date(article.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-blue-600" />
                      <span className="ml-2 text-sm text-gray-500">
                        {article.author}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}