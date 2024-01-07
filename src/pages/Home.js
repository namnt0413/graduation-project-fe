import Layout from "../layouts/Layout";
import { useState } from "react";
import TrendingCategory from "../containers/Home/TrendingCategory";
import HomeMainContent from "../containers/Home/HomeMainContent";
import Statistic from "../containers/Home/Statistic";
import Pricing from "../containers/Home/Pricing";

const Home = () => {
  const HomeContent = (
    <>
      <TrendingCategory />
      <HomeMainContent />
      <Statistic />
      <Pricing />
    </>
  );

  return <Layout page={HomeContent} />;
};

export default Home;
