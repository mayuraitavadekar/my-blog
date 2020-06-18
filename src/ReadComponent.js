import React, { useState, useEffect } from "react";
import "./assets/css/base.css";
import { Container, Row, Col, Badge } from "react-bootstrap";
import DarkModeToggle from "react-dark-mode-toggle";
import Footer from "./Footer";
import ReactMarkdown from "react-markdown";
import "./assets/css/article.css";
import { posts, readTime } from "./articles/posts";
import { Link } from "react-router-dom";

const ReadComponent = ({ match }) => {
  const [darkmode, setDarkmode] = useState(false);

  const [postData, setPostData] = useState({
    title: "",
    description: "",
    path: "",
    tags: [],
    date: "",
    readtime: "",
  });

  const readTimeFries = () => {
    if (readtime < 4 && readtime > 0) return "🍟";
    else if (readTime > 4 && readtime < 6) return "🍟🍟";
    else return "🍟🍟🍟";
  };

  const { title, tags, date, readtime } = postData;

  const [postMDX, setPostMDX] = useState("");

  const handleChange = (event) => {
    if (darkmode === false) {
      setDarkmode(true);
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document.getElementsByTagName("hr")[0].style.color = "white";
      localStorage.setItem("darkmode", true);
    } else if (darkmode === true) {
      setDarkmode(false);
      document.body.style.background = "white";
      document.body.style.color = "black";
      document.getElementsByTagName("hr")[0].style.color = "black";
      localStorage.setItem("darkmode", false);
    }
  };

  const preload = () => {
    if (
      localStorage.getItem("darkmode").includes("true") ||
      document.body.style.background === "black"
    )
      return true;
    else if (
      localStorage.getItem("darkmode").includes("false") === false ||
      document.body.style.background === "white"
    )
      return false;
  };

  const fetchPostData = (postNumber) => {
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].number === postNumber) {
        fetch(posts[i].path)
          .then((response) => response.text())
          .then((text) => {
            setPostMDX(text);
          });

        readTime(posts[i].path).then((response) => {
          setPostData({
            ...postData,
            readtime: response,
            title: posts[i].title,
            description: posts[i].description,
            path: posts[i].path,
            date: posts[i].date,
            tags: posts[i].tags,
          });
        });
      }
    }
    /*
    posts.map((post, index) => {
      if (post.number === number) {
        // fetching mdx data
        fetch(post.path)
          .then((response) => response.text())
          .then((text) => {
            setPostMDX(text);
          });

        readTime(post.path).then((response) => {
          setPostData({
            ...postData,
            readtime: response,
            title: post.title,
            description: post.description,
            path: post.path,
            date: post.date,
            tags: post.tags,
          });
        });
      }
    });
    */
  };

  useEffect(() => {
    if (
      localStorage.getItem("darkmode").includes("true") ||
      document.body.style.background === "black"
    ) {
      setDarkmode(true);
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document.getElementsByTagName("hr")[0].style.color = "white";
    } else if (
      localStorage.getItem("darkmode").includes("false") === false ||
      document.body.style.background === "white"
    ) {
      setDarkmode(false);
      document.body.style.background = "white";
      document.body.style.color = "black";
      document.getElementsByTagName("hr")[0].style.color = "black";
    }

    fetchPostData(match.params.number);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [readtime]);

  return (
    <div>
      <Container fluid className="main-container">
        <Container fluid className="main-header">
          <Row>
            <Col className="text-left" xs={10} md={10} lg={10}>
              <Link to="/" style={{ textDecoration: "none", color: "#f5b3d3" }}>
                <h1 className="blog-heading">Mayur Aitavadekar</h1>
              </Link>
            </Col>
            <Col className="text-right my-auto" xs={2} md={2} lg={2}>
              <DarkModeToggle
                onChange={handleChange}
                checked={preload() ? true : false}
                size={50}
              />
            </Col>
          </Row>
        </Container>

        <hr />

        <Container fluid className="mt-4">
          <h2 className="post-heading font-weight-bold text-left">{title}</h2>
          <p>
            {date} &bull;{" "}
            {tags.map((item, index) => {
              return (
                <Badge
                  key={index}
                  className="ml-1 mr-1 "
                  pill
                  variant="primary"
                >
                  {item}
                </Badge>
              );
            })}
            &nbsp;&bull;{readTimeFries()} {readtime} mins read-time
          </p>
        </Container>

        <Container
          fluid
          style={{ marginTop: 30, marginBottom: 100 }}
          className="mdx"
        >
          <ReactMarkdown className="mk" source={postMDX} escapeHtml={false} />
        </Container>

        <Footer />
      </Container>
    </div>
  );
};

export default ReadComponent;
