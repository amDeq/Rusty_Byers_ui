import React from 'react';
import './mainContent.css';
import Form from './form';
import { FaUserAlt } from "react-icons/fa";
import { RiLockFill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
const MainContent =()=>{
    return(
        <>
            <main className="mainContent">
                <div className="mainContent__headingSection">
                    <h5 className="mainContent__smalheading">
                        Welcome back
                    </h5>
                    <h1 className="mainContent__mainHeading"> 
                        Rusty Byers
                    </h1>
                    <ul className="tabs">
                        <li>
                            <FaUserAlt/>&nbsp;
                            Account
                        </li>
                        <li className="tabActive">
                            <RiLockFill/>&nbsp;
                            change password
                        </li>
                        <li>
                            <FaUserEdit/>&nbsp;
                            change username
                        </li>
                    </ul>
                </div>
                <Form/>
            </main>
        </>
    );
}
export default MainContent;