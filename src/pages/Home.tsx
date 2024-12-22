import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Cloud, Calculator, IndianRupee, BookOpen } from 'lucide-react';

const features = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'AI Assistant',
    description: 'Get answers about farming laws and practices',
    link: '/chatbot'
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: 'Weather Forecast',
    description: 'Check local weather and crop recommendations',
    link: '/weather'
  },
  {
    icon: <Calculator className="w-8 h-8" />,
    title: 'Harvest Calculator',
    description: 'Calculate expected yield and revenue',
    link: '/calculator'
  },
  {
    icon: <IndianRupee className="w-8 h-8" />,
    title: 'Market Prices',
    description: 'Check current market rates for crops',
    link: '/market'
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Learn',
    description: 'Agricultural tutorials and best practices',
    link: '/learn'
  }
];

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-green-800 mb-2">Welcome to किसान मित्र</h1>
        <p className="text-gray-600">Your complete farming companion</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <Link
            key={index}
            to={feature.link}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col items-center text-center">
              <div className="text-green-600 mb-4">{feature.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 bg-green-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Offline Access Available</h3>
        <p className="text-gray-700">
          Most features work without internet. Download the app for the best experience.
        </p>
      </div>
    </div>
  );
};

export default Home;