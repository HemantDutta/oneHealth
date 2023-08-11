import {Navbar} from "../components/Navbar";
import axios from "axios";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";

export const Diagnose = () => {

    //Form Validation
    const {register, handleSubmit, formState: {errors}} = useForm();

    //States
    //Brain Model States
    const [brain, setBrain] = useState(null);
    const [brainReal, setBrainReal] = useState(false);
    const [loader, setLoader] = useState(false);
    const [brainRes, setBrainRes] = useState('');

    //Heart Model States
    const [heartRes, setHeartRes] = useState('');
    const [age, setAge] = useState(0);
    const [sex, setSex] = useState(0);
    const [rbp, setRbp] = useState(0);
    const [chol, setChol] = useState(0);
    const [cp, setCp] = useState(0);
    const [fbs, setFbs] = useState(0);
    const [thalach, setThalach] = useState(0);
    const [exang, setExang] = useState(0);
    const [ca, setCa] = useState(0);
    const [thal, setThal] = useState(0);
    const [oldPeak, setOldPeak] = useState(0);
    const [slope, setSlope] = useState(0);
    const [restEcg, setRestEcg] = useState(0);

    //Sending Heart data to Flask
    function uploadHeart() {
        setLoader(true);
        let formData = new FormData();
        formData.append("age", age);
        formData.append("sex", sex);
        formData.append("cp", cp);
        formData.append("trestbps", rbp);
        formData.append("chol", chol);
        formData.append("fbs", fbs);
        formData.append("restecg", restEcg);
        formData.append("thalach", thalach);
        formData.append("exang", exang);
        formData.append("oldpeak", oldPeak);
        formData.append("slope", slope);
        formData.append("ca", ca);
        formData.append("thal", thal);

        axios.post("http://localhost:5000/heart", formData)
            .then((res) => {
                setHeartRes(res.data);
                setTimeout(() => {
                    setLoader(false);
                }, 500)
            })
            .catch((err) => {
                console.log(err);
            })
    }

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
        axios.post("http://localhost:5000/brain", formData)
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
                        <span className="model-chip" id="diabetes">Diabetes</span>
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
                            <form onSubmit={handleSubmit(data => {
                                console.log(data)})}>
                                <div className="input-row">
                                    <div className="input-field">
                                        <input {...register("age", {required: "Please fill this field", maxLength: {value: 3, message: "Please enter a valid value"}})} type="number" name="age" id="age" onChange={(e) => {
                                            setAge(Number(e.target.value))
                                        }}/>
                                        <label htmlFor="age">Age</label>
                                        {errors.age && <span>{errors.age?.message}</span>}
                                    </div>
                                    <div className="input-field">
                                        <select name="gender" id="gender" onChange={(e) => {
                                            setSex(Number(e.target.value))
                                        }}>
                                            <option value="">Gender</option>
                                            <option value="1">Male</option>
                                            <option value="0">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="input-row">
                                    <div className="input-field">
                                        <input type="number" name="rbp" id="rbp" onChange={(e) => {
                                            setRbp(Number(e.target.value))
                                        }}/>
                                        <label htmlFor="rbp">Resting Blood Pressure</label>
                                    </div>
                                    <div className="input-field">
                                        <select name="chestPain" id="chestPain" onChange={(e) => {
                                            setCp(Number(e.target.value))
                                        }}>
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
                                        <input type="number" name="chol" id="chol" onChange={(e) => {
                                            setChol(Number(e.target.value))
                                        }}/>
                                        <label htmlFor="chol">Serum Cholesterol in mg/dl</label>
                                    </div>
                                    <div className="input-field">
                                        <select name="fbs" id="fbs" onChange={(e) => {
                                            setFbs(Number(e.target.value))
                                        }}>
                                            <option value="">Is the Fasting Blood Sugar > 120?</option>
                                            <option value="0">Yes</option>
                                            <option value="1">No</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="input-row">
                                    <div className="input-field">
                                        <input type="number" name="thalach" id="thalach" onChange={(e) => {
                                            setThalach(Number(e.target.value))
                                        }}/>
                                        <label htmlFor="thalach">Maximum Heart Rate Achieved</label>
                                    </div>
                                    <div className="input-field">
                                        <select name="exang" id="exang" onChange={(e) => {
                                            setExang(Number(e.target.value))
                                        }}>
                                            <option value="">Exercise Induced Angina</option>
                                            <option value="0">No</option>
                                            <option value="1">Yes</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="input-row">
                                    <div className="input-field">
                                        <select name="ca" id="ca" onChange={(e) => {
                                            setCa(Number(e.target.value))
                                        }}>
                                            <option value="">Number of major vessels</option>
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                    <div className="input-field">
                                        <select name="thal" id="thal" onChange={(e) => {
                                            setThal(Number(e.target.value))
                                        }}>
                                            <option value="">Thal Value</option>
                                            <option value="3">Normal</option>
                                            <option value="6">Fix Defect</option>
                                            <option value="7">Reversible Defect</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="input-row">
                                    <div className="input-field">
                                        <input type="number" name="oldpeak" id="oldpeak" className="full-select" onChange={(e) => {
                                            setOldPeak(Number(e.target.value))
                                        }}/>
                                        <label htmlFor="oldpeak">ST depression induced by exercise relative to rest</label>
                                    </div>
                                </div>
                                <div className="input-row">
                                    <div className="input-field">
                                        <select name="slope" id="slope" className="full-select" onChange={(e) => {
                                            setSlope(Number(e.target.value))
                                        }}>
                                            <option value="">The slope of the peak exercise ST segment</option>
                                            <option value="1">Upsloping</option>
                                            <option value="2">Flat</option>
                                            <option value="3">Downsloping</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="input-row">
                                    <div className="input-field">
                                        <select name="restecg" id="restecg" className="full-select" onChange={(e) => {
                                            setRestEcg(Number(e.target.value))
                                        }}>
                                            <option value="">Resting Electrocardiograph Results</option>
                                            <option value="0">Normal</option>
                                            <option value="1">Having ST-T wave Abnormality</option>
                                            <option value="2">showing probable or definite left ventricular hypertrophy by Estes' criteria</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="btn-field">
                                    <button className="hover-btn" type="submit">Submit</button>
                                </div>
                            </form>
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
                                    <span>{heartRes}</span>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}