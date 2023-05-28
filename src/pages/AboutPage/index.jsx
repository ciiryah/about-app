import React, { useState } from "react";
import "./style.css";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { AboutKami } from "./AboutUs";
import { AboutZuzka } from "./AboutUs";

export const AboutPage = () => {
  const [click, setClick] = useState(null)

  const handleClick = (name) => {
    setClick(name)
    console.log(name)
  }

  const handleClose = (event) => {
    event.preventDefault()
    setClick(null)
  }

  return (
    <div className="container">
      <Header />
      <main className="main">
        <div>{ !click && (
          <>
            <h2 className="title">O nás</h2>
            <div className="mainText">
              <p>Jsme dvě holky, které mají za sebou studium VŠCHT. Sdílené trauma ze studia nás už při prvním setkání spojilo.</p> 
              <p>Osud nám sice nedopřál splnit si naše studijní plány, ale to nás nezastavilo v hledání nových výzev a rozvoje. Naše studium na VŠCHT nám dalo pevný základ v technických a analytických dovednostech, které jsou neocenitelné při vývoji webových aplikací. I když jsme nedostudovali, neztratili jsme vášeň a zápal pro svou práci.</p>
              <p>Společně tvoříme dynamický a nadšený tým, který si tvoří realistické, ale dostatečně ambiciózní plány.</p>
            </div>
            <div className="medailons">
              <div className="medailon">
                <img 
                  src={require("./img/susanne.jpg")} alt="Zuzka" 
                  className="picture" />
                <h4>Susanne Krkoška</h4>
                <button 
                  className="btn moreInfoBtn"
                  onClick={() => {handleClick("zuzka")}}>Více o mě</button>
              </div>
              <div className="medailon">
                <img src={require("./img/kamila.jpeg")} alt="Kamča" className="picture"/>
                <h4>Kamila Semotánová</h4>
                <button className="btn moreInfoBtn" onClick={() => {handleClick("kami")}}>Více o mě</button>
              </div>
            </div>
          </>)}
          {click === "kami" && (
            <>
              <button onClick={handleClose} className="btn closeBtn">Zpět</button>
              <AboutKami/>
            </>)}
          {click === "zuzka" && (
            <>
              <button onClick={handleClose}className="btn closeBtn">Zpět</button>
              <AboutZuzka/>
            </>)}
        </div>
      </main>
      <Footer />
    </div>
  );
};
