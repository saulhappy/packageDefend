import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const Styles = styled.div`
  .stat-box {
    display: flex;
    flex-flow: column;
    margin: 0 auto;
  }

  .col {
    border: solid black 1px;
    border-radius: 3px;
    margin-right: 20px;
    text-align: center;
  }

  .end-col {
    margin-right: 0px;
  }

  .helper-text {
    text-align: left;
  }

  .statistic-box {
    padding: 60px 0 60px 0;
  }
`;

export const Stats = () => (
  <Styles>
    <Container>
      <Row>
        <Col>
          <div className="statistic-box">
            <h1>36%</h1>
            <h6 className="helper-text">
              This is a statistic for package theft.
            </h6>
          </div>
        </Col>
        <Col>
          <div className="statistic-box">
            <h1>36%</h1>
            <h6 className="helper-text">
              This is a statistic for package theft.
            </h6>
          </div>
        </Col>
        <Col className="end-col">
          <div className="statistic-box">
            <h1>36%</h1>
            <h6 className="helper-text">
              This is a statistic for package theft.
            </h6>
          </div>
        </Col>
      </Row>
    </Container>
  </Styles>
);
