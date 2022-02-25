/* eslint-disable react/jsx-key */
import React, { useContext } from "react";
import { GlobalContext } from "../../state/GlobalState";

const Players = () => {
  const { isLoading, players, hasErrored, error } = useContext(GlobalContext);
  console.log(players);

  if (hasErrored === true) return <div>Error: {error.message}</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {players.map((item) => {
        return (
          <h3 key={item.id} className="text-3xl font-bold underline">
            {item.firstName} {item.lastName}
          </h3>
        );
      })}
    </div>
  );
};

export default Players;
