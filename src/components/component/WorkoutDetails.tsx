// components/component/WorkoutDetails.tsx
import React from 'react';

interface WorkoutDetailsProps {
  modalContent: {
    type: string;
    description: string;
    steps: string[];
  };
}

const WorkoutDetails: React.FC<WorkoutDetailsProps> = ({ modalContent }) => (
  <>
    <h2 className="text-xl font-bold mb-4">Workout Details</h2>
    <p><strong>Type:</strong> {modalContent.type}</p>
    <p><strong>Description:</strong> {modalContent.description}</p>
    <h3 className="text-lg font-medium mb-2 mt-4">Steps</h3>
    <ul className="list-disc list-inside">
      {modalContent.steps.map((step, index) => (
        <li key={index}>{step}</li>
      ))}
    </ul>
  </>
);

export default WorkoutDetails;
