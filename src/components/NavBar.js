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
        <Navbar expand="lg"  style={{backgroundColor: 'rgb(245, 252, 252)'}}>
            <Container fluid>
                {/* button is used to handle left offcanvas or menu bar */}
                <button onClick={onLeftBarShow} className='issues more mx-2 '>
                    <img src={Menu} style={{ width: '16px', height: '16px' }} alt='menu' />
                </button>
                {/* below button is gitgub logo with onclick will navigate to homepage as of now */}
                <button onClick={() => navigate('/')} className='profile p-0 mx-3'>
                    <img src={Github} alt='github' />
                </button>
                <Navbar.Brand className=' mx-2 ' style={{fontSize :'1rem',fontWeight:'600'}} >Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse className="me-auto my-2 my-lg-0"  id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    ></Nav>
                    {/* below code for searchbar we can store the value in a state and make api calls to backend for getting data matches the search  */}
                    <Form className="d-flex w-40  search-bar" style={{width:'30%'}}>
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
                            </svg>_
                        </Button>
                    </Form>
                    {/* bottom code is for dropdown menu where we can add link to new repository creating page or whatever we want to add can add */}
                    <Nav className='drop-down'>
                        <NavDropdown className='anchor-drop' title="+" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/new">New Repository</NavDropdown.Item>
                            <NavDropdown.Item href="/importrepo">
                                import Repository
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/somethingelse">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    {/* This code take you to issues page where u can search for solution of your issue */}
                    <Nav.Link className='issues' href="/issues" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        </svg>
                    </Nav.Link>

                    {/* below code will take to pull page for where you can see the status of your pull requests  */}
                    <Nav.Link className=' issues ' href="/pullrequest" >
                        <img src={Pull} style={{ width: '16px', height: '16px' }} alt='pull' />
                    </Nav.Link>

                    {/* below code will take you to notification page  */}
                    <Nav.Link className='issues' href="/notification" >
                        <img src={notification} style={{ width: '16px', height: '16px' }} alt='notification' />
                    </Nav.Link>

                    {/* below code will open right offcanvas */}
                    <button onClick={onRightBarShow} className='profile '>
                        <img src={Profile} alt='profile'/>
                    </button>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}