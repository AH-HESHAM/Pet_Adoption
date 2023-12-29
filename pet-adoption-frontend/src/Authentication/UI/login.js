import React, { useState } from 'react';
import './commonstyle.css';
import { Link } from "react-router-dom";
import { paths } from "../../collection";
import LoginRequest from '../Service/loginRequest'
import sec from '../Service/sec'
import { useNavigate } from "react-router-dom";
function Login(props) {
    const navigate = useNavigate();
    const [kind, setKind] = useState("ADOPTER");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();
        // response saved in (userDetails) in localStorage
        const res = await LoginRequest(email, password, kind);

        const userDetails = res;

        localStorage.setItem('userDetails', JSON.stringify(userDetails));

        const detailsSaved = JSON.parse(localStorage.getItem('userDetails'));
        console.log("userDetaels after saving : ");
        console.log(detailsSaved)

    }
    const handle = async (event) => {
        event.preventDefault();
        const res = await sec();
        console.log(res)
    }
    return (
        <div className="allComponents">
            <div className="logo"></div>
            <button onClick={handle}>
                click security
            </button>
            <form className="form" onSubmit={handleLogin}>
                <h1 className="header_text">Login</h1>

                {/* user type */}
                <select onChange={(e) => setKind(e.target.value)} className="input">
                    <option value={"ADOPTER"}>Adopter</option>
                    <option value={"STAFF"}>Staff</option>
                    <option value={"MANAGER"}>Manager</option>
                </select>

                <input className="input"
                    placeholder="E-mail as name@example.com"
                    type="email" required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input className="input"
                    placeholder="Enter password"
                    type="password" required minLength={8}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="sendBtn" type="submit" >
                    Login
                </button>
                <span className="small">Don't have an account? <Link className="link" to={paths.signup}>Sign up</Link></span>
            </form>
        </div>
    )
}

export default Login;