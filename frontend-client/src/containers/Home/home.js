import React, { Component } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h3>Your recent Activity</h3>
          <br></br>
          <Container>
            <Row>
              <Col>
                <Button variant="secondary" size="lg">
                  {" "}
                  Find Package Defenders
                </Button>
              </Col>

              <Col>
                {" "}
                <Button variant="secondary" size="lg">
                  {" "}
                  Your <span>❤</span> Defenders
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
        <br></br>
        <Table responsive>
          <thead>
            <tr>
              <th>Defend Order Date</th>
              <th>Defender</th>
              <th>Status</th>
              <th>Package ETA</th>
              <th>Meeting Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}

export default Home;
