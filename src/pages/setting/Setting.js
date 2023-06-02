import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import style from "./style.module.css"

const Setting = () => {
  return (
    <div>
      <div className={["justify-content-around",style.firstDiv].join(" ")}>
        <section className="col-4 d-flex section h-100">
            <Link to="changeProfile" className={["my-5",style.link].join(" ")}>Change Profile</Link>
            <Link to="changePassword" className={["my-5",style.link].join(" ")}>Change Password</Link>
            <Link to="uploadAvatar"  className={["my-5",style.link].join(" ")}>Upload Avatar</Link>
        </section>
        <section className="col-8">
        <Outlet />
        </section>
      </div>
    </div>
  );
};

export default Setting;
