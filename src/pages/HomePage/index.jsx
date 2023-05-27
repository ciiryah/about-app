import React from "react";
import "./style.css";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <div>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};
