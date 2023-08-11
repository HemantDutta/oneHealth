import {Link, useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import supabase from "../config/supabaseClient";
import {getCookie, setCookie, endSession} from "../config/cookieMaker";

export const Navbar = ({joinNowTrigger}) => {

    //Navigator
    const nav = useNavigate();

    //States
    const [serviced, setServiced] = useState(0);

    //Register States
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Login States
    const [logMail, setLogMail] = useState('');
    const [logPass, setLogPass] = useState('');

    //Session States
    const [sessionName, setSessionName] = useState('');

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

    //Toggle Login/SignUp
    function toggleLS() {
        let login = document.getElementById("loginForm");
        let reg = document.getElementById("regForm");

        if (reg.classList.contains("active")) {
            reg.classList.remove("active");
            setTimeout(() => {
                reg.style.display = "none";
                login.style.display = "block";
                setTimeout(() => {
                    login.classList.add("active");
                }, 100)
            }, 400)
        } else {
            login.classList.remove("active");
            setTimeout(() => {
                login.style.display = "none";
                reg.style.display = "block";
                setTimeout(() => {
                    reg.classList.add("active");
                }, 100)
            }, 400)
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

    //Register User
    async function registerUser() {
        let login = document.getElementById("loginForm");
        let reg = document.getElementById("regForm");

        const {status, errors} = await supabase
            .from("users")
            .insert({name: username, email: email, password: password})

        if (status === 201) {
            toggleAlert("Registration Successful! Log in to continue");
            reg.classList.remove("active");
            setTimeout(() => {
                reg.style.display = "none";
                login.style.display = "block";
                setTimeout(() => {
                    login.classList.add("active");
                }, 100)
            }, 400)
        }
        if (errors) {
            console.log(errors);
        }
    }

    //Check Email Before Registration
    async function checkMail(e) {
        e.preventDefault();
        const {data} = await supabase
            .from("users")
            .select()
            .eq("email", email);

        if (data.length !== 0) {
            toggleAlert("Email Already Exists!");
        } else {
            await registerUser();
        }
    }

    //Alert Toggle
    function toggleAlert(msg) {
        let alert = document.getElementById("oneAlert");
        let message = document.getElementById("alert-message");

        if (alert.classList.contains("active")) {
            message.innerText = msg;
        } else {
            alert.style.display = "block";
            setTimeout(() => {
                alert.classList.add("active");
                message.innerText = msg;
            }, 100)
        }
    }

    //Close Alert
    function closeAlert() {
        let alert = document.getElementById("oneAlert");
        let message = document.getElementById("alert-message");

        alert.classList.remove("active");
        setTimeout(() => {
            alert.style.display = "none";
            message.innerText = "";
        }, 100);
    }

    //Check Login Mail
    async function checkLoginMail(e) {
        let login = document.getElementById("loginForm");
        e.preventDefault();
        const {data} = await supabase
            .from("users")
            .select()
            .eq("email", logMail);

        if (data.length !== 0) {
            if (data[0].password === logPass) {
                loginUser();
                toggleAlert("Welcome Back " + data[0].name);
                login.classList.remove("active");
                setTimeout(() => {
                    login.style.display = "none";
                    toggleJoinNow();
                }, 400)
            } else {
                toggleAlert("Incorrect Password");
            }
        } else {
            toggleAlert("Incorrect Email");
        }
    }

    //Login User
    function loginUser() {
        setCookie("em", logMail, 3);
        checkSession().then();
    }

    //Check Session
    async function checkSession() {
        const sesEmail = getCookie("em");
        if (sesEmail.length !== 0) {
            const {data} = await supabase
                .from("users")
                .select()
                .eq("email", sesEmail);
            setSessionName(data[0].name);
        }
        else{
            nav('/');
        }
    }

    //Check Session Caller
    useEffect(() => {
        if (!sessionName) {
            checkSession().then();
        }
    }, [sessionName])

    //Logout
    function logout(){
        endSession();
        setSessionName('');
    }

    return (
        <>
            <nav>
                <div className="navbar-inner-container">
                    <div className="navbar-logo">
                        <img src="assets/images/oneHealth_horizontal.png" alt="oneHealth Logo"/>
                    </div>
                    <div className="navbar-links">
                        {
                            sessionName &&
                            <Link to={"/dashboard"}>Dashboard</Link>
                        }
                        <Link to={"/diagnose"}>Diagnose</Link>
                        <Link to={"/about"}>About</Link>
                    </div>
                    {
                        !sessionName &&
                        <div className="navbar-join-btn">
                            <button onClick={toggleJoinNow}>Join Now</button>
                        </div>
                    }
                    {
                        sessionName &&
                        <div className="navbar-join-btn">
                            <button onClick={logout}>Logout</button>
                        </div>
                    }
                    <div className="navbar-hamburger-option">
                        <div className="hamburger" id="hamburger" onClick={toggleBigMenu}>
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="bigMenu" id="bigMenu">
                <div className="bigMenu-container head-font">
                    {
                        sessionName &&
                        <Link className="bigMenu-item">
                            <div className="item-text">Dashboard</div>
                            <div className="item-icon">
                                <i className="fa-solid fa-arrow-right"/>
                            </div>
                        </Link>
                    }
                    {
                        !sessionName &&
                        <span className="bigMenu-item" onClick={() => {
                            toggleBigMenu();
                            toggleJoinNow();
                        }}>
                        <div className="item-text">Join Now</div>
                        <div className="item-icon">
                            <i className="fa-solid fa-arrow-right"/>
                        </div>
                        </span>
                    }

                    <Link className="bigMenu-item" to={"/diagnose"}>
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
                    <div className="joinNow-login" id="loginForm">
                        <div className="login-form-header head-font">
                            <span>Welcome back!</span>
                        </div>
                        <div className="login-form-tag">
                            <span>Sign in to continue to oneHealth</span>
                        </div>
                        <div className="login-form">
                            <form onSubmit={checkLoginMail}>
                                <div className="input-field">
                                    <input type="email" id="email" required onChange={(e)=>{setLogMail(e.target.value)}}/>
                                    <label htmlFor="email"><i className="fa-regular fa-envelope"/> Email Address</label>
                                </div>
                                <div className="input-field">
                                    <input type="password" id="password" required onChange={(e)=>{setLogPass(e.target.value)}}/>
                                    <label htmlFor="password"><i className="fa-solid fa-key"/> Password</label>
                                </div>
                                <div className="btn-field">
                                    <button className="hover-btn" type="submit">Log in</button>
                                    <span onClick={toggleLS}>Not a member yet?</span>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="joinNow-register active" id="regForm">
                        <div className="login-form-header head-font">
                            <span>Create your account</span>
                        </div>
                        <div className="login-form-tag">
                            <span>Join the oneHealth family</span>
                        </div>
                        <div className="login-form">
                            <form onSubmit={checkMail}>
                                <div className="input-field">
                                    <input type="text" id="name" onChange={(e) => {
                                        setUsername(e.target.value)
                                    }} required/>
                                    <label htmlFor="name"><i className="fa-regular fa-envelope"/> Enter your name</label>
                                </div>
                                <div className="input-field">
                                    <input type="text" id="regEmail" onChange={(e) => {
                                        setEmail(e.target.value)
                                    }} required/>
                                    <label htmlFor="regEmail"><i className="fa-regular fa-envelope"/> Email Address</label>
                                </div>
                                <div className="input-field">
                                    <input type="password" id="regPass" onChange={(e) => {
                                        setPassword(e.target.value)
                                    }} required/>
                                    <label htmlFor="regPass"><i className="fa-solid fa-key"/> Password</label>
                                </div>
                                <div className="btn-field">
                                    <button className="hover-btn" type="submit">Register</button>
                                    <span onClick={toggleLS}>Already a member?</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="one-alert" id="oneAlert">
                <div className="one-alert-container">
                    <i className="fa-solid fa-xmark" onClick={closeAlert}/>
                    <span id="alert-message"></span>
                </div>
            </div>
        </>
    )
}