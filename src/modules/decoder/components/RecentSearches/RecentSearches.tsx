import { ClearButton } from "@/common/components";
import styles from "./RecentSearches.module.scss";

interface RecentSearchesProps {
  history: string[];
  isLoading: boolean;
  onSelectOneHistoryItem: (vin: string) => void;
  onClearHistory: () => void;
  onRemoveOneHistoryItem: (vin: string) => void;
}

export const RecentSearches = ({
  history,
  isLoading,
  onSelectOneHistoryItem,
  onClearHistory,
  onRemoveOneHistoryItem,
}: RecentSearchesProps) => {
  if (history.length === 0) {
    return null;
  }

  return (
    <section className={`card ${styles.recentSearches}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>Recent Searches</h2>

        {history.length >= 2 && (
          <button
            type="button"
            className={styles.clear}
            onClick={onClearHistory}
            disabled={isLoading}
          >
            Clear all
          </button>
        )}
      </div>

      <ul className={styles.list}>
        {history.map((vin) => (
          <li key={vin}>
            <div className={styles.item}>
              <button
                type="button"
                className={styles.select}
                disabled={isLoading}
                onClick={() => onSelectOneHistoryItem(vin)}
              >
                {vin}
              </button>

              <ClearButton
                onClick={() => onRemoveOneHistoryItem(vin)}
                disabled={isLoading}
                ariaLabel={`Remove ${vin}`}
                className={styles.remove}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
