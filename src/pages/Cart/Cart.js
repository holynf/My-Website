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
import Swal from "sweetalert2";

const Cart = () => {
  const { data, loading, error } = useSelector((state) => state.payment);
  const total = useSelector((state) => state.total);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const subtraction =(id) =>{
    data.map((item,index)=>{
      if(item._id == id){
        const result = item.totalCount - item.price
        item.counts -= 1
        item.totalCount = result
      }
      if(item.counts === 0 ){
        data.splice(index,1)
        localStorage.setItem(
          "payment",
          JSON.stringify(data)
        );
      }
    })
  }

  const sum =(id) =>{
    data.map((item)=>{
      if(item._id == id){
        const result = item.totalCount + item.price
        item.counts += 1
        item.totalCount = result
      }
    })
  }


  useEffect(() => {
    dispatch(getTotal(data));
    if(data?.length){
      const help = []
      data.map((item)=>{
        help.push(item.totalCount)
        help.reduce((last,item)=>{return last+item})
        localStorage.setItem("price",JSON.stringify(help))
        localStorage.setItem("payment",JSON.stringify(data))
      })
    }
    if(!cart){
      localStorage.removeItem("payment")
    }
  }, [cart]);


  return (
    <div>
      <Container className={style.container}>
        <Row>
          {data.length ? data?.map((item) => {
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
                      <Card.Body className={style.cardBody}>
                        <Card.Title className={style.cartTitle}>{item.name.slice(0,20)}</Card.Title>
                        <span className="d-flex justify-content-center my-3">
                        <h4 className="m-2">Price: </h4>
                        <h4 className="m-2">{item.price}$</h4>
                        </span>
                        <p className={["my-2",style.displayNone].join(" ")}>
                        {item.countInStock ? <h4 className={style.available}>Available:{" "}{item.countInStock}</h4> : <h4>Item is invalid!</h4>}
                        </p>
                        <h5 className={[style.h5,"mt-4",style.displayNone].join(" ")}>{item.rating}⭐</h5>
                      </Card.Body>
                    </div>
                  </div>
                </Col>
                <Col xs="4" className="d-flex justify-content-center">
                  <div className={style.buttonDiv}>
                    <span variant="none">
                      <div className={style.countDiv}>
                        <Button
                          onClick={() =>
                            {subtraction(item._id,item.counts)
                            dispatch({ type: "reduce", payload: cart - 1 })}
                          }
                          variant="none"
                        >
                          -
                        </Button>
                        <h3>{item.counts}</h3>
                        {item.countInStock > item.counts ? <Button
                          onClick={() =>
                            {sum(item._id,item.counts)
                            dispatch({ type: "add", payload:  1 })}
                          }
                          variant="none"
                        >
                          +
                        </Button> : <Button
                         onClick={() => {
                          Swal.fire({
                            position: "center",
                            icon: "warning",
                            title: `Out of Stock!
                            `,
                            showConfirmButton: false,
                            timer: 1400,
                          });
                        }}
                        variant="none"
                        >
                          +
                        </Button>}
                      </div>
                    </span>
                    <span variant="none" className={style.displayNone}>
                      <span className={["d-flex",style.displayNone].join(" ")}>
                        <h5 className="mx-2">Price:</h5>
                        <h6 className="mx-2">{item.totalCount}$</h6>
                      </span>
                    </span>
                  </div>
                </Col>
              </div>
            );
          }) : <div className="mt-5 mb-5 text-white">
            <h5>Your Cart is Empty!</h5>
            </div>}
          
        </Row>

        <div className={["footer",style.footer].join(" ")}>
          <Button variant="dark">
            Total Price:{" "}
            <span >
            {total.data.reduce((sum, item, index) => {
              const res = sum += item
              return (res);
            }, 0)}
            {" "}
            </span>
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
