import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const style = {
  textDecoration: "none",
  color: "black",
  padding: "10px",
};
const Sidebar = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Admin</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" style={style}>
              Home
            </Link>
            <Link to="Users" style={style}>
              User
            </Link>
            <Link to="Products" style={style}>
              Products
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
    //    <div>
    //        <ul>
    //           <Link to="Users"><li>users</li></Link>
    //        </ul>
    //    </div>
  );
};
export default Sidebar;
