import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
    const { user, logOut } =useContext(AuthContext);

    const handelLogout=()=>{
        logOut()
        .then(()=>{})
        .catch(error=> console.error(error))
    }

    return (
        <div className='Header'>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className='fw-bold'>Hotel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link><Link className='text-decoration-none text-black ms-3 fw-bold' to="/">Home</Link></Nav.Link> 
                            <Nav.Link><Link className='text-decoration-none text-black ms-3 fw-bold' to="/bookings">Your bookings</Link></Nav.Link> 
                            <Nav.Link><Link className='text-decoration-none text-black ms-3 fw-bold' to="/">sirveses</Link></Nav.Link> 
                        </Nav>
                    </Navbar.Collapse>
                    {
                        user ? <> <span className='font-bold'>{user.displayName}</span> 
                            <span><button className='ms-3 btn btn-secondary' onClick={handelLogout}>Sign Out</button></span> </> : <span className='fw-bold'>
                                <Link className='text-decoration-none text-black ms-3 font-bold' to="/login">login</Link>
                                <Link className='text-decoration-none text-black ms-3 font-bold' to="/register">Register</Link>
                         </span>
                    }
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;