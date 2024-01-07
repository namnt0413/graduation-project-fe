import Layout from "../layouts/Layout";
import { useState } from "react";
import TrendingCategory from "../containers/Home/TrendingCategory";
import HomeMainContent from "../containers/Home/HomeMainContent";

const Home = () => {
  const HomeContent = (
    <>
      <TrendingCategory />
      <HomeMainContent />
      Content
    </>
  );

  return <Layout page={HomeContent} />;
};

export default Home;
