import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./components/header/Header";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
