import { useState, Suspense, lazy } from 'react';
import { Button } from "@/components/ui/button";
import Modal from '@/components/ui/Modal';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

const WorkoutDetails = lazy(() => import('./WorkoutDetails'));

export function TrainingCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    type: string;
    description: string;
    steps: string[];
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleViewWorkout = async (workoutType: string) => {
    setLoading(true);
    setIsModalOpen(true);

    try {
      const response = await fetch('/api/training/recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ workoutType }),
      });

      const data = await response.json();
      setModalContent(data.workout);
    } catch (error) {
      console.error('Error fetching workout:', error);
    } finally {
      setLoading(false);
    }
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
          <Suspense fallback={<LoadingSpinner />}>
            {loading ? (
              <LoadingSpinner />
            ) : (
              modalContent && (
                <WorkoutDetails modalContent={modalContent} />
              )
            )}
          </Suspense>
        </Modal>
      )}
    </div>
  );
}
