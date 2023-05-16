import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jagadeep </span>
            from <span className="purple"> Hosur, India.</span>
            <br />I completed my MSC (Computer Science) at Krishna Arts and Science College.
            <br />
            <br />
            Apart from coding, there are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Listen to Podcast
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Jagadeep</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
