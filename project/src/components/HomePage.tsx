import React from 'react';
import { Link } from 'react-router-dom';
import { Recycle, Leaf, Globe, ArrowRight, Award, Users, BarChart } from 'lucide-react';

const HomePage = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
          Transform Waste into Value
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Join our mission to revolutionize waste management through smart technology
          and community engagement.
        </p>
      </div>

      {/* Main Features */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Link to="/waste-identification" className="group">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1">
            <Recycle className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Waste Identification</h3>
            <p className="text-gray-600 mb-4">Upload and identify waste materials instantly</p>
            <span className="text-green-600 flex items-center">
              Learn more <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </Link>

        <Link to="/conversion-ideas" className="group">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1">
            <Leaf className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Conversion Ideas</h3>
            <p className="text-gray-600 mb-4">Discover creative ways to repurpose waste</p>
            <span className="text-green-600 flex items-center">
              Learn more <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </Link>

        <Link to="/community" className="group">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1">
            <Users className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Community Solutions</h3>
            <p className="text-gray-600 mb-4">Connect with local waste management initiatives</p>
            <span className="text-green-600 flex items-center">
              Learn more <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </Link>
      </div>

      {/* Statistics */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
        <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">Our Impact</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <BarChart className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-green-800 mb-1">5000+</div>
            <div className="text-gray-600">Waste Items Identified</div>
          </div>
          <div className="text-center">
            <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-green-800 mb-1">2000+</div>
            <div className="text-gray-600">Community Members</div>
          </div>
          <div className="text-center">
            <Leaf className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-green-800 mb-1">150+</div>
            <div className="text-gray-600">Recycling Ideas</div>
          </div>
          <div className="text-center">
            <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-green-800 mb-1">10+</div>
            <div className="text-gray-600">Environmental Awards</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg shadow-lg p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Join our community today and be part of the solution for a cleaner, 
          more sustainable future.
        </p>
        <Link
          to="/community"
          className="inline-block bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
        >
          Join Our Community
        </Link>
      </div>
    </main>
  );
};

export default HomePage;