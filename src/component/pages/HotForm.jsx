import React from "react";
import Layout from "../layout/Layout";
import Header from "../header/Header";
import InputsPage from "../board/InputsPage";
import EditPage from "../board/EditPage";

function HotForm() {
  return (
    <Layout>
      <Header />
      <InputsPage />
      {/* <EditPage /> */}
    </Layout>
  );
}

export default HotForm;
