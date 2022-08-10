import React from 'react';
import './DropDown.css';
import { useState } from 'react';


const DropDown = () => {
  const [selectWeek,setSelectWeek] = useState(1)


  return (
    <div class="dropdown">
      <button class="dropbtn">Week {selectWeek}</button>
      <div class="dropdown-content">
        <a href="#" onClick={() => {setSelectWeek(() => setSelectWeek(1))}}>Weeks 1</a>
        <a href="#" onClick={() => {setSelectWeek(() => setSelectWeek(2))}}>Weeks 2</a> 
        <a href="#" onClick={() => {setSelectWeek(() => setSelectWeek(3))}}>Weeks 3</a>
        <a href="#" onClick={() => {setSelectWeek(() => setSelectWeek(4))}}>Weeks 4</a>
        <a href="#" onClick={() => {setSelectWeek(() => setSelectWeek(5))}}>Weeks 5</a>
        <a href="#" onClick={() => {setSelectWeek(() => setSelectWeek(6))}}>Weeks 6</a>
      </div>
    </div>
  );
}





export default DropDown;