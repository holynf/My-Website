import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { signUp } from "../../Redux/action";
import Swal from 'sweetalert2'

const SignUp = () => {
  const dispatch = useDispatch();
  const {
    data: { userName, userEmail, userMobile, userPassword },
  } = useSelector((state) => state.user);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [message,setMessage] = useState(0)
  const params = useParams()
  const location = useLocation()

  console.log(params);
  console.log(location);

  const req = async () => {
    try {
      const { data } = await axios.post(
        "http://kzico.runflare.run/user/signup",
        {
          username: `${userName}`,
          email: `${userEmail}`,
          password: `${userPassword}`,
          mobile: `${userMobile}`,
        }
      );
      console.log(data);
      setMessage(data.status)
    } catch (error) {
      console.log(error.response.data);
    }
  };


  const sweetalert = ()=>Swal.fire(
  'Good job!',
  'You clicked the button!',
  'success'
  )


  console.log(message);

  return (
    <div>
      <form onBlur={()=>dispatch(signUp(user, email, password, mobile))}>
        <section className="vh-50 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div
                  className="card bg-dark text-white"
                  style={{ borderRadius: "1rem" }}
                >
                  <div className="card-body p-5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                      <p className="text-white-50 mb-5">
                        Please enter your login and password!
                      </p>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="email"
                          id="typeEmailX"
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

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <button
                          className="btn btn-outline-light"
                          type="submit"
                          onClick={() => {
                            req();
                            {message === 201 && sweetalert()}
                          }}
                        >
                          Sign Up!
                        </button>
                        <button
                          className="btn btn-outline-light my-2"
                          type="submit"
                          as={Link}
                          to="/login"
                        >
                          Have a account? Login!
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
