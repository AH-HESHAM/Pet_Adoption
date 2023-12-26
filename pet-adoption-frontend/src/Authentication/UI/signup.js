import {useState} from "react";
import {Link} from "react-router-dom";
import './commonstyle.css';
import React from 'react';
import {paths} from "../../collection";
function Signup(props) {
    // true means staff false means shelter
    const [kind, setKind] = useState("STAFF");
    const [firstNmae, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [location, setLocation] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("PUBLISHER");
    const [passMatching, setPassMatching] = useState(true)

    const handleSignup = (event)=>{
        event.preventDefault();
        if(password === confirmPassword){
            // create object
            // sending request
            // routing
            setPassMatching(true)
            console.log(email)
            console.log(firstNmae)
            console.log(lastName)
            console.log(password)
            console.log(confirmPassword)
            console.log(location)
            console.log(phone)
            console.log(role)
            console.log(kind)
        }
        else{
            setPassMatching(false);
        }
    }

    return(
        <div className="allComponents">
            <div className="logo"></div>
            <form className="form" onSubmit={handleSignup}>
                <h1 className="header_text">Sign up</h1>
                <select onChange={(e) => setKind(e.target.value)} className="input">
                    <option value={"STAFF"}>Staff</option>
                    <option value={"MANAGER"}>Manager</option>
                </select>
                <input className="input"
                       placeholder="E-mail as name@example.com"
                       type="email" required
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                />
                { kind === "STAFF" &&
                    <>
                        <input className="input"
                               placeholder="First name"
                               required
                               value={firstNmae}
                               onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input className="input"
                               placeholder="Last name"
                               required
                               value={lastName}
                               onChange={(e) => setLastName(e.target.value)}
                        />
                        <select onChange={(e) => setRole(e.target.value)} className="input">
                            <option value={"PUBLISHER"}>Publisher</option>
                            <option value={"REVIEWER"}>Reviewer</option>
                        </select>
                    </>
                }
                { kind === "MANAGER" &&
                    <>
                        <input className="input"
                               placeholder="Shelter name"
                               required
                               value={firstNmae}
                               onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input className="input"
                               placeholder="Shelter Location"
                               required
                               value={location}
                               onChange={(e) => setLocation(e.target.value)}
                        />
                    </>
                }
                <input className="input"
                       placeholder="Phone number"
                       required
                       value={phone}
                       onChange={(e) => setPhone(e.target.value)}
                />
                <input className="input"
                       placeholder="Create password"
                       type="password" required minLength={8}
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                />
                <input className="input"
                       placeholder="Re-enter password"
                       type="password" required minLength={8}
                       value={confirmPassword}
                       onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {!passMatching && <p className="error">Passwords are not matching</p>}
                <button className="sendBtn" type="submit">
                    Sign up
                </button>
                <span className="small">Already registered? <Link className="link" to={paths.login}>Login</Link></span>

            </form>
        </div>
    )

}

export default Signup;