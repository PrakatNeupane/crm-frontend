import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BreadcrumbComponent from "../../components/breadcrumb/Breadcrumb.comp";
import AddTicketForm from "../../components/add-ticket-form/AddTicketForm.comp";
import { shortText } from "../../utils/validation";

const initialFormData = {
  subject: "",
  issueDate: "",
  detail: "",
};
const initialFormError = {
  subject: false,
  issueDate: false,
  detail: false,
};

const AddTicket = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formError, setFormError] = useState(initialFormError);

  useEffect(() => {}, [formData, formError]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const isSubjectValid = await shortText(formData.subject);

    setFormError({
      ...initialFormError,
      subject: !isSubjectValid,
    });

    console.log("Form service requuest received");
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbComponent page="New ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            formError={formError}
            handleOnChange={handleOnChange}
            formData={formData}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AddTicket;
