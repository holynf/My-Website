import Button from "react-bootstrap/esm/Button";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cart, getAddress, getPayment, getproduct, getTotal, signUp } from "../../Redux/action";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";

const Address = () => {
  const [city, setCity] = useState("");
  const [addres, setAddress] = useState("");
  const [code, setCode] = useState("");
  const [phone, setPhone] = useState("");
  const {data: { user }} = useSelector((state) => state.token);
  
  const dispatch = useDispatch()
  
  return (
    <div>
      <form>
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
                      <h2 className="fw-bold mb-2 text-uppercase">address</h2>
                      <p className="text-white-50 mb-5">
                        Please enter your Address Informations!
                      </p>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="City"
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Address"
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Postal Code"
                          onChange={(e) => setCode(e.target.value)}
                        />
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Phone Number"
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                      <Button
                        className="btn btn-outline-light btn-lg px-5"
                        onClick={()=>dispatch(getAddress(city, addres, code, phone,user))}
                        as={Link}
                        to="/profile"
                      >
                        Next
                      </Button>
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

export default Address;
