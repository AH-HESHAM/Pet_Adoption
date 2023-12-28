import NavbarComponent from '../../../CommonComponents/navbar/nave';
import PostsList from '../../../CommonComponents/Posts/Posts';
import Profile from '../../../CommonComponents/profile/profile';
import StaffList from "./ShowStaff"
import React, { useState } from 'react';

function ManagerHome(props) {
	const [listToShow, setListToShow] = useState([
        {
            id: 1,
            date: '1-1-2001',
            shelter: "shelter name",
            name: "lolo",
            species: "dog",
            breed: "kalb balady",
            age: 5,
            gender: "male",
            description: "el kalb lolo how how el kalb lolo how how ",
            spaying: false,
            houseTraining: "middle",
            vaccinations: ["v1", "v2"],
            behavior: "nice",
            healthState: "good"
        },
        {
            id: 2,
            date: '1-1-2001',
            shelter: "shelter name",
            name: "lolo",
            species: "dog",
            breed: "kalb balady",
            age: 5,
            gender: "male",
            description: "el kalb lolo how how el kalb lolo how how ",
            spaying: false,
            houseTraining: "middle",
            vaccinations: ["v1", "v2"],
            behavior: "nice",
            healthState: "good"
        },
        {
            id: 3,
            date: '1-1-2001',
            shelter: "shelter name",
            name: "lolo",
            species: "dog",
            breed: "kalb balady",
            age: 5,
            gender: "male",
            description: "el kalb lolo how how el kalb lolo how how ",
            spaying: false,
            houseTraining: "middle",
            vaccinations: ["v1", "v2"],
            behavior: "nice",
            healthState: "good"
        },
        {
            id: 4,
            date: '1-1-2001',
            shelter: "shelter name",
            name: "lolo",
            species: "dog",
            breed: "kalb balady",
            age: 5,
            gender: "male",
            description: "el kalb lolo how how el kalb lolo how how ",
            spaying: false,
            houseTraining: "middle",
            vaccinations: ["v1", "v2"],
            behavior: "nice",
            healthState: "good"
        }
    ])

	const [user, setUser] = useState(
        {
            email: "ahmed@gmail,com",
            fname: "Ahmed",
            lname: "Hesham",
            phone: "01234567890"
        }
    );

	const [staffList, setStaffList] = useState(
		[{
			email: "staf1Email@gamil.com",
			fname: "Fname",
			lname: "Lname",
			phone: "10000",
            role: "publisher"
		}, 
        {
			email: "staf1Email@gamil.com",
			fname: "Fname",
			lname: "Lname",
			phone: "10000",
            role: "publisher"
		},
        {
			email: "staf1Email@gamil.com",
			fname: "Fname",
			lname: "Lname",
			phone: "10000",
            role: "publisher"
		}]
	)

	const [tab, setTab] = useState("posts");

	// useEffect(() => {
    //     const getPosts = async () => {
    //     const posts = await postsRequest;
    //     setListToShow(posts)
    //     };
    //     getPosts();
    // }, []);
	
	// useEffect(() => {
    //     const getUser = async () => {
    //     const user = await getUserInfoRequest;
    //     setListToShow(posts)
    //     };
    //     getUser();
    // }, []);

	return (
		<div>
			<NavbarComponent/>
			{tab === "posts" && <PostsList type="manager" listToShow={listToShow}/>}
			<Profile user={user}/>
            <StaffList staffList = {staffList}/>
		</div>
	);
}

export default ManagerHome;