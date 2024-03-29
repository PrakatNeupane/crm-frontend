import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PageBreadCrumb from "../../components/breadcrumb/PageBreadCrumb.comp";
import tickets from "../../assets/data/dummy-tickets.json";
import { MessageHistory } from "../../components/message-history/MessageHistory.comp";
import { UpdateTicket } from "../../components/update-ticket/UpdateTicket.comp";
import { useParams } from "react-router-dom";
// const ticket = tickets[0];
const Ticket = () => {
  const [message, setMessage] = useState("");
  const [ticket, setTicket] = useState("");
  const { tId } = useParams();
  useEffect(() => {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i].id === tId) {
        setTicket(tickets[i]);
        continue;
      }
    }
  }, [message, tId]);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = () => {
    alert("Form submitted");
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadCrumb page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col className="text-wegiht-bolder text-secondary">
          <div className="subject">Subject : {ticket.subjects}</div>
          <div className="date">Ticket opened : {ticket.addedAt}</div>
          <div className="status">Status : {ticket.status}</div>
        </Col>
        <Col>
          <Button variant="outline-info">Close Ticket</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>{ticket.history && <MessageHistory msg={ticket.history} />}</Col>
      </Row>
      <hr />
      <Row className="mt-4">
        <Col>
          <UpdateTicket
            msg=""
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Ticket;
