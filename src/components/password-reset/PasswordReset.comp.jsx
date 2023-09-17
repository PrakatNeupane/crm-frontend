import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const PasswordReset = ({
  formSwitcher,
  handleOnChange,
  handleResetPassword,
  email,
}) => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="text-info text-center">Reset Password</h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleResetPassword}>
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

              <Button type="submit" className="m-2">
                Reset Password
              </Button>
            </Form>
          </Col>
        </Row>

        <Row className="mt-2 mx-1">
          <Col>
            <a href="#!" onClick={() => formSwitcher("login")}>
              Login Now
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

PasswordReset.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleResetPassword: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default PasswordReset;
