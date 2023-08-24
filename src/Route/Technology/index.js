import React from "react";
import "./Technology.style.css"
import TechnologyData from "./TechnologyData";
import ContextApi from "../../Utility/ContextStore/ContextData";
import TechnologyTopPost from "./TopPost";
import { Logo,TopNavigation,MobileN } from "../../Components";
const Technology = () => {
  return (
   <>
      <Logo/>
      <MobileN/>
      <TopNavigation/>
      <ContextApi>
      <TechnologyData/>
      <TechnologyTopPost/>
      </ContextApi>
   </>
  )
}

export default Technology