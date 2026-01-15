import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";

const API = "https://fitnesstrac-kr.herokuapp.com/api";

export default function ActivityDetails() {
  const { activityId } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();

  const [activity, setActivity] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchActivity() {
      const res = await fetch(`${API}/activities/${activityId}`);
      const data = await res.json();
      setActivity(data);
    }

    fetchActivity();
  }, [activityId]);

  async function handleDelete() {
    try {
      const res = await fetch(`${API}/activities/${activityId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error);
      }

      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }

  if (!activity) return <p>Loading...</p>;

  return (
    <div>
      <h2>{activity.name}</h2>
      <p>{activity.description}</p>
      <p>Created by: {activity.creatorName}</p>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {token && (
        <button onClick={handleDelete}>Delete Activity</button>
      )}
    </div>
  );
}
