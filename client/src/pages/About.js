import {Navbar} from "../components/Navbar";
import {useEffect, useLayoutEffect, useRef} from "react";
import  gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export const About = () => {

    //Refs
    const db1 = useRef(null);
    const db2 = useRef(null);
    const db3 = useRef(null);
    const db4 = useRef(null);

    //Animations
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(()=>{
        const tl = gsap.timeline();
        tl
            .from(db1.current, {duration: 1, delay: 0.4, ease:"power4.in", clipPath: "polygon(0 81%, 100% 81%, 100% 100%, 0% 100%)"})
            .from(db2.current, {duration: 1, delay: 0.4, ease:"power4.in", clipPath: "polygon(0 81%, 100% 81%, 100% 100%, 0% 100%)"})
    },[])

    //Dummy handler function
    function handler(){
        //Nothing to handle lol
    }

    return(
        <>
            <Navbar handler={handler}/>
            <div className="about">
                <div className="about-Gradient-Bar">
                    <span className="head-font">About</span>
                </div>
                <div className="about-content">
                    <div className="about-data-box" ref={db1}>
                        <div className="box-text">
                            <div className="text-header">
                                <span>oneHealth...</span>
                            </div>
                            <div className="text-des">
                                <span>...integrates machine learning and medical science to offer potential early detection solutions for brain tumors, heart diseases, and diabetes. The application leverages advanced data processing techniques to predict the presence of conditions. For heart and diabetes predictions, the app evaluates multiple health parameters for predictions.</span>
                            </div>
                        </div>
                        <div className="box-img">
                            <img src="assets/images/oh_heart.png" alt="oneHealth Logo" id="ohLogo"/>
                        </div>
                    </div>
                    <div className="about-data-box" ref={db2}>
                        <div className="box-text">
                            <div className="text-header">
                                <span>Intel oneAPI...</span>
                            </div>
                            <div className="text-des">
                                <span>...Intel oneAPI is a comprehensive suite of software development tools designed to simplify the development of high-performance applications across a variety of architectures, including CPUs, GPUs, FPGAs, and other accelerators. One of the main benefits of oneAPI is that it enables developers to take advantage of the full power of modern hardware, including the latest CPUs and GPUs, without having to write separate code for each platform. This can help save time and reduce development costs, as well as improve the overall performance of the application. Some common uses of oneAPI include developing machine learning models, accelerating data analytics workloads, and optimizing scientific simulations.</span>
                            </div>
                        </div>
                        <div className="box-img">
                            <img src="assets/images/oneapi2.png" alt="oneAPI Logo"/>
                        </div>
                    </div>
                    <div className="about-data-box" ref={db3}>
                        <div className="box-text">
                            <div className="text-header">
                                <span>oneDAL...</span>
                            </div>
                            <div className="text-des">
                                <span>...In our oneHealth, we used the oneDAL library of Intel oneAPI to optimize and accelerate our machine learning models. By using the oneDAL library, we were able to take advantage of Intel's industry-leading optimization and parallelization capabilities to improve the efficiency, accuracy, and performance of our models.</span>
                            </div>
                        </div>
                        <div className="box-img">
                            <img src="assets/images/oneDal.png" style={{width: "60%"}} alt="oneDAL Logo"/>
                        </div>
                    </div>
                    <div className="about-data-box" ref={db4}>
                        <div className="box-text">
                            <div className="text-header">
                                <span>Faster Training | Better Accuracy</span>
                            </div>
                            <div className="text-des">
                                <span>...This allowed us to seamlessly integrate oneDAL into our existing codebase and take advantage of its powerful capabilities without having to rewrite our entire code. With oneDAL, we were able to accelerate the training of our models and improve their accuracy, allowing us to make more accurate predictions about heart diseases, brain tumor and diabetes.</span>
                            </div>
                        </div>
                        <div className="box-img">
                            <img src="assets/images/about_4.png" style={{width: "80%"}} alt="oneDAL Logo" id="about4"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}