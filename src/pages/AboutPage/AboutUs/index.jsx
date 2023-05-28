import React from "react";
import "./style.css"

export const AboutKami = () => {
  return (<>
  <img src={require("../img/kamila.jpeg")} alt="Kamila" className="pictureDetail"/>
  <h3>Kamila Semotánová</h3>
  <p>Text o mě</p>
  <div>
    <a href="https://github.com/KamilaSemotanova" target="_blank">
      <img src={require("./img/github-mark.svg")} alt="GitHubLogo" className="logo"/>
    </a>
    <a href="https://www.linkedin.com/in/kamila-semot%C3%A1nov%C3%A1-59a57a1b8/" target="_blank">
      <img src={require("./img/LinkedIn_Logo.svg")} alt="LinkedInLogo" className="logo"/>
    </a>
  </div>
  </>)
}

const infoZ = [
  {
    name: "Susanne Krkoška",
    github: "https://github.com/ciiryah",
    linkedIn: "https://www.linkedin.com/in/susanne-krko%C5%A1ka-4a52a825b/",
    text: "",
  },
]

export const AboutZuzka = () => {
  return (
  <>
    <img src={require("../img/susanne.jpg")} alt="Zuzka" className="pictureDetail"/>
    <h3>Susanne Krkoška</h3>
    <p>Text o mě</p>
    <div>
      <a href="https://github.com/ciiryah" target="_blank">
        <img src={require("./img/github-mark.svg")} alt="GitHubLogo" className="logo"/>
      </a>
      <a href="https://www.linkedin.com/in/susanne-krko%C5%A1ka-4a52a825b/" target="_blank">
        <img src={require("./img/LinkedIn_Logo.svg")} alt="LinkedInLogo" className="logo"/>
      </a>
    </div>
  </>)
}
