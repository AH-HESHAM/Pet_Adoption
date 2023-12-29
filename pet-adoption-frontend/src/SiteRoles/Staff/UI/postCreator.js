import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const PostCreator = (props) => {
	const [name, setname] = useState("");
	const [age, setage] = useState("");
	
	const closeModal = () => {
		props.closeModal();
	};


	const submitApplication = async () => {
		// try {
		//   await AdoptionApplicationService.submitAdoptionApplication(
		//     name,
		//     age
		//   );
		//   console.log("Adoption application submitted successfully");
		// } catch (error) {
		//   console.error("Error submitting adoption application:", error);
		// } finally {
		//   closeModal();
		// }
	};

	return (
		<Modal show={props.isOpen} onHide={closeModal}>
		<Modal.Header closeButton>
			<Modal.Title>Add pet</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			<Form>

			<Form.Group controlId="name">
				<Form.Control
				type="text"
				placeholder="Name"
				value={name}
				onChange={(e) => setname(e.target.value)}
				/>
			</Form.Group>

			<Form.Group controlId="age">
				<Form.Control
				type="text"
				placeholder="Age"
				value={age}
				onChange={(e) => setage(e.target.value)}
				/>
			</Form.Group>
			</Form>
		</Modal.Body>
		<Modal.Footer>
			<Button variant="secondary" onClick={closeModal}>
			Close
			</Button>
			<Button variant="warning" onClick={submitApplication}>
			Submit
			</Button>
		</Modal.Footer>
		</Modal>
	);
};

export default PostCreator;
