import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { getSignUp } from "../../Redux/action";
import Swal from 'sweetalert2'
import style from "../signup/signup.module.css"

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {data,error} = useSelector((state) => state.user);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");

  const sup=()=>{
    dispatch(getSignUp(user, email, password, mobile))
    if (data.length) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `You Signed Up!
        `,
        showConfirmButton: false,
        timer: 1400,
      });
    }
  }

  useEffect(() => {
    if (Object.keys(data).length) {
      Swal.fire(data.message);
      navigate("/login");
    } else if (Object.keys(error).length) {
      if (error.message.length == 3) {
        Swal.fire(error.message[0], error.message[1], error.message[2]);
      } else if (error.message.length == 2) {
        Swal.fire(error.message[0], error.message[1]);
      } else if (error.message.length == 1) {
        Swal.fire(error.message[0]);
      } else {
        Swal.fire(error.message);
      }
    }
  }, [data, error]);

  return (
    <div>
      <form onSubmit={e => e.preventDefault()} >
        <section className={["gradient-custom",style.section].join(" ")}>
          <div className={["container","py-5","h-75","col-md-12",style.container].join(" ")}>
            <div className="row d-flex justify-content-center h-50">
              <div className="col-sm-12 col-md-8 col-lg-6 col-xl-5">
                <div className={["card","bg-dark","text-white",style.card].join(" ")}>
                  <div className={["card-body","p-5","text-center",style.parentDiv].join(" ")}>
                    <div className="mb-lg-5 mb-sm-2">
                      <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                      <p className="text-white-50 mb-5">
                        Please enter your login and password!
                      </p>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Username"
                          onChange={(e) => setUser(e.target.value)}
                        />
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="email"
                          id="typeEmailX"
                          className="form-control form-control-lg"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
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
                      <div className="form-outline form-white mb-4">
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          placeholder="Confirm Password"
                        />
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="tel"
                          className="form-control form-control-lg"
                          placeholder="Phone Number"
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </div>
                      <div className={style.signUpButton}>
                        <button
                          className="btn btn-outline-light"
                          type="submit"
                          onClick={sup}
                          >
                          Sign Up!
                        </button>
                        <button
                          className="btn btn-outline-light my-2"
                          type="submit"
                          onClick={()=>navigate("/login")}
                        >
                          Login Now!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default React.memo(SignUp);
