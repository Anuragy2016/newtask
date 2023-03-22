import React, { useEffect, useState } from "react";
import { data } from "./Constant";
import "./Homepage.css";
// import { useState } from "react";

function Home(props) {
  const [list, setList] = useState(props.storeList);
  
  const sortByName = () => {
    const sortedList = props.storeList.sort((a, b) => a.name.localeCompare(b.name));
    console.log(sortedList);
    setList(sortedList);
  };
  console.log("storeList", list);
const sortByPrice =()=>{
    console.log("i am in")
   const sortedList= props.storeList.sort(function(a, b) {
        return parseFloat(a.actualPrice) - parseFloat(b.actualPrice);
    });
    setList(sortedList)
}

  return (
    <>
      <button onClick={()=>sortByName()}>Sort by name</button>
      <button onClick={()=>sortByPrice()}>Sort by price</button>
      <div className="cart">
        {list.map((item) => {
          return (
            <div className="child">
              <img
                src={item.imageUrl}
                width="200"
                height="200"
                className="image"
              ></img>
              <div> {item.name}</div>
              <div>{item.discreption}</div>
              <div>{item.actualPrice}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
