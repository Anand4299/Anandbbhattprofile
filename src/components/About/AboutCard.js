import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anand Bhatt </span>
            from <span className="purple"> vadodara, Gujarat, India.</span>
            <br />
            I am currently Frontend Developer
            <br />
            I have completed  Diploma in Information Technalogy Engineering from SIGMA University
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
         
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Success is not a desire, its a necessity!"{" "}
          </p>
          <footer className="blockquote-footer">Anand Bhatt</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
