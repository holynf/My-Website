import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { changePassword, getAddress, getUser } from "../../../Redux/action";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [newPass, setNewPass] = useState("");
  const [show, setShow] = useState(false);

  const token = JSON.parse(localStorage.getItem("token"));
  const dispatch = useDispatch();
  const { chngPassData, chngPassError } = useSelector(
    (state) => state.chngPass
  );

  useEffect(() => {
    if (chngPassData) {
      Swal.fire(chngPassData);
      dispatch({
        type: "delChngPass",
        payLoad: { chngPassData: "", chngPassError: "" },
      });
    } else if (chngPassError) {
      Swal.fire(chngPassError);
      dispatch({
        type: "delChngPass",
        payLoad: { chngPassData: "", chngPassError: "" },
      });
    }
  }, [chngPassData, chngPassError]);

  return (
    <div>
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
                      <h2 className="fw-bold mb-2 text-uppercase">Password</h2>
                      <p className="text-white-50 mb-5">
                        Please enter your new Password!
                      </p>
                      <div className="form-outline form-white mb-4">
                        <input
                          type={show === true ? "text" : "password"}
                          id="typeEmailX"
                          className="form-control form-control-lg"
                          placeholder="Old Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type={show === true ? "text" : "password"}
                          id="typeEmailX"
                          className="form-control form-control-lg"
                          placeholder="New Password"
                          onChange={(e) => setNewPass(e.target.value)}
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type={show === true ? "text" : "password"}
                          className="form-control form-control-lg"
                          placeholder="Confirm Password"
                        />
                      </div>
                      <div className="d-flex justify-content-around">
                        {show === false ? <Button onClick={() => setShow(true)}>
                          Show Passwords
                        </Button> : <Button onClick={() => setShow(false)}>
                          hidden Passwords
                        </Button>}

                      </div>
                      <Button
                        className="btn btn-outline-light btn-lg px-5 mt-5"
                        type="submit"
                        onClick={() => {
                          if (password && newPass) {
                            dispatch(changePassword(password, newPass, token));
                          }
                        }}
                      >
                        Change Password!
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ChangePassword;
