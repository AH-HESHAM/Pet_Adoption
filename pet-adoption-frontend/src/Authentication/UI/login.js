import React, {useState} from 'react';
import './commonstyle.css';
import {Link} from "react-router-dom";
import {paths} from "../../collection";

function Login(props) {

    const [kind, setKind] = useState("ADOPTER");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLogin = (event)=>{
        event.preventDefault();
    }
    return(
        <div className="allComponents">
            <div className="logo"></div>
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
                <button className="sendBtn" type="submit">
                    Login
                </button>
                <span className="small">Don't have an account? <Link className="link" to={paths.signup}>Sign up</Link></span>
            </form>
            <button></button>
        </div>
    )
}

export default Login;