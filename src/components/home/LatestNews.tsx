import React from 'react';

const news = [
  {
    title: 'Africa Innovation Summit 2024',
    excerpt: 'Join us for the largest innovation conference in Africa, featuring leading experts and entrepreneurs.',
    date: '2024-03-20',
    image: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Digital Africa Initiative Launch',
    excerpt: 'New program to accelerate digital transformation across African startups and SMEs.',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'AgriTech Revolution in Africa',
    excerpt: 'How digital innovation is transforming agriculture across the continent.',
    date: '2024-03-10',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
];

export default function LatestNews() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Latest News
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Stay updated with the latest developments in African innovation and funding
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-600">
                    News
                  </p>
                  <a href="#" className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {item.excerpt}
                    </p>
                  </a>
                </div>
                <div className="mt-6">
                  <div className="text-sm text-gray-500">
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
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