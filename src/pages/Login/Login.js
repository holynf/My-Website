import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import style from "../Login/login.module.css"
import { getLogIn } from "../../Redux/action";

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { data ,error } = useSelector((state) => state.logIn);


  useEffect(() => {
    if (Object.keys(data).length) {
      localStorage.setItem("user", JSON.stringify(data.user));
      dispatch({ type: "delLogIn", payLoad: { data: {}, error: "" } });
      navigate("/")
    } else if (error) {
      Swal.fire(error);
      dispatch({ type: "delLogIn", payLoad: { data: {}, error: "" } });
    }
  }, [data, error]);

  
  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className={["card","bg-dark","text-white",style.card].join(" ")}>
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
                        if (user && password) {
                          dispatch(getLogIn(user, password));
                        }
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
