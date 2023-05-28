import React from "react";
import "./style.css";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const AboutPage = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <div>
          <h2 className="title">O nás</h2>
          <p className="mainText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloribus similique mollitia velit quod exercitationem maiores ipsa dolorem nulla cumque, possimus numquam. Itaque beatae, quasi ut accusamus reprehenderit sunt nulla!</p>
          <div className="medailons">
            <div className="medailon">
              <img src="" alt="Zuzka" />
              <h4>Susanne Krkoška</h4>
              <button className="moreInfoBtn">Více o mě</button>
            </div>
            <div className="medailon">
              <img src={require("./img/kamila.jpeg")} alt="Kamča" className="picture"/>
              <h4>Kamila Semotánová</h4>
              <button className="moreInfoBtn">Více o mě</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
