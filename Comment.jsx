import React, { useState } from "react";
import styled from "styled-components";
import nextId from "react-id-generator";
import { useDispatch, useSelector } from "react-redux";
import { addHot } from "./src/redux/modules/hotSlice";

const Comment = () => {
  const id = nextId();
  const hot = useSelector((state) => state.hot);
  const dispatch = useDispatch();
  const [content, setContent] = useState("");

  const onChangeHandler = (e) => {
    setContent(e.target.value);
  };
  console.log(hot);
  console.log(content);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (content === "") {
      alert("내용을 넣어주세요");
      return;
    }
    dispatch(
      addHot({
        id: id,
        content: content,
        isDone: false,
      })
    );
    setContent("");
  };

  console.log(content);
  return (
    <div>
      <CmentFormContainer onSubmit={onSubmitHandler}>
        <InputContainer>
          <InputStyle
            type="text"
            name="content"
            value={content || ""}
            onChange={onChangeHandler}
          />
          <button type="submit">입력</button>
        </InputContainer>
        <ListContainer>
          {hot.map((com) => {
            if (!com.isDone) {
              return (
                <CmentListStyle key={com.id}>
                  <p key={com.id}>{com.content}</p>
                </CmentListStyle>
              );
            } else {
              return null;
            }
          })}
        </ListContainer>
      </CmentFormContainer>
    </div>
  );
};

export default Comment;

const CmentFormContainer = styled.form`
  width: 100%;
  height: 350px;
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InputContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: lightsalmon;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputStyle = styled.input`
  width: 60%;
  height: 30px;
  border-radius: 10px;
  border: 2px solid red;
  margin-right: 20px;
`;

const ListContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: auto;
`;
const CmentListStyle = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 2px solid gray;
`;
