import React, { useState } from "react";
import Layout from "../layout/Layout";
import Header from "../header/Header";
import Fire from "../fire/Fire";
import { useDispatch } from "react-redux";
import { addHot } from "../../redux/modules/hotSlice";
//import Btn from "../btn/Btn";

function HotForm() {
     const initialState = {
          id: 0,
          restaurant: "",
          info: "",
          fire: "",
     };
     const [hot, setHot] = useState(initialState);

     const dispatch = useDispatch();

     const onChangeHandler = (e) => {
          const { name, value } = e.target;
          console.log("발류", value);
          setHot({ ...hot, [name]: value });
          // console.log(hot);
     };

     const onSubmitInfoHandler = (e) => {
          e.preventDefault();
          dispatch(addHot({ ...hot }));
          console.log("결과", hot);
     };

     return (
          <Layout>
               <Header />
               <form onSubmit={onSubmitInfoHandler}>
                    <input
                         type="text"
                         name="restaurant"
                         value={hot.restaurant}
                         onChange={onChangeHandler}
                    />
                    <textarea
                         name="info"
                         value={hot.info}
                         onChange={onChangeHandler}
                    />
                    <Fire changeFire={onChangeHandler} />
                    <button>버튼</button>
               </form>
          </Layout>
     );
}

export default HotForm;
