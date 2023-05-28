import Button from "react-bootstrap/esm/Button";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cart, getPayment, getproduct, getTotal } from "../../Redux/action";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";

const CheckOut = () => {
    const { data, loading, error } = useSelector((state) => state.payment);
    const total = useSelector((state) => state.total);
    const cart = useSelector((state) => state.cart);
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getTotal(data));
    }, []);
  
    return (
      <div>
        <Container>
          <Row>
            {data.map((item) => {
              return (
                <div
                className="cartLayer "
                style={{ maxHeight: "14rem",margin:"2rem auto" }}
              >
                <Col xs="4">
                  <div className="cartLayer">
                    <img src={item.image} className="image mx-3" />
                  </div>
                </Col>
                <Col xs="4">
                  <div className="cartLayer">
                    
                    <div className="mx-3">
                      <Card.Body>
                        <Card.Title
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "wrap",
                            color:"white",
                            fontFamily:"cursive"
                          }}
                        >
                          {item.name}
                        </Card.Title>

                        <h4 className="my-3">{item.price}$</h4>
                        <h5 style={{
                            color:"white",
                            fontFamily:"cursive"
                          }}>{item.rating}⭐</h5>
                      </Card.Body>
                    </div>
                  </div>
                </Col>
                <Col xs="4" className="d-flex justify-content-center">
                  <div style={{
                    backgroundColor:"black",
                    width:"10rem",
                    display:"flex",
                    height:"3rem",
                    alignItems:"center",
                    outline:".4rem solid",
                    borderRadius:"12px"
                  }}>
                    <Button >
                      <div style={{ display: "flex" }}>
                        <Button
                          onClick={() =>
                            dispatch({ type: "reduce", payload: cart - 1 })
                          }
                        >
                          -
                        </Button>
                        <h3>{item.counts}</h3>
                        <Button
                          onClick={() =>
                            dispatch({ type: "add", payload: cart + 1 })
                          }
                        >
                          +
                        </Button>
                      </div>
                    </Button>
                    <Button size="sm">
                      <span>
                        Price:<h6>{item.totalCount}$</h6>
                      </span>
                    </Button>
                  </div>
                </Col>
              </div>
              );
            })}
          </Row>
        </Container>
  
        <Container>
          <div className="footer d-flex justify-content-around">  
            <Button size="lg">Edit!</Button>
            <Button size="lg">
              Total Price :{" "}
              {total.data.reduce((sum, item, index) => {
                return (sum += item);
              }, 0)}
              $
            </Button>
            <Button size="lg">Done!</Button>
          </div>
        </Container>
      </div>
    );
  };


export default CheckOut