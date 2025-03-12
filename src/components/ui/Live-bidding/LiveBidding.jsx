import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import NftCard from "../Nft-card/NftCard.jsx";
import { NFT__DATA } from "../../../assets/data/data.js";

import "./live-bidding.css";

const LiveBidding = () => {
  return (
    <section className="live-bidding">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="live__auction__top d-flex align-items-center justify-content-between ">
              <h3 className="live-bidding-title">Live Bidding</h3>
              <span>
                <Link to="/market">Explore more</Link>
              </span>
            </div>
          </Col>

          {NFT__DATA.slice(0, 4).map((item, key) => (
            <Col lg="3" md="4" sm="6" className="mb-4" key={key}>
              <NftCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default LiveBidding;
