import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div>
      <Navbar bg="light" variant="light" >
        <Container>
          <Navbar.Brand href="#home">Admin</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              {" "}
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                {" "}
                Home{" "}
              </Link>
            </Nav.Link>

            <Nav.Link>
              {" "}
              <Link
                to="Users"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                User{" "}
              </Link>
            </Nav.Link>

              <Nav.Link>
              {" "}
              <Link
                to="Products"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                Products{" "}
              </Link>
            </Nav.Link>
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
