import React from "react";
import Layout from "../layout/Layout";
import Header from "../header/Header";
import Btn from "../btn/Btn";
import List from "../list/List";

function Home() {
  return (
    <Layout>
      <Header />
      {/* <Btn /> */}
      <List />
    </Layout>
  );
}

export default Home;
