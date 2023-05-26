import React from "react";
import "./style.css";
import "../../style.css";
import { Header } from "../../components/Header";

export const ErrorPage = () => {
  return (
    <>
      <div className="container">
        <Header />
        <main>
          <div className="error">
            404: Bylo tu, není tu, a bohdá ani nebude.
          </div>
        </main>
      </div>
    </>
  );
};
