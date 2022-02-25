/* eslint-disable react/jsx-key */
import React from "react";
import Players from "../components/Players";
import path from "path";
import fs from "fs";
import Layout from "../components/Layout";

export const InitialPlayersDataContext = React.createContext();

export const getStaticProps = async () => {
  const { promisify } = require("util");
  const readFile = promisify(fs.readFile);
  const jsonFile = path.resolve("./", "db.json");
  let initialPlayersData;
  try {
    const readFileData = await readFile(jsonFile);
    initialPlayersData = JSON.parse(readFileData).players;
  } catch (e) {
    console.log("/api/players error", e);
  }

  return { revalidate: 1, props: { initialPlayersData } };
};

const players = ({ initialPlayersData }) => {
  return (
    <InitialPlayersDataContext.Provider value={initialPlayersData}>
      <Layout>
        <Players />
      </Layout>
    </InitialPlayersDataContext.Provider>
  );
};

export default players;
