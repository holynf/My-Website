import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { uploadPhoto } from "../../../Redux/action";

const UploadAvatar = () => {
  const dispatch = useDispatch();
  const [pic, setPic] = useState(null);
  const token = JSON.parse(localStorage.getItem("token"));
  const { uplPhotoData, uplPhotoError } = useSelector(
    (state) => state.uplPhoto
  );

  useEffect(() => {
    if (uplPhotoData) {
      Swal.fire(uplPhotoData);
      dispatch({
        type: "delUplPhoto",
        payLoad: { uplPhotoData: "", uplPhotoError: "" },
      });
    } else if (uplPhotoError) {
      Swal.fire(uplPhotoError);
      dispatch({
        type: "delUplPhoto",
        payLoad: { uplPhotoData: "", uplPhotoError: "" },
      });
    }
  }, [uplPhotoData, uplPhotoError]);

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
                          onChange={(e) => setPic(e.target.files[0])}
                        />
                      </div>
                      <Button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                        onClick={() => dispatch(uploadPhoto(pic, token))}
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