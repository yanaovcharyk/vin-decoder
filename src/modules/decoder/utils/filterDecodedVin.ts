import type { DecodeVinResult } from "@/decoder/api/decoderApi";

const hiddenVariables = [
  "Error Code",
  "Error Text",
  "Additional Error Text",
  "VehicleVariablesPage Descriptor",
  "Suggested VIN",
  "Possible Values",
];

const emptyValues = ["Not Applicable", "Not Available", "N/A", "Unknown"];

export const filterDecodedVin = (results: DecodeVinResult[]): DecodeVinResult[] =>
  results.filter((item) => {
    const value = item.Value?.trim();

    return (
      value &&
      !hiddenVariables.includes(item.Variable) &&
      !emptyValues.includes(value)
    );
  });