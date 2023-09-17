import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BreadcrumbComponent from "../../components/breadcrumb/Breadcrumb.comp";

const AddTicket = () => {
  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbComponent page="New ticker" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicket />
        </Col>
      </Row>
    </Container>
  );
};

export default AddTicket;
