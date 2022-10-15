import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";

function Header() {
     return (
          <STheader>
               <div>
                    <Link to="/" className="STBtn">
                         <AiOutlineHome />
                    </Link>
                    <Link to="/" className="STBtn">
                         <IoMdArrowRoundBack />
                    </Link>
               </div>
               <p>맵잘알</p>
          </STheader>
     );
}

export default Header;

const STheader = styled.div`
     width: 100%;
     height: 80px;
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 40px;
     background-color: tomato;
     color: white;
     div {
          display: flex;
          width: 5%;
          justify-content: space-between;

          .STBtn {
               font-size: 30px;
               display: flex;
               justify-content: center;
               align-items: center;
               color: white;
          }
     }
     p {
          font-weight: 700;
          font-size: 25px;
     }
`;
