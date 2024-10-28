import { HomePage, ProductsList } from "../pages";
import { Routes, Route } from "react-router-dom";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductsList" element={<ProductsList />} />
      </Routes>
    </>
  );
};
