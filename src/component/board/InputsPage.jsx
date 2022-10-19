import React, { useState, useEffect } from "react";
import Btn from "../btn/Btn";
//import nextId from "react-id-generator";
import { useDispatch } from "react-redux";
import Fire from "../fire/Fire";
import styled from "styled-components";
import { __postHot } from "../../redux/modules/hotSlice";

const InputsPage = () => {
     //  const id = nextId();
     const dispatch = useDispatch();
     const initialState = {
          id: 0,
          title: "",
          content: "",
          fire: "",
     };
     const [hot, setHot] = useState(initialState);

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
          window.location.replace("/");
     };

     // useEffect(() => {
     //      dispatch(__postHot());
     // }, [dispatch]);

     return (
          <PageContainer onSubmit={onSubmitInfoHandler}>
               <InputsContainer>
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
