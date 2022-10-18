import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../layout/Layout";
import Header from "../header/Header";
import Fire from "../fire/Fire";
import { useDispatch } from "react-redux";
import { addHot } from "../../redux/modules/hotSlice";
import { __getHot, __postHot } from "../../redux/modules/hotSlice";
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

     // const fetchHots = async () => {
     //      const { data } = await axios.get("http://localhost:3001/hot");
     //      setHots(data);
     // };

     const onChangeHandler = (e) => {
          const { name, value } = e.target;
          //console.log("발류", value);
          setHot({ ...hot, [name]: value });
          //console.log(hot);
     };

     const onSubmitInfoHandler = (e) => {
          e.preventDefault();
          dispatch(__postHot({ ...hot }));
          //axios.post("http://localhost:3001/hot", hot);
     };

     useEffect(() => {
          dispatch(__postHot());
     }, [dispatch]);

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
