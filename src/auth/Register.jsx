import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    await register();
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button>Register</button>
    </form>
  );
}
