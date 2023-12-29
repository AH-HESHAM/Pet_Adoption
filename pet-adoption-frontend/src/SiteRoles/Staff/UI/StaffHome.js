import NavbarComponent from '../../../CommonComponents/navbar/nave';
import PostsList from '../../../CommonComponents/Posts/Posts';
import Profile from '../../../CommonComponents/profile/profile';
import "./staff.css"
import React, { useState } from 'react';

function StaffHome(props) {

	const [tab, setTab] = useState("posts");

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

	return (
		<div>
			<NavbarComponent/>
			{tab === "posts" && <PostsList type="staff" listToShow={listToShow}/>}
			<Profile/>
			<button onClick={() => {setTab("posts")}} className='postsIcon'></button>
            <button onClick={() => {setTab("requsts")}} className="requestsIcon"></button>
		</div>
	);
}

export default StaffHome;