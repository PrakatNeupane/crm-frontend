import React from "react";
import { Form, Button } from "react-bootstrap";

export const UpdateTicket = () => {
  return (
    <Form>
      <Form.Label>Reply</Form.Label>
      <div className="fw-light fs-8">
        Please reply your message here or update the ticket
      </div>
      <Form.Control as="textarea" row="5" name="detail" />
      <div className="text-right mt-3 mb-3">
        <Button variant="info" type="submit">
          Reply
        </Button>
      </div>
    </Form>
  );
};