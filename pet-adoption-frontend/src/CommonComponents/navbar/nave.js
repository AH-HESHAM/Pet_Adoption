import React, { useState } from "react";
import {
  Button,
  Container,
  Navbar,
  Nav,
  Modal,
  ListGroup,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../navbar/nave.css";
import { paths } from "../../collection";

const NavbarComponent = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [houseTrainingFilter, setHouseTrainingFilter] = useState(false);
  const [vaccinationFilter, setVaccinationFilter] = useState("none");
  const [spayingNeuteringFilter, setSpayingNeuteringFilter] = useState(false);

  const handleNotificationClick = () => {
    setShowNotification(!showNotification);
  };

  // Function to handle email modal open
  const handleEmailModalOpen = () => {
    setShowEmailModal(true);
  };

  // Function to handle email modal close
  const handleEmailModalClose = () => {
    setShowEmailModal(false);
  };

  const handleFilterButtonClick = () => {
    setShowFilterModal(true);
  };

  const handleFilterModalClose = () => {
    console.log("Fetching pets with filters:", {
      houseTrainingFilter,
      vaccinationFilter,
      spayingNeuteringFilter,
    });
    setShowFilterModal(false);
  };

  return (
    <>
      <Navbar expand="lg" className="navbar bg-body-tertiary fixed-top">
        <Container fluid>
          <Navbar.Brand className="brand">My Pet</Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" className="toggle" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-center">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              
            </Nav>

            {/* Button to open Email Modal */}
            <Button
              variant="link"
              onClick={handleEmailModalOpen}
              className="bi-envelope position-relative"
            ></Button>

            {/* Email Modal */}
            <Modal
              show={showEmailModal}
              onHide={handleEmailModalClose}
              dialogClassName="modal-left"
            >
              <Modal.Header closeButton>
                <Modal.Title>Email Notifications</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {/* Add your email notifications content here */}
                <ListGroup>
                  <ListGroup.Item>New email notification 1</ListGroup.Item>
                  <ListGroup.Item>New email notification 2</ListGroup.Item>
                  <ListGroup.Item>New email notification 3</ListGroup.Item>
                </ListGroup>
              </Modal.Body>
            </Modal>

            {/* Align to the right */}
            <Nav className="ml-auto">
              {/* Adjusted width for the search box */}
              <Form
                className="d-flex"
                style={{ minWidth: "480px", paddingRight: "10px" }}
              >
                {/* Added margin to the right of the search box */}
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="mr-2"
                />
                {/* Added spacing between the search box and search button */}
                <Button variant="outline-success" className="mr-2">
                  Search
                </Button>
              </Form>

              {/* Added spacing between filter button and search box */}
              <Button
                variant="outline-primary"
                className="ms-2"
                onClick={handleFilterButtonClick}
              >
                Filter
              </Button>

              {/* Added spacing between notification icon and filter button */}
              <Button
                variant="link"
                onClick={handleNotificationClick}
                className="notifiButton ms-2"
              >
                <span className="bi bi-bell"></span>
              </Button>

              {/* Added spacing between logout button and notification icon */}
              <Button className="bton bi-toggle2 position-relative ms-2">
                <Link className="btonLink" to={paths.logout}>
                  Logout
                </Link>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Filter Modal */}
      <Modal
        show={showFilterModal}
        onHide={handleFilterModalClose}
        style={{ marginBottom: "10px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Filter for house training */}
            <Form.Check
              style={{ marginBottom: "10px" }}
              type="checkbox"
              label="House Training"
              checked={houseTrainingFilter}
              onChange={() => setHouseTrainingFilter(!houseTrainingFilter)}
            />

            {/* Filter for vaccinations */}
            <Form.Group style={{ marginBottom: "20px" }}>
              <Form.Label>Vaccinations</Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  label="Vaccination A"
                  name="vaccinationFilter"
                  checked={vaccinationFilter === "A"}
                  onChange={() => setVaccinationFilter("A")}
                />
                <Form.Check
                  type="radio"
                  label="Vaccination B"
                  name="vaccinationFilter"
                  checked={vaccinationFilter === "B"}
                  onChange={() => setVaccinationFilter("B")}
                />
                <Form.Check
                  type="radio"
                  label="Vaccination C"
                  name="vaccinationFilter"
                  checked={vaccinationFilter === "C"}
                  onChange={() => setVaccinationFilter("C")}
                />
                <Form.Check
                  type="radio"
                  label="None"
                  name="vaccinationFilter"
                  checked={vaccinationFilter === "none"}
                  onChange={() => setVaccinationFilter("none")}
                />
              </div>
            </Form.Group>

            {/* Filter for spaying/neutering status */}
            <Form.Check
              style={{ marginBottom: "20px" }}
              type="checkbox"
              label="Spaying/Neutering"
              checked={spayingNeuteringFilter}
              onChange={() =>
                setSpayingNeuteringFilter(!spayingNeuteringFilter)
              }
            />

            {/* Submit button for applying filters */}
            <Button variant="primary" onClick={handleFilterButtonClick}>
              Apply Filters
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Notifications Modal */}
      <Modal show={showNotification} onHide={handleNotificationClick}>
        <Modal.Header closeButton>
          <Modal.Title>Notifications</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>New notification 1</ListGroup.Item>
            <ListGroup.Item>New notification 2</ListGroup.Item>
            <ListGroup.Item>New notification 3</ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavbarComponent;
