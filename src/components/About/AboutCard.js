import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight, ImArrowRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ivan Iroslavov </span>, a Computer Scientist and Cyber Security enthusiast
            from Bulgaria, living
            in Spain.
            <br />
            I enjoy conducting my own research and continuously expanding my knowledge. Passionate about learning,
            I'm always eager to work across various technologies and domains, with a particular interest in {" "} 
            <span className="red">Offensive Cybersecurity </span>.
            <br />
            <br />
            Aside from my technological interests, I also enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImArrowRight /> Doing extreme sports
            </li>
            <li className="about-activity">
              <ImArrowRight /> Martial arts
            </li>
            <li className="about-activity">
              <ImArrowRight /> Gymnastics
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
