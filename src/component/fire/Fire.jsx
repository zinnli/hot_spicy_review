import React from "react";
import styled from "styled-components";

const Fire = ({ changeFire }) => {
  return (
    <STSelect name="fire" onChange={changeFire}>
      <option value="none" hidden>
        맵기를 선택하세요
      </option>
      <option>🔥</option>
      <option>🔥🔥</option>
      <option>🔥🔥🔥</option>
      <option>🔥🔥🔥🔥</option>
      <option>🔥🔥🔥🔥🔥</option>
    </STSelect>
  );
};

export default Fire;

const STSelect = styled.select`
  width: 150px;
  padding: 10px 7px;
  border: 1px solid #999;
  border-radius: 5px;
`;
