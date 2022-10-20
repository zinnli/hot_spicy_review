import React, { useState, useEffect } from "react";
import Btn from "../btn/Btn";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Fire from "../fire/Fire";
import styled from "styled-components";
import {
  __editHot,
  __postHot,
  __detailHot,
  __getHot,
} from "../../redux/modules/hotSlice";
import {} from "../../redux/modules/hotSlice";

const EditPage = ({ postId, title, content, fire }) => {
  const dispatch = useDispatch();

  const initialState = {
    id: 0,
    title: "",
    content: "",
    fire: "",
  };

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(
    (id) => {
      dispatch(__getHot(id));
    },
    [dispatch, id]
  );

  //   useEffect(() => {
  //     dispatch(__editHot(id));
  //   }, [dispatch, id]);
  const [editPage, setEditPage] = useState(false);
  const [hot, setHot] = useState(initialState);
  const { hots } = useSelector((state) => state.hot.detail);
  const { isLoading, error } = useSelector((state) => state.hot);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setHot({ ...hot, [name]: value });
  };

  const onSubmitInfoHandler = (e) => {
    e.preventDefault();
    if (hot.title.trim() === "" || hot.content.trim() === "") {
      alert("내용을 넣어주세요");
      return;
    }
    dispatch(__postHot({ ...hot }));
    setHot(initialState);
    navigate("hot/:id", { replace: true });
  };

  const onEditbuttonHandler = () => {
    dispatch(
      __editHot({
        id: title.id,
        title: title,
        content: content,
        fire: fire,
      })
    );
    setEditPage(false);
    dispatch(__getHot(false));
  };

  useEffect(() => {
    setHot(title, content, fire);
  }, [title, content, fire]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  // useEffect(() => {
  //      dispatch(__postHot());
  // }, [dispatch]);

  return (
    <PageContainer postId={postId} onSubmit={onSubmitInfoHandler}>
      <InputsContainer>
        {hots?.map((hot) => {
          return (
            <div>
              <InputBox>
                <div>가게명</div>
                <InputType
                  key="id"
                  type="text"
                  name="title"
                  value={hot.title}
                  onChange={onChangeHandler}
                ></InputType>
              </InputBox>
              <InputBox>
                <div>상세내용</div>
                <TextareaType
                  type="text"
                  name="content"
                  value={hot.content}
                  key="id"
                  onChange={onChangeHandler}
                ></TextareaType>
              </InputBox>
              <InputBox>
                <div>불맛</div>
                <Fire changeFire={onChangeHandler} />
              </InputBox>
            </div>
          );
        })}
      </InputsContainer>
      <ButtonContainer>
        <Btn label="수정" onClick={onEditbuttonHandler} />
      </ButtonContainer>
    </PageContainer>
  );
};

export default EditPage;

const PageContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputsContainer = styled.div`
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-top: 20px;
`;

const InputType = styled.input`
  width: 600px;
  height: 40px;
`;

const TextareaType = styled.textarea`
  width: 600px;
  height: 300px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
