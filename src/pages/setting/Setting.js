import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Setting = () => {
  return (
    <div>
      <div className="d-flex justify-content-around" style={{minHeight:"100vh",alignItems:"center"}}>
        <section className="col-4 d-flex section" style={{
          maxHeight:"10rem",
          
        }}>
            <Link to="changeProfile" style={{color:"white",textDecoration:"none",fontFamily:"cursive"}} className="my-5">Change Profile</Link>
            <Link to="changePassword"style={{color:"white",textDecoration:"none",fontFamily:"cursive"}} className="my-5">Change Password</Link>
            <Link to="uploadAvatar"   style={{color:"white",textDecoration:"none",fontFamily:"cursive"}}className="my-5">Upload Avatar</Link>
        </section>
        <section className="col-8">
        <Outlet />
        </section>
      </div>
    </div>
  );
};

export default Setting;
