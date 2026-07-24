import { useState } from "react";

import { TextInput, useToast } from "@/common/components";

import { validateVin } from "@/decoder/utils";

import styles from "./VinDecodingForm.module.scss";

interface VinFormProps {
  vin: string;
  isLoading: boolean;
  onVinChange: (vin: string) => void;
  onSubmit: (vin: string) => Promise<void>;
  onClear: () => void;
}

export const VinDecodingForm = ({
  vin,
  isLoading,
  onVinChange,
  onSubmit,
  onClear,
}: VinFormProps) => {
  const { showToast } = useToast();

  const [hasError, setHasError] = useState(false);

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = async (
    event,
  ) => {
    event.preventDefault();
    const validationResult = validateVin(vin);
    if (!validationResult.isValid) {
      setHasError(true);
      showToast(validationResult.errorMessage ?? "Invalid VIN code", "error");

      return;
    }
    setHasError(false);
    await onSubmit(vin);
  };

  const handleVinChange = (value: string) => {
    const normalizedValue = value.toUpperCase();

    if (normalizedValue.length > 17) {
      setHasError(true);

      showToast("VIN code cannot contain more than 17 characters", "error");
    } else {
      setHasError(false);
    }

    const nextVin = normalizedValue.slice(0, 17);

    onVinChange(nextVin);

    if (nextVin === "") {
      onClear();
    }
  };

  return (
    <form
      className={`${styles.form} ${hasError ? styles.error : ""}`}
      onSubmit={handleSubmit}
    >
      <p className={styles.hint}>
        Enter a full 17-character VIN for the most accurate results.
        <br />
        Partial VINs may return general vehicle information.
      </p>

      <div className={styles.field}>
        <TextInput
          id="vin"
          className={styles.input}
          value={vin}
          onChange={handleVinChange}
          placeholder="1FTFW1CT5DFC10312"
          disabled={isLoading}
          clearable
        />

        <button type="submit" className={styles.button} disabled={isLoading}>
          Decode
        </button>
      </div>
    </form>
  );
};
