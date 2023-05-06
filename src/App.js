import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Router from "./Router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./Redux/action";
import Parent from "./Parent";
import Child from "./Child";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Parent >
        <Child/>
      </Parent>
    </div>
  );
}

export default App;
