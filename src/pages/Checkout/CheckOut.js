import Button from "react-bootstrap/esm/Button";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cart, getPayment, getproduct, getTotal } from "../../Redux/action";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import style from "../Checkout/checkout.module.css";
import Col from "react-bootstrap/esm/Col";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";
import Profile from "../Profile/Profile";

const CheckOut = () => {
  const { data } = useSelector((state) => state.address);
  const total = useSelector((state) => state.total);
  const cart = useSelector((state) => state.cart);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTotal(data));
  }, []);

  return (
    <div className="d-flex">
      <div className="col-6 w-50">
        <Cart />
      </div>
      <div className="col-6">
        <div className="single_advisor_details_info">
          <div
            className={[
              "d-flex",
              "justify-content-center",
              "mx-3",
              style.secUserInfo,
            ].join(" ")}
          >
            {data.address ? (
              <div className={[style.infoDiv, "p-5"].join(" ")}>
                <table>
                  <tr>
                    <th>Address:</th>
                    <td>
                      <span>{data.address?.addres}</span>
                    </td>
                  </tr>
                  <tr>
                    <th>City:</th>
                    <td>
                      <span>{data.address?.city}</span>
                    </td>
                  </tr>
                  <tr>
                    <th>PostalCode:</th>
                    <td>
                      <span>{data.address?.code}</span>
                    </td>
                  </tr>
                  <tr>
                    <th>Mobile:</th>
                    <td>
                      <span>{data.address?.phone}</span>
                    </td>
                  </tr>
                </table>
                <Button
                  className={["my-5", style.showbutton].join(" ")}
                  onClick={() => navigate("/cart")}
                >
                  Show Cart
                </Button>
              </div>
            ) : (
              <div className={style.noneInfo}>
                <h4 className="m-3">
                  "Please fill the address information cart!"
                </h4>
                <Button className="m-3" onClick={() => navigate("/address")}>
                  Address information cart
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
