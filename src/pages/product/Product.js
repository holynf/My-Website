import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  Cart,  getAdd,  getCart,  getPayment,  getproduct} from "../../Redux/action";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { cart } from "../../Redux/reducer";
import style from "../Product/product.module.css";
import { ListGroup, Spinner } from "react-bootstrap";
import Swal from "sweetalert2";


const Product = () => {
  const { data, loading, error } = useSelector((state) => state.product);
  const payment = useSelector((state) => state.payment);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { productId } = useParams();

  data.counts = count;
  data.totalCount = count * data.price;

  useEffect(() => {
    dispatch(getproduct(productId));
    dispatch({ type: "coClear" });
  }, []);

  const popUp =() =>{
    if(count){
      dispatch({ type: "add", payload: count });
      dispatch(getPayment(data));
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your item added!",
        showConfirmButton: false,
        timer: 1400,
      });
      navigate("/")
    }else{
      Swal.fire({
        position: "center",
        icon: "warning",
        title: `your count is 0
        Please Add Product!
        `,
        showConfirmButton: false,
        timer: 1400,
      });
    }
  }

  console.log(payment.data);
  
  return (
    <div className={["d-flex", "gradient-custom", style.firstDiv].join(" ")}>
      {loading ? <Spinner animation="border" variant="info" className={style.spinner}/> : error ? (
        <h1>{error}</h1>
      ) : <div className={style.productStyle}>
      <div className={style.divison}>
        <Card className={style.card}>
          <Card.Header className={style.cardHeader}>
            <h4 className={style.cardTitle}>{data.name}</h4>
          </Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              Brand: <span className={style.textColor}>{data.brand}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Category: <span className={style.textColor}>{data.category}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Color: <span className={style.textColor}>{data.color}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Available: <span className={style.textColor}>{data.countInStock ? data.countInStock : <span className={style.notAvailable}>NotAvailable</span>}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Description: <span className={style.textColor}>{data.description}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Reviews: <span className={style.textColor}>{data.numReviews}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Price: <span className={style.textColor}>{data.price}$</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Rating: <span className={style.textColor}>{data.rating}⭐</span>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
      <div className={style.divison}>
        <div className={style.chDivison}>
          <h1>{data.name}</h1>
          <img src={data.image} className={style.image}/>
        </div>
        <div className={style.chDivison}>
          {data.countInStock === 0 ? (
            <Button disabled>Item is Invalid!</Button>
          ) : (
            <div className="d-flex justify-content-center">
              <div className={style.addDiv}>
                <button className={style.addButton}>
                  {count !== 0 ? (
                    <button
                      onClick={() => dispatch({ type: "coReduce" })}
                      className={style.addMinusButton}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      onClick={() => dispatch({ type: "coReduce" })}
                      className={style.addMinusButton}
                      disabled
                    >
                      -
                    </button>
                  )}
                  <Button variant="info">{count}</Button>
                  {data.countInStock > count ? (
                    <button
                      onClick={() => dispatch({ type: "coAdd" })}
                      className={style.addMinusButton}
                    >
                      +
                    </button>
                  ) : (
                    <button
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
                      className={style.addMinusButton}
                    >
                      +
                    </button>
                  )}
                </button>
                <Button
                variant="info"
                  className={style.addToCartButton}
                  onClick={() => {
                    popUp()
                  }}
                >
                  Add To Cart!
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>}
      
    </div>
  );
};

export default Product;
