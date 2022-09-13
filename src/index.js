import React from "react";
import ReactDOM from "react-dom/client";
import store from "./app/store";
import { Provider } from "react-redux";
import Header from "./components/header/header";
import Home from "./home";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   
    <Provider store={store}>
      <Header />
      <Home />
    </Provider>
  </React.StrictMode>
);
