import { useState } from 'react';
import axios from "axios";

const home = () => {
    const [principle, setPrinciple] = useState("");
    const [rate, setRate] = useState("");
    const [time, setTime] = useState("");
    const [result, setResult] = useState("");

    const handleCalculations = async () => {
        try {
            const response = await axios.post("http://localhost:3000", { principle, rate, time });
            console.log(response.data);
            setResult(response.data.simpleInterest);
        } catch (error) {
            console.error("Server Error:", error);
            alert("Failed to calculate Simple Interest, Please try again.");
        }

    };

    return (
        <div>
            <h1 className="text-4xl text-center text-white" >Simple Intrest</h1>
            <div>
                <input type="number" placeholder="Enter Principle" value={principle} onChange={(event) => (setPrinciple(Number(event.target.value)))} /><br />
                <input type="number" placeholder="Enter Rate of interest per year" value={rate} onChange={(event) => (setRate(Number(event.target.value)))} /><br />
                <input type="number" placeholder="Enter time period in years" value={time} onChange={(event) => (setTime(Number(event.target.value)))} /><b />
            </div>
            <br />
            <button onClick={handleCalculations}>Calculate Interest</button><br />
            <div>{`Interest is: ${result}`}</div>
        </div >
    )
}

export default home;
