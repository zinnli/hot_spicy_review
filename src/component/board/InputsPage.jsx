import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addComment } from "../../redux/modules/hotSlice";
import nextId from "react-id-generator";

const InputsPage = () => {
  const dispatch = useDispatch();
  const dropdown = [
    { id: null, value: "선택해주세요 " },
    { id: "0001", value: "🔥" },
    { id: "0002", value: "🔥🔥" },
    { id: "0003", value: "🔥🔥🔥" },
    { id: "0004", value: "🔥🔥🔥🔥" },
    { id: "0005", value: "🔥🔥🔥🔥🔥" },
  ];

  const [selectDropValue, setSelectDropValue] = useState(["선택해주세요"]);

  const dropdownHandeler = (e) => {
    const { value } = e.target;
    setSelectDropValue(dropdown.filter((drop) => drop.value === value)[0]);
  };

  const [inputs, setInputs] = useState({
    id: 0,
    title: "",
    content: "",
    isDone: false,
  });
  const { title, content } = inputs;
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  // const onSubmitHandler = (e) => {
  //   e.preventDefault();
  //   if (inputs.title.length === 0 || inputs.content.length === 0) {
  //     alert("내용을 넣어주세요!");
  //     return;
  //   }
  //   dispatch(
  //     addComment({
  //       ...inputs,
  //       id,
  //     })
  //   );
  // };

  return (
    <PageContainer>
      <InputsContainer>
        <InputBox>
          <div>가게명</div>
          <InputType
            type="text"
            name="title"
            value={title}
            onChange={onChangeHandler}
          ></InputType>
        </InputBox>
        <InputBox>
          <div>상세내용</div>
          <TextareaType
            type="text"
            name="content"
            value={content}
            onChange={onChangeHandler}
          ></TextareaType>
        </InputBox>
        <InputBox>
          <div>불맛</div>
          <select onChange={dropdownHandeler}>
            {dropdown.map((drop) => {
              return <option key={drop.id}>{drop.value}</option>;
            })}
          </select>
        </InputBox>
        <InputBox>
          사진<input type="file" accept="image/*"></input>
        </InputBox>
      </InputsContainer>
      <ButtonContainer>
        <div>버튼 가져오고</div>
      </ButtonContainer>
    </PageContainer>
  );
};

export default InputsPage;

const PageContainer = styled.div`
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
