import { useState } from "react";

import { useToast } from "@/common/components/Toast/useToast";
import { decoderApi, type DecodeVinResult } from "@/decoder/api/decoderApi";
import { useVinHistory } from "@/decoder/hooks/useVinHistory";
import { filterDecodedVin } from "@/decoder/utils/filterDecodedVin";

import { RecentSearches } from "../RecentSearches/RecentSearches";
import { SearchResultTable } from "../SearchResultTable/SearchResultTable";
import { VinDecodingForm } from "../VinDecodingForm";

import styles from "./VinDecoder.module.scss";

export const VinDecoder = () => {
  const [vin, setVin] = useState("");

  const [results, setResults] = useState<DecodeVinResult[]>([]);

  const [decodedVin, setDecodedVin] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const { history, addToHistory, removeFromHistory, clearHistory } =
    useVinHistory();

  const { showToast } = useToast();

  const decodeVin = async (vinCode: string) => {
    setIsLoading(true);

    setResults([]);

    setDecodedVin("");

    try {
      const data = await decoderApi.decodeVin(vinCode);

      const filteredResults = filterDecodedVin(data.Results);

      if (!filteredResults.length) {
        showToast("No information was found for this VIN", "error");

        return;
      }

      setResults(filteredResults);

      setDecodedVin(vinCode);

      setVin(vinCode);

      addToHistory(vinCode);
    } catch {
      showToast("Unable to decode VIN. Please try again.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const clearResults = () => {
    setResults([]);

    setDecodedVin("");
  };

  return (
    <div className={styles.decoder}>
      <section className={styles.header}>
        <h1 className={styles.title}>
          Decode the vehicle identification number
        </h1>
      </section>

      <VinDecodingForm
        vin={vin}
        onVinChange={setVin}
        onSubmit={decodeVin}
        onClear={clearResults}
        isLoading={isLoading}
      />

      <RecentSearches
        history={history}
        onSelectOneHistoryItem={decodeVin}
        isLoading={isLoading}
        onRemoveOneHistoryItem={removeFromHistory}
        onClearHistory={clearHistory}
      />

      <SearchResultTable
        results={results}
        vin={decodedVin}
        isLoading={isLoading}
      />
    </div>
  );
};
