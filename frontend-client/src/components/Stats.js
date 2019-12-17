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
    border: 1px;
    border-radius: 100px;
    margin-right: 20px;
    text-align: center;
  }

  .end-col {
    margin-right: 0px;
  }
  .stat-text {
    font-size: 80px;
  }

  .helper-text {
    text-align: center;
    color: #727372;
  }

  .statistic-box {
    padding: 60px 0 60px 0;
  }
  .source-text{
    color: #a6a6a6
    font-size: 12px;
  }
`;

export const Stats = () => (
  <Styles>
    <Container>
      <Row>
        <Col>
          <div className="statistic-box">
            <h1 className="stat-text">36%</h1>
            <h6 className="helper-text">Have had a package stolen.</h6>
          </div>
        </Col>
        <Col>
          <div className="statistic-box">
            <h1 className="stat-text">56%</h1>
            <h6 className="helper-text">
              Know someone who's had a package stolen.
            </h6>
          </div>
        </Col>
        <Col className="end-col">
          <div className="statistic-box">
            <h1 className="stat-text">42%</h1>
            <h6 className="helper-text">
              Avoid making online purchases due to the threat of package theft.
            </h6>
          </div>
        </Col>
      </Row>
    </Container>
    <div>
      <h6 className="source-text">
        *C+R Research 2019 Package Theft Statistics Report
      </h6>
    </div>
    <br></br>
  </Styles>
);
