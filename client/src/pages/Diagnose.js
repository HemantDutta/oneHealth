import {Navbar} from "../components/Navbar";
import axios from "axios";
import {useEffect, useState} from "react";

export const Diagnose = () => {

    //States
    const [brain, setBrain] = useState(null);
    const [brainReal, setBrainReal] = useState(false);
    const [loader, setLoader] = useState(false);
    const [brainRes, setBrainRes] = useState('');
    const [heartRes, setHeartRes] = useState('');

    //Setting Brain Tumor File
    function setBrainFile(e) {
        let file = e.target.files[0];
        setBrain(file);
        setBrainReal(true);
        setLoader(true);
    }

    //Sending Brain Tumor File to Flask
    function uploadBrain() {
        let formData = new FormData();
        formData.append('file', brain);
        axios.post("http://localhost:5000/predict", formData)
            .then((res) => {
                setBrainRes(res.data);
                setTimeout(() => {
                    setLoader(false);
                }, 500)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    //Calling uploadBrain on setState
    useEffect(() => {
        if (brainReal) {
            uploadBrain();
            setBrainReal(false);
        }
    }, [brain])

    //Model Switcher
    function modelSwitcher(x) {
        let brain = document.getElementById("brain");
        let heart = document.getElementById("heart");
        let brainChip = document.getElementById("brainChip");
        let heartChip = document.getElementById("heartChip");


        if (x === "brain") {
            brainChip.classList.add("active");
            heartChip.classList.remove("active");
            heart.classList.remove("activeModel");
            setTimeout(() => {
                heart.style.display = "none";
                brain.style.display = "block";
                setTimeout(() => {
                    brain.classList.add("activeModel");
                }, 100)
            }, 400)
        } else if (x === "heart") {
            heartChip.classList.add("active");
            brainChip.classList.remove("active");
            brain.classList.remove("activeModel");
            setTimeout(() => {
                brain.style.display = "none";
                heart.style.display = "block";
                setTimeout(() => {
                    heart.classList.add("activeModel");
                }, 100)
            }, 400)
        }
    }

    return (
        <>
            <Navbar/>
            <div className="diagnose">
                <div className="diagnose-gradient-bar"/>
                <div className="diagnose-content">
                    <div className="diagnose-model-bar">
                        <span className="model-chip active" id="brainChip" onClick={() => {
                            modelSwitcher("brain")
                        }}>Brain Tumor</span>
                        <span className="model-chip" id="heartChip" onClick={() => {
                            modelSwitcher("heart")
                        }}>Heart Disease</span>
                        <span className="model-chip">Diabetes</span>
                    </div>
                    <div className="tumor-model-content activeModel" id="brain">
                        <div className="model-header">
                            <span>Brain Tumor Detection</span>
                        </div>
                        <div className="model-des">
                            <span>Upload your brain scan to continue</span>
                        </div>
                        <div className="model-form">
                            <input type="file" name="brainScan" id="brainScan" onChange={(e) => {
                                setBrainFile(e)
                            }}/>
                        </div>
                        <div className="model-result">
                            {
                                loader &&
                                <img src="assets/images/oneHealth_loader.svg" alt="loader"/>
                            }
                            {
                                !loader && brainRes.length !== 0 &&
                                <>
                                    <span>Result: </span>
                                    <span>{brainRes}</span>
                                </>
                            }
                        </div>
                    </div>
                    <div className="heart-model-content" id="heart">
                        <div className="model-header">
                            <span>Heart Disease Prediction</span>
                        </div>
                        <div className="model-des">
                            <span>Fill the following details to continue</span>
                        </div>
                        <div className="model-form">
                            <div className="input-row">
                                <div className="input-field">
                                    <label htmlFor="age">Age</label>
                                    <input type="number" name="age" id="age"/>
                                </div>
                                <div className="input-field">
                                    <select name="gender" id="gender">
                                        <option value="#">Gender</option>
                                        <option value="1">Male</option>
                                        <option value="0">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="input-row">
                                <div className="input-field">
                                    <label htmlFor="rbp">Resting Blood Pressure</label>
                                    <input type="number" name="rbp" id="rbp"/>
                                </div>
                                <div className="input-field">
                                    <select name="chestPain" id="chestPain">
                                        <option value="0">No Chest Pain</option>
                                        <option value="1">Typical Angina</option>
                                        <option value="2">Atypical Angina</option>
                                        <option value="3">Non Anginal Pain</option>
                                        <option value="4">Asymptomatic</option>
                                    </select>
                                </div>
                            </div>
                            <div className="input-row">
                                <div className="input-field">
                                    <label htmlFor="chol">Serum Cholesterol in mg/dl</label>
                                    <input type="number" name="chol" id="chol"/>
                                </div>
                                <div className="input-field">
                                    <select name="fbs" id="fbs">
                                        <option value="#">Is the Fasting Blood Sugar > 120?</option>
                                        <option value="0">Yes</option>
                                        <option value="1">No</option>
                                    </select>
                                </div>
                            </div>
                            <div className="input-row">
                                <div className="input-field">
                                    <label htmlFor="thalach">Maximum Heart Rate Achieved</label>
                                    <input type="number" name="thalach" id="thalach"/>
                                </div>
                                <div className="input-field">
                                    <select name="exang" id="exang">
                                        <option value="#">Exercise Induced Angina</option>
                                        <option value="0">No</option>
                                        <option value="1">Yes</option>
                                    </select>
                                </div>
                            </div>
                            <div className="input-row">
                                <div className="input-field">
                                    <select name="ca" id="ca">
                                        <option value="#">Number of major vessels</option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <div className="input-field">
                                    <select name="thal" id="thal">
                                        <option value="#">Thal Value</option>
                                        <option value="3">Normal</option>
                                        <option value="6">Fix Defect</option>
                                        <option value="7">Reversible Defect</option>
                                    </select>
                                </div>
                            </div>
                            <div className="input-row">
                                <div className="input-field">
                                    <label htmlFor="oldpeak">ST depression induced by exercise relative to rest</label>
                                    <input type="number" name="oldpeak" id="oldpeak" className="full-select"/>
                                </div>
                            </div>
                            <div className="input-row">
                                <div className="input-field">
                                    <select name="slope" id="slope" className="full-select">
                                        <option value="#">The slope of the peak exercise ST segment</option>
                                        <option value="1">Upsloping</option>
                                        <option value="2">Flat</option>
                                        <option value="3">Downsloping</option>
                                    </select>
                                </div>
                            </div>
                            <div className="input-row">
                                <div className="input-field">
                                    <select name="restecg" id="restecg" className="full-select">
                                        <option value="#">Resting Electrocardiographic Results</option>
                                        <option value="0">Normal</option>
                                        <option value="1">Having ST-T wave Abnormality</option>
                                        <option value="2">showing probable or definite left ventricular hypertrophy by Estes' criteria</option>
                                    </select>
                                </div>
                            </div>
                            <div className="btn-field">
                                <button className="hover-btn">Submit</button>
                            </div>
                        </div>
                        <div className="model-result">
                            {
                                loader &&
                                <img src="assets/images/oneHealth_loader.svg" alt="loader"/>
                            }
                            {
                                !loader && heartRes.length !== 0 &&
                                <>
                                    <span>Result: </span>
                                    <span>Heart Result</span>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}