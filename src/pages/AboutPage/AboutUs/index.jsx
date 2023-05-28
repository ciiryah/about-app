import React from "react";

const infoK = [
  {
    name: "Kamila Semotánová",
    github: "https://github.com/KamilaSemotanova",
    linkedIn: "https://www.linkedin.com/in/kamila-semot%C3%A1nov%C3%A1-59a57a1b8/",
    text: "",
  }
]

export const AboutKami = () => {
  return (<>
  <img src={require("../img/kamila.jpeg")} alt="Kamila" />
  <h3>Kamila Semotánová</h3>
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
  return (<>
  <img src={require("../img/susanne.jpg")} alt="Zuzka" />
  <h3>Susanne Krkoška</h3>
  </>)
}
