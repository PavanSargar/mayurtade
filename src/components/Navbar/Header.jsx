import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <Navbar className={styles.navbar} variant="dark" expand="lg">
        <Container className={styles["navbar-container"]}>
          <Navbar.Brand href="#home">
            <h1 className={styles["brand-text"]}>Mayur Tade</h1>
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse collapseOnSelect>
            <Nav
              className="me-auto nav-links justify-content-end"
              style={{ width: "100%" }}
            >
              <Nav.Link href="#services" className={styles["nav-link"]}>Services</Nav.Link>
              <Nav.Link href="#about" className={styles["nav-link"]}>About</Nav.Link>
              <Nav.Link href="#contact" className={styles["nav-link"]}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
