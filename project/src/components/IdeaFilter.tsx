import React from 'react';
import { Filter } from 'lucide-react';

interface IdeaFilterProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
}

const IdeaFilter: React.FC<IdeaFilterProps> = ({ selectedType, onTypeChange }) => {
  return (
    <div className="flex items-center space-x-4">
      <Filter className="h-5 w-5 text-gray-500" />
      <select
        value={selectedType}
        onChange={(e) => onTypeChange(e.target.value)}
        className="border rounded-md px-3 py-1.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        <option value="all">All Types</option>
        <option value="paper">Paper</option>
        <option value="plastic">Plastic</option>
        <option value="textile">Textile</option>
        <option value="glass">Glass</option>
        <option value="metal">Metal</option>
   
      </select>
    </div>
  );
};

export default IdeaFilter;