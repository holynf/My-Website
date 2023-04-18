import React from "react";
import { Route, Routes } from "react-router-dom";
import Address from "./pages/address/Address";
import Cart from "./pages/cart/Cart";
import GetProfile from "./pages/getprofile/GetProfile";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NotFound from "./pages/notfound/NotFound";
import Product from "./pages/product/Product";
import SignUp from "./pages/signup/SignUp";
import { useSelector } from "react-redux";
import CheckOut from "./pages/checkout/CheckOut";
import Setting from "./pages/setting/Setting";
import ChangeProfile from "./pages/setting/changeProfile/ChangeProfile";
import ChangePassword from "./pages/setting/changePassword/ChangePassword";
import UploadAvatar from "./pages/setting/uploadAvatar/UploadAvatar";

const Router = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const { data } = useSelector((state) => state.token);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile" element={<GetProfile />} />
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
