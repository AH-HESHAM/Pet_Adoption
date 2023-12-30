import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Post } from "./post";
import { GetAuthDataFn } from '../../../Base/wrapper';
import { publish } from "../Service/StaffService";

const PostCreator = (props) => {
	const [name, setName] = useState("");
	const [species, setSpecies] = useState("");
	const [breed, setBreed] = useState("");
	const [age, setAge] = useState("");
	const [gender, setGender] = useState("");
	const [description, setDescription] = useState("");
	const [spaying, setSpaying] = useState("");
	const [houseTraining, setHouseTraining] = useState("");
	const [vaccinations, setVaccinations] = useState("");
	const [behavior, setBehavior] = useState("");
	const [healthState, setHealthState] = useState("");
	const {person} = GetAuthDataFn();
	
	const closeModal = () => {
		props.closeModal();
	};

	const creatPost = () =>{
		let post = new Post();
		post.publisherId = person.id;
		post.name = name;
		post.species = species;
		post.breed = breed;
		post.age = age;
		post.gender = gender;
		post.healthStatus = healthState;
		post.behavior = behavior;
		post.description = description;
		post.vaccinations = vaccinations;
	}


	const submitApplication = async () => {
		let post = creatPost();
		try {
		  await publish(post);
		  console.log("Adoption application submitted successfully");
		} catch (error) {
		  console.error("Error submitting adoption application:", error);
		} finally {
		  closeModal();
		}
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
				onChange={(e) => setName(e.target.value)}
				/>
			</Form.Group>

			<Form.Group controlId="species">
				<Form.Control
				type="text"
				placeholder="Species"
				value={species}
				onChange={(e) => setSpecies(e.target.value)}
				/>
			</Form.Group>

			<Form.Group controlId="breed">
				<Form.Control
				type="text"
				placeholder="Breed"
				value={breed}
				onChange={(e) => setBreed(e.target.value)}
				/>
			</Form.Group>

			<Form.Group controlId="age">
				<Form.Control
				type="text"
				placeholder="Age"
				value={age}
				onChange={(e) => setAge(e.target.value)}
				/>
			</Form.Group>

			<Form.Group controlId="gender">
				<Form.Control
				type="text"
				placeholder="Gender m/f"
				value={gender}
				onChange={(e) => setGender(e.target.value)}
				/>
			</Form.Group>

			<Form.Group controlId="description">
				<Form.Control
				type="text"
				placeholder="Description"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				/>
			</Form.Group>

			<Form.Group controlId="vaccinations">
				<Form.Control
				type="text"
				placeholder="Vaccinations"
				value={vaccinations}
				onChange={(e) => setVaccinations(e.target.value)}
				/>
			</Form.Group>

			<Form.Group controlId="behavior">
				<Form.Control
				type="text"
				placeholder="Behavior"
				value={behavior}
				onChange={(e) => setBehavior(e.target.value)}
				/>
			</Form.Group>

			<Form.Group controlId="healthState">
				<Form.Control
				type="text"
				placeholder="Health State"
				value={healthState}
				onChange={(e) => setHealthState(e.target.value)}
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
