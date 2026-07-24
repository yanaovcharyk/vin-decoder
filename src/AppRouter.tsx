import { Route, Routes } from "react-router-dom";
import { DecoderPage } from "@/decoder/pages/DecoderPage";
import { VehicleVariableDetailsPage } from "@/vehicleVariables/pages/VehicleVariableDetailsPage/VehicleVariableDetailsPage";
import { VehicleVariablesListPage } from "@/vehicleVariables/pages/VehicleVariablesListPage/VehicleVariablesListPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={< DecoderPage/>} />
      <Route path="/variables" element={<VehicleVariablesListPage />} />
      <Route path="/variables/:variableId" element={<VehicleVariableDetailsPage />} />
    </Routes>
  );
};
