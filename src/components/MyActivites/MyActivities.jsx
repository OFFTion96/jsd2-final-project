import React from "react";
import CardMyActivites from "../CardMyActivies/CardMyActivies";
import "./MyActivites.css"
const MyActivites=()=>{
    const textComment = " is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    const imageComment = "./assert/garden1.jpg"
    return(
        <div className='show-card-activities'>
            <CardMyActivites textComment={textComment} imageComment={imageComment}/>
            <CardMyActivites/>
            <CardMyActivites/>
        </div>
    )
}
export default MyActivites