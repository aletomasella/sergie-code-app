import React from "react";
import { default as TableBoostrap } from "react-bootstrap/Table";
import data from "../data";

const Table = () => {
  return (
    <>
      <div style={{ backgroundColor: "lightslategray" }}>
        <h2 className="tableTitle">Table</h2>
        <TableBoostrap striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Carrera</th>
              <th>Hobbie</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.career}</td>
                  <td>{item.hobbie}</td>
                </tr>
              ))}
          </tbody>
        </TableBoostrap>
      </div>
    </>
  );
};

export default Table;
