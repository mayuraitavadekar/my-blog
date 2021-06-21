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
          <p style={{textAlign: "justify"}}>
            <span role="img" aria-label="">
              M.S. in Computer Science at GAState &bull; Co Founder <a href="https://educulture.co.in">Educulture</a> &bull; {" "}
              <Link to="/about">Click here</Link> to know more. Views and opinions are mine.
            </span>  
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Bio;
