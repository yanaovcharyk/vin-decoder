import { Route, Routes } from "react-router-dom";
import { MainPage, VariablesPage, VariableDetailsPage } from "./pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/variables" element={<VariablesPage />} />
      <Route path="/variables/:id" element={<VariableDetailsPage />} />
    </Routes>
  );
};
