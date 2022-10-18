import React, { useEffect } from "react";

import Btn from "../btn/Btn";
import styled from "styled-components";
import { __getHot } from "../../redux/modules/hotSlice";

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function DetailBoard() {
     const Hots = useSelector((state) => state.hot.hot);

     const { isLoading, error } = useSelector((state) => state.hot);
     const { id } = useParams();

     //console.log(Hots);

     const dispatch = useDispatch();

     useEffect(() => {
          dispatch(__getHot());
     }, [dispatch]);

     if (isLoading) {
          return <div>로딩 중....</div>;
     }

     if (error) {
          return <div>{error.message}</div>;
     }

     return (
          <STDetailBoard>
               <div className="detail-title">
                    <p>{Hots[id]?.restaurant}</p>
                    <p>{Hots[id]?.fire}</p>
               </div>
               <p className="detail-text">{Hots[id]?.info}</p>
               <STDetailBtn>
                    <Btn className="btn detail-edit-btn" />
                    <Btn className="btn detail-del-btn" />
               </STDetailBtn>
          </STDetailBoard>
     );
}

export default DetailBoard;

const STDetailBoard = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: space-between;
     height: 60%;
     width: 80%;
     padding: 15px;
     .detail-title {
          width: 80%;
          height: 80px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 20px;
          p {
               display: flex;
               justify-content: center;
               align-items: center;
               width: 25%;
               height: 40px;
               text-align: center;
               color: tomato;
               border: 3px solid tomato;
          }
          p:first-child {
               width: 70%;
          }
     }
     .detail-text {
          display: flex;
          justify-content: flex-start;
          width: 80%;
          min-height: 200px;
          height: auto;
          color: tomato;
          border: 3px solid tomato;
          font-size: 18px;
          padding: 20px;
          margin: 10px 0;
     }
`;

const STDetailBtn = styled.div`
     display: flex;
     justify-content: flex-end;
     align-items: center;
     width: 80%;
     height: 60px;
     .btn {
          width: 500px;
          height: 100%;
     }
`;
