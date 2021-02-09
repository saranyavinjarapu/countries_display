import "./App.css";

import React from "react";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="main-container">
      <ToastContainer />
      <Header />
    </div>
  );
}

export default App;
