import React from 'react';
import {useNavigate} from "react-router-dom";
import {paths} from "../../../collection";
import './Error.css';
import { AiOutlineCloseCircle } from 'react-icons/ai'; // Import an icon from react-icons
import {Button, Col, Container, Row} from "react-bootstrap";
import {GetAuthDataFn} from "../../../Base/wrapper"; // Import the custom styles

function Error() {
	const navigate = useNavigate();
	const { setPerson } = GetAuthDataFn();
	const handleMove = async () => {
		await setPerson({
			isAuthorized: false,
			username: "",
			privilege: "",
		});
		navigate(paths.login)
	}
	return (
		<Container className="error-container mt-5">
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<div className="error-box text-center">
						<AiOutlineCloseCircle className="error-code" />
						<h1 className="error-code">404</h1>
						<p className="error-message">This page is not valid</p>
						<Button variant="danger" className="error-button" onClick={handleMove}>
							Go to Login
						</Button>
					</div>
				</Col>
			</Row>
		</Container>
	);}

export default Error;