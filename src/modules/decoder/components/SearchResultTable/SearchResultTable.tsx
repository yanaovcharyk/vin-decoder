import { Loader } from "@/common/components/Loader/Loader";
import type { DecodeVinResult } from "@/decoder/api/decoderApi";

import styles from "./SearchResultTable.module.scss";

interface SearchResultTableProps {
  results: DecodeVinResult[];
  vin: string;
  isLoading: boolean;
}

export const SearchResultTable = ({
  results,
  vin,
  isLoading,
}: SearchResultTableProps) => {
  if (isLoading) {
    return (
      <section className={styles.results}>
        <h2 className={styles.title}>
          Decoding Results for VIN: {vin}
        </h2>

        <div className={styles.loader}>
          <Loader />
        </div>
      </section>
    );
  }

  if (results.length === 0) {
    return null;
  }

  return (
    <section className={styles.results}>
      <h2 className={styles.title}>
        Decoding Results for VIN: {vin}
      </h2>

      <div className={`card ${styles.tableWrapper}`}>
        <table className={styles.table}>
          <tbody>
            {results.map((item) => (
              <tr key={item.Variable}>
                <td className={styles.name}>
                  {item.Variable}
                </td>

                <td className={styles.value}>
                  {item.Value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
