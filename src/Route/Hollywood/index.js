import React from "react";
import "./Hollywood.style.css"
import ContextApi from "../../Utility/ContextStore/ContextData";
import HollywoodData from "./HollywoodData";
import HollywoodTopPost from "./HollywoodTopPost";
import { Logo,TopNavigation,MobileN } from "../../Components";

const Hollywood = () => {
  return (
   <>
   <Logo/>
   <MobileN/>
   <TopNavigation/>
    <ContextApi>
    < HollywoodData/>
    < HollywoodTopPost/>
      </ContextApi>
   </>
  )
}

export default Hollywood