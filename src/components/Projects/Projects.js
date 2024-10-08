import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todolist from "../../Assets/Projects/preview-page0.jpg";
import Travel from "../../Assets/Projects/travel.png"
import quiz from "../../Assets/Projects/quiz.jpg"
import Tictactoe from "../../Assets/Projects/TicTacToe.jpg"
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

              imgPath={Travel}
              isBlog={false}
              title="help to booking fligh and Booking trip"
              description="AnandTravel web is provide best trip plan provide  "
              ghLink="https://github.com/Anand4299/Travel"
              demoLink="https://anandtravel.netlify.app"
            />
          </Col>
            
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tictactoe}
              isBlog={false}
              title="quiz"
              description="quiz app to use improve incress knowlage "
              ghLink="https://github.com/Anand4299/Tic-Tac-Toe"

              demoLink="https://anand-tic-tac-toe.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="quiz"
              description="quiz app to use improve incress knowlage "
              ghLink="https://github.com/Anand4299/Quiz-App"

              demoLink="https://anandquiz.netlify.app"
            />
          </Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="to_do_list"
              description="todo list use to tasks as completed to stay motivated work"
              ghLink="https://https://github.com/Anand4299/TO-DO-list"

              demoLink="https://to-do-list-by-anand.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
