import NavbarComponent from '../../../CommonComponents/navbar/nave';
import PostsList from '../../../CommonComponents/Posts/Posts';
import Profile from '../../../CommonComponents/profile/profile';
import React, { useEffect, useState } from 'react';
import getPostsRequest from "../Service/getPostListServicece"

function AdopterHome(props) {

	const [listToShow, setListToShow] = useState([])

	useEffect(() => {
        const getPosts = async () => {
            const posts = await getPostsRequest("/adopter/pets");
            setListToShow(posts)
        };
        getPosts();
    }, []);

	return (
		<div>
			<NavbarComponent tab={"posts"} type={"adopter"} listToShow={listToShow}/>
			
			<Profile/>
		</div>
	);
}

export default AdopterHome;