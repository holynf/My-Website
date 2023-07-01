import React, { useCallback, useEffect, useRef } from "react";
import { Link, NavLink, p, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getStatus, getUser } from "../../Redux/action";
import { cart } from "../../Redux/reducer";
import logo from "../../images/logo.png";
import aos from "aos";
import "aos/dist/aos.css";

const Header = ({ token }) => {
  const state = useSelector((state) => state.cart);
  const product = useSelector((state) => state.product);
  const { data } = useSelector((state) => state.token);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  localStorage.setItem("cart", state);

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

  useEffect(() => {
    req();
    aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                      to="/cart"
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
      </Navbar> */}

      <div className="flex h-36 justify-around items-center gap-20 md:gap-5 bg-blue-950 ">
        <span
          className="w-16 md:w-24 flex items-center gap-2 md:gap-10 border-slate-200 drop-shadow-2xl"
          data-aos="fade-left"
        >
          <img
            src={logo}
            alt="Logo"
            className="bg-cyan-600 p-1 w-12 md:w-14 rounded-full "
          />
          <span className="text-2xl text-white">Mosify</span>
        </span>
        <div className="hidden sm:flex rounded justify-center gap-10 items-center text-white">
          <Link to="/" className="no-underline text-white">
            Home
          </Link>
          <span>About Us</span>
          <span>Products</span>

          <span className="relative">
            <span>Blog</span>
            <p
              style={{
                position: "absolute",
                right: "-2rem",
                top: "-1rem",
                borderRadius: "12px",
              }}
              className="bg-orange-300  flex text-white  px-1 items-center"
            >
              <span className="text-sm">New!</span>
            </p>
          </span>
        </div>

        <div className="flex sm:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
        <div className="hidden sm:flex items-center gap-3" data-aos="fade-right">
          <div className="hidden sm:flex sm:order-3 bg-cyan-600 p-2 rounded-lg text-white gap-3 items-center drop-shadow-2xl">
            <Link className="text-white" to="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </Link>
            <span>|</span>
            <span className=" hover:text-slate-300">
              <Link className="no-underline	text-white" to="/login">
                {data.status === 200 ? (
                  <div>
                    <section variant="info" className="mx-3">
                      <p
                        id="dropdown-basic-button"
                        title={data.user.email}
                      >
                    
                          <button className="w-100" as={Link} to="/profile">
                            <img
                              src={data.user.image}
                              style={{ width: "1rem", height: "1rem" }}
                              className="mx-2"
                            />
                            {data.user.username}
                          </button>
                        
                        
                      </p>
                    </section>
                  </div>
                ) : "Get access to Your Account"}
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
