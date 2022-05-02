import { Container } from "react-bootstrap";
import { Table as Tables, Spinner, Badge } from "react-bootstrap";
import { useEffect, useState } from "react";
const User = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/users/")
      .then((res) => res.json())
      .then((result) => {
        setUser(result);

        setLoading(false);
      });
  }, []);

  return (
    <Container className="mt-4">
      
        <h3 >
          User List &nbsp;<i className="fa-solid fa-user"></i>
        </h3>
    
      <Tables responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>email</th>
            <th>phone</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="5" className="text-center">
                <Spinner animation="border" />
              </td>
            </tr>
          ) : (
            user.map((item, i) => {
              let randx = Math.floor(Math.random() * 3);
              let status = "";
              if (randx === 0) {
                status = <Badge bg="primary">active</Badge>;
              } else if (randx === 1) {
                status = <Badge bg="success">online</Badge>;
              } else {
                status = <Badge bg="danger">Offline</Badge>;
              }
              return (
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{status}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </Tables>
    </Container>
  );
};

export default User;
