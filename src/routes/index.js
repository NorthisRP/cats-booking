import { Navigate, Route, Routes } from "react-router-dom";
import Cat from "../pages/Cat";
import Cats from "./../pages/Cats";

export default function Router() {
  return (
    <Routes>
      <Route path="/cats" element={<Cats />} />
      <Route path="/cats/:catId" element={<Cat />} />
      <Route path="*" element={<Navigate to="/cats" replace />} />
    </Routes>
  );
}
