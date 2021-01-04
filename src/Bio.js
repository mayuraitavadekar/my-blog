import React from "react";
import "./assets/css/base.css";
import { Row, Col, Image } from "react-bootstrap";

import { Link } from "react-router-dom";
const Bio = () => {
  return (
    <div>
      <Row>
        <Col xs={3} md={3} lg={3} className="image-col mt-2">
          <Image
            src={require("./assets/images/dp.jpeg")}
            style={{ height: 60, width: 60 }}
            roundedCircle
          />
        </Col>
        <Col xs={9} md={9} lg={9} className="main-bio mt-2">
          <p>
            <span role="img" aria-label="">
             Co Founder <Link to="/about">Educulture'm</Link>  • ReactJs ⚛️ • Full Stack 🌏{" "}
            </span>
            <br />
            Hi
            <span role="img" aria-label="">
              👋.
            </span>{" "}
            This blog is personification of <Link to="/about">who I'm</Link>.{" "}
            <br />
            Views and opinions are mine.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Bio;
