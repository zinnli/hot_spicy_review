import React from "react";
import styled from "styled-components";

function Layout({ children }) {
     return <STlayout>{children}</STlayout>;
}

export default Layout;

const STlayout = styled.div`
     width: 100%;
     height: 100%;
     display: flex;
     flex-direction: column;
     justify-content: space-around; // 전체 세로 flex 자동 문장간 거리 조절
     align-items: center;
     border: 4px solid tomato;
     background-color: white;
`;
