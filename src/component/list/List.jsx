import React from "react";
import styled from "styled-components";
import Btn from "../btn/Btn";

const List = () => {
  return (
    <div>
      <Btn />
      <ListContainer>
        {/* <Card 
        key = {id}
        title = {title}
        img = {img}
        /> */}
      </ListContainer>
    </div>
  );
};

export default List;

const ListContainer = styled.div`
  width: 100%;
  background-color: lightpink;
`;
