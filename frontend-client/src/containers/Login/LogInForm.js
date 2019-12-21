import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./style.css";

function LogInForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`http://localhost:3000/api/login`, {
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
        switch (data.status) {
          case 200:
            props.setUserState(data.user);
            localStorage.setItem("user_id", data.user.id);
            props.history.push("/users/home");
            break;
          case 404:
            let error = {};
            error.login = "Incorrect email or password";
            setError(error);
            break;
          default:
            break;
        }
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
          {error.login ? <p className="error">{error.login}</p> : ""}
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            isInvalid={error.login}
            onChange={handleEmailChange}
            type="email"
            placeholder="Email Address"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            isInvalid={error.login}
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

export default withRouter(LogInForm);
