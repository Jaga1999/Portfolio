import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import express from "../../Assets/Projects/express.png";
import trello from "../../Assets/Projects/Trello-board-clone.png";
import weather from "../../Assets/Projects/weather.png";
import todo from "../../Assets/Projects/todo.png";

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
              imgPath={express}
              isBlog={false}
              title="My Contact REST API"
              description="This project is for creating Rest Api using Express JS and MongoDB for performing CRUD operations and User Authentication."
              ghLink="https://github.com/Jaga1999/my-contact-api-express"
              documentation="https://documenter.getpostman.com/view/22773395/2s93kxaQzK"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trello}
              isBlog={false}
              title="Trello Board Clone"
              description="This project is for clone of Tello Board website with all of its Funtionality.
              This project store data into database realtime with the help of Firebase."
              ghLink="https://github.com/Jaga1999/trello-board-clone"
              demoLink="https://trello-board-clone-jd.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="This project is for Weather details and forcasting details.
              This project gets data from Api and display it with good structured so that user can view it accordingly."
              ghLink="https://github.com/Jaga1999/weather-app"
              demoLink="https://weather-app-react-jd.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To-Do List"
              description="This project is for creating To-Do List of your task which you need to finish.
              This project uses your browser local storage to store the list."
              ghLink="https://github.com/Jaga1999/to-do-list"
              demoLink="https://to-do-list-jd-react.netlify.app/"
            />
          </Col>
        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
