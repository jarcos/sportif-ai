'use client';

import { useState } from 'react';
import { Message, useAssistant } from '@ai-sdk/react';
import { Button } from "@/components/ui/button";
import Modal from '@/components/ui/Modal';

export function TrainingCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { status, messages, input, submitMessage, handleInputChange } = useAssistant({ api: '/api/training/recommendations' });

  const handleViewWorkout = (workoutType: string) => {
    submitMessage({ target: { value: workoutType } });
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Training Recommendations</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium mb-2">Interval Training</h3>
          <p className="text-gray-500">
            Improve your speed and endurance with high-intensity interval training.
          </p>
          <Button className="mt-2 bg-[#fc5200] text-white hover:bg-[#fc5200]/90" onClick={() => handleViewWorkout('Interval Training')}>View Workout</Button>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">Hill Repeats</h3>
          <p className="text-gray-500">Strengthen your leg muscles and boost your climbing power.</p>
          <Button className="mt-2 bg-[#fc5200] text-white hover:bg-[#fc5200]/90" onClick={() => handleViewWorkout('Hill Repeats')}>View Workout</Button>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">Recovery Run</h3>
          <p className="text-gray-500">Allow your body to rest and recover between intense workouts.</p>
          <Button className="mt-2 bg-[#fc5200] text-white hover:bg-[#fc5200]/90" onClick={() => handleViewWorkout('Recovery Run')}>View Workout</Button>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h2 className="text-xl font-bold mb-4">Workout Details</h2>
          <div>
            {messages.map((m: Message) => (
              <div key={m.id}>
                <strong>{`${m.role}: `}</strong>
                {m.role !== 'data' && m.content}
                {m.role === 'data' && (
                  <>
                    {(m.data as any).description}
                    <br />
                    <pre className={'bg-gray-200'}>
                      {JSON.stringify(m.data, null, 2)}
                    </pre>
                  </>
                )}
              </div>
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
}
