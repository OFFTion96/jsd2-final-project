import React from "react";
import './Navbar.css';




function Navbar() {
    return (
        <div className="Nav-content">
            <div className="Nav-content1">
                <div className="logo">
                    <a href="#home"><img src="/images/logo-removebg-preview.png" /></a>
                </div>

                <ul className="Nav-ul">
                    <li><a id='#' className="li">Community</a></li>
                    <li><a id='#' className="li">Workout Program</a></li>
                    <li><a id='#' className="li">Recipes</a></li>
                    <li><a id='#' className="li">Goals</a></li>

                    <div className="login-name">
                        <button><a id='#' className="sign-in">Sign in</a></button>
                        <button><a id='#' className="sign-up">Sign up</a></button>
                    </div>
                </ul>
            </div>

            {/* ===================================MEDIA QUERY========================================== */}

            <div className="Nav-mobile">
                <div className="logo-mobile">
                    <img src="/images/logo-removebg-preview.png" />
                </div>

                <div className="Nav-ui-mobile">
                    <div id="myLinks">
                        <li><a href="#Community" id='#community'><img src="../images/283-2836870_community-icon-transparent-background-png-download-transparent-transparent.png" alt="Community" /></a></li>
                        <li><a href="Workout" id='#workout'><img src="../images/illust58-5797-01.jpg" alt="Community" /></a></li>
                        <li><a href="Recipes" id='#recipes'><img src="../images/2389105.png" alt="Community" /></a></li>
                        <li><a href="Goals" id='#goals'><img src="../images/png-clipart-arrow-target-practicing-board-cartoon-cartoon-target-miscellaneous-cartoon-character.png" alt="Community" /></a></li>


                        <div className="login-name-mobile">
                            <button><a href="#" id='#' className="sign-in">Sign in</a></button>
                            <button><a href="#" id='#' className="sign-up">Sign up</a></button>
                        </div>
                    </div>



                </div>
            </div>

        </div>


    )
};


export default Navbar