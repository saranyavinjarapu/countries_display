import React from "react";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header/Header";
import Countries from "./components/Countries/Countries";

function App() {
  return (
    <div className="main-container">
      <ToastContainer />
      <Header />
      <Countries></Countries>
    </div>
  );
}

export default App;
