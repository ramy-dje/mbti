import React from 'react';
import { X } from 'lucide-react';

interface ResultModalProps {
  type: string;
  description: {
    title: string;
    description: string;
  };
  onClose: () => void;
}

export const ResultModal: React.FC<ResultModalProps> = ({ type, description, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Your Personality Type</h2>
          <div className="text-5xl font-bold text-blue-600 mb-4">{type}</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">{description.title}</h3>
          <p className="text-gray-600">{description.description}</p>
        </div>
      </div>
    </div>
  );
};