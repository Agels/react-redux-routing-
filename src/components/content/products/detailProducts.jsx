import { useEffect, useState } from "react";
import {
  Card,
  Container,
  Button,
  Placeholder,
  Row,
  Col,
} from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const DetailProducts = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [products, setProducts] = useState({});
  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/Products/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
        setLoading(false);
      });
  }, [id]);
  return (
    <Container className="mt-5">
      {/* loading */}

      {isLoading ? (
        <Row>
          <Col>
            <Card style={{ width: "36rem" }}>
              <Placeholder animation="glow">
                <Placeholder style={{ width: "36rem", height: "46rem" }} />
              </Placeholder>
              {/* <Card.Img variant="top" src="holder.js" alt="loading bos" /> */}
              <Card.Body>
                .
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs="6" />
                </Placeholder>
                <Card.Text>{products.description}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Placeholder.Button xs={4} aria-hidden="true" />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={7} /> <Placeholder xs={5} />{" "}
                  <Placeholder xs={12} />{" "}
                  <Placeholder xs={8} />
                  <br />
                  <Placeholder xs={3} />
                  <br />
                  <Placeholder xs={3} />
                  <br />
                  <Placeholder xs={3} />
                </Placeholder>
                <Placeholder.Button xs={4} aria-hidden="true" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col>
            <Card style={{ width: "30rem", height: "20rem" }}>
              <Card.Img variant="top" src={products.image} />
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>{products.title}</Card.Title>
                <Card.Text className="fw-light ">
                  {products.description}
                </Card.Text>
                <Card.Text> Category : {products.category}</Card.Text>
                <Card.Text> Price : {products.price}</Card.Text>
                <Card.Text>Stock : {products.rating?.count}</Card.Text>
                <Card.Text>Rating : {products.rating?.rate}</Card.Text>
                <Button varian="primary" onClick={() => navigate("/Products")}>
                 Back
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};
export default DetailProducts;
