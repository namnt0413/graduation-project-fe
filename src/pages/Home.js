import Layout from "../layouts/Layout";
import { useState } from "react";
import TrendingJob from "../containers/Home/TrendingJob";
import HomeMainContent from "../containers/Home/HomeMainContent";
import Statistic from "../containers/Home/Statistic";
import Pricing from "../containers/Home/Pricing";

const Home = () => {
  const HomeContent = (
    <>
      <TrendingJob />
      <HomeMainContent />
      <Statistic />
      <Pricing />
    </>
  );

  return <Layout page={HomeContent} isShowBanner={true} />;
};

export default Home;
