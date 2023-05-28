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
          heading={materials.stretchGoals.heading}
          text={materials.stretchGoals.text}
        />
        <img className="pictureabout" src={require("./img/figma.png")} />
        <Paragraph
          heading={materials.figma.heading}
          text={materials.figma.text}
        />
      </main>
      <Footer />
    </div>
  );
};
