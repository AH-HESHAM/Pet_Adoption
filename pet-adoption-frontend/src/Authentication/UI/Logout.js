import React, {useEffect} from 'react';
import {GetAuthDataFn} from "../../Base/wrapper";
import {useNavigate} from "react-router-dom";
import {defaultPersonState} from "../../collection";

function Logout() {
    const { person, setPerson } = GetAuthDataFn();
    setPerson(defaultPersonState());
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/")
    }, [navigate, person])
    
    console.log("in log out")
    return (
        <></>
    );
}

export default Logout;