import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./style.css";

function LogInForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        localStorage.setItem("token", data.jwt);
        // props.handleLogin(data.user);
      });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <h2>Login</h2>
          <br></br>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={handleEmailChange}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={handlePasswordChange}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button bg="dark" variant="dark" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default LogInForm;
