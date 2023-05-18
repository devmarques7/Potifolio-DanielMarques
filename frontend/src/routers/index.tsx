import App from "../App";
import Work from "../Work";
import { Route, Routes } from "react-router-dom";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/Work" element={<Work />}></Route>
    </Routes>
  );
};
