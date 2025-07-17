import React, { useState } from 'react';
import { wasteIdeas, WasteIdea } from '../data/wasteIdeas';
import IdeaCard from './IdeaCard';
import IdeaModal from './IdeaModal';
import IdeaFilter from './IdeaFilter';

const ConversionIdeas: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedIdea, setSelectedIdea] = useState<WasteIdea | null>(null);

  const filteredIdeas = selectedType === 'all' 
    ? wasteIdeas 
    : wasteIdeas.filter(idea => idea.type === selectedType);

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Conversion Ideas</h2>
        <IdeaFilter selectedType={selectedType} onTypeChange={setSelectedType} />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIdeas.map((idea) => (
          <IdeaCard
            key={idea.id}
            idea={idea}
            onClick={() => setSelectedIdea(idea)}
          />
        ))}
      </div>

      {selectedIdea && (
        <IdeaModal
          idea={selectedIdea}
          onClose={() => setSelectedIdea(null)}
        />
      )}
    </div>
  );
};

export default ConversionIdeas;