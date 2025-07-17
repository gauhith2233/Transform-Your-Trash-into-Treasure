import React from 'react';
import { Recycle, Leaf, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-green-800 mb-8">About EcoSmart Waste</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-6">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            EcoSmart Waste is dedicated to revolutionizing waste management through innovative solutions 
            and community engagement. We believe in creating a sustainable future by transforming waste 
            into valuable resources.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <Recycle className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="font-semibold text-green-800 mb-2">Smart Recycling</h3>
              <p className="text-gray-600">Advanced waste identification and sorting solutions</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <Leaf className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="font-semibold text-green-800 mb-2">Sustainability</h3>
              <p className="text-gray-600">Promoting eco-friendly waste management practices</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <Globe className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="font-semibold text-green-800 mb-2">Global Impact</h3>
              <p className="text-gray-600">Building a worldwide community of eco-conscious individuals</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-6">Our Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-4">Environmental Benefits</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Reduced landfill waste through smart recycling</li>
                <li>Lower carbon emissions from waste processing</li>
                <li>Conservation of natural resources</li>
                <li>Protection of wildlife habitats</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-4">Community Impact</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Creation of green jobs</li>
                <li>Enhanced public awareness</li>
                <li>Stronger community bonds</li>
                <li>Improved urban cleanliness</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;