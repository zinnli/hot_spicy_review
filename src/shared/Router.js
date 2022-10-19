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
                    <Route path="/hot" element={<Hot />} />
                    <Route path="hot/:id" element={<Hot />} />
                    <Route path="edit/:id" element={<Hot />} />
                    {/* <Route path="hot">
                         <Route index element={<Hot />} />
                         <Route path=":id" element={<Hot />} />
                    </Route> -- 같은 url로 시작되는 부분이 겹칠 때 -- route 하나에 넣어서 나눠주면 관리하기 좋음 */}
                    <Route path="hotform" element={<HotForm />} />
               </Routes>
          </BrowserRouter>
     );
};

export default Router;
