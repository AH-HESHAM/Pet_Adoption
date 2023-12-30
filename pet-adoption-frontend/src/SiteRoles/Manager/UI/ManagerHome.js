import NavbarComponent from '../../../CommonComponents/navbar/nave';
import PostsList from '../../../CommonComponents/Posts/Posts';
import Profile from '../../../CommonComponents/profile/profile';
import "./manager.css"
import React, {useEffect ,useState } from 'react';
import getManagerPostsRequest from "../Service/ManagerService"
import { GetAuthDataFn } from '../../../Base/wrapper';

function ManagerHome(props) {
    const {person} = GetAuthDataFn();
	const [listToShow, setListToShow] = useState([])

	const [staffList, setStaffList] = useState(
		[{
            id: 1,
			email: "staf1Email@gamil.com",
			fname: "Fname",
			lname: "Lname",
			phone: "01234567891",
            role: "publisher"
		}, 
        {
            id: 2,
			email: "staf1Email@gamil.com",
			fname: "Fname",
			lname: "Lname",
			phone: "10000",
            role: "publisher"
		},
        {
            id: 3,
			email: "staf1Email@gamil.com",
			fname: "Fname",
			lname: "Lname",
			phone: "10000",
            role: "publisher"
		}]
	)

	const [tab, setTab] = useState("posts");

    const [fireId, setFireId] = useState(0);

    const confirmFire = () => {
        setFireId(0)
        ////////// send fire request
    }


	useEffect(() => {
        const getPosts = async () => {
            const posts = await getManagerPostsRequest(person.id);
            setListToShow(posts)
        };
        getPosts();
    }, []);
	
	// useEffect(() => {
    //     const getUser = async () => {
    //     const user = await getUserInfoRequest;
    //     setListToShow(posts)
    //     };
    //     getUser();
    // }, []);

	return (
		<div>
			<NavbarComponent tab={tab} type={"manager"} listToShow={listToShow}/>
            <div className='logo listLogo'></div>
			{/* {tab === "posts" && <PostsList type="manager" listToShow={listToShow}/>} */}
			<Profile/>
            <button onClick={() => {setTab("posts")}} className='postsIcon'></button>
            <button onClick={() => {setTab("staff")}} className="staffIcon"></button>
            {tab === "staff" &&
            <table className='staffListBody'>
                <thead>
                    <tr>
                        <td>E-mail</td>
                        <td>First name</td>
                        <td>Last name</td>
                        <td>Phone</td>
                        <td>Role</td>
                    </tr>
                </thead>
                <tbody>
                    {staffList.map((value)=>(
                        <>
                            <tr key={value.id}>
                                <td>{value.email}</td>
                                <td>{value.fname}</td>
                                <td>{value.lname}</td>
                                <td>{value.phone}</td>
                                <td>{value.role}</td>
                                {/* <td>
                                    <button onClick={()=>{handleShowDetails(value.id)}}>Activity</button>
                                </td> */}
                                <td>
                                    <button onClick={()=>{setFireId(value.id)}}>Fire</button>
                                </td>
                            </tr>
                            {fireId === value.id &&
                                <div className='confirmFireForm'>
                                    <p>Are you sure you want to fire memeber <br></br><span style={{color: "red"}}>This step is unrevertable</span> </p>
                                    
                                    <button onClick={confirmFire} className='fireYes'>Yes</button>
                                    <button onClick={() => {setFireId(0)}} className='fireNo'>No</button>
                                </div>
                            }
                        </>
                    ))}
                </tbody>
            </table>
            }
		</div>
	);
}

export default ManagerHome;