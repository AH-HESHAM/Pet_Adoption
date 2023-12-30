import '../profile/profileStyle.css'
import React, { useState } from 'react';
import {GetAuthDataFn} from "../../Base/wrapper"

const Profile = ()=>{

    const [showProfile, setShowProfile] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showEditPassword, setShowEditPassword] = useState(false);

    const [editEmail, setEditEmail] = useState("");
    const [editFname, setEditFname] = useState("");
    const [editLname, setEditLname] = useState("");
    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");

    const handleViewProfile = ()=>{
        setShowProfile(!showProfile)
        setShowEdit(false)
    }

    const handleShowEdit = ()=>{
        setShowEdit(true)
        setShowProfile(false)
        setShowEditPassword(false)
    }

    const handleShowPass = ()=>{
        setShowEditPassword(!showEditPassword)
    }

    const handleClose = ()=>{
        setShowEdit(false);
        setShowEditPassword(false);
        setShowProfile(true);
    }

    const { person } = GetAuthDataFn();
    const [user, setUser] = useState(person);

    return(
        <div className='allProfile'>
            <button onClick={handleViewProfile} className='profileIcon'></button>
            {showProfile && 
                <div className='profileBody'>
                    <div className='profileInfo'>
                        <p>{user.email}</p>
                        <p>{user.name}</p>
                        {/* <p>{props.user.lname}</p> */}
                        {/* <p>{props.user.phone}</p> */}
                    </div>
                    {/* <button className='btnEditProfile' onClick={handleShowEdit} >Edit profile</button> */}
                </div>
            }
            {showEdit &&
                <form className='profileBody'>
                    <div className='profileInfo'>
                        <label>Edit only field(s) you want</label>
                        <input 
                            className='editInput' 
                            type='email' 
                            placeholder='Edit e-mail'
                            value={editEmail}
                            onChange={(e) => setEditEmail(e.target.value)}
                        />
                        <input 
                            className='editInput' 
                            placeholder='Edit First name'
                            value={editFname}
                            onChange={(e) => setEditFname(e.target.value)}
                        />
                        <input 
                            className='editInput' 
                            placeholder='Edit Last name'
                            value={editLname}
                            onChange={(e) => setEditLname(e.target.value)}
                        />

                        <input 
                            type='checkbox'
                            onChange={handleShowPass}
                            id='showPass'
                        />
                        <label htmlFor='showPass'>Edit password</label>

                        {
                            showEditPassword &&
                            <>
                                <input 
                                    className='editInput' 
                                    type='password'
                                    placeholder='Old password'
                                    required
                                    value={oldPass}
                                    onChange={(e) => setOldPass(e.target.value)}
                                />
                                <input 
                                    className='editInput' 
                                    type='password'
                                    placeholder='New password'
                                    required
                                    minLength={8}
                                    value={newPass}
                                    onChange={(e) => setNewPass(e.target.value)}
                                />
                            </>
                        }
                    </div>
                    <button type='submit' className='btnEditProfile' >Edit</button>
                    <button className='btnEditProfile' onClick={handleClose}>Back</button>
                </form>
            }
        </div>
    )
}
export default Profile