import React, { useEffect, useReducer } from "react";
import playersReducer from "../reducer/playersReducer";
import axios from "axios";

const usePlayerDataManager = () => {
  const [{ isLoading, players, hasErrored, error }, dispatch] = useReducer(
    playersReducer,
    { isLoading: false, players: [], hasErrored: false, error: null }
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result = await axios.get("/api/players");
        dispatch({ type: "setPlayers", data: result.data });
      } catch (e) {
        dispatch({ type: "errored", error: e });
      }
    };
    fetchData();
  }, []);

  return {
    isLoading,
    players,
    hasErrored,
    error,
  };
};

export default usePlayerDataManager;
