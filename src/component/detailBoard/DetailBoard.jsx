import React from "react";
import Btn from "../btn/Btn";
import styled from "styled-components";

function DetailBoard() {
     return (
          <STDetailBoard>
               <img
                    src="https://pixabay.com/get/g0c69efb0c96d89bdefe09a3a95a65fb9d4f25604cb878f6a0de8b02fe9c2d889c129b43d076caf6bd8060edf286b85482bcde45fd0048e372a72243f359e19c40bd7b8737024890bc190fc10b1d6d55f_1920.jpg"
                    alt="img"
               />
               <div className="detail-title">
                    <p>가게명</p>
                    <p>맵기 결과</p>
               </div>
               <p className="detail-text">상세내용상세내용</p>
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
     img {
          width: 80%;
          height: 300px;
          object-fit: cover;
     }
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
          height: auto;
          color: tomato;
          border: 3px solid tomato;
          font-size: 18px;
          padding: 12px;
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
