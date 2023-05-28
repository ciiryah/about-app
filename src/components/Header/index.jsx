import React from "react";
import "./style.css";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <h1 className="app-logo">Neztrať hlavu!</h1>
      <div className="slogan">Úklid nemusí být otrava... ale může!</div>
      <nav>
        <NavLink 
          to={"/"}
          className = {
            ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "pending"
            }
        >
          Domů
        </NavLink>
        <NavLink 
          to={"/about"} 
          className = {
            ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "pending"
            }
        >
          O nás
        </NavLink>
      </nav>
    </header>
  );
};
