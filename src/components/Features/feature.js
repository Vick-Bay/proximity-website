import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import FeatureBox from "./feature-box";

//Import Images
import feature1 from "../../assets/images/features/img-1.png";

class Features extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section" id="features">
          <Container>
            <SectionTitle subtitle="Business problems we've solved" />
            <Row justify-content-center>
              <Col lg={5} sm={8}>
                <Card className="border border-light shadow-none mt-5 mt-lg-0">
                  <CardHeader className="border-0 bg-transparent"></CardHeader>
                  <CardBody className="bg-light">
                    <div
                      className="box-shadow"
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
                        }}
                      >
                        <h4
                          style={{
                            color: "white",
                          }}
                        >
                          Can a love story double as a hearing test
                        </h4>
                        <p
                          style={{
                            float: "left",
                            display: "inline-block",
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
              <Col lg={5} sm={8}>
                <Card className="border border-light shadow-none mt-5 mt-lg-0">
                  <CardHeader className="border-0 bg-transparent"></CardHeader>
                  <CardBody className="bg-light">
                    <div
                      className="box-shadow"
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
                        }}
                      >
                        <h4
                          style={{
                            color: "white",
                          }}
                        >
                          How close to an AFL player can you get
                        </h4>
                        <p
                          style={{
                            float: "left",
                            display: "inline-block",
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
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Features;
