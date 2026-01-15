import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Activities from "./components/Activities";
import ActivityDetails from "./components/ActivityDetails";
import Login from "./components/Login";
import Register from "./components/Register";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Activities />} />
        <Route path="activities/:activityId" element={<ActivityDetails />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}
