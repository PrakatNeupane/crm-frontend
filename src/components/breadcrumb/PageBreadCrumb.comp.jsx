import React from "react";
import { Breadcrumb } from "react-bootstrap";

const PageBreadCrumb = ({ page }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item active> {page}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default PageBreadCrumb;
