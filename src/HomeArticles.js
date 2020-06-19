import React from "react";
import { Container } from "react-bootstrap";
import { posts } from "./articles/posts";
import { Link } from "react-router-dom";

const HomeArticles = () => {
  return (
    <div>
      <Container fluid className="mt-4">
        {posts.map((post, index) => {
          return (
            <div style={{ marginTop: 30 }} key={index}>
              <Link
                style={{ textDecoration: "none" }}
                to={`/article/${post.number}`}
              >
                <h4 className="post-heading font-weight-bold">{post.title}</h4>
              </Link>
              <p>{post.date}</p>
              <p className="bold">{post.description}</p>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default HomeArticles;
