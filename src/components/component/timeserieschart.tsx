import { useEffect, useState } from 'react';

interface Activity {
  id: number;
  name: string;
  distance: number;
  start_date: string;
}

export default function TimeseriesChart({ accessToken }: { accessToken: string }) {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    if (accessToken) {
      fetch(`/api/strava/activities?access_token=${accessToken}`)
        .then(response => response.json())
        .then(data => setActivities(data));
    }
  }, [accessToken]);

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
}
