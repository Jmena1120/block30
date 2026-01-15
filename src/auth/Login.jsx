import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    await login();
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button>Login</button>
    </form>
  );
}
