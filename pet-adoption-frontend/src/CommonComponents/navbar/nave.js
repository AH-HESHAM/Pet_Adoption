import React, { useState } from 'react';
import { Button, Container, Navbar, Nav, Modal, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../navbar/nave.css';
import {paths} from "../../collection";
import {Link} from "react-router-dom";

const NavbarComponent = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleNotificationClick = () => {
    setShowNotification(!showNotification);
  };

  return (
    <>
      <Navbar expand="lg" className="navbar bg-body-tertiary fixed-top">
        <Container fluid>
          <Navbar.Brand className="brand" >My Pet</Navbar.Brand>
          
          <Navbar.Toggle aria-controls="navbarScroll" className='toggle'/>
          <Navbar.Collapse id="navbarScroll" className="justify-content-center">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                {/* <Link href="/support" className="nav-link navLink">Home</Link>
                <Link href="/login" className="nav-link navLink">Rent</Link>
                <Link href="/login" className="nav-link navLink">Buy</Link>
                <Link href="/support" className="nav-link navLink">Support</Link>
                <Link href="/login" className="nav-link navLink">About Us</Link> */}
            </Nav>
            <Button
              variant="link"
              onClick={handleNotificationClick}
              className="notifiButton"
            >
            </Button>
             
            <Button className="bton bi-toggle2 position-relative" >
                <Link className="btonLink" to={paths.logout}>logout</Link>
                
            </Button>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>

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
