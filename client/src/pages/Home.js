import {Navbar} from "../components/Navbar";
import {useState} from "react";
export const Home = () => {

    //States
    const [joinNowTrigger, setJoinNowTrigger] = useState(0);

    return(
        <>
            <Navbar joinNowTrigger={joinNowTrigger}/>
            <div className="home-container">
                <section className="hero" id="hero">
                    <div className="hero-content">
                        <div className="hero-left">
                            <div className="hero-left-head head-font">
                                <span><span style={{color: "#5da1bd"}}>Brain Tumours</span> or <span style={{color: "#6bacad"}}>Heart Diseases.</span></span>
                                <span>We have got you covered.</span>
                            </div>
                            <div className="hero-left-tag">
                                <span>For quick and reliable diagnosis and predictions, join our platform now!</span>
                            </div>
                            <div className="hero-left-cta">
                                <button className="hover-btn" onClick={()=>{setJoinNowTrigger((joinNowTrigger)=>joinNowTrigger+1)}}>Join Now</button>
                            </div>
                        </div>
                        <div className="hero-right">
                            <div className="hero-right-img">
                            </div>
                        </div>
                    </div>
                </section>
                <section className="model-display">
                    <div className="model-display-container">
                        <div className="model-display-header">
                            <span>Our Models</span>
                        </div>
                        <div className="model-display-scroller">

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}