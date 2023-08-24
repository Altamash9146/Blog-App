import React from "react";
import "./Food.style.css"
import ContextApi from "../../Utility/ContextStore/ContextData";
import FoodData from "./FoodData";
import FoodTopPost from "./FoodTopPost";
import { Logo,TopNavigation,MobileN } from "../../Components";

const Food = () => {
  return (
   <>
   <Logo/>
  <MobileN/>
   <TopNavigation/>
      <ContextApi>
      <FoodData/>
      < FoodTopPost/>
      </ContextApi>
   </>
  )
}

export default Food