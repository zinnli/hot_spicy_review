import React from "react";
import styled from "styled-components";

function Btn() {
     return <Button>버튼</Button>;
}

export default Btn;

const Button = styled.button`
     width: 85px;
     height: 42px;
     font-size: 17px;
     padding: 5px;
     margin-left: 15px;
     background-color: tomato;
     border: none;
     border-radius: 4px;
     color: white;
`;
