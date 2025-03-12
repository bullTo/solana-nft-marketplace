import React from "react";

import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import "./hero-section.css";

import heroImg from "../../assets/images/hero.png";

const HeroSection = () => {
  return (
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6" className="d-flex align-items-center">
            <div className="hero__content">
              <h2>
                <span>A community driven gaming experience</span>
              </h2>
              <p style={{ fontSize: "1.5rem" }}>
                BitchCoin’s a movement that combines the fun of memes with the
                utility of a gaming ecosystem and decentralized governance.
              </p>

              <div className="hero__btns d-flex align-items-center gap-4">
                <button className=" explore__btn d-flex align-items-center gap-2">
                  <i className="ri-rocket-line"></i>{" "}
                  <Link to="/market">Explore</Link>
                </button>
                <button className=" create__btn d-flex align-items-center gap-2">
                  <i className="ri-ball-pen-line"></i>
                  <Link to="/create">Create</Link>
                </button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero__img">
              <img src={heroImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
