import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { default as FormBoostrap } from "react-bootstrap/Form";

const Form = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  return (
    <>
      <div>
        <FormBoostrap>
          <FormBoostrap.Group className="mb-3" controlId="formBasicEmail">
            <FormBoostrap.Label>Email address</FormBoostrap.Label>
            <FormBoostrap.Control type="email" placeholder="Enter email" />
            <FormBoostrap.Text className="text-muted">
              We'll never share your email with anyone else.
            </FormBoostrap.Text>
          </FormBoostrap.Group>

          <FormBoostrap.Group className="mb-3" controlId="formBasicPassword">
            <FormBoostrap.Label>Password</FormBoostrap.Label>
            <FormBoostrap.Control type="password" placeholder="Password" />
          </FormBoostrap.Group>
          <FormBoostrap.Group className="mb-3" controlId="formBasicCheckbox">
            <FormBoostrap.Check type="checkbox" label="Check me out" />
          </FormBoostrap.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </FormBoostrap>
      </div>
    </>
  );
};

export default Form;
