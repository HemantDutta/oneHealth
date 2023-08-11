import {Navbar} from "../components/Navbar";
import {getCookie} from "../config/cookieMaker";
import supabase from "../config/supabaseClient";
import {useEffect} from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const Dashboard = () => {

    //Navigator
    const nav = useNavigate();

    //Session States
    const [sessionName, setSessionName] = useState('');
    const [sessionID, setSessionID] = useState(0);

    //Dashboard Data
    const [history, setHistory] = useState([]);

    //Check Session
    async function checkSession() {
        const sesEmail = getCookie("em");
        if (sesEmail.length !== 0) {
            const {data} = await supabase
                .from("users")
                .select()
                .eq("email", sesEmail);

            setSessionName(data[0].name);
            setSessionID(data[0].id);
        } else {
            nav("/");
        }
    }

    //Check Session Caller
    useEffect(() => {
        if (!sessionName) {
            checkSession().then();
        }
    }, [])

    //Prediction History
    async function getPrediction(){
        const {data, errors} = await supabase
            .from("predictions")
            .select()
            .eq("user_id", sessionID);
        if(errors){
            console.log(errors);
        }
        setHistory(data);
    }

    //Get Prediction Data
    useEffect(()=>{
        getPrediction().then();
    },[sessionID])

    return (
        <>
            <Navbar/>
            <div className="dashboard">
                <div className="dashboard-gradient-bar"/>
                <div className="dashboard-content">
                    <div className="dashboard-header">
                        <span className="head-font">
                            Welcome {sessionName}
                        </span>
                    </div>
                    <div className="dashboard-history">
                        <div className="history-header">
                            <span>Prediction History</span>
                        </div>
                        <div className="history-table">
                            <table>
                                <tr>
                                    <th>Model</th>
                                    <th>Date & Time</th>
                                    <th>Prediction</th>
                                </tr>
                                {
                                    history.map((value,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{value.model}</td>
                                                <td>{value.created_at}</td>
                                                <td>{value.prediction}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}