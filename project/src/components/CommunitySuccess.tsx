import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const CommunitySuccess = () => {
  const location = useLocation();
  const communityData = location.state?.communityData;

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="mb-6">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto" />
          </div>
          
          <h1 className="text-3xl font-bold text-green-800 mb-4">
            Community Created Successfully!
          </h1>
          
          <p className="text-gray-600 mb-8">
            Congratulations! Your community "{communityData?.name}" has been created. 
            You can now start inviting members and organizing events.
          </p>

          <div className="bg-green-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-green-800 mb-4">Community Details</h2>
            <div className="text-left space-y-2">
              <p><span className="font-medium">Name:</span> {communityData?.name}</p>
              <p><span className="font-medium">Location:</span> {communityData?.location}</p>
              <p><span className="font-medium">Organizer:</span> {communityData?.organizerName}</p>
            </div>
          </div>

          <div className="space-x-4">
            <Link
              to="/community"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              Go to Communities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySuccess;