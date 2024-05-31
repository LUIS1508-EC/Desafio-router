import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Happy Cake</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#HomePage">Home</Nav.Link>
                        <Nav.Link href="#FormPage">Contacto</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </>
    );
}

export default Navigation;