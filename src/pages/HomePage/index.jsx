import React from "react";
import "./style.css";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Paragraph } from "./components/Paragraph";

const aboutApp = {
  heading: "Hello world",
  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin mattis lacinia justo. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Praesent vitae arcu tempor neque lacinia pretium. Integer tempor. Nunc auctor. Donec iaculis gravida nulla. Nulla quis diam. Curabitur sagittis hendrerit ante. Duis pulvinar. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam posuere lacus quis dolor. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Aliquam in lorem sit amet leo accumsan lacinia. Nulla quis diam. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Nulla quis diam. In dapibus augue non sapien.",
};
export const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Paragraph heading={aboutApp.heading} text={aboutApp.text} />
        <Paragraph middle heading={aboutApp.heading} text={aboutApp.text} />
        <Paragraph heading={aboutApp.heading} text={aboutApp.text} />
      </main>
      <Footer />
    </div>
  );
};
