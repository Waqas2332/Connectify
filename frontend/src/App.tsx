import { Routes, Route } from "react-router-dom";
import GuestHome from "./pages/GuestHome";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GuestHome />} />
      </Routes>
    </>
  );
}
