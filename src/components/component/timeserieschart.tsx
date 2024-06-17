import { useEffect, useState } from 'react';
import { ResponsiveLine } from '@nivo/line';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

interface Activity {
  id: number;
  name: string;
  distance: number;
  moving_time: number;
  start_date: string;
  type: string;
  average_speed: number;
  average_heartrate: number;
}

interface TimeseriesChartProps {
  accessToken: string | null;
  athleteId: number;
}

const TimeseriesChart: React.FC<TimeseriesChartProps> = ({ accessToken, athleteId }) => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (accessToken && athleteId) {
      fetch(`/api/strava/activities?athleteId=${athleteId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          const runningActivities = data.filter((activity: Activity) => activity.type === 'Run');
          setActivities(runningActivities);
          setLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [accessToken, athleteId]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="card">Error: {error}</div>;
  }

  const totalDistance = activities.reduce((total, activity) => total + activity.distance, 0);
  const totalTime = activities.reduce((total, activity) => total + activity.moving_time, 0);
  const avgPace = (totalTime / 60) / (totalDistance / 1000);
  const minutes = Math.floor(avgPace);
  const seconds = Math.round((avgPace - minutes) * 60);
  const avgHeartRate = activities.reduce((total, activity) => total + (activity.average_heartrate || 0), 0) / activities.length;

  const graphData = activities.map(activity => ({
    x: activity.start_date,
    y: activity.distance,
  }));

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-medium mb-2">Total Distance</h3>
          <p className="text-3xl font-bold">{(totalDistance / 1000).toFixed(2)} km</p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">Total Time</h3>
          <p className="text-3xl font-bold">{(totalTime / 3600).toFixed(2)} hrs</p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">Avg. Pace</h3>
          <p className="text-3xl font-bold">{`${minutes}:${seconds.toString().padStart(2, '0')} min/km`}</p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">Avg. Heart Rate</h3>
          <p className="text-3xl font-bold">{Math.round(avgHeartRate)} bpm</p>
        </div>
      </div>
      <div className="mt-6">
        <h3 className='text-2xl font-bold mb-4'>Latest Running Activities</h3>
        <ul>
          {activities.map(activity => (
            <li key={activity.id} className="mb-2">
              <a
                href={`https://www.strava.com/activities/${activity.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 hover:underline active:text-blue-800"
              >
                {activity.name} - {new Date(activity.start_date).toLocaleDateString()}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimeseriesChart;
