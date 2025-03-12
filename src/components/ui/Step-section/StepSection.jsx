import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import SellNFTs from "../../../assets/images/sell-nfts.png";
import Collections from "../../../assets/images/collection.png";
import NFTs from "../../../assets/images/nft.png";
import SetupWallet from "../../../assets/images/setup-wallet.png";

import "./step-section.css";
import SellAndBuyCard from "../../cards/SellAndBuyCard";

const STEP__DATA = [
  {
    title: "Setup your wallet",
    image: SetupWallet,
    desc: "Once you’ve set up your wallet of choice, connect it to NFT marketplace by clicking this link.",
    icon: "ri-wallet-line",
  },

  {
    title: "Create your collection",
    image: Collections,
    desc: "Click Create and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.",
    icon: "ri-layout-masonry-line",
  },

  {
    title: "Add your NFTs",
    image: NFTs,
    desc: "Upload your work, add a title and description, and customize your NFTs with properties, stats, and unlockable content.",
    icon: "ri-image-line",
  },

  {
    title: "List them for sale",
    image: SellNFTs,
    desc: "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!",
    icon: "ri-list-check",
  },
];

const StepSection = () => {
  return (
    <section className="step-section">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h3 className="live-bidding-title text-white">
              Create And Sell Your NFTs
            </h3>
          </Col>
          <div className="sell-buy-container">
            {STEP__DATA.map((step, index) => (
              <div data-text="Github" class="glass" key={index}>
                <SellAndBuyCard cardInfo={step} />
              </div>
            ))}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default StepSection;
