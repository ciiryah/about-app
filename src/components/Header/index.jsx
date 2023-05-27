import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <h1 className="app-logo">Neztrať hlavu!</h1>
      <div className="slogan">Úklid nemusí být otrava... ale může!</div>
      <nav>
        <Link className="navlink" to={"/"}>
          Domů
        </Link>
        <span className="navlink"> | </span>
        <Link className="navlink" to={"/about"}>
          O nás
        </Link>
      </nav>
    </header>
  );
};
