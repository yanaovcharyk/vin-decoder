import { apiRequest } from "@/common/api/apiRequest";

export interface DecodeVinResult {
  Variable: string;
  Value: string | null;
}

interface DecodeVinResponse {
  Count: number;
  Message: string;
  Results: DecodeVinResult[];
}

const pathEndpoints = {
   decodeVin: (vin: string) =>
    `/vehicles/decodevin/${vin}?format=json`,
}

export const decoderApi = {
  decodeVin(vin: string) {
    return apiRequest<DecodeVinResponse>(
      pathEndpoints.decodeVin(vin),
    )
  }
}