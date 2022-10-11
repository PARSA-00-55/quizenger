import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="nav-bar">
        <Container>
          <Navbar.Brand href="#home"><span className="text-primary fs-2 fw-bold">Quiz</span>enger</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav w-100" />
          <Navbar.Collapse id="basic-navbar-nav w-100">
            <Nav className="me-auto w-100 justify-content-end | nav-list">
            <Link to='/'>Home</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/blog'>Blog</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
