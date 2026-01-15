import { NavLink } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function Navbar() {
  const { token, logout } = useAuth();

  return (
    <nav>
      <NavLink to="/">Activities</NavLink>

      {token ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </>
      )}
    </nav>
  );
}
