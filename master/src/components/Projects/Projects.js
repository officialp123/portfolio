import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import YPC from "../../Assets/Projects/YP.png";
import emotion from "../../Assets/Projects/emotion.png";
import Anon from "../../Assets/Projects/anon.png";
import country from "../../Assets/Projects/country-app.jpg";
import port from "../../Assets/Projects/port3.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={country}
              isBlog={false}
              title="Country Search App"
              description="Country Search App is build using REST Countries API with color theme switcher challenge on Frontend Mentor. The goal of this challenge is to integrate with the REST Countries V2 API to pull country data and display it like in the designs. Users should be able to See all countries from the API on the homepage, Search for a country using an input field, Filter countries by region, Click on a country to see more detailed information on a separate page, Click through to the border countries on the detail page, Toggle the color scheme between light and dark mode (optional)"
              ghLink="https://github.com/officialp123/Country-Search-App"
              demoLink="https://officialp123.github.io/Country-Search-App/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/officialp123/Bits-Of-Code/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Anon}
              isBlog={false}
              title="Anon - An eCommerce Website"
              description="Anon is a fully responsive ecommerce website, maximum compatiblities in all mobile devices, built using HTML, CSS, and JavaScript."
              ghLink="https://github.com/officialp123/Anon-Online-Shopping"
              demoLink="https://officialp123.github.io/Anon-Online-Shopping/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={YPC}
              isBlog={false}
              title="YPC Multi-page Website"
              description="This is a multi-page website made from scratch single-handed by me that represents YPC company Website. although it was later improved to a better layout but the website is online for 2 years. it has a great UI and easy navigation. Built responsive, accessible, and dynamic web pages to enable all users to navigate site.
displayed on almost any screen without compromising its visual appeal and intuitive layout"
              ghLink="https://github.com/officialp123/YPC-multipage-Website"
              demoLink="https://officialp123.github.io/YPC-multipage-Website/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={port}
              isBlog={false}
              title="Movie-Search-app"
              description="This is a movie-search project. I build a simple web app that lets a user search and display information about their favorite movies using the OMDb API."
              ghLink="https://github.com/officialp123/Movie-Search-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/officialp123/Face-Recognition-and-Emotion-Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
