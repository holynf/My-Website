import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Router from "./Router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./Redux/action";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
