import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse,
  Button,
  ButtonGroup,
  ButtonToolbar,
} from "reactstrap";

import ScrollspyNav from "./scrollSpy";

//Import Images
import logolight from "../../assets/images/proximity-logo.png";
import logodark from "../../assets/images/proximity-logo.png";

class NavbarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMenu: false,
    };
  }

  toggle = () => {
    this.setState({ isOpenMenu: !this.state.isOpenMenu });
  };

  render() {
    //Store all Navigationbar Id into TargetID variable(Used for Scrollspy)
    let targetId = this.props.navItems.map((item) => {
      return item.idnm;
    });
    return (
      <React.Fragment>
        <Navbar
          expand="lg"
          fixed="top"
          className={"sticky sticky-dark " + this.props.navClass}
        >
          <Container>
            <NavbarBrand className="logo" href="/">
              {this.props.imglight === true ? (
                <React.Fragment>
                  <img src={logolight} alt="" height="40" />
                  <span style={{ color: "black" }}>
                    <strong>proximity</strong>
                  </span>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <img src={logodark} alt="" height="40" />
                  <span style={{ color: "white" }}>
                    <strong>proximity</strong>
                  </span>
                </React.Fragment>
              )}
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle}>
              <i className="mdi mdi-menu"></i>
            </NavbarToggler>

            <Collapse id="navbarCollapse" isOpen={this.state.isOpenMenu} navbar>
              <ScrollspyNav
                scrollTargetIds={targetId}
                scrollDuration="200"
                headerBackground="true"
                activeNavClass="active"
                className="navbar-collapse"
              >
                <Nav navbar className="ml-auto navbar-center" id="mySidenav">
                  {this.props.navItems.map((item, key) => (
                    <NavItem
                      key={key}
                      className={item.navheading === "Home" ? "active" : ""}
                    >
                      <NavLink href={"#" + item.idnm}>
                        {" "}
                        {item.navheading}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
                <ButtonToolbar>
                  <ButtonGroup size="sm">
                    <Button
                      className="btn btn-outline-white"
                      style={{ backgroundColor: "transparent" }}
                    >
                      EN
                    </Button>
                    <Button
                      className="btn btn-outline-white"
                      style={{ backgroundColor: "transparent" }}
                    >
                      FR
                    </Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </ScrollspyNav>
            </Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavbarPage;
