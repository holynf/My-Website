import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./components/header/Header";
import Router from "./Router";

function App() {
  const token = JSON.parse(localStorage.getItem("token"));
  return (
    <div className="App">
      <Header token={token}/>
      <Router token={token}/>
    </div>
  );
}

export default App;
