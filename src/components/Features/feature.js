import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Images
import pencil from "../../assets/images/pencil-bw-clipart.png";
import feature1 from "../../assets/images/features/img-1.png";

class Features extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section" id="features">
          <Container className="pt-5">
            <img
              src={pencil}
              alt="pencil"
              className="img-fluid mx-auto d-block"
              style={{ width: "150px", height: "auto" }}
            />
            <SectionTitle subtitle="Business problems we've solved" />
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Col lg={6} sm={12} className="p-0">
                <Card className=" shadow-none mt-5 mt-lg-0 p-0">
                  <CardBody>
                    <div
                      style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={feature1}
                        alt=""
                        className="img-fluid mx-auto d-block"
                      />
                      <div
                        style={{
                          position: "absolute",
                          width: "300px",
                          left: "30px",
                        }}
                      >
                        <h4
                          style={{
                            color: "white",
                            fontFamily: "Avenir-Book",
                            fontSize: "25px",
                            textAlign: "left",
                            lineHeight: "1.3",
                          }}
                        >
                          Can a love story double as a hearing test
                        </h4>
                        <p
                          style={{
                            float: "left",
                            fontFamily: "Avenir-Book",
                            display: "inline-block",
                            textDecoration: "underline",
                          }}
                        >
                          <Link
                            to="#"
                            style={{
                              color: "white",
                            }}
                          >
                            Find out here
                          </Link>
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={6} sm={12} className="p-0">
                <Card className=" shadow-none mt-5 mt-lg-0 p-0">
                  <CardBody>
                    <div
                      style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={feature1}
                        alt=""
                        className="img-fluid mx-auto d-block"
                      />
                      <div
                        style={{
                          position: "absolute",
                          width: "300px",
                          left: "30px",
                        }}
                      >
                        <h4
                          style={{
                            color: "white",
                            fontFamily: "Avenir-Book",
                            fontSize: "25px",
                            textAlign: "left",
                            lineHeight: "1.3",
                          }}
                        >
                          How close to an AFL player can you get?
                        </h4>
                        <p
                          style={{
                            float: "left",
                            fontFamily: "Avenir-Book",
                            display: "inline-block",
                            textDecoration: "underline",
                          }}
                        >
                          <Link
                            to="#"
                            style={{
                              color: "white",
                            }}
                          >
                            Find out here
                          </Link>
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  float: "center",
                  fontFamily: "Avenir-Book",
                  display: "inline-block",
                  textDecoration: "underline",
                }}
              >
                <Link
                  to="#"
                  style={{
                    color: "black",
                  }}
                >
                  View our work
                </Link>
              </p>
            </Row>
            <Row
              style={{
                display: "flex",
                width: "100%",
                flexWrap: "wrap",
                justifyContent: "flex-end",
              }}
            >
              <p
                style={{
                  float: "center",
                  fontFamily: "Avenir-Book",
                  display: "inline-block",
                }}
              >
                <Link
                  to="#"
                  style={{
                    color: "black",
                  }}
                  onClick={() =>
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                  }
                >
                  <span>&#8593;</span> Return to top
                </Link>
              </p>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Features;
