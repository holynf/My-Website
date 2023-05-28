import React from "react";
import { Route, Routes } from "react-router-dom";
import Address from "./pages/Address/Address";
import Cart from "./pages/Cart/Cart";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Product from "./pages/Product/Product";
import SignUp from "./pages/signup/SignUp";
import { useSelector } from "react-redux";
import CheckOut from "./pages/Checkout/CheckOut";
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
      <Route path="/profile" element={token ? <Profile /> : <Login />} />
      <Route path="/address" element={token ? <Address /> : <Login />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/setting" element={<Setting />} >
        <Route path="changeProfile" element={token ? <ChangeProfile /> : <Login />} />
        <Route path="changePassword" element={token ? <ChangePassword /> : <Login />} />
        <Route path="uploadAvatar" element={token ? <UploadAvatar /> : <Login />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
