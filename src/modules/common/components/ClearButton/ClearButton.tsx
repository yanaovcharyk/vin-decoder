import closeIcon from "@assets/icons/close.svg";

import styles from "./ClearButton.module.scss";

interface ClearButtonProps {
  onClick: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
}

export const ClearButton = ({
  onClick,
  disabled = false,
  ariaLabel = "Clear",
  className = "",
}: ClearButtonProps) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      <img
        src={closeIcon}
        alt="close Icon"
        aria-hidden="true"
        className={styles.icon}
      />
    </button>
  );
};
