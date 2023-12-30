import {useState} from "react";
import {Link} from "react-router-dom";
import './commonstyle.css';
import React from 'react';
import {paths} from "../../collection";
import { user } from "../User";
import {SignupRequest, GetShelters} from "../Service/signupService"
import { useNavigate } from "react-router-dom";

function Signup(props) {
    // form fields
    const [kind, setKind] = useState("ADOPTER");
    const [firstNmae, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [shelterName, setShelterName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [location, setLocation] = useState("");
    const [phone, setPhone] = useState("");
    const [shelterPhone, setShelterPhone] = useState("");
    const [managerId, setManagerId] = useState("0");
    const [shelterId, setShelterId] = useState("0");
    const [role, setRole] = useState("PUBLISHER");
    
    const [passMatching, setPassMatching] = useState(true)
    
    const [allShelters, setAllShelters] = useState([])

    const navigate = useNavigate();

    const handleSignup = async (event)=>{
        event.preventDefault();
        if(password === confirmPassword){
            setPassMatching(true)
            // need routing
            const res = await SignupRequest(createUser());
            if(res === "User registered successfully")
                navigate(paths.login)
        }
        else{
            setPassMatching(false);
        }
    }

    const createUser = () =>{
        let curUser = new user();
        curUser.email = email;
        curUser.firstName = firstNmae;
        curUser.lastName = lastName;
        curUser.password = password;
        curUser.phone = phone;
        curUser.shelterAddress = location;
        curUser.shelterPhone = shelterPhone;
        curUser.worksFor = shelterName;
        curUser.shelterId = shelterId;
        curUser.managerId = managerId;
        curUser.role = getRole();
        return curUser;
    }
 
    const getRole = () =>{
        if(kind === "ADOPTER")
            return "ROLE_ADOPTER"

        if(kind === "MANAGER")
            return "ROLE_MANAGER"

        if(kind === "STAFF" && role === "REVIEWER")
            return "ROLE_STAFF_REVIEWER"

        if(kind === "STAFF" && role === "PUBLISHER")
        return "ROLE_STAFF_PUBLISHER"
    }

    const handleRoleChange = async (role)=>{
        setKind(role)
        if(role === "STAFF"  ){
            console.log("hhhhhhhhhhhhhhhhhhhhhhhhh")
            // need request from backend
            const res = await GetShelters();
            console.log("list")
            console.log(res)
            setAllShelters(res);
            // console.log("aloooo")
            // console.log(allShelters)
        }
    }

    const handleShelterName = (shelter)=>{
        console.log("shelter")
        console.log(shelter[1])
        setShelterName(shelter[2]);
        setManagerId(shelter[1])
        setShelterId(shelter[0])
    }

    const handleConfirmPassword = (pass)=>{
        setConfirmPassword(pass)
        setPassMatching(pass === password)
    }

    return(
        <div className="allComponents">
            <div className="logo"></div>
            <form className="form" onSubmit={handleSignup}>
                <h1 className="header_text">Sign up</h1>
                {/* user type */}
                <select onChange={(e) => handleRoleChange(e.target.value)} className="input">
                    <option value={"ADOPTER"}>Adopter</option>
                    <option value={"STAFF"}>Staff</option>
                    <option value={"MANAGER"}>Manager</option>
                </select>

                {/* main info for all users */}
                <input className="input"
                       placeholder="E-mail as name@example.com"
                       type="email" required
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                />
                
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
                <input className="input"
                       placeholder="Phone number"
                       required
                       value={phone}
                       onChange={(e) => setPhone(e.target.value)}
                />

                {/* only for staff */}
                { kind === "STAFF" &&
                    <>
                        {/* rols */}
                        <select onChange={(e) => setRole(e.target.value)} className="input">
                            <option value={"PUBLISHER"}>Works as: Publisher</option>
                            <option value={"REVIEWER"}>Works as: Reviewer</option>
                        </select>

                        {/* list of shelters in system */}
                        <select onChange={(e) => handleShelterName(e.target.value)} className="input">
                            {allShelters.map((shelter) => (
                                <option key={shelter.name} value={[shelter.shelterId, shelter.managerId, shelter.name]}>{"Works for: " + shelter.name}</option>
                            ))}
                        </select>
                    </>
                }

                {/* only for Manager */}
                { kind === "MANAGER" &&
                    <>
                        <input className="input"
                               placeholder="Shelter name"
                               required
                               value={shelterName}
                               onChange={(e) => setShelterName(e.target.value)}
                        />
                        <input className="input"
                               placeholder="Shelter Location"
                               required
                               value={location}
                               onChange={(e) => setLocation(e.target.value)}
                        />
                        <input className="input"
                            placeholder="Shelter phone number"
                            required
                            value={shelterPhone}
                            onChange={(e) => setShelterPhone(e.target.value)}
                        />
                    </>
                }

                {/* for all users */}
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
                       onChange={(e) => handleConfirmPassword(e.target.value)}
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