import { useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";


const EditProducts = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [products, setProducts] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/Products/${id}`)
      .then((res) => res.json())
      .then((results) => setProducts(results));
  }, [id]);
  return (
    <Container className="mt-4">
      <h3>
        Edit Products &nbsp;<i className="fa-solid fa-bag-shopping"></i>
      </h3>
      {console.log(products)}
      <Form className="mt-3">
        <Form.Group className="mb-3">
          <Form.Label>Products Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter prodcuts"
            value={products.title}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Catrgory</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter prodcuts"
            value={products.category}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter price"
            value={products.price}
          />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label>Stock</Form.Label>
        <Form.Control type="text" placeholder="Enter price" value={products.rating?.count}  />
      </Form.Group>

        <Button variant="primary" type="submit">
          Edit
        </Button>&nbsp;&nbsp;
        <Button variant="warning" onClick={() => navigate("/Products")}> Cancel</Button>
      </Form>
    </Container>
  );
};

export default EditProducts;
