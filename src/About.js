import React, { useState } from "react";
import "./assets/css/base.css";
import { Container, Row, Col } from "react-bootstrap";
import DarkModeToggle from "react-dark-mode-toggle";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const About = () => {
  const [darkmode, setDarkmode] = useState(false);

  const handleChange = (event) => {
    if (darkmode === false) {
      setDarkmode(true);
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      localStorage.setItem("darkmode", true);
    } else if (darkmode === true) {
      setDarkmode(false);
      document.body.style.background = "white";
      document.body.style.color = "black";
      localStorage.setItem("darkmode", false);
    }
  };

  const preload = () => {
    if (
      localStorage.getItem("darkmode").includes("true") === true ||
      document.body.style.background === "black"
    )
      return true;
    else if (
      localStorage.getItem("darkmode").includes("false") === true ||
      document.body.style.background === "white"
    )
      return false;
  };

  return (
    <div>
      <Container className="main-container">
        <Container className="main-header">
          <Row>
            <Col className="text-left" xs={10} md={10} lg={10}>
              <Link to="/" style={{ textDecoration: "none", color: "#f5b3d3" }}>
                <h1 className="blog-heading">About me</h1>
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
        <Container className="short-intro">
          <Row>
            <Col>
              <span className="font-weight-bold">TLDR:</span>
              <br />
              Hello 👋 Myself Mayur. I'm 23 YO 👨‍💼, and just completed my
              bachelors degree in Computer Science Engineering. I use Linux 🐧
              on my PC 🖥️. I'm currently working on my own startup 🚀. I mostly
              spend my time in learning about computers & programming. I love to
              watch ⚽ and I'm huge fan of Liverpool FC 🔴. I'm musician 🎼. I
              learned to play harmonium when I was 12 YO & I play piano 🎹 too.
              I'm deeply interested in Indian mythology, history 📜, mathematics
              and space 🌌.
            </Col>
          </Row>
        </Container>
        <p className="dots">&#9679; &#9679; &#9679;</p>
        <Container className="long-intro">
          <Row>
            <Col>
              <p>
                Okay. Since you're interested in knowing more about me, you can
                read here{" "}
                <span aria-label="" role="img">
                  👇
                </span>{" "}
                <br />
                <br />
                Since my childhood, I have been intrigued by a lot of things. I
                was good at studies and consistently scored good grades each
                year. But I was also interested in music, painting, and sports.
                I started learning harmonium at the age of 12. Today, I play
                both piano and harmonium. I scored 'A' in elementary grade
                examinations. I was among the top scorers in mathematics, when I
                was in school and Engineering.
                <br />
                <br />
                At the age of 18, I started doing programming. Until then I
                didn't know what is programming and how a computer works. The
                first language I learned was 'C' and it was a terrible
                experience. Eventually, I learned C, C++, Java, Python, and
                JavaScript, and Dart(a little bit). But I have to admit that my
                two most favorite programming languages are C++ and JavaScript.
                <br />
                <br />
                I like to learn about how computer hardware works. 'Structured
                Computer Organisation' by Andrew Tanenbaum is my favorite book
                for computer hardware. But I'm not that hardware nerd. I like to
                work on software. I develop websites, apps. NodeJs is my
                speciality. Hot topics such as data science, machine learning,
                and artificial intelligence intrigue me but currently, I try to
                learn those whenever I get the time. Okay, enough about
                programming and stuff.
                <br />
                <br />
                Whenever I get free time, I try to read. I'm deeply intrigued by
                areas such as Indian mythology, history, space. I mostly read in
                Marathi and English. In Indian mythology, my favorite books are
                Yayati, Mrityunjay, Ramayana and Yugandhar. I believe that we
                can learn most important life lessons from Indian mythology. Few
                books of Amish and Anand Neelakantan are in my bucket list.
                Achyut Godble has written a sack of great books. Indian history
                including some politics fascinates me a lot. I like to watch
                documentaries on space.
                <br />
                <br />
                Football is something I started to love since my college days. I
                love Liverpool FC. This club has given me a lot of beautiful
                memories. I have to admit that a lot of things have been changed
                in my life after I started following this club. Of course, when
                I get free time, I think about football. Nothing can be as
                special singing 'You will never walk alone' before the match. I
                have a dream to go to anfield before 2024.
                <br />
                <br />
                Next, what do I do, now? I have finished my bachelor's in
                engineering with a major in computer science. I had applied to
                some of the universities in the United States for MS in Computer
                Science and I'm happy that I have admission offers from George
                Mason University, California State University. Currently, I am
                working on my own startup company and handling all technical
                stuff. So yes, I'm busy.
                <br />
                <br />
                If you want to get connected with me, find me on{" "}
                <a href="https://www.instagram.com/mayuradz/">
                  Instagram
                </a> and{" "}
                <a href="https://www.linkedin.com/in/mayur-aitavadekar/">
                  LinkedIn
                </a>
                . If you want to read my articles on Medium visit my{" "}
                <a href="https://medium.com/@mayur_aitavadekar"> Medium</a>. If
                you want to see my projects and programming work visit my{" "}
                <a href="https://github.com/mayuraitavadekar">github</a>. Thank
                you for reading. Happy Coding 🤗
                <br />
                <br />
                <br />
                Mayur ❤️
                <br />
                10 June, 2020.
              </p>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Container>
    </div>
  );
};

export default About;
