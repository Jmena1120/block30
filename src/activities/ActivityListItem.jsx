import { Link } from "react-router-dom";

export default function ActivityListItem({ activity }) {
  return (
    <div>
      <h3>
        <Link to={`/activities/${activity.id}`}>
          {activity.name}
        </Link>
      </h3>
      <p>{activity.description}</p>
    </div>
  );
}
