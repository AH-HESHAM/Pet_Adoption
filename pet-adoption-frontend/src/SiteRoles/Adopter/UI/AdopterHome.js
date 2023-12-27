import NavbarComponent from '../../../CommonComponents/navbar/nave';
import PostsList from '../UI/Adopterposts/postsList';
import Profile from '../../../CommonComponents/profile/profile';
import React from 'react';

function AdopterHome(props) {
	return (
		<div>
			<NavbarComponent/>
			<PostsList/>
			<Profile/>
		</div>
	);
}

export default AdopterHome;