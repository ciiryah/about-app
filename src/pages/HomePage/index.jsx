import React from "react";
import "./style.css";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Paragraph } from "./components/Paragraph";

export const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Paragraph />
        <Paragraph middle="switch" />
        <Paragraph />
      </main>
      <Footer />
    </div>
  );
};
