import React, { Component } from "react";

//Import fonts
import "../../assets/fonts/Avenir-Black.ttf";
import "../../assets/fonts/Avenir-Book.ttf";

import NavbarPage from "../../components/Navbar/navbar-page";
import Section from "./section";
import Service from "../../components/Service/service";
import Features from "../../components/Features/feature";
import Subscribe from "../../components/Subscribe/Subscribe";
import Footer from "../../components/Footer/footer";
import FooterShape from "../../components/Footer/footer-shape";

class Index1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: "home", navheading: "About" },
        { id: 2, idnm: "services", navheading: "Work" },
        { id: 3, idnm: "features", navheading: "Latest" },
        { id: 4, idnm: "features", navheading: "People & Careers" },
        { id: 6, idnm: "features", navheading: "Contact" },
      ],
      pos: document.documentElement.scrollTop,
      imglight: false,
      navClass: "",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > this.state.pos) {
      this.setState({ navClass: "nav-sticky navbar-custom", imglight: true });
    } else {
      this.setState({ navClass: "nav-sticky navbar-light ", imglight: false });
    }
  };

  render() {
    return (
      <React.Fragment>
        {/* Importing Navbar */}
        <NavbarPage
          navItems={this.state.navItems}
          navClass={this.state.navClass}
          imglight={this.state.imglight}
        />

        {/* Importing section */}
        <Section />

        {/* Importing Service */}
        <Service />

        {/* Importing Features */}
        <Features />

        {/* Importing Subscribe */}
        <Subscribe />

        {/* Importing Footer */}
        <FooterShape />

        <Footer />
      </React.Fragment>
    );
  }
}

export default Index1;
