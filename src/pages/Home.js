import Layout from "../layouts/Layout";
import { useState } from "react";
import TrendingCategory from "../containers/Home/TrendingCategory";

const Home = () => {
  const HomeContent = (
    <>
      <TrendingCategory />
      Content
    </>
  );

  return <Layout page={HomeContent} />;
};

export default Home;
