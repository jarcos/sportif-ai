import { GoalCard } from "@/components/component/goalcard"
import { TrainingCard } from "@/components/component/trainingcard"
import { TimeseriesChart } from "@/components/component/timeserieschart"

export function Dashboard() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    <TimeseriesChart />
    <GoalCard />
    <TrainingCard />
    </div>
  )
}
