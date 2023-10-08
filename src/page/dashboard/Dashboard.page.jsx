import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Tickettable from "../../components/ticket-table/Tickettable.comp";
import tickets from "../../assets/data/dummy-tickets.json";
import PageBreadCrumb from "../../components/breadcrumb/PageBreadCrumb.comp";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col className="mt-2">
          <PageBreadCrumb page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Link to="/add-ticket">
            <Button
              variant="info"
              style={{ fontSize: "2rem", padding: "10px 30px" }}
            >
              Add new ticket
            </Button>
          </Link>
        </Col>
      </Row>

      <Row>
        <Col className="text-center mt-5 mb-2">
          <div>Total tickets: 50</div>
          <div>Pending tickets: 10</div>
        </Col>
      </Row>

      <Row>
        <Col className="mt-2">
          <div>Recently Added Tickets</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">
          <Tickettable tickets={tickets} />
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

export default Dashboard;
