import { Button } from "@/components/ui/button"


export function TrainingCard() {
    return (
                    <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Training Recommendations</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Interval Training</h3>
                  <p className="text-gray-500">
                    Improve your speed and endurance with high-intensity interval training.
                  </p>
                  <Button className="mt-2 bg-[#fc5200] text-white hover:bg-[#fc5200]/90">View Workout</Button>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Hill Repeats</h3>
                  <p className="text-gray-500">Strengthen your leg muscles and boost your climbing power.</p>
                  <Button className="mt-2 bg-[#fc5200] text-white hover:bg-[#fc5200]/90">View Workout</Button>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Recovery Run</h3>
                  <p className="text-gray-500">Allow your body to rest and recover between intense workouts.</p>
                  <Button className="mt-2 bg-[#fc5200] text-white hover:bg-[#fc5200]/90">View Workout</Button>
                </div>
              </div>
            </div>
    )
}
