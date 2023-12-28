import "./staff.css"
import React, { useState } from 'react';

function StaffList(props){
    const [showStaffList, setShowStaffList] = useState(false);
    const handleShowStaffList = () => {
        setShowStaffList(!showStaffList)
    }
    return(
        <div className="staffObject">
            <button onClick={handleShowStaffList} className="staffIcon"></button>
            {showStaffList && 
                <div>
                    {props.staffList.map((value)=>(
                        <table>
                            <tr>
                                <td>{value.email}</td>
                                <td>{value.fname}</td>
                                <td>{value.lname}</td>
                                <td>{value.phone}</td>
                                <td>{value.role}</td>
                            </tr>
                        </table>
                    ))}
                </div>
            }
        </div>
    )
}
export default StaffList