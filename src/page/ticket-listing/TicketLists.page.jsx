import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PageBreadCrumb from "../../components/breadcrumb/PageBreadCrumb.comp";
import SearchForm from "../../components/search-form/SearchForm.comp";
import Tickettable from "../../components/ticket-table/Tickettable.comp";
import tickets from "../../assets/data/dummy-tickets.json";
import { Link } from "react-router-dom";

const TicketLists = () => {
  const [str, setStr] = useState("");
  const [dispTickets, setDispTickets] = useState(tickets);

  useEffect(() => {}, [str, dispTickets]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchTicket(value);
  };

  const searchTicket = (sttr) => {
    const displayTickets = tickets.filter((row) =>
      row.subjects.toLowerCase().includes(sttr.toLowerCase())
    );

    setDispTickets(displayTickets);
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadCrumb page="Ticket Lists"></PageBreadCrumb>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="/add-ticket">
            <Button variant="info">Add New Ticket</Button>
          </Link>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>

      <Row>
        <Col>
          <Tickettable tickets={dispTickets} />
        </Col>
      </Row>
    </Container>
  );
};

export default TicketLists;
