import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const AddTicketForm = ({ handleOnSubmit, handleOnChange }) => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="text-info text-center">Client Login</h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
              <Form.Group className="m-2">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  name="subject"
                  onChange={handleOnChange}
                  placeholder="Enter Email"
                  required
                />
              </Form.Group>
              <Form.Group className="m-2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleOnChange}
                  placeholder="Enter Password"
                  required
                />
              </Form.Group>

              <Button type="submit" className="m-2">
                Login
              </Button>
            </Form>
          </Col>
        </Row>

        <Row className="mt-2 mx-1">
          <Col>
            <a href="#!">Forgot Password?</a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddTicketForm;
