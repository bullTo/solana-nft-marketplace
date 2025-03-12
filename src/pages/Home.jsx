import React from "react";
import { Container } from "reactstrap";

import HeroSection from "../components/ui/HeroSection";
import LiveBidding from "../components/ui/Live-bidding/LiveBidding";
import SellerSection from "../components/ui/Seller-section/SellerSection";
import Trending from "../components/ui/Trending-section/Trending";
import StepSection from "../components/ui/Step-section/StepSection";

import Meatmask from "../assets/images/wallets/1.png";
import Phantom from "../assets/images/wallets/phantom.svg";
import Bitski from "../assets/images/wallets/2.png";
import Fortmatic from "../assets/images/wallets/3.png";
import WalletConnect from "../assets/images/wallets/4.png";
import Coinbase from "../assets/images/wallets/5.png";
import RotationCard from "../components/cards/RotationCard";
import LatestNews from "../components/news/LatestNews";

const walletInfo = [
  {
    name: "Metamask",
    icon: Meatmask,
  },
  {
    name: "Phantom",
    icon: Phantom,
  },
  {
    name: "Bitski",
    icon: Bitski,
  },
  {
    name: "Fortmatic",
    icon: Fortmatic,
  },
  {
    name: "WalletConnect",
    icon: WalletConnect,
  },
  {
    name: "Coinbase",
    icon: Coinbase,
  },
];
const Home = () => {
  return (
    <>
      <HeroSection />
      <Container className="d-flex flex-column" style={{ marginTop: "50px" }}>
        <div>
          <h3 className="live-bidding-title text-white">Supported Wallet</h3>
        </div>
        <div
          className="d-flex justify-content-around"
          style={{ width: "100%", marginTop: "50px" }}
        >
          {walletInfo.map((wallet, index) => (
            <RotationCard cardInfo={wallet} />
          ))}
        </div>
      </Container>
      <LiveBidding />
      <SellerSection />
      <Trending />
      <StepSection />
      {/* <LatestNews /> */}
    </>
  );
};

export default Home;
