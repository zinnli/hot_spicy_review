import React from "react";
import styled from "styled-components";

const Btn = (props) => {
     const { label, onClick, disabled } = props;
     return (
          <Button onClick={onClick} disabled={disabled}>
               {label}
          </Button>
     );
};

export default Btn;

const Button = styled.button`
     width: auto;
     height: auto;
     font-size: 17px;
     padding: 5px 10px;
     margin-left: 15px;
     background-color: tomato;
     border: none;
     border-radius: 4px;
     color: white;
`;
