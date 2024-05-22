import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import code from "../../Assets/Projects/code_editorPic.png";
import blog from "../../Assets/Projects/Blogify_pic.png";
import news from "../../Assets/Projects/news_mag.png";
import text from "../../Assets/Projects/Text_to_Speech_Pic.png";
import tour from "../../Assets/Projects/tour_travel_page_pic.png";
import game from "../../Assets/Projects/Tic_Tac_Toe_pic.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={code}
              isBlog={false}
              title="Code-Editor"
              description="Delve into boundless coding opportunities with our cutting-edge editor, powered by Monaco Editor for smooth coding and Piston API for executing code across diverse languages. Efficiency merges seamlessly with versatility in every keystroke. Utilizing ReactJS, Piston API, Monaco Editor, and Chakra UI, our platform empowers developers to craft, execute, and refine code with unparalleled ease and precision."
              ghLink="https://github.com/CallmeSoumya/Code-Editor"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blogify"
              description="Introducing a user-friendly blog app, powered by React, Node, Express, and MongoDB. Experience seamless blogging with features like reading, writing, updating, and deleting posts post-authentication. Conveniently modify account details for a personalized touch. Simple, secure, and tailored for a smooth blogging journey."
              ghLink="https://github.com/CallmeSoumya/BLOGIFY"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="News-Mag"
              description="Discover React News Magazine, your gateway to the latest headlines using the React News API. Dive into a world of dynamic content, from breaking news to in-depth features, all seamlessly integrated with React's powerful framework. Stay informed, stay engaged, with our user-friendly interface delivering news at your pace. Experience the future of journalism with React News Magazine."
              ghLink="https://github.com/CallmeSoumya/NEWS_APP"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={text}
              isBlog={false}
              title="Text to Speech Convertor"
              description="Experience the transformative power of text with our text-to-speech converter, built using HTML, CSS, and JavaScript. Simply input your text and witness it come alive with synthesized speech. Enjoy a seamless and accessible way to engage with content, revolutionizing the way you consume information."
              ghLink="https://github.com/CallmeSoumya/Text-to-speech-convertor/tree/main/Text%20to%20Speech%20Convertor"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tour}
              isBlog={false}
              title="BeriyePorun"
              description="Beriye Porun is your go-to tour and travel website, crafted with HTML, CSS, Bootstrap, PHP, and MySQL. Explore a variety of packages and their details, allowing users to book their preferred destinations effortlessly. Gain insights into Beriye Porun, accessing comprehensive information about its services and offerings, empowering travelers to embark on memorable journeys with confidence."
              ghLink="https://github.com/CallmeSoumya/BeriyePorun"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="Enjoy the classic game of Tic Tac Toe reimagined with ReactJS. Immerse yourself in strategic gameplay within a sleek, modern interface. Experience the thrill of competition as you challenge friends. With React's dynamic capabilities, every move brings you closer to victory in this timeless game."
              ghLink="https://github.com/CallmeSoumya/TIK_TOK_TOE"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
