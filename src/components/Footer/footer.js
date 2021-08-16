import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Media } from "reactstrap";
import FeatherIcon from "feather-icons-react";
class Footer extends Component {
  state = {
    links1: [
      { link: "#", title: "About Us" },
      { link: "#", title: "Media & Press" },
      { link: "#", title: "Career" },
      { link: "#", title: "Blog" },
    ],
    links2: [
      { link: "#", title: "Pricing" },
      { link: "#", title: "For Marketing" },
      { link: "#", title: "For CEOs" },
      { link: "#", title: "For Agencies" },
      { link: "#", title: "Our Apps" },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <footer className="footer">
          <Container>
            <Row className="p-5">
              <Col lg={6} sm={12}>
                <div>
                  <p
                    style={{
                      float: "left",
                      fontFamily: "Avenir-Book",
                      display: "inline-block",
                      color: "white",
                    }}
                  >
                    © Proximity WorldWide 2018. All Rights Reserved.
                  </p>
                  <p
                    style={{
                      float: "left",
                      fontFamily: "Avenir-Book",
                      display: "inline-block",
                      color: "white",
                      textDecoration: "underline",
                      paddingLeft: "0.3rem",
                    }}
                  >
                    <Link
                      to="#"
                      style={{
                        color: "white",
                      }}
                    >
                      Privacy Statement
                    </Link>
                  </p>
                </div>
              </Col>
              <Col lg={6} sm={12}>
                <div
                  style={{
                    float: "right",
                  }}
                >
                  <i>
                    <FeatherIcon
                      icon="linkedin"
                      className="icon-dual-light mr-3 social-icon"
                      fill="orange"
                    />
                  </i>
                  <i>
                    <FeatherIcon
                      icon="twitter"
                      className="icon-dual-light mr-3 social-icon"
                      fill="orange"
                    />
                  </i>
                  <i>
                    <FeatherIcon
                      icon="facebook"
                      className="icon-dual-light mr-3 social-icon"
                      fill="orange"
                    />
                  </i>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
