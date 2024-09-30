"use client";

import Header from "../components/Header";
import Wrapper from "@/components/Wrapper";
import Ad from "@/components/AdSection";

const Home = () => {
  return (
    <div className="w-full h-full relative">
      <div className="w-360 mx-auto relative">
        <Header></Header>
        <Wrapper></Wrapper>
        <Ad></Ad>
      </div>
    </div>
  );
};

export default Home;
