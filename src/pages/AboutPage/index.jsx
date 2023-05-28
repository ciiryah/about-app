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
            <p className="mainText">Dvě holky, které mají za sebou studium VŠCHT. To jsme my. Sdílené trauma ze studia nás už v první moment spojilo.</p>
            <p>Společně si tvoříme realistické, ale dostatečně ambiciózní plány.</p>
            <div className="medailons">
              <div className="medailon">
                <img src={require("./img/susanne.jpg")} alt="Zuzka" className="picture" />
                <h4>Susanne Krkoška</h4>
                <button className="btn moreInfoBtn"
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
              <AboutKami/>
              <button onClick={handleClose} className="btn">Zpět</button>
            </>)}
          {click === "zuzka" && (
            <>
              <AboutZuzka/>
              <button onClick={handleClose}className="btn">Zpět</button>
            </>)}
        </div>
      </main>
      <Footer />
    </div>
  );
};
