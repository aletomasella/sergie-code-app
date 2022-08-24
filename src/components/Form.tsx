import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { default as FormBoostrap } from "react-bootstrap/Form";
import { default as TableBoostrap } from "react-bootstrap/Table";

interface Input {
  name: string;
  lastName: string;
  birthDate: string;
  email: string;
}

const Form = () => {
  const [input, setInput] = useState({
    name: "",
    lastName: "",
    birthDate: "",
    email: "",
  });
  const [data, setData] = useState([] as Input[]);

  const onChange = (e: any) => {
    setInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(input);
    setData([...data, input]);
    setInput({
      name: "",
      lastName: "",
      birthDate: "",
      email: "",
    });
  };

  return (
    <>
      <div>
        <FormBoostrap onSubmit={onSubmit}>
          <FormBoostrap.Group className="mb-3">
            <FormBoostrap.Label>Nombre</FormBoostrap.Label>
            <FormBoostrap.Control
              type="text"
              placeholder="Ingresa tu nombre"
              name="name"
              value={input.name}
              onChange={onChange}
            />
          </FormBoostrap.Group>

          <FormBoostrap.Group className="mb-3">
            <FormBoostrap.Label>Apellido</FormBoostrap.Label>
            <FormBoostrap.Control
              type="text"
              placeholder="Ingresa tu apellido"
              name="lastName"
              value={input.lastName}
              onChange={onChange}
            />
          </FormBoostrap.Group>

          <FormBoostrap.Group className="mb-3">
            <FormBoostrap.Label>Email</FormBoostrap.Label>
            <FormBoostrap.Control
              type="email"
              placeholder="Ingresa tu Mail"
              name="email"
              value={input.email}
              onChange={onChange}
            />
          </FormBoostrap.Group>

          <FormBoostrap.Group className="mb-3">
            <FormBoostrap.Label>Fecha de Nacimiento</FormBoostrap.Label>
            <FormBoostrap.Control
              type="date"
              placeholder="Ingresa tu Mail"
              name="birthDate"
              value={input.birthDate}
              onChange={onChange}
            />
          </FormBoostrap.Group>

          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </FormBoostrap>
      </div>
      {data && data.length > 0 && (
        <div style={{ backgroundColor: "lightslategray" }}>
          <h2 className="tableTitle">Table</h2>
          <TableBoostrap striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Fecha de Nacimiento</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.birthDate}</td>
                  </tr>
                ))}
            </tbody>
          </TableBoostrap>
        </div>
      )}
    </>
  );
};

export default Form;
