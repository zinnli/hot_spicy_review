import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <WriteButton onClick={() => navigate("hotform")}>
        게시물 작성하기
      </WriteButton>
      <ListCardBox>
        <ListCardImage
          onClick={() => {
            navigate("hot/:id");
          }}
        >
          사진이 뜰겁니다
        </ListCardImage>
        <ListCardFire>제 점수는요</ListCardFire>
        <ListCardTitle>제목은 이겁니다</ListCardTitle>
      </ListCardBox>
    </div>
  );
};

export default MainPage;

const ListCardBox = styled.div`
  width: 380px;
  height: 420px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightsalmon;
`;

const ListCardImage = styled.div`
  width: 350px;
  height: 300px;
  border: 2px solid violet;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListCardFire = styled.div`
  width: 200px;
  height: 30px;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListCardTitle = styled.div`
  width: 350px;
  height: 50px;
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WriteButton = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 20px;
  border: 3px solid salmon;
  margin-left: 40%;
  margin-top: 10px;
  margin-bottom: 10px;
`;
