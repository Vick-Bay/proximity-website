import React, { Component } from "react";
import ReactPlayer from "react-player/lazy";
import { Container, Row, Col } from "reactstrap";

//Import Videos and Video Image
import videoImg from "../../assets/videos/video-poster.jpg";
import video from "../../assets/videos/video.mp4";

class Section extends Component {
  render() {
    const FallbackImage = () => {
      return (
        <div
          style={{
            minHeight: "100vh",
            minWidth: "100vw",
            backgroundImage: `url(${videoImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        ></div>
      );
    };

    return (
      <React.Fragment>
        <section className="hero-section" id="home">
          <Container fluid>
            <Row
              className="justify-content-center"
              style={{ position: "absolute" }}
            >
              <ReactPlayer
                url={video}
                playing
                loop
                muted
                width="100%"
                height="100%"
                fallback={FallbackImage}
                style={{ position: "relative" }}
              />
              <Col>
                <p style={{ position: "relative", zIndex: "1000" }}>
                  We make people more valuable to brands
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
