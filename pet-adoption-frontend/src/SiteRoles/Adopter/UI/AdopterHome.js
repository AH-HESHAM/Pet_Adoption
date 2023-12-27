import NavbarComponent from '../../../CommonComponents/navbar/nave';
import PostsList from '../../../CommonComponents/Posts';
import Profile from '../../../CommonComponents/profile/profile';
import React from 'react';

function AdopterHome(props) {
	return (
		<div>
			<NavbarComponent/>
			<PostsList type="adopter"/>
			<Profile/>
		</div>
	);
}

export default AdopterHome;