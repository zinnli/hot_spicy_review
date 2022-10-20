import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../../api/axiosInstance";
import { Link } from "react-router-dom";
import { __getHot } from "../../redux/modules/hotSlice";
// import { axiosPocket } from "../../apis/pocketInstance";

const MainPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const hot = useSelector((state) => state.hot.hot);

  console.log(hot);

  useEffect(() => {
    dispatch(__getHot());
  }, [dispatch]);
  // 에러를 추가하고 싶다면,, useEffect를 활용하여 오류인지 아닌지 사용해서 할 수 있음
  // useSelector에서 error를 가져와서 사용할 수 있음(에러페이지로 넘김/보여주는..)

  return (
    <STMainPage>
      <WriteButton onClick={() => navigate("hotform")}>
        게시물 작성하기
      </WriteButton>
      <ListContainer>
        {hot?.map((hot) => (
          <Link to={`hot/${hot.id}`} key={hot.id}>
            <ListCardBox key={hot.id}>
              <>
                <ListCardFire>{hot.fire}</ListCardFire>

                <ListCardTitle>{hot.title}</ListCardTitle>
              </>
            </ListCardBox>
          </Link>
        ))}
      </ListContainer>
    </STMainPage>
  );
};

export default MainPage;

const STMainPage = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ListContainer = styled.form`
  width: 1200px;
  height: 100%;
  padding: 20px 55px 70px 55px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 30px;
`;

const ListCardBox = styled.div`
  width: 250px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 5px solid orangered;
  border-radius: 15px;
  padding: 15px;
`;

const ListCardFire = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListCardTitle = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  color: white;
  border-radius: 5px;
`;

const WriteButton = styled.button`
  width: 300px;
  height: 60px;
  border-radius: 20px;
  border: 5px solid orangered;
  background-color: white;
  margin: 50px auto;
  font-size: 20px;
  font-weight: 700;
  color: orangered;
`;
