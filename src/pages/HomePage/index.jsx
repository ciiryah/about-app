import React from "react";
import "./style.css";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Paragraph } from "./components/Paragraph";
import { materials } from "./materials";

export const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Paragraph
          heading={materials.aboutApp.heading}
          text={materials.aboutApp.text}
        />
        <Paragraph
          middle
          heading={materials.layout.heading}
          text={materials.layout.text}
        />
        <img className="pictureabout" src={require("./img/figma.png")} />
        <p className="popisek text">Model aplikace ve Figmě</p>
        <a
          href="https://www.figma.com/proto/0eKlEm6gKQaQQUtpBzlv4n/Project_mixing?node-id=8-29&scaling=scale-down&page-id=0%3A1&starting-point-node-id=8%3A29"
          target="_blank"
        >
          <img
            src={require("./img/figma-ar21.svg")}
            alt="LinkedInLogo"
            className="logoFigma"
          />
        </a>
        <Paragraph
          heading={materials.stretchGoals.heading}
          text={materials.stretchGoals.text}
        />
      </main>
      <Footer />
    </div>
  );
};
