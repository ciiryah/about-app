import React from "react";
import "./style.css";

export const AboutKami = () => {
  return (
    <div className="detailContainer">
      <img
        src={require("../img/kamila.jpeg")}
        alt="Kamila"
        className="pictureDetail"
      />
      <h3 className="nameDetail">Kamila Semotánová</h3>
      <p>Jsem rodilá pražačka, která si ráda zkouší nové věci.</p>
      <p>
        Za život jsem měla možnost vyzkoušet spoustu prací i škol. Od právničiny
        až po laborku. Nejdůležitější je pro mě vidět, že má moje práce smysl a
        výsledky.
      </p>
      <div>
        <a href="https://github.com/KamilaSemotanova" target="_blank">
          <img
            src={require("./img/github-mark.svg")}
            alt="GitHubLogo"
            className="logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/kamila-semot%C3%A1nov%C3%A1-59a57a1b8/"
          target="_blank"
        >
          <img
            src={require("./img/LinkedIn_Logo.svg")}
            alt="LinkedInLogo"
            className="logo"
          />
        </a>
      </div>
    </div>
  );
};

export const AboutZuzka = () => {
  return (
    <div className="detailContainer">
      <img
        src={require("../img/susanne.jpg")}
        alt="Zuzka"
        className="pictureDetail"
      />
      <h3 className="nameDetail">Susanne Krkoška</h3>
      <p>Text o mně</p>
      <div>
        <a href="https://github.com/ciiryah" target="_blank">
          <img
            src={require("./img/github-mark.svg")}
            alt="GitHubLogo"
            className="logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/susanne-krko%C5%A1ka-4a52a825b/"
          target="_blank"
        >
          <img
            src={require("./img/LinkedIn_Logo.svg")}
            alt="LinkedInLogo"
            className="logo"
          />
        </a>
      </div>
    </div>
  );
};
