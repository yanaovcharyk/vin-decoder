import type { ToastMessage } from "./types";
import styles from "./Toast.module.scss";

interface Props {
  toast: ToastMessage;
  onClose: (id: string) => void;
}

export function Toast({
  toast,
  onClose,
}: Props) {
  return (
    <div className={`${styles.toast} ${styles[toast.type]}`}>
      <span className={styles.message}>
        {toast.message}
      </span>

      <button
        type="button"
        className={styles.close}
        onClick={() => onClose(toast.id)}
        aria-label="Close notification"
      >
        ×
      </button>
    </div>
  );
}
