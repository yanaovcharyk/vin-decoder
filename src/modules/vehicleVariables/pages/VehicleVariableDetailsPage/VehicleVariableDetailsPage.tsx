import { Layout, BackButton } from "@/common/components";
import { VehicleVariableDetails } from "@/vehicleVariables/components";

export const VehicleVariableDetailsPage = () => {
  return (
    <Layout>
      <BackButton to="/variables" />
      <VehicleVariableDetails />
    </Layout>
  );
};
