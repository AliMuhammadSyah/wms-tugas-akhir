import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminDashboard, Home, Login, PemilikDashboard } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/pemilik" element={<PemilikDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
