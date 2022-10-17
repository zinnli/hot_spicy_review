import React from "react";
import Btn from "../../btn/Btn";
import Fire from "../../fire/Fire";
import styled from "styled-components";

function AddComment() {
     return (
          <STAddComment>
               <form>
                    <input />
                    <div>
                         <Fire />
                         <Btn />
                    </div>
               </form>
          </STAddComment>
     );
}

export default AddComment;

const STAddComment = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: space-between;
     height: 60%;
     width: 80%;
     form {
          width: 100%;
          height: 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 15px;
          border: none;
          background-color: tomato;
          border-radius: 20px;
          padding: 5px 10px;
          margin-bottom: 20px;
          input {
               width: 60%;
               height: auto;
               margin-left: 10px;
          }
          div {
               width: 30%;
               display: flex;
               justify-content: space-between;
               align-items: center;
          }
     }
`;
