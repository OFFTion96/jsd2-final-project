import React, { useState,useEffect } from "react";
// import MuiSelect from "./DropDown";
import CardMyActivites from "../CardMyActivies/CardMyActivies";
import DropDown from "./DropDown";
import "./MyActivites.css";
import axios from "axios";
import dateFormat from "dateformat";
import Swal from 'sweetalert2'

const MyActivites = () => {
    const [filterWeek,setFilterWeek] = useState(1)
    const username_id = "62f7cc755f03dde81aa2e305"
    
    let date_start = new Date()
    let date_end = new Date()
    date_end.setDate(date_end.getDate()-(7*filterWeek))
    date_start = dateFormat(date_start,"yyyy-mm-dd")
    date_end = dateFormat(date_end,"yyyy-mm-dd")

    

    const url="http://localhost:8080"
    const [dataActivities,setDataActivites] = useState([])
    const [click,setClick] = useState(true)
    useEffect(()=>{
            axios.get(`${url}/activites/${username_id}?date_start=${date_start}&date_end=${date_end}`).then((res)=>{
            setDataActivites(res.data)
            
        }
        )
        console.log("delete")
    },[click,filterWeek])
 
    const removeItem = (id) =>{
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            console.log(result)
            if (result.isConfirmed) {
                axios.delete(`${url}/activites/${id}`).then(setClick(!click))
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
   
    }
    
    const updateItem =(id) =>{
        setClick(!click)
    }

    const selectWeek = (week)=>{
        setFilterWeek(week)
    }
    

  
    return (
        
        <div className='show-card-activities'>
            <div className="h1__weeks">
                <h1>My Activities</h1>
                <DropDown selectWeek ={ selectWeek } weekNo = {filterWeek}/>
            </div>
            {dataActivities.map((data,index)=>{
                return <CardMyActivites key = {index} textComment = {data.captions} location = {data.location} date = {data.date_post.split("T")[0]} time = {data.date_post.split("T")[1].split(".")[0]}  
                imageComment = {data.sport_photo} removeItem={removeItem} id={data._id} updateItem = {updateItem}/>
            })}

    
           
        </div>
    )
}
export default MyActivites