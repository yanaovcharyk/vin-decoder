export interface ValidationResult {
  isValid: boolean;
  errorMessage?: string;
}

export const validateVin = (
  vin: string,
): ValidationResult => {
  const normalizedVin = vin.trim().toUpperCase();

  if (!normalizedVin) {
    return {
      isValid: false,
      errorMessage: "Enter the VIN code",
    };
  }

  if (normalizedVin.length > 17) {
    return {
      isValid: false,
      errorMessage: "VIN code cannot contain more than 17 characters",
    };
  }

  if (!/^[A-Z0-9]+$/.test(normalizedVin)) {
    return {
      isValid: false,
      errorMessage: "VIN code can only contain latin letters and numbers",
    };
  }

  return {
    isValid: true,
  };
};