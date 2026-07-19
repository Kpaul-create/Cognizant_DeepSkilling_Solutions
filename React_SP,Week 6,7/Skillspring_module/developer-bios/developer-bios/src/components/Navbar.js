import React, { useContext } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import AuthContext from '../contexts/Auth';

function Navbar() {
    const { isLoggedIn, logoutUser } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-between">
        <Link className="navbar-brand" to="/">
            <img className="brand" src={logo} alt='logo' /> 
        </Link>
  
        <ul className="navbar-nav right-margin">
            <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/developers" className="nav-link">Developer Bios</Link>
            </li>
            <li className="nav-item">
                <Link to="/search" className="nav-link">Search Bios</Link>
            </li>
            {
                isLoggedIn
                ?
                    <>
                        <li className="nav-item">
                            <Link to="/developers/add" className="nav-link">Create Bio</Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/" 
                                className="nav-link" 
                                onClick={()=> { 
                                logoutUser();
                            }}>Logout</Link>
                        </li>
                    </>
                :
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
            }
        </ul>
    </nav>
  );
}

export default Navbar;