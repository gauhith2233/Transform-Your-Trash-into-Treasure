import React from 'react';
import { ArrowLeft, MapPin, Users, Calendar, Award, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CommunityDetailsProps {
  id: string;
}

const CommunityDetails: React.FC<CommunityDetailsProps> = ({ id }) => {
  const navigate = useNavigate();
  
  const ngoData = {
    title: "NGOs Working in Recycling Sector",
    organizations: [
      {
        name: "Chintan Environmental Research and Action Group",
        location: "New Delhi",
        description: "Works with waste pickers and other recycling workers to convert waste to resources.",
        impact: "Helped over 25,000 waste pickers",
        contactUrl: "https://ngobox.org/contact_us.php"
      },
      {
        name: "Waste Warriors",
        location: "Dehradun",
        description: "Focuses on waste management through collection, segregation, and recycling.",
        impact: "Manages 3.5 tons of waste daily",
        contactUrl: "https://ngobox.org/contact_us.php"
      },
      {
        name: "Saahas Zero Waste",
        location: "Bangalore",
        description: "Provides end-to-end waste management solutions.",
        impact: "Processes 80 tons of waste daily"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-8">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-green-700 hover:text-green-800 mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Communities
        </button>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-green-800 mb-6">{ngoData.title}</h1>
          
          <div className="space-y-8">
            {ngoData.organizations.map((org, index) => (
              <div key={index} className="border-b border-green-100 last:border-0 pb-6 last:pb-0">
                <h2 className="text-xl font-semibold text-green-700 mb-3">{org.name}</h2>
                <div className="flex items-center text-green-600 mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{org.location}</span>
                </div>
                <p className="text-gray-600 mb-3">{org.description}</p>
                <div className="bg-green-50 rounded-lg p-3 inline-block">
                  <span className="text-green-700 font-medium">{org.impact}</span>
                </div>
                {org.contactUrl && (
                  <div className="mt-4">
                    <a
                      href={org.contactUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Contact Organization
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Get Involved</h2>
          <p className="text-gray-600 mb-6">
            Want to contribute to these initiatives? Here's how you can help:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="https://ngobox.org/full-news_10-NGOs-Working-in-the-Recycling-Sector-in-India-NGOBOX_24741"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-green-50 rounded-lg p-4 hover:bg-green-100 transition-colors"
            >
              <span className="text-green-700 font-medium">Read Full Article</span>
              <ExternalLink className="h-5 w-5 text-green-600" />
            </a>
            <a
              href="https://ngobox.org/contact_us.php"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-600 text-white rounded-lg p-4 hover:bg-green-700 transition-colors"
            >
              Contact Organization
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityDetails;