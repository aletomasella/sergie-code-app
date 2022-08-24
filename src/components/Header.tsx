import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div style={{ backgroundColor: "lightslategray" }}>
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Container>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Navbar.Brand href="#home">Sergie Code APP</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link to={"/table"} style={{ textDecoration: "none" }}>
                    Table
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={"/form"} style={{ textDecoration: "none" }}>
                    Formulario
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
