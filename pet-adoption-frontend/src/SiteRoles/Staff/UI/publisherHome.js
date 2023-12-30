import NavbarComponent from '../../../CommonComponents/navbar/nave';
import PostsList from '../../../CommonComponents/Posts/Posts';
import Profile from '../../../CommonComponents/profile/profile';
import "./staff.css"
import React, { useState, useEffect } from 'react';
import PostCreator from "./postCreator"
import {getStaffPostsRequest} from "../Service/StaffService"
import { GetAuthDataFn } from '../../../Base/wrapper';

function PublisherHome(props) {

    const {person} = GetAuthDataFn();

	const [tab, setTab] = useState("posts");

	const [listToShow, setListToShow] = useState([])

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => { setIsModalOpen(true) };
    const closeModal = () => { setIsModalOpen(false) };

    useEffect(() => {
        const getPosts = async () => {
            const posts = await getStaffPostsRequest(person.id);
            setListToShow(posts)
        };
        getPosts();
    }, []);

	return (
		<div>
			<NavbarComponent tab={tab} type={"publisher"} listToShow={listToShow}/>
			{/* {tab === "posts" && <PostsList type="staff" listToShow={listToShow}/>} */}
			<Profile/>
			<button onClick={() => {setTab("posts")}} className='postsIcon'></button>
            <button onClick={openModal} className="createIcon"></button>
            {<PostCreator closeModal={closeModal} isOpen={isModalOpen}/>}
		</div>
	);
}

export default PublisherHome;