import React from "react";
import "./Bollywood.style.css"
import BollywoodData from "./BollywoodData";
import BollywoodTopPost from "./TopPost";
import ContextApi from "../../Utility/ContextStore/ContextData";
import { Logo,MobileN,TopNavigation} from "../../Components";
const Bollywood = () =>{
    return(
        <>
        <Logo/>
        <MobileN/>
        <TopNavigation/>
        <ContextApi>
        <BollywoodData/>
        <BollywoodTopPost/>
        </ContextApi>
        </>
    )
}

export default Bollywood