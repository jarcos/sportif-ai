import { GoalCard } from "@/components/component/goalcard";
import { TrainingCard } from "@/components/component/trainingcard";
import TimeseriesChart from "@/components/component/timeserieschart";
import Image from "next/image";

interface Athlete {
  id: number;
  firstname: string;
  lastname: string;
  profile: string;
  // Add other properties as needed
}

interface DashboardProps {
  accessToken: string | null;
  athlete: Athlete;
}

const Dashboard: React.FC<DashboardProps> = ({ accessToken, athlete }) => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <h2>Hello, {athlete.firstname} {athlete.lastname}</h2>
      <Image src={athlete.profile} alt="Athlete profile" width={50} height={50} />
      <TimeseriesChart accessToken={accessToken} />
      <GoalCard />
      <TrainingCard />
    </div>
  );
};

export default Dashboard;
