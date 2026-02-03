// Router.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/*" element={<> 404 not found</>} />
    </Routes>
  );
};

export default Router;
