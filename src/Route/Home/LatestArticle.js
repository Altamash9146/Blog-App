import React, {useContext} from "react";
import Store from "../../Utility/ContextStore/ContextApi";
import { Link } from "react-router-dom";

const LatestArticle = ()=>{
const [data] = useContext(Store)
    return(
        <>
       
{data.filter((item)=> item.cat ==='Bollywood-Images').map((d,item)=>{

    return(
       
        <div className="Latest-Article-Container" key={item}>

        <h2 className="latest-article-heading-container"><span className="Latest-Article-Heading">Latest</span> Article</h2>

        <div className="Latest-Article-Image-Container" >
        <Link to={"/BollywoodContent/BajrangiBhaijan"} className='Link-Text'><img src={d.img6}
        alt="Not-Found" className="Latest-Article-Image"/></Link>
        <Link to={"/BollywoodContent/Robot"} className='Link-Text'><img src={d.img7}
        alt="Not-Found" className="Latest-Article-Image"/></Link>
        <Link to={"/BollywoodContent/kgf"} className='Link-Text Kgf'><img src={d.img3}
        alt="Not-Found" className="Latest-Article-Image"/></Link>
        <Link to={"/BollywoodContent/Bahubali"} className='Link-Text Bahubali'><img src={d.img2}
        alt="Not-Found" className="Latest-Article-Image"/></Link>

        </div>

        <div className="Latest-Article-Data-Container">

        <div>
        <Link to={"/BollywoodContent/BajrangiBhaijan"} className='H2-Link-Text'><h2>{d.title6}</h2></Link>
        <Link to={"/BollywoodContent/BajrangiBhaijan"} className='Link-Text bhaijan'><div>{d.info6}</div></Link>
            <p>Travel/August 21 2017</p>
        </div>
        <br/>  <br/>

        <div className="robot-container">
        <Link to={"/HollywoodContent/Robot"} className='H2-Link-Text'><h2>{d.title7}</h2></Link>
        <Link to={"/BollywoodContent/Robot"} className='Link-Text robot'><div>{d.info7}</div></Link>
            <p>Travel/August 21 2017</p>
        </div>
        <br/>   <br/>   

        <div className="kgf-container">
        <Link to={"/BollywoodContent/kgf"} className='H2-Link-Text'><h2>{d.title3}</h2></Link>
         <Link to={"/BollywoodContent/kgf"} className='Link-Text kgf'><div>{d.info3}</div></Link>
            <p>Travel/August 21 2017</p>
        </div>
      

        <div className="bahaubali-container">
        <Link to={"/BollywoodContent/Bahubali"} className='H2-Link-Text'><h2>{d.title2}</h2></Link>
         <Link to={"/BollywoodContent/Bahubali"} className='Link-Text bahubali'><div >{d.info2}</div></Link>
            <p>Travel/August 21 2017</p>
        </div>

        </div>

         </div>
     

     
    )
})}

{data.filter((items)=> items.cat === 'Fitness-Images').map((a,index)=>{
    return(
<div key={index}>
<Link to={"/FitnessContent/Fitness1"} className='Link-Text'><img src={a.img1} alt="Not-Found" className="Top-post-Image"/></Link>
</div>

    )
})}

        <div className="Advertisement-Container">
        <h4>Advertisement</h4>
         </div>

        </>
    )
}

export default LatestArticle