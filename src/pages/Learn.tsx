import React from 'react';
import { BookOpen, Video, FileText } from 'lucide-react';

const tutorials = [
  {
    title: 'Organic Farming Basics',
    description: 'Learn the fundamentals of organic farming practices',
    icon: <BookOpen className="w-6 h-6" />,
    category: 'Basics'
  },
  {
    title: 'Water Conservation',
    description: 'Techniques for efficient water usage in farming',
    icon: <Video className="w-6 h-6" />,
    category: 'Advanced'
  },
  {
    title: 'Pest Management',
    description: 'Natural methods for pest control',
    icon: <FileText className="w-6 h-6" />,
    category: 'Intermediate'
  }
];

const Learn: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-green-800 mb-6">Agricultural Tutorials</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tutorials.map((tutorial, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="text-green-600 mb-4">{tutorial.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{tutorial.title}</h3>
            <p className="text-gray-600 mb-4">{tutorial.description}</p>
            <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
              {tutorial.category}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-green-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-green-800 mb-4">Offline Learning</h2>
        <p className="text-gray-700">
          All tutorials are available offline. Download them when you're connected to access the content anytime.
        </p>
      </div>
    </div>
  );
};

export default Learn;