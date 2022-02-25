import React from "react";
import usePlayerDataManager from "../hooks/usePlayerDataManager";

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const { isLoading, players, hasErrored, error } = usePlayerDataManager();

  const provider = {
    isLoading,
    players,
    hasErrored,
    error,
  };

  return (
    <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
  );
};
