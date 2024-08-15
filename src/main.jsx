import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
=======
import { StoreProvider } from "easy-peasy";
import App from "./App";
import store from "./store-easyPeasy";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
>>>>>>> ff5b1a827190a545f5053f82564ea013734132f7
);
