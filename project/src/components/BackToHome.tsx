import React from 'react';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const BackToHome = () => {
  return (
    <Link
      to="/"
      className="fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors z-50"
      aria-label="Back to home"
    >
      <Home className="h-6 w-6" />
    </Link>
  );
};

export default BackToHome;