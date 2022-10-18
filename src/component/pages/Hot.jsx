import React from "react";
import Layout from "../layout/Layout";
import Header from "../header/Header";
import DetailBoard from "../detailBoard/DetailBoard";
//import CommentList from "../detailBoard/comment/CommentList";

function Hot() {
     return (
          <Layout>
               <Header />
               <DetailBoard />
               {/* <CommentList /> */}
          </Layout>
     );
}

export default Hot;
