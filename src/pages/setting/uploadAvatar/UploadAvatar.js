import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const UploadAvatar = () => {
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
                      <h2 className="fw-bold mb-2 text-uppercase">Avatar</h2>
                      <p className="text-white-50 mb-5">
                        Please Upload Your image!
                      </p>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="file"
                        />
                      </div>
                      <Button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        Upload
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
  )
}

export default UploadAvatar