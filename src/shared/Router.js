import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../component/pages/Home";
import Hot from "../component/pages/Hot";
import HotForm from "../component/pages/HotForm";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hot" element={<Hot />} />
        <Route path="hot/:id" element={<Hot />} />
        <Route path="hotform" element={<HotForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
