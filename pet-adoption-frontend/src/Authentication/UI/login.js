import React, { useState } from 'react';
import './commonstyle.css';
import { Link } from "react-router-dom";
import { defaultPersonState, paths, AdopterPrivilege, ManagerPrivilege, ReviewerPrivilage, PublisherPrivilage } from "../../collection";
import LoginRequest from '../Service/loginRequest'
import sec from '../Service/sec'
import { useNavigate } from "react-router-dom";
import { GetAuthDataFn } from '../../Base/wrapper';

function Login(props) {
    const {setPerson} = GetAuthDataFn();
    const navigate = useNavigate();
    const [kind, setKind] = useState("ADOPTER");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();
        // response saved in (userDetails) in localStorage
        const res = await LoginRequest(email, password, kind);
        localStorage.setItem('userDetails', JSON.stringify(res));
        await setPerson(defaultPersonState());
        rout(res.privilege)
        
    }

    const rout = (type)=>{
        if(type === AdopterPrivilege)
            navigate(paths.AdopterHome)
        
        else if(type === ManagerPrivilege)
            navigate(paths.ManagerHome)

        else if(type === PublisherPrivilage)
            navigate(paths.PublisherHome)
        else
            navigate(paths.ReviewerHome)

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
                    <option value={"ROLE_ADOPTER"}>Adopter</option>
                    <option value={"ROLE_STAFF_PUBLISHER"}>Publisher</option>
                    <option value={"ROLE_STAFF_REVIEWER"}>Reviewer</option>
                    <option value={"ROLE_MANAGER"}>Manager</option>
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
            <button></button>
        </div>
    )

}

export default Login;
