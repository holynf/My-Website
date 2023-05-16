import React from "react";
import { Route, Routes } from "react-router-dom";
import Address from "./pages/Address";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product/Product";
import SignUp from "./pages/SignUp";
import { useSelector } from "react-redux";
import CheckOut from "./pages/CheckOut";
import Setting from "./pages/setting/Setting";
import ChangeProfile from "./pages/setting/changeProfile/ChangeProfile";
import ChangePassword from "./pages/setting/changePassword/ChangePassword";
import UploadAvatar from "./pages/setting/uploadAvatar/UploadAvatar";

const Router = ({token}) => {  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/address" element={token ? <Address /> : <Login />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/setting" element={<Setting />} >
        <Route path="changeProfile" element={<ChangeProfile />} />
        <Route path="changePassword" element={<ChangePassword />} />
        <Route path="uploadAvatar" element={<UploadAvatar />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
