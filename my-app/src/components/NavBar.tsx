import { useContext } from "react";
import {Button, Container, Nav, Navbar as ReactNavbar} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <ReactNavbar>
            <Container>
                <ReactNavbar.Brand href="/">
                    Miclimule
                </ReactNavbar.Brand>
                <Nav className="me-auto">
                    <Link to="/" className="nav-link">Test</Link>
                    <Link to="/" className="nav-link">Json</Link>
                </Nav>
            </Container>
        </ReactNavbar>
    )
}