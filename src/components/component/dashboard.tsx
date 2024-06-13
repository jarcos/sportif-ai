import { GoalCard } from "@/components/component/goalcard";
import { TrainingCard } from "@/components/component/trainingcard";
import TimeseriesChart from "@/components/component/timeserieschart";

export default function Dashboard({ accessToken }: { accessToken: string }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <TimeseriesChart accessToken={accessToken} />
      <GoalCard />
      <TrainingCard />
    </div>
  );
}
