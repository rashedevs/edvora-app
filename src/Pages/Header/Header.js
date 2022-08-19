import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
import edvora from "../../Edvora.png";
const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      sticky="top"
      expand="lg"
      bg="dark"
      variant="dark"
      className="header py-1"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ mouse: "pointer", fontSize: "22px" }}
        >
          <span>
            <img style={{ width: "120px" }} src={edvora} alt="" />
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="all-links">
            <CustomLink to="/">Dashboard</CustomLink>
            <CustomLink to="/users">Users</CustomLink>
            <CustomLink to="/products">Products</CustomLink>
            <CustomLink to="/orders">Orders</CustomLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
