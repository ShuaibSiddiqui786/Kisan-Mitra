import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Home, BookOpen, Calculator, MessageSquare, Cloud, IndianRupee } from 'lucide-react';

const Layout = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <nav className="bg-green-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold flex items-center gap-2">
            <Home size={24} />
            किसान मित्र
          </Link>
        </div>
      </nav>

      <main className="container mx-auto p-4">
        <Outlet />
      </main>

      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200">
        <div className="container mx-auto">
          <div className="flex justify-around p-2">
            <Link to="/" className="flex flex-col items-center p-2">
              <Home size={20} />
              <span className="text-xs">Home</span>
            </Link>
            <Link to="/chatbot" className="flex flex-col items-center p-2">
              <MessageSquare size={20} />
              <span className="text-xs">Chat</span>
            </Link>
            <Link to="/weather" className="flex flex-col items-center p-2">
              <Cloud size={20} />
              <span className="text-xs">Weather</span>
            </Link>
            <Link to="/calculator" className="flex flex-col items-center p-2">
              <Calculator size={20} />
              <span className="text-xs">Calculator</span>
            </Link>
            <Link to="/market" className="flex flex-col items-center p-2">
              <IndianRupee size={20} />
              <span className="text-xs">Market</span>
            </Link>
            <Link to="/learn" className="flex flex-col items-center p-2">
              <BookOpen size={20} />
              <span className="text-xs">Learn</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Layout;