import React, { useEffect } from "react";
import { useStoreState } from "easy-peasy";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/navbar";

const App = () => {
  const { data, error } = useStoreState((state) => state.playlists);
  console.log(data);
  console.log(error);

  return (
    <>
      <CssBaseline />
      <Navbar />
    </>
  );
};

export default App;
