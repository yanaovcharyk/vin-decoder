import { apiRequest } from "@/common/api/apiRequest";

export interface VehicleVariable {
  ID: number;
  Name: string;
  Description: string;
}

interface VariablesResponse {
  Count: number;
  Message: string;
  Results: VehicleVariable[];
}

const pathEndpoints = {
  variables:
    "/vehicles/GetVehicleVariableList?format=json",
};

export const vehicleVariablesApi = {
  getAll() {
    return apiRequest<VariablesResponse>(
      pathEndpoints.variables,
    );
  },

  async getById(id: number) {
    const response = await this.getAll();

    return response.Results.find(
      (variable) => variable.ID === id,
    );
  },
};