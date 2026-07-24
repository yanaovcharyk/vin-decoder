import type { InputHTMLAttributes } from "react";
import { ClearButton } from "@/common/components/ClearButton";
import styles from "./TextInput.module.scss";

interface TextInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange"
  > {
  value: string;
  onChange: (value: string) => void;
  clearable?: boolean;
  className?: string;
}

export const TextInput = ({
  value,
  onChange,
  clearable = true,
  className = "",
  ...inputProps
}: TextInputProps) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <input
        {...inputProps}
        className={styles.input}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />

      {clearable && value && (
        <div className={styles.clearButton}>
          <ClearButton
            onClick={() => onChange("")}
            disabled={inputProps.disabled}
            ariaLabel="Clear input"
          />
        </div>
      )}
    </div>
  );
};
