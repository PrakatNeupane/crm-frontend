import React from "react";
import { Table } from "react-bootstrap";

const Tickettable = ({ tickets }) => {
  return (
    <Table striped border hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>

      {tickets.length ? (
        tickets.map((row) => (
          <tr>
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
    </Table>
  );
};

export default Tickettable;
