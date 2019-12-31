import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

export class Favorite extends Component {
    render() {
        return (
            <div>
                  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Favorite" />
  </Form.Group>
            </div>
        )
    }
}

export default Favorite
