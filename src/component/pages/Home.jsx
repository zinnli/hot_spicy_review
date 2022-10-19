import React from "react";
import Layout from "../layout/Layout";
import Header from "../header/Header";
import Btn from "../btn/Btn";
import MainPage from "../main/MainPage";

function Home() {
  return (
    <Layout>
      <Header />
      <Btn />
      <MainPage />
    </Layout>
  );
}

export default Home;
