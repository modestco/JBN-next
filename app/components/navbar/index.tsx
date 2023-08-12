import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">JBN</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#merch">MERCH</Nav.Link>
            <Nav.Link href="#schedule">SCHEDULE</Nav.Link>
            <Nav.Link href="#tips">TIP YOUR STREAMER</Nav.Link>
            <Nav.Link href="#subscribe">SUBSCRIBE NOW</Nav.Link>
            <Nav.Link href="#social">CHECK SOCIALS</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
