import { createRootRoute, Outlet } from "@tanstack/react-router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">Task Tracker</Navbar.Brand>
            <Nav className="me-auto"></Nav>
          </Container>
        </Navbar>
        <Outlet />
      </>
    );
  },
});
