import {Link} from "react-router-dom";
import {useEffect} from "react";

export const Navbar = () => {

    //Big Menu Functions
    function toggleBigMenu(){
        let ham = document.getElementById("hamburger");
        let bigMenu = document.getElementById("bigMenu");

        if(window.innerWidth<991){
            if(ham.classList.contains("clicked")){
                ham.classList.remove("clicked");
                bigMenu.classList.remove("opened");
                setTimeout(()=>{
                    bigMenu.style.display = "none";
                },200)
            }
            else{
                ham.classList.add("clicked");
                bigMenu.style.display = "initial";
                setTimeout(()=>{
                    bigMenu.classList.add("opened");
                },200)
            }
        }
    }

    //Resize Listener for bigMenu
    useEffect(()=>{

        const resizeBigMenu = () =>{
            if(window.innerWidth>991){
                let ham = document.getElementById("hamburger");
                let bigMenu = document.getElementById("bigMenu");
                ham.classList.remove("clicked");
                bigMenu.classList.remove("opened");
                setTimeout(()=>{
                    bigMenu.style.display = "none";
                },200)
            }
        }

        window.addEventListener("resize", resizeBigMenu);

        return () => {
            window.removeEventListener("resize", resizeBigMenu);
        }

    },[])


    return(
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
                        <button>Join Now</button>
                    </div>
                    <div className="navbar-hamburger-option">
                        <div className="hamburger" id="hamburger" onClick={toggleBigMenu}>
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="bigMenu" id="bigMenu">
                <div className="bigMenu-container">
                    <Link className="bigMenu-item">
                        <div className="item-text">Dashboard</div>
                        <div className="item-icon"></div>
                    </Link>
                    <Link className="bigMenu-item">
                        <div className="item-text">Join Now</div>
                        <div className="item-icon"></div>
                    </Link>
                    <Link className="bigMenu-item">
                        <div className="item-text">Diagnose</div>
                        <div className="item-icon"></div>
                    </Link>
                    <Link className="bigMenu-item">
                        <div className="item-text">About</div>
                        <div className="item-icon"></div>
                    </Link>
                </div>
            </div>
        </>
    )
}