import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBarII({ handleForYou,handleFollowing }) {
    return (
        <Navbar expand="lg" className="" style={{backgroundColor:'rgb(212, 218, 218)' , borderBottom:'1px solid grey'}}>
      <Container>
        <Navbar.Brand  onClick={handleForYou} style={{fontSize:'1rem', fontWeight:'500',cursor:'pointer'}}>For you</Navbar.Brand>
        <Navbar.Brand  onClick={handleFollowing} style={{fontSize:'1rem', fontWeight:'500', cursor:'pointer'}}>following</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{marginLeft:'60%'}}>
            <Nav.Link href="#link">send feedback</Nav.Link>
            <NavDropdown title="Filter" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>    )
}