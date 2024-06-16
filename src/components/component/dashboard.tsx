import { GetServerSideProps } from 'next';
import { GoalCard } from "@/components/component/goalcard";
import { TrainingCard } from "@/components/component/trainingcard";
import TimeseriesChart from "@/components/component/timeserieschart";
import { kv } from '@vercel/kv';

interface DashboardProps {
  accessToken: string;
  athlete: any; // Replace `any` with the actual type if available
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { athleteId } = context.query;

  if (!athleteId) {
    return {
      notFound: true,
    };
  }

  const accessToken = await kv.get<string>(`access_token:${athleteId}`);
  const athleteData = await kv.get<string>(`athlete:${athleteId}`);

  if (!accessToken || !athleteData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      accessToken,
      athlete: JSON.parse(athleteData),
    },
  };
};

const Dashboard: React.FC<DashboardProps> = ({ accessToken, athlete }) => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <TimeseriesChart accessToken={accessToken} />
      <GoalCard />
      <TrainingCard />
    </div>
  );
};

export default Dashboard;
