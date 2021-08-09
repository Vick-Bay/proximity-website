import React, { Component } from "react";
import ReactPlayer from "react-player/lazy";
import { Container, Row } from "reactstrap";
import FeatherIcon from "feather-icons-react";

//Import Videos and Video Image
import videoImg from "../../assets/videos/video-poster.jpg";
import video from "../../assets/videos/video.mp4";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="hero-section p-0" id="home">
          <Container
            fluid
            className="px-0 overflow-hidden"
            style={{ position: "absolute" }}
          >
            <Row style={{ display: "flex" }}>
              <ReactPlayer
                url={video}
                playing
                loop
                muted
                width="100%"
                height="100%"
                fallback={videoImg}
                style={{ position: "relative" }}
              />
              <p
                style={{
                  position: "absolute",
                  zIndex: "100",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                  width: "100%",
                  height: "100%",
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#ffffff",
                }}
              >
                We make people more valuable to brands
              </p>
              <i
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  position: "absolute",
                  zIndex: "100",
                  width: "100%",
                  height: "80%",
                  color: "#ffffff",
                }}
              >
                <FeatherIcon icon="arrow-down" className=" icons-md" />
              </i>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
