import { useEffect, useState } from "react";

const VIN_HISTORY_KEY = "vinHistory";

export const useVinHistory = () => {
  const [history, setHistory] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(VIN_HISTORY_KEY);

      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      VIN_HISTORY_KEY,
      JSON.stringify(history),
    );
  }, [history]);

  const addToHistory = (vin: string) => {
    setHistory((previousHistory) => {
      return [
        vin,
        ...previousHistory.filter(
          (item) => item !== vin,
        ),
      ].slice(0, 3);
    });
  };

  const removeFromHistory = (vin: string) => {
    setHistory((previousHistory) =>
      previousHistory.filter(
        (item) => item !== vin,
      ),
    );
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem(VIN_HISTORY_KEY);
  };

  return {
    history,
    addToHistory,
    removeFromHistory,
    clearHistory,
  };
};
