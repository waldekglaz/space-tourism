import React from "react";
import Navbar from "../components/Navbar";
import PageContainer from "../components/PageContainer";

interface DestinationProps {}

const Destination: React.FC = (props) => {
  return (
    <PageContainer>
      <main>
        <Navbar />
        <h1 className="title">
          <span>01</span>Pick your destination
        </h1>
        <img src="" alt="" />
      </main>
    </PageContainer>
  );
};

export default Destination;
