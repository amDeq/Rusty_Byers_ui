import React from "react";
import './form.css';
const Form =()=>{
    return(
        <>
            <div className="formSection">
                <div className="password__heading">
                    <h1 className="passHeading">change password</h1>
                </div>
                <form className="form">
                    <div className="oldPassword">
                        <label>Old password</label>
                       <input type="password" placeholder="************"/>
                    </div>
                    <div className="newPassword">
                    <label>new password</label>
                        <input type="password" placeholder="************"/>
                    </div>
                    <div className="confirmPassword">
                        <label>Change password</label>
                        <input type="password" placeholder="************"/>
                    </div>
                    <div className="changePasswordBtn">
                        <button type="submit" className="btn">update password</button>
                    </div>
                </form>
            </div>
        </>
    );
}
export default Form;