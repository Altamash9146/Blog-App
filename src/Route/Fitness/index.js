import React from "react";
import "./Fitness.style.css"
import ContextApi from "../../Utility/ContextStore/ContextData";
import FitnessData from "./FitnessData";
import FitnessTopPost from "./FitnessTopPost";
import { Logo,TopNavigation,MobileN } from "../../Components";
const Fitness = () => {
  return (
   <>
    <Logo/>
    <MobileN/>
    <TopNavigation/>
      <ContextApi>
      <FitnessData/>
      < FitnessTopPost/>
      </ContextApi>
   </>
  )
}

export default Fitness