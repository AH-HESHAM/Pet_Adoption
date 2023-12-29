import NavbarComponent from '../../../CommonComponents/navbar/nave';
import PostsList from '../../../CommonComponents/Posts/Posts';
import Profile from '../../../CommonComponents/profile/profile';
import React, { useState } from 'react';

function AdopterHome(props) {

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

	// useEffect(() => {
    //     const getPosts = async () => {
    //     const posts = await postsRequest;
    //     setListToShow(posts)
    //     };
    //     getPosts();
    // }, []);

	return (
		<div>
			<NavbarComponent/>
			<PostsList type="adopter" listToShow={listToShow}/>
			<Profile/>
		</div>
	);
}

export default AdopterHome;