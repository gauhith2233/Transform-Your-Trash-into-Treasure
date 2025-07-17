import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "What types of waste can be identified through the app?",
      answer: "Our app can identify various types of waste including plastics, paper, glass, metals, and organic waste. The AI-powered system provides accurate identification and sorting recommendations."
    },
    {
      question: "How can I join the community initiatives?",
      answer: "You can join our community initiatives by registering for events through the Community section. We regularly organize cleanup drives, workshops, and awareness programs."
    },
    {
      question: "What are the benefits of recycling waste?",
      answer: "Recycling helps reduce landfill waste, conserves natural resources, reduces pollution, saves energy, creates jobs, and helps combat climate change."
    },
    {
      question: "How can I start composting at home?",
      answer: "Start by collecting kitchen scraps, dry leaves, and paper. Use a composting bin or pile, maintain proper moisture and aeration, and turn the pile regularly. Our Conversion Ideas section has detailed guides."
    },
    {
      question: "Do you provide waste collection services?",
      answer: "We partner with local waste management services. Contact us for information about collection services in your area."
    },
    {
      question: "How can businesses collaborate with EcoSmart Waste?",
      answer: "We offer corporate partnerships, waste management consulting, and custom solutions for businesses. Contact our team to discuss collaboration opportunities."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Frequently Asked Questions</h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-green-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-green-800">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-green-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-green-600" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-green-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;