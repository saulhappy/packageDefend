import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./style.css";

export class index extends Component {
  render() {
    return (
      <div className="Login">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <h2>Login</h2>
            <br></br>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button bg="dark" variant="dark" type="submit">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default index;

// import React, { useState } from "react";
// import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
// import "./style.css";

// export default function Login(props) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   console.log(props);
//   return (
//     <div className="Login">
//       <form onSubmit={handleSubmit}>
//         <FormGroup controlId="email">
//           <FormLabel>Email</FormLabel>
//           <FormControl
//             autoFocus
//             type="email"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//           />
//         </FormGroup>
//         <FormGroup controlId="password">
//           <FormLabel>Password</FormLabel>
//           <FormControl
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             type="password"
//           />
//         </FormGroup>
//         <Button disabled={!validateForm()} type="submit">
//           Login
//         </Button>
//       </form>
//     </div>
//   );
// }
