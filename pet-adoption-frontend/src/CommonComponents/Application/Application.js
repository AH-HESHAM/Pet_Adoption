import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import {submitAdoptionApplication} from "../../SiteRoles/Adopter/Service/AdopterService";
import { GetAuthDataFn } from "../../Base/wrapper";

const AdoptionApplicationModal = (props) => {
  const [adopterName, setAdopterName] = useState("");
  const [contactInformation, setContactInformation] = useState("");
  const { person } = GetAuthDataFn();

  const closeModal = () => {
    props.closeModal();
  };

  const submitApplication = async () => {
    try {
        const petID = props.id
        const adopterID = person.id
        console.log(petID)
        console.log(adopterID)
      await submitAdoptionApplication(
       petID,
        adopterID,
        adopterName,
        contactInformation
      );
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
        <Modal.Title>Adoption Application</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="adopterName">
            <Form.Label>Adopter Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter adopter name"
              value={adopterName}
              onChange={(e) => setAdopterName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="contactInformation">
            <Form.Label>Contact Information</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter contact information (e.g. Email, Phone Number)"
              value={contactInformation}
              onChange={(e) => setContactInformation(e.target.value)}
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

export default AdoptionApplicationModal;
