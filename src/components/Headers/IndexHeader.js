
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import '../../assets/css/paper-kit.css'
// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/torontocity.jpeg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Welcome to <br /> Canada!</h1>
            </div>
            <h2 className="presentation-subtitle text-center">
              New to Canada? <br /> We are here to provide you with valuable information and resources to help you navigate your new life in Canada with ease..
            </h2>
            <p>test</p>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        />
      </div>
    </>
  );
}

export default IndexHeader;
