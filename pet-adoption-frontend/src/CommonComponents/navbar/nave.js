import React, { useEffect, useState } from "react";
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
import {
  searchService,
  filterService,
} from "../../SiteRoles/Adopter/Service/AdopterService";
import PostsList from "../Posts/Posts"

const NavbarComponent = (props) => {
  const [showNotification, setShowNotification] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [vaccinationFilter, setVaccinationFilter] = useState(false); // Use boolean state

  const [searchQuery, setSearchQuery] = useState("");
  const [petList, setPetList] = useState(props.listToShow);

  const handleNotificationClick = () => {
    setShowNotification(!showNotification);
  };

  const handleEmailModalOpen = () => {
    setShowEmailModal(true);
  };

  const handleEmailModalClose = () => {
    setShowEmailModal(false);
  };

  const handleFilterButtonClick = () => {
    setShowFilterModal(true);
  };

  const handleFilterApply = async () => {
    try {
      console.log(vaccinationFilter);
      const pets = await filterService(vaccinationFilter);
      setPetList(pets);
    } catch (e) {
      console.log(e);
      setShowFilterModal(false);
    }
  };

  const handleFilterModalClose = () => {
    console.log("Fetching pets with filters:", {
      vaccinationFilter,
    });
    setShowFilterModal(false);
  };

  const handleVaccinationChange = () => {
    // Toggle the boolean value
    setVaccinationFilter((prevFilter) => !prevFilter);
  };

  const handleSearch = async () => {
    console.log("Selected Filter:", selectedFilter);
    console.log("Search Query:", searchQuery);
    try {
      const pets = await searchService(selectedFilter, searchQuery);
      setPetList(pets);
      console.log("Search Service successful");
    } catch (error) {
      console.error("Error Search service:", error);
    }
  };

  return (
    <>
      <Navbar expand="lg" className="navbar bg-body-tertiary fixed-top">
        <Container fluid>
          <Navbar.Brand className="brand">My Pet</Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" className="toggle" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-center">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll></Nav>

            {/* Button to open Email Modal */}
            <Button
              variant="outline-secondary"
              onClick={handleEmailModalOpen}
              className="position-relative me-auto"
            >
              Requests
            </Button>

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
                style={{ minWidth: "480px", paddingLeft: "10px" }}
              >
                <Form.Select
                  style={{ width: "180px" }}
                  className="mr-2"
                  onChange={(e) => setSelectedFilter(e.target.value)}
                >
                  <option value="">Search Category</option>
                  <option value="species">Species</option>
                  <option value="breed">Breed</option>
                  <option value="age">Age</option>
                  <option value="shelter">Shelter Location</option>
                </Form.Select>
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="mr-2"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button
                  variant="outline-success"
                  className="mr-2"
                  onClick={handleSearch}
                >
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
            {/* Filter for vaccinations */}
            <Form.Group style={{ marginBottom: "20px" }}>
              <Form.Label>Vaccinations</Form.Label>
              <div>
                <Form.Check
                  type="checkbox"
                  label="Vaccination A"
                  checked={vaccinationFilter}
                  onChange={handleVaccinationChange}
                />
                <Form.Check
                  type="checkbox"
                  label="None"
                  checked={!vaccinationFilter} // Inverse of vaccinationFilter for "None"
                  onChange={handleVaccinationChange}
                />
              </div>
            </Form.Group>

            {/* Submit button for applying filters */}
            <Button variant="primary" onClick={handleFilterApply}>
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
      {props.tab === "posts" && <PostsList type={props.type} listToShow={petList.length == 0 ? props.listToShow : petList}/>}
    </>
  );
};

export default NavbarComponent;
