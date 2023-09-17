import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const LoginForm = ({ handleOnSubmit, handleOnChange, email, password }) => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="text-info text-center">Client Login</h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
              <Form.Group className="m-2">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
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
                  value={password}
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
      </Container>
    </>
  );
};

LoginForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default LoginForm;
