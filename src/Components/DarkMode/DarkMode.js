import React ,{useState} from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";
import { lightDarkActions} from "../../Store/index"
import {useDispatch} from "react-redux"

const DarkMode = () => {
  const dispatch=useDispatch()

  const handleCheckboxChange = (event) => {
  dispatch(lightDarkActions.LightDark())  
  };
  return (
    <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={handleCheckboxChange}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
  )
}

export default DarkMode
