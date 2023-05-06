import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import { data, product , cart ,payment, total ,count , user,token,status,address,change} from "./reducer";
const reducers = combineReducers({ data, product , cart,payment , total ,count , user,token,status,address,change});
const middleWare = [thunk];
const store = createStore(
  reducers, 
  applyMiddleware(...middleWare)
); 

export default store;