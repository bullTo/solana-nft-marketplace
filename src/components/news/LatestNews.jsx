import React from "react";
import { Container, Row, Col } from "reactstrap";

const LatestNews = () => {
  return (
    <section className="latest-news">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="latest-news__section-title">
              <h3 className="live-bidding-title">Latest News</h3>
            </div>
          </Col>

          <Col lg="4" md="6" sm="6" className="mb-4">
            <div className="single__news-card">
              <div className="news__img">
                <img
                  src="https://via.placeholder.com/300"
                  alt=""
                  className="w-100"
                />
              </div>

              <div className="news__content">
                <h6>News Title</h6>
                <p>News Description</p>
              </div>
            </div>
          </Col>

          <Col lg="4" md="6" sm="6" className="mb-4">
            <div className="single__news-card">
              <div className="news__img">
                <img
                  src="https://via.placeholder.com/300"
                  alt=""
                  className="w-100"
                />
              </div>

              <div className="news__content">
                <h6>News Title</h6>
                <p>News Description</p>
              </div>
            </div>
          </Col>

          <Col lg="4" md="6" sm="6" className="mb-4">
            <div className="single__news-card">
              <div className="news__img">
                <img
                  src="https://via.placeholder.com/300"
                  alt=""
                  className="w-100"
                />
              </div>

              <div className="news__content">
                <h6>News Title</h6>
                <p>News Description</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LatestNews;
