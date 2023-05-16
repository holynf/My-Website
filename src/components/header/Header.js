import React, { useCallback, useEffect, useRef } from "react";
import Button from "react-bootstrap/esm/Button";
import { Link, NavLink, p, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import axios from "axios";
import { getStatus, getUser } from "../../Redux/action";
import { cart } from "../../Redux/reducer";

const Header = ({token}) => {
  const state = useSelector((state) => state.cart);
  const product = useSelector((state) => state.product);
  const {data} = useSelector((state) => state.token);
  const dispatch = useDispatch();

  localStorage.setItem("cart",state)
  const req = async () => {
    try {
      const { data } = await axios.get(
        "http://kzico.runflare.run/user/profile",
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(getUser(data));
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(()=>{
    req()
  },[])

  console.log(data);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Home
          </Navbar.Brand>

          <Form className="d-flex">
            <Button as={Link} to="/cart" variant="dark">
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
                    fill="currentColor"
                  />
                  <path
                    d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
                    fill="currentColor"
                  />
                  <path
                    d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="cartCount mx-2">{state ? state : ""}</span>
            </Button>
            {data.status === 200 ? (
              <div>
                <section variant="info" className="mx-3">
                  <DropdownButton
                    id="dropdown-basic-button"
                    title={data.user.email}
                  >
                    <Dropdown.Item
                      href="#/action-1"
                      className="d-flex justify-content-center"
                    >
                      <Button className="w-100" as={Link} to="/profile">
                        <img
                          src={data.user.image}
                          style={{ width: "1rem", height: "1rem" }}
                          className="mx-2"
                        />
                        {data.user.username}
                      </Button>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      className="d-flex justify-content-center"
                      as={Link}
                      to="/setting"
                    >
                      Setting
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      className="d-flex justify-content-center"
                      as={Link}
                      to="/checkout"
                    >
                      Orders
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      className="d-flex justify-content-center"
                      onClick={() => {
                      dispatch({type:"tokenError",payload:{ data: {}, loading: false, error: "" }})
                      localStorage.clear()
                      }}
                    >
                      Log Out!
                    </Dropdown.Item>
                    
                    
                  </DropdownButton>
                </section>
              </div>
            ) : (
              <Button variant="info" className="mx-3" as={Link} to="/login">
                Login
              </Button>
            )}
          </Form>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
