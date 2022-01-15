import {Container, Nav, Navbar} from "react-bootstrap";
import './Navigation.scss';
import Twemoji from "./Twemoji";

const Navigation = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">
                    <Twemoji emoji={"🌸"} size={45}/>
                    <span className={"brand-name-text"} translate={"no"}> SweetSofiMC</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className={"justify-content-end"}>
                    <Nav>
                        <Nav.Link href="/" className={"nav-buttons"}>Home</Nav.Link>
                        <Nav.Link href="/#work" className={"nav-buttons"}>Work</Nav.Link>

                        <Nav.Link
                            /*href="/about"*/
                            className={"nav-buttons coming-soon"}
                        >
                            About
                            <span className="coming-soon-tooltip">Coming soon... WIP</span>
                        </Nav.Link>

                        <Nav.Link
                            /*href="/about#contact"*/
                            className={"nav-buttons coming-soon"}
                        >
                            Contact
                            <span className="coming-soon-tooltip">Coming soon... WIP</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;