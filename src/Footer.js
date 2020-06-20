import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./assets/css/base.css";
const Footer = () => {
  return (
    <div>
      <Container className="main-footer mt-4">
        <Row>
          <Col>
            <Link style={{ float: "right" }} to="/projects">
              Projects/Skills
            </Link>
            <Link to="/about">About</Link> &bull;{" "}
            <a href="https://github.com/mayuraitavadekar">Github</a> &bull;{" "}
            <a href="https://medium.com/@mayur_aitavadekar">Medium</a> &bull;{" "}
            <a href="mailto:mayuraitavadekar2690@gmail.com">Email</a>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <p style={{ color: "lightgray" }}>© 2020-21 Mayur Aitavadekar</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
