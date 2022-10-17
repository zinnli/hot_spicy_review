import React from "react";

const Fire = ({ changeFire }) => {
     return (
          <select name="fire" onChange={changeFire}>
               <option value="none" hidden>
                    맵기를 선택하세요
               </option>
               <option>🔥</option>
               <option>🔥🔥</option>
               <option>🔥🔥🔥</option>
               <option>🔥🔥🔥🔥</option>
               <option>🔥🔥🔥🔥🔥</option>
          </select>
     );
};

export default Fire;
