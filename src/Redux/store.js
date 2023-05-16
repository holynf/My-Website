import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import { data, product , cart ,payment, total ,logIn,count ,user,token,status,address,change} from "./reducer";
const reducers = combineReducers({ data, product,logIn, cart,payment , total ,count , user,token,status,address,change});
const middleWare = [thunk];
const local = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : 0
const pay = localStorage.getItem("payment") ? JSON.parse(localStorage.getItem("payment")) : ""
const initialState = {cart:local,payment:{ data: [...pay], loading: false, error: "" }}

const store = createStore(
  reducers, 
  initialState,
  applyMiddleware(...middleWare),
); 

export default store;