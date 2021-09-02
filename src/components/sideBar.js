import React from 'react';
import './sideBar.css';
import { GiHeartBeats } from "react-icons/gi";
import { AiFillSetting } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import profile from './profile.png';
import barcode from './barcode.png';
const SideBar =()=>{
    return(
        <>
           <nav className ="sidebar">
                <h2 className="sidebar__heading"><GiHeartBeats className="iconColor"/>Side bar</h2>
                <div className="userProfile">
                  <img src ={profile} alt="profile"/>
                  <h1 className="userProfile__Heading">rusty byers</h1>
                </div>
                <div className="barcode">
                <img src ={barcode} className="barcodeImg" alt="barcode"/>
                </div>
                <ul className="userOption">
                    <li className="active">
                        <a href="#">
                        <AiFillSetting/>  setting
                        </a>
                    </li>
                    <li>
                        <a href="#">
                          <BiLogOut/> Sign out
                        </a>
                    </li>
                </ul>
           </nav>
        </>
    );
}
export default SideBar;