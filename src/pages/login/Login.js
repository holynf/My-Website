import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../../components/header/Header";
import { getStatus, getUser } from "../../Redux/action";

const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({});
  const token = localStorage.getItem("token")
  const req = async () => {
    try {
      const { data } = await axios.post(
        "http://kzico.runflare.run/user/login",
        {
          email: `${user}`,
          password: `${password}`,
        }
      );
      localStorage.setItem("token", JSON.stringify(data.user.token));
      dispatch(getUser(data));
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `
        Good job!
        Welcome ${user},`,
        showConfirmButton: false,
        timer: 1500
      })
    } catch (error) {
      console.log(error.response.data);
      if(!token){
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: `username or password is Wrong, 'Please Try Again!'`,
        showConfirmButton: true,
        timer: 8000
      })
    }
      if(token){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `You Logged in before`,
        showConfirmButton: true,
        timer: 8000
      })
    }
    }
  };

  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your login and password!
                    </p>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        placeholder="Email/Username"
                        onChange={(e) => setUser(e.target.value)}
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      onClick={() => {
                        req();
                      }}
                    >
                      Login
                    </button>
                  </div>

                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <Button
                        as={Link}
                        to="/signup"
                        className="text-white-50 fw-bold"
                      >
                        Sign Up
                      </Button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
