import Button from "react-bootstrap/esm/Button";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cart, getPayment, getproduct, getTotal } from "../../Redux/action";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import style from "../Cart/cart.module.css";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";

const Cart = () => {
  const { data, loading, error } = useSelector((state) => state.payment);
  const total = useSelector((state) => state.total);
  const cart = useSelector((state) => state.cart);
  const count = useSelector((state) => state.count);
  const [set,setItem] = useState("")
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal(data));
  }, []);

  return (
    <div>
      <Container className={style.container}>
        <Row>
          {data.map((item) => {
            return (
              <div className={[style.cartlayer,style.firstDiv].join(" ")}>
                <Col xs="4">
                  <div className={style.cartlayer}>
                    <img src={item.image} className="image mx-3" />
                  </div>
                </Col>
                <Col xs="4">
                  <div className={style.cartlayer}>
                    <div className="mx-3">
                      <Card.Body>
                        <Card.Title className={style.cartTitle}>{item.name}</Card.Title>
                        <h4 className="my-3">{item.price}$</h4>
                        <h5 className={style.h5}>{item.rating}⭐</h5>
                      </Card.Body>
                    </div>
                  </div>
                </Col>
                <Col xs="4" className="d-flex justify-content-center">
                  <div className={style.buttonDiv}>
                    <Button >
                      <div className="d-flex">
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
                            dispatch({ type: "add", payload:  1 })
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

        <div className="footer">
          <Button variant="dark" onClick={()=>{localStorage.removeItem("payment")
         localStorage.removeItem("cart")
        }}>Clear Cart items</Button>
          <Button variant="dark">
            Total Price :{" "}
            {total.data.reduce((sum, item, index) => {
              return (sum += item);
            }, 0)}
            $
          </Button>
          <Button as={Link} to="/address" variant="dark">
            Continue
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
