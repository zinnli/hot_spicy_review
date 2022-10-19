import React, { useState, useEffect } from "react";
import Btn from "../btn/Btn";
import nextId from "react-id-generator";
import { useDispatch } from "react-redux";
import Fire from "../fire/Fire";
import styled from "styled-components";
import { addDetail } from "../../redux/modules/hotSlice";
import { axiosHot } from "../../apis/hotInstance";
import axios from "axios";

const InputsPage = () => {
  const id = nextId();
  const dispatch = useDispatch();
  const initialState = {
    id: 0,
    title: "",
    text: "",
    fire: "",
    img: "",
    isDone: false,
  };
  // const dropdown = [
  //   { id: null, value: "선택해주세요 " },
  //   { id: "0001", value: "🔥" },
  //   { id: "0002", value: "🔥🔥" },
  //   { id: "0003", value: "🔥🔥🔥" },
  //   { id: "0004", value: "🔥🔥🔥🔥" },
  //   { id: "0005", value: "🔥🔥🔥🔥🔥" },
  // ];

  // const [selectDropValue, setSelectDropValue] = useState(["선택해주세요"]);

  // const dropdownHandeler = (e) => {
  //   const { value } = e.target;
  //   setSelectDropValue(dropdown.filter((drop) => drop.value === value)[0]);
  // };

  const [inputs, setInputs] = useState(initialState);
  const [posts, setPosts] = useState(null);
  const fetchAll = async () => {
    const { data } = await axiosHot.get("posts");
    setPosts(data);
  };
  const onSubmitHandler = (inputs) => {
    axios.post("http://localhost:3001/posts", inputs);
    if (inputs.title === "" || inputs.text === "") {
      alert("내용을 넣어주세요");
      return;
    }

    dispatch(
      addDetail({
        ...inputs,
        id,
      })
    );
    setInputs("");
  };
  useEffect(() => [fetchAll()], []);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  // const onSubmitHandler = (e) => {
  //   e.preventDefault();
  //   if (inputs.title === "" || inputs.text === "") {
  //     alert("내용을 넣어주세요");
  //     return;
  //   }

  //   dispatch(
  //     addDetail({
  //       ...inputs,
  //       id,
  //     })
  //   );
  //   setInputs("");
  // };
  console.log(posts);
  return (
    <PageContainer
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitHandler(inputs);
      }}
    >
      <InputsContainer>
        <InputBox>
          <div>가게명</div>
          <InputType
            type="text"
            name="title"
            value={inputs.title || ""}
            key="id"
            onChange={onChangeHandler}
          ></InputType>
        </InputBox>
        <InputBox>
          <div>상세내용</div>
          <TextareaType
            type="text"
            name="text"
            value={inputs.text || ""}
            // key="id"
            onChange={onChangeHandler}
          ></TextareaType>
        </InputBox>
        <InputBox>
          <div>불맛</div>
          <Fire changeFire={onChangeHandler} />
          {/* <select onChange={dropdownHandeler}>
            {dropdown.map((drop) => {
              return <option key={drop.id}>{drop.value}</option>;
            })}
          </select> */}
        </InputBox>
        <InputBox>
          사진
          <input
            type="file"
            accept="image/*"
            name="img"
            onChange={onChangeHandler}
          ></input>
        </InputBox>
      </InputsContainer>
      <ButtonContainer>
        <Btn label="기록" onClick={() => {}} />
      </ButtonContainer>
    </PageContainer>
  );
};

export default InputsPage;

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
