import { Card,Row,Col } from "react-bootstrap";

const fontSyle = {
  color: "white",
  fontSize: "32px",
};
const userCard = (props) => {
  return (
    <div className="col-lg-4">
      <Card
        className="rounded"
        style={{ width: "22rem", backgroundImage: `${props.bgColor}` }}
      >
        <Card.Body>
          <Row>
            <Col>
              <Card.Title className="fs-3 white" style={{ color: "white" }}>
                {props.name}
              </Card.Title>
              </Col>
              <Col className="text-end">
            <i className={props.icon} style={fontSyle}></i>
            </ Col>
          </Row>
          <Card.Subtitle className="mb-2 text-white">
            total
          </Card.Subtitle>
          <Card.Text style={fontSyle}>{props.value}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default userCard;
