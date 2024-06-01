import { Progress } from "@/components/ui/progress"

export function GoalCard() {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Goals</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Distance Goal</h3>
            <Progress value={75} />
            <p className="text-gray-500 text-sm mt-2">1,500 km</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Time Goal</h3>
            <Progress value={60} />
            <p className="text-gray-500 text-sm mt-2">150 hrs</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Pace Goal</h3>
            <Progress value={85} />
            <p className="text-gray-500 text-sm mt-2">5:00 min/km</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Heart Rate Goal</h3>
            <Progress value={90} />
            <p className="text-gray-500 text-sm mt-2">150 bpm</p>
          </div>
        </div>
      </div>
    )
}
