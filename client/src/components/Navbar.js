import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";

export const Navbar = ({joinNowTrigger}) => {

    //States
    const [serviced, setServiced] = useState(0);

    //Refs
    const firstRender = useRef(true);

    //Big Menu Functions
    function toggleBigMenu() {
        let ham = document.getElementById("hamburger");
        let bigMenu = document.getElementById("bigMenu");

        if (window.innerWidth < 991) {
            if (ham.classList.contains("clicked")) {
                ham.classList.remove("clicked");
                bigMenu.classList.remove("opened");
                setTimeout(() => {
                    bigMenu.style.display = "none";
                }, 200)
            } else {
                ham.classList.add("clicked");
                bigMenu.style.display = "initial";
                setTimeout(() => {
                    bigMenu.classList.add("opened");
                }, 200)
            }
        }
    }

    //Toggle Join Now
    function toggleJoinNow() {
        let jn = document.getElementById("joinNow");
        let body = document.getElementsByTagName("body")[0];
        if (jn.classList.contains("opened")) {
            jn.classList.remove("opened");
            setTimeout(() => {
                jn.style.display = "none";
                body.style.overflowY = "auto";
            }, 400)
        } else {
            jn.style.display = "grid";
            body.style.overflowY = "hidden";
            setTimeout(() => {
                jn.classList.add("opened");
            }, 100)
        }
    }

    //Call Join Now from Home Component
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
        } else if (serviced < joinNowTrigger) {
            console.log("Call From Home");
            toggleJoinNow();
            setServiced(joinNowTrigger);
        }
    }, [joinNowTrigger])

    //Click away to close Join Now
    function clickAwayJoinNow(e) {
        let jnc = document.getElementById("jn-content");
        let jn = document.getElementById("joinNow");
        if (jn.classList.contains("opened")) {
            if (!jnc.contains(e.target)) {
                toggleJoinNow();
            }
        }
    }

    //Resize Listener for bigMenu
    useEffect(() => {

        const resizeBigMenu = () => {
            if (window.innerWidth > 991) {
                let ham = document.getElementById("hamburger");
                let bigMenu = document.getElementById("bigMenu");
                ham.classList.remove("clicked");
                bigMenu.classList.remove("opened");
                setTimeout(() => {
                    bigMenu.style.display = "none";
                }, 200)
            }
        }

        window.addEventListener("resize", resizeBigMenu);

        return () => {
            window.removeEventListener("resize", resizeBigMenu);
        }

    }, [])


    return (
        <>
            <nav>
                <div className="navbar-inner-container">
                    <div className="navbar-logo">
                        <img src="assets/images/oneHealth_horizontal.png" alt="oneHealth Logo"/>
                    </div>
                    <div className="navbar-links">
                        <Link to={"/"}>Dashboard</Link>
                        <Link to={"/"}>Diagnose</Link>
                        <Link to={"/"}>About</Link>
                    </div>
                    <div className="navbar-join-btn">
                        <button onClick={toggleJoinNow}>Join Now</button>
                    </div>
                    <div className="navbar-hamburger-option">
                        <div className="hamburger" id="hamburger" onClick={toggleBigMenu}>
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="bigMenu" id="bigMenu">
                <div className="bigMenu-container head-font">
                    <Link className="bigMenu-item">
                        <div className="item-text">Dashboard</div>
                        <div className="item-icon">
                            <i className="fa-solid fa-arrow-right"/>
                        </div>
                    </Link>
                    <span className="bigMenu-item" onClick={() => {
                        toggleBigMenu();
                        toggleJoinNow();
                    }}>
                        <div className="item-text">Join Now</div>
                        <div className="item-icon">
                            <i className="fa-solid fa-arrow-right"/>
                        </div>
                    </span>
                    <Link className="bigMenu-item">
                        <div className="item-text">Diagnose</div>
                        <div className="item-icon">
                            <i className="fa-solid fa-arrow-right"/>
                        </div>
                    </Link>
                    <Link className="bigMenu-item">
                        <div className="item-text">About</div>
                        <div className="item-icon">
                            <i className="fa-solid fa-arrow-right"/>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="joinNow" id="joinNow" onClick={clickAwayJoinNow}>
                <div className="joinNow-content" id="jn-content">
                    <div className="joinNow-login">
                        <div className="login-form-header head-font">
                            <span>Welcome back!</span>
                        </div>
                        <div className="login-form-tag">
                            <span>Sign in to continue to oneHealth</span>
                        </div>
                        <div className="login-form">
                            <form>
                                <div className="input-field">
                                    <label htmlFor="email"><i className="fa-regular fa-envelope"/> Email Address</label>
                                    <input type="email" id="email"/>
                                </div>
                                <div className="input-field">
                                    <label htmlFor="password"><i className="fa-solid fa-key"/> Password</label>
                                    <input type="password" id="password"/>
                                </div>
                                <div className="btn-field">
                                    <button className="hover-btn">Log in</button>
                                    <span>Not a member yet?</span>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="joinNow-register"></div>
                </div>
            </div>
        </>
    )
}