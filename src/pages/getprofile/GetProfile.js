import axios from "axios";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../Redux/action";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const GetProfile = () => {
  const { data } = useSelector((state) => state.address);
  const {
    data: { user },
  } = useSelector((state) => state.token);
  const token = JSON.parse(localStorage.getItem("token"));
  const [update, setUpdate] = useState({});

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
      setUpdate(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    req();
  }, []);

  console.log(user);
  console.log(data);
  console.log(update.user);

  return (
    <div>
      <div className="container">
        <div className="row d-flex my-5" style={{ justifyContent: "center" }}>
          <div className="col-12 col-sm-6 col-lg-3">
            <div
              className="single_advisor_profile wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="advisor_thumb">
                <img
                  src={user?.image}
                  alt=""
                  style={{ width: "9rem", height: "9rem" }}
                />
              </div>

              <div className="single_advisor_details_info">
                <h6 className="my-4" style={{ fontSize: "2rem" }}>
                  {user?.username}
                </h6>
                <h3>
                  Email:
                  <h4 style={{ color: "white", fontFamily: "cursive" }}>
                    {user?.email}
                  </h4>
                </h3>
                <div className="d-flex justify-content-center" style={{flexDirection:"column"}}>
                  <Container>
                    <Row>
                    {update?.user && (
                      <Col>
                      <div className="d-flex">
                        <h3>
                          Mobile:
                          <h4 style={{ color: "white", fontFamily: "cursive" }}>
                            {update?.user.mobile}
                          </h4>
                        </h3>
                        <h3>
                          FirstName:
                          <h4 style={{ color: "white", fontFamily: "cursive" }}>
                            {update?.user.firstname}
                          </h4>
                        </h3>
                        <h3>
                          LastName:
                          <h4 style={{ color: "white", fontFamily: "cursive" }}>
                            {update?.user.lastname}
                          </h4>
                        </h3>
                        <h3>
                          City:
                          <h4 style={{ color: "white", fontFamily: "cursive" }}>
                            {update?.user.city}
                          </h4>
                        </h3>
                        <h3>
                          gender:
                          <h4 style={{ color: "white", fontFamily: "cursive" }}>
                            {update?.user.gender}
                          </h4>
                        </h3>
                        <h3>
                          Age:
                          <h4 style={{ color: "white", fontFamily: "cursive" }}>
                            {update?.user.age}
                          </h4>
                        </h3>
                      </div>
                      </Col>
                    )}
                    </Row>
                  </Container>
                      
                  <div className="d-flex">
                    {data.address ? (
                      <div className="d-flex">
                        <h3>
                          City:
                          <h4 style={{ color: "white", fontFamily: "cursive" }}>
                            {data.address?.city}
                          </h4>
                        </h3>
                        <h3>
                          Address:
                          <h4 style={{ color: "white", fontFamily: "cursive" }}>
                            {data.address?.addres}
                          </h4>
                        </h3>
                        <h3>
                          Postal Code:
                          <h4 style={{ color: "white", fontFamily: "cursive" }}>
                            {data.address?.code}
                          </h4>
                        </h3>
                        <h3>
                          Phone Number:
                          <h4 style={{ color: "white", fontFamily: "cursive" }}>
                            {data.address?.phone}
                          </h4>
                        </h3>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetProfile;
