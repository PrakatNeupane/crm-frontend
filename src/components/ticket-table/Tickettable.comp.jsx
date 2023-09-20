import React from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";

const Tickettable = ({ tickets }) => {
  return (
    <Table striped hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
        {tickets.length ? (
          tickets.map((row) => (
            <tr key={Math.random()}>
              <td>{row.serial}</td>
              <td>{row.subjects}</td>
              <td>{row.status}</td>
              <td>{row.addedAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center pt-5">
              No results to show
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

Tickettable.propTypes = {
  tickets: PropTypes.array.isRequired,
};

export default Tickettable;
