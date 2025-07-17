import React, { useState } from 'react';
import { Upload, AlertCircle } from 'lucide-react';

const WasteIdentification = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleIdentify = () => {
    // Simulated waste identification following the specified order
    const wasteTypes = ['Recyclable Plastic', 'Glass', 'Metal', 'Biodegradable', 'Paper'];
    const randomType = wasteTypes[Math.floor(Math.random() * wasteTypes.length)];
    setResult(randomType);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6 text-purple-800">Waste Identification</h2>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload waste image
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-green-200 border-dashed rounded-lg hover:border-purple-300 transition-colors">
          <div className="space-y-1 text-center">
            <Upload className="mx-auto h-12 w-12 text-green-600" />
            <div className="flex text-sm text-gray-600">
              <label className="relative cursor-pointer bg-white rounded-md font-medium text-purple-600 hover:text-purple-500">
                <span>Upload a file</span>
                <input
                  type="file"
                  className="sr-only"
                  accept="image/*"
                  onChange={handleFileSelect}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>

      {preview && (
        <div className="mb-6">
          <img
            src={preview}
            alt="Preview"
            className="max-w-xs mx-auto rounded-lg shadow-sm"
          />
        </div>
      )}

      <button
        onClick={handleIdentify}
        disabled={!selectedFile}
        className="w-full bg-gradient-to-r from-green-500 to-purple-500 text-white px-4 py-2 rounded-md hover:from-green-600 hover:to-purple-600 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-300"
      >
        Identify Waste
      </button>

      {result && (
        <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-purple-50 rounded-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-green-500" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-purple-800">
                Identification Result
              </h3>
              <div className="mt-2 text-sm text-green-700">
                <p>This appears to be: {result}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WasteIdentification;