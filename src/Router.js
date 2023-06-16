import React , {lazy , Suspense} from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = lazy(()=>import("./pages/Home/Home"))
const Login = lazy(()=>import("./pages/Login/Login"))
const NotFound = lazy(()=>import("./pages/NotFound/NotFound"))
const Address = lazy(()=>import("./pages/Address/Address"))
const Cart = lazy(()=>import("./pages/Cart/Cart"))
const Profile = lazy(()=>import("./pages/Profile/Profile"))
const Product = lazy(()=>import("./pages/Product/Product"))
const SignUp = lazy(()=>import("./pages/signup/SignUp"))
const CheckOut = lazy(()=>import("./pages/Checkout/CheckOut"))
const Setting = lazy(()=>import("./pages/setting/Setting"))
const ChangeProfile = lazy(()=>import("./pages/setting/changeProfile/ChangeProfile"))
const ChangePassword = lazy(()=>import("./pages/setting/changePassword/ChangePassword"))
const UploadAvatar = lazy(()=>import("./pages/setting/uploadAvatar/UploadAvatar"))



const Router = ({token}) => {
  return (
    <Suspense fallback={<h1>Loading ...</h1>}>
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
    </Suspense>
  );
};

export default Router;
