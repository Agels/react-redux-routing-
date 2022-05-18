import { Container, Row, Col } from "react-bootstrap";
import UserCard from "../../assets/card/card";
import Table from "../../assets/table/table";
import Chart from "../../assets/chart/chart";

import { useSelector } from "react-redux";

const Home = () => {

  const {userTotal, orderTotal, paymentTotal} = useSelector((state) => state.total);

  return (
    <Container>
      <Row className="mt-3 gx-5 col-lg-12">
        <UserCard
          name="user"
          bgColor="linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114))"
          icon="fa-solid fa-user"
          value={userTotal}
        />
        <UserCard
          name="order"
          bgColor="radial-gradient( circle farthest-corner at 10% 20%,  rgba(97,186,255,1) 0%, rgba(166,239,253,1) 90.1% )"
          icon="fa-solid fa-bag-shopping"
          value={orderTotal}
        />
        <UserCard
          name="payment"
          bgColor="linear-gradient( 68.4deg,  rgba(99,251,215,1) -0.4%, rgba(5,222,250,1) 100.2% )"
          icon="fa-solid fa-money-bill-trend-up"
          value={paymentTotal}
        />
      </Row>
      <div className="mt-5">
        <Row className="col-lg-12">
          <Col className="col-lg-8">
            <p className="fs-4"> #5 Most Active User</p>
            <Table />
          </Col>
          <Col className="col-lg-4">
            <Chart />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Home;

