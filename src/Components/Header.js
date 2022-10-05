import React from "react";
import "../App.css";
import logo from "../img/logo.svg";

let Header = () =>{
    return(

        <div className="header">
            <div className="logo">
                <img src={logo} alt="net" className="logo_img"/>
            </div>
            <div className="loginPanel">
                <div className="login">
                    LOGIN
                </div>
                <div className="sign">
                    SIGN
                </div>

            </div>
        </div>

    )
}

export default Header