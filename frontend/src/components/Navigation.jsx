import {Container, Nav, Navbar} from "react-bootstrap";
import './Navigation.scss';
import Twemoji from "./Twemoji";

const Navigation = () => {
    return(
        <Navbar bg="light" expand="lg" className={"navbar-element"}>
            <Container fluid>
                <Navbar.Brand href="/" className={"branding"}>
                    <Twemoji emoji={"🌸"} size={45}/>
                    <span className={"brand-name-text"}> SweetSofiMC</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className={"justify-content-end"}>
                    <Nav className="d-flex buttons-container">
                        <Nav.Link href="#action1" className={"nav-buttons"}>Home</Nav.Link>
                        <Nav.Link href="#action2" className={"nav-buttons"}>About</Nav.Link>
                        <Nav.Link href="#action2" className={"nav-buttons"}>Work</Nav.Link>
                        <Nav.Link href="#action2" className={"nav-buttons"}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;