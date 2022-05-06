import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import '../Header/Header.css'
import Loading from '../Loading/Loading';

const Header = () => {
    const navigate=useNavigate();
    const [user, loading, ] = useAuthState(auth);
    if(loading){
        return <Loading></Loading>
    }
    const handleOnClickSignOut =()=>{
        const confrim= window.confirm("Are you sure ?");
        if(confrim){
            signOut(auth);
            navigate('login');
        }

       

    }
    return (
        <div className='sticky-top'>
            <Navbar  expand="lg" className='header-navbar pt-3 '>
                <Container >
                    <Navbar.Brand href="#" className='fs-3 text-white fw-bold mb-3' >Electronics Warehouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" >
                        <Nav
                            className="ms-auto "
                            style={{ maxHeight: '500px' }}
                            navbarScroll
                        >
                            
                                <CustomLink className="nav-item " to='/'>Home</CustomLink>
                                <CustomLink className="nav-item " to='/blog'>Blog</CustomLink>

                                {
                                user ? <>
                                    <CustomLink className="nav-item " to='/manageInventory'>Manage Inventory</CustomLink>
                                    <CustomLink className="nav-item " to='/add-items'>Add-Items</CustomLink>
                                    <CustomLink className="nav-item " to='/my-items'>My Items</CustomLink>
                                    <p className="nav-item logout-btn " to='' > <span onClick={handleOnClickSignOut}>Log Out  </span> </p>
                                    {
                                        user.photoURL ? <img src={user?.photoURL} className="rounded rounded-circle ms-3 d-flex align-items-center" style={{"width":"45px" ,"height":"45px"}} alt="" /> : <p className='fs-4 text-black rounded ms-4 px-3 p bg-white '>{user?.displayName}</p>
                                    }

                                    
                                    </> :
                                    <>
                                        <CustomLink className="nav-item mb-3 " to='/signup'>Sign Up</CustomLink>
                                        <CustomLink className="nav-item mb-3 " to='/login'>Login</CustomLink>
                                    </>
                                }

                             
                                
                            
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;