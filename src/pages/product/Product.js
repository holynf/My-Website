import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Cart, getAdd, getCart, getPayment, getproduct } from "../../Redux/action";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { cart } from "../../Redux/reducer";

const Product = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.product);
  const payment = useSelector((state) => state.payment);
  const state = useSelector((state) => state.cart);
  const count = useSelector((state) => state.count);

  const { productId } = useParams();

  const location = useLocation()
  data.counts = count
  data.totalCount = count*data.price
  
  useEffect(() => {
    dispatch(getproduct(productId));
    dispatch({type:"coClear"})
  }, []);

  console.log(state);
  console.log(location);

  return (
    <div className="d-flex gradient-custom" style={{ justifyContent: "center" , flexDirection:"column",minHeight:"50rem"}}>
      <div xs="6" className="mx-2">
        <img src={data.image} style={{width:"18rem",height:"14rem",borderRadius:"12px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} />
      </div>
      <div xs="6" className="my-5">
        <h2>{data.name}</h2>
        <div >

        
        Color:<h3 style={{color:`${data.color}`,fontFamily:"cursive"}}>{data.color}</h3>
        Price:<h3 style={{color:`${data.price <= 50 ? 'green' : 'red'}`,fontFamily:"cursive"}}>{data.price}$</h3>
        Count:
        <h3 style={{fontFamily:"cursive"}}>
          {data.countInStock !== 0 ? data.countInStock : "Item is Solded Out"}
        </h3>
        Rating:<h3 style={{fontFamily:"cursive"}}>{data.rating}⭐</h3>
        {data.countInStock === 0 ? (
          <Button disabled>Add To Cart!</Button>
        ) : (
          <div className="d-flex justify-content-center">
          <div style={{outline:"2px solid black",minWidth:"12rem",borderRadius:"12px",padding:".5rem",background:"white"}}>
            <button style={{border:"none",minHeight:"3rem",background:"white"}}>
              {count !==0 ? <Button onClick={()=>dispatch({type:"coReduce"})} style={{background:"white",color:"black",fontSize:"30px",border:"none"}}>-</Button> 
              : <Button onClick={()=>dispatch({type:"coReduce"})} style={{background:"white",color:"black",fontSize:"30px",border:"none"}} disabled>-</Button>}
              <span>{count}</span>
              {data.countInStock > count ? <Button onClick={()=>dispatch({type:"coAdd"})} style={{background:"white",color:"black",fontSize:"30px",border:"none"}}>+</Button> : 
              <Button onClick={()=>dispatch({type:"coAdd"})} disabled style={{background:"white",color:"black",fontSize:"30px",border:"none"}}>+</Button>}
            </button>
            <button style={{border:"2px solid gray",minHeight:"3rem",background:"white",borderRadius:"12px"}}
              onClick={() => {dispatch({type:"add",payload : count})
              dispatch(getPayment(data))
            }}
            >
              Add To Cart!
            </button>
          </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Product;
