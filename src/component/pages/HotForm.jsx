import React, { useState } from "react";
import Layout from "../layout/Layout";
import Header from "../header/Header";
import Fire from "../fire/Fire";
import Btn from "../btn/Btn";

function HotForm() {
     const initialState = {
          id: 0,
          restaurant: "",
          info: "",
          fire: "",
          picture: "",
     };
     const [hot, setHot] = useState(initialState);

     const onChangeHandler = (e) => {
          const { name, value } = e.target;
          setHot({ ...hot, [name]: value });
          console.log(hot);
     };

     return (
          <Layout>
               <Header />
               <form>
                    <input
                         type="text"
                         name="restaurant"
                         onChange={onChangeHandler}
                    />
                    <textarea name="info" onChange={onChangeHandler} />
                    <Fire name="fire" onChange={onChangeHandler} />
                    <input type="file" name="picture" />
                    <Btn />
               </form>
          </Layout>
     );
}

export default HotForm;
