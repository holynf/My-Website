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

const Home = () => {
  const { data, loading, error } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <Container>
      <Row>
        {data.map((item) => {
          return (
            <Col xs="4" key={item._id}>
              <Card
                style={{
                  width: "25rem",
                  height: "22rem",
                  margin: "1.5rem auto",
                  display: "flex",
                  justifyContent: "center",
                  border:
                    "1px solid linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))",
                  borderRadius: "12px",
                }}
              >
                <Card.Img
                  variant="top"
                  src={item.image}
                  className="image"
                  style={{
                    width: "11rem",
                    height: "8rem",
                    justifySelf: "center",
                    margin: "2rem auto",
                  }}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.name}
                  </Card.Title>
                  <Card.Text>
                    {item.countInStock !== 0
                      ? item.countInStock
                      : "This item is Invalid!"}
                  </Card.Text>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <span>{item.price}$</span>
                    <span>{item.rating}⭐</span>
                    <Button
                      as={Link}
                      to={`/product/${item._id.toString()}`}
                      item={item}
                    >
                      Buy
                    </Button>
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
