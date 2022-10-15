import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Btn = () => {
  const navigate = useNavigate();
  return (
    <div>
      <WriteButton onClick={() => navigate("hotform")}>
        게시물 작성하기
      </WriteButton>
    </div>
  );
};

export default Btn;

const WriteButton = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 20px;
  border: 3px solid salmon;
  margin-left: 40%;
  margin-top: 10px;
  margin-bottom: 10px;
`;
