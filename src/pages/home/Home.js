import React, { useEffect, useState } from "react";
import { getData } from "../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import style from "../Home/home.module.css";
import { Spinner } from "react-bootstrap";

const Home = () => {
  const { data, loading, error } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <Container  >
      <Row>
        {loading ? 
        <div className={style.divison} >
          <Spinner animation="border" variant="info" className={style.spinner}/> 
        </div> : error ? (
        <h1>{error}</h1>
      ) : data.map((item) => {
        return (
          <Col xs="6" xl="4" key={item._id} >
            <Card
              className={style.card}
              as={Link}
              to={`/product/${item._id.toString()}`}
              item={item}
            >
              <Card.Img
                variant="top"
                src={item.image}
                className={style.cardimg}
              />
              <Card.Body>
                <Card.Title
                  className={style.cardtitle}
                >
                  {item.name}
                </Card.Title>
                <Card.Text className={style.cardText}>
                  {item.countInStock !== 0 ? (
                    <p style={{ color: "green" }}>
                      <span>Available: </span>
                      {item.countInStock}
                    </p>
                  ) : (
                    <p style={{ color: "red" }}>This item is Invalid!</p>
                  )}
                </Card.Text>
                <div className={style.cardFooter}>
                  <span>{item.price}$</span>
                  <span>{item.rating}⭐</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
      </Row>
    </Container>
  );
};

export default Home;
