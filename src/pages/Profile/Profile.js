import axios from "axios";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, getUser } from "../../Redux/action";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import style from "../Profile/profile.module.css";
import { useNavigate } from "react-router-dom";

const GetProfile = () => {
  const { data } = useSelector((state) => state.address);
  const {
    data: { user },
  } = useSelector((state) => state.profile);
  const token = JSON.parse(localStorage.getItem("token"));
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getProfile(token));
  }, [token]);

  return (
    <div>
      <div className="container">
        <div className={["row","d-flex","justify-content-center",style.firstDiv,].join(" ")}>
          <div className={["single_advisor_profile","wow","fadeInUp",style.parendDiv,].join(" ")} data-wow-delay="0.2s">
            <div className={["advisor_thumb", "col-3", style.imageDiv].join(" ")}>
              <img src={user?.image} alt="user image"/>
              <h6 className="my-4">{user?.username}</h6>
            </div>
            <div className={["col-9" ," d-flex",style.mobileview].join(" ")}>
              <div className={["d-flex" ,"justify-content-center","mx-3",style.userInfo].join(" ")}>
                <Row>
                  {user && (
                    <Col>
                      <div className={[style.infoDiv,"p-5"].join(" ")}>
                        <table>
                          <tr>
                            <th>FirstName:</th>
                            <td><span>{user?.firstname}</span></td>
                          </tr>
                          <tr>
                            <th>LastName:</th>
                            <td><span>{user?.lastname}</span></td>
                          </tr>
                          <tr>
                            <th>Mobile:</th>
                            <td><span>{user?.mobile}</span></td>
                          </tr>
                          <tr>
                            <th>Email:</th>
                            <td><span>{user?.email}</span></td>
                          </tr>
                          <tr>
                            <th>City:</th>
                            <td><span>{user?.city}</span></td>
                          </tr>
                          <tr>
                            <th>Gender:</th>
                            <td><span>{user?.gender}</span></td>
                          </tr>
                          <tr>
                            <th>Age:</th>
                            <td><span>{user?.age}</span></td>
                          </tr>
                        </table>
                      </div>
                    </Col>
                  )}
                </Row>
              </div>
              <div className="single_advisor_details_info">
                <div className={["d-flex" ,"justify-content-center","mx-3",style.secUserInfo].join(" ")}>
                  {data.address ? (
                    <div className={[style.infoDiv,"p-5"].join(" ")}>
                    <table>
                      <tr>
                        <th>Address:</th>
                        <td><span>{data.address?.addres}</span></td>
                      </tr>
                      <tr>
                        <th>City:</th>
                        <td><span>{data.address?.city}</span></td>
                      </tr>
                      <tr>
                        <th>PostalCode:</th>
                        <td><span>{data.address?.code}</span></td>
                      </tr>
                      <tr>
                        <th>Mobile:</th>
                        <td><span>{data.address?.phone}</span></td>
                      </tr>
                    </table>
                    <Button className={["my-5",style.showbutton].join(" ")} onClick={()=>navigate("/cart")}>Show Cart</Button>
                  </div>
                  ) : (
                    <div className={style.noneInfo}>
                      <h4 className="m-3">
                      "Please fill the address information cart!"
                      </h4>
                      <Button className="m-3" onClick={()=>navigate("/address")}>Address information cart</Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetProfile;
