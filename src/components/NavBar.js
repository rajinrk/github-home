import './NavBar.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Pull from './icons/pull.png'
import notification from './icons/notification.png'
import Menu from './icons/menu.png'
import Github from './icons/github.svg'
import Profile from './icons/profile.png'
import { useNavigate } from 'react-router-dom';

export default function NavBar({ onRightBarShow, onLeftBarShow }) {

    const navigate = useNavigate()
    return (
        <Navbar expand="lg" className="bg-body-tertiary border-bottom">
            <Container fluid>
                <button onClick={onLeftBarShow} className='issues more mx-2 '>
                    <img src={Menu} style={{ width: '16px', height: '16px' }} />
                </button>
                <button onClick={() => navigate('/')} className='profile p-0'>
                    <img src={Github} />
                </button>
                <Navbar.Brand className='fw-semibold mx-2' href="#">Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    ></Nav>
                    <Form className="d-flex w-40 search-bar" style={{width:'30%'}}>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2 search-input"
                            aria-label="Search"
                        />
                        <span className='search-break'>|</span>
                        <Button variant="outline-success search-button">

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                            _
                        </Button>
                    </Form>
                    <Nav className='drop-down'>
                        <NavDropdown className='anchor-drop' title="+" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Nav.Link className='issues' href="#" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        </svg>
                    </Nav.Link>

                    <Nav.Link className=' issues ' href="#" >
                        <img src={Pull} style={{ width: '16px', height: '16px' }} />
                    </Nav.Link>

                    <Nav.Link className='issues' href="#" >
                        <img src={notification} style={{ width: '16px', height: '16px' }} />
                    </Nav.Link>
                    <button onClick={onRightBarShow} className='profile '>
                        <img src={Profile} />
                    </button>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}