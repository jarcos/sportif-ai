import { useEffect, useState } from 'react';

interface Activity {
  id: number;
  name: string;
  distance: number;
  start_date: string;
}

interface TimeseriesChartProps {
  accessToken: string | null;
}

const TimeseriesChart: React.FC<TimeseriesChartProps> = ({ accessToken }) => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (accessToken) {
      fetch(`/api/strava/activities?access_token=${accessToken}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setActivities(data);
          setLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [accessToken]);

  if (loading) {
    return <div className="card">Loading...</div>;
  }

  if (error) {
    return <div className="card">Error: {error}</div>;
  }

  return (
    <div className="card">
      <h3>Latest Running Activities</h3>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>
            {activity.name} - {activity.distance} meters on {new Date(activity.start_date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeseriesChart;
