import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./add-ticket-form.style.css";

const AddTicketForm = ({
  handleOnSubmit,
  handleOnChange,
  formData,
  formError,
}) => {
  console.log(formData);
  return (
    <>
      <Container className="add-new-ticket mt-3 bg-light p-2">
        <Row>
          <Col>
            <h1 className="text-info text-center">Add New Ticket</h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
              <Form.Group className="m-2" as={Row}>
                <Form.Label column sm={3}>
                  Subject
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    name="subject"
                    onChange={handleOnChange}
                    placeholder="Subject"
                    value={formData.subject}
                    // minLength="3"
                    maxLength="100"
                    required
                  />
                  <Form.Text className="text-danger">
                    {formError.subject && "Subject is required"}
                  </Form.Text>
                </Col>
              </Form.Group>

              <Form.Group className="m-2" as={Row}>
                <Form.Label column sm={3}>
                  Issue Found
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="date"
                    name="issueDate"
                    value={formData.issueDate}
                    onChange={handleOnChange}
                    placeholder="Enter Date"
                    required
                  />
                </Col>
              </Form.Group>
              <Form.Group className="m-2" as={Row}>
                <Form.Label column sm={3}>
                  Details
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    as="textarea"
                    name="details"
                    rows="5"
                    onChange={handleOnChange}
                    placeholder="Enter Details"
                    value={formData.details}
                    required
                  />
                </Col>
              </Form.Group>

              <Button type="submit" variant="info" className="ml-4">
                Add new ticket
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

AddTicketForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  formError: PropTypes.object.isRequired,
};

export default AddTicketForm;
