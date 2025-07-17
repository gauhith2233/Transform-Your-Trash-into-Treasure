import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Recycle } from 'lucide-react';
import WasteIdentification from './components/WasteIdentification';
import ConversionIdeas from './components/ConversionIdeas';
import CommunitySection from './components/CommunitySection';
import CommunityDetails from './components/CommunityDetails';
import CreateCommunity from './components/CreateCommunity';
import CommunitySuccess from './components/CommunitySuccess';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import HomePage from './components/HomePage';
import BackToHome from './components/BackToHome';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <Recycle className="h-8 w-8 text-green-600" />
                <span className="text-2xl font-bold text-gray-900">EcoSmart Waste</span>
              </Link>
              <nav className="hidden md:flex space-x-8">
                <Link to="/about" className="text-gray-600 hover:text-green-600">About</Link>
                <Link to="/contact" className="text-gray-600 hover:text-green-600">Contact</Link>
                <Link to="/faq" className="text-gray-600 hover:text-green-600">FAQ</Link>
              </nav>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/waste-identification" element={<WasteIdentification />} />
          <Route path="/conversion-ideas" element={<ConversionIdeas />} />
          <Route path="/community" element={<CommunitySection />} />
          <Route path="/community/:id" element={<CommunityDetails id="1" />} />
          <Route path="/create-community" element={<CreateCommunity />} />
          <Route path="/community-success" element={<CommunitySuccess />} />
        </Routes>

        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-center text-gray-600">© 2024 EcoSmart Waste. All rights reserved.</p>
          </div>
        </footer>

        <BackToHome />
      </div>
    </Router>
  );
}

export default App;