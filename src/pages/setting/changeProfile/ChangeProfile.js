import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { changeProfile, getAddress, getUser } from "../../../Redux/action";

const ChangeProfile = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const dispatch = useDispatch();
  const { chngProfData, chngProfError } = useSelector(
    (state) => state.chngProfile
  );
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);
  const [city, setCity] = useState("");

  useEffect(() => {
    if (chngProfData) {
      Swal.fire(chngProfData);
      dispatch({
        type: "delChngProf",
        payLoad: { chngProfData: "", chngProfError: "" },
      });
    } else if (Object.keys(chngProfError).length) {
      const error = chngProfError?.response?.data?.message;
      if (error.length === 4) {
        Swal.fire(`${error[0]} , ${error[1]} , ${error[2]} , ${error[3]}`);
      } else if (error.length === 3) {
        Swal.fire(`${error[0]} , ${error[1]} , ${error[2]}`);
      } else if (error.length === 2) {
        Swal.fire(`${error[0]} , ${error[1]}`);
      } else {
        Swal.fire(error[0]);
      }
      dispatch({
        type: "delChngProf",
        payLoad: { chngProfData: "", chngProfError: "" },
      });
    }
  }, [chngProfData, chngProfError]);

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
                      <h2 className="fw-bold mb-2 text-uppercase">Profile</h2>
                      <p className="text-white-50 mb-5">
                        Please enter your Informations!
                      </p>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="text"
                          id="typeEmailX"
                          className="form-control form-control-lg"
                          placeholder="FirstName"
                          onChange={(e) => setFirstname(e.target.value)}
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="LastName"
                          onChange={(e) => setLastname(e.target.value)}
                        />
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Gender"
                          onChange={(e) => setGender(e.target.value)}
                        />
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Age"
                          onChange={(e) => setAge(e.target.value)}
                        />
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="City"
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                      <Button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                        onClick={()=>{
                          dispatch(changeProfile(firstname,lastname,age,gender,city,token))
                        }}
                      >
                        Change!
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

export default ChangeProfile;
