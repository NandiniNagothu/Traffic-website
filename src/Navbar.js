import React from 'react';
import './Navbar.css'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faDesktop, faTrafficLight, faNewspaper, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <nav className="navbarcontainer">
                <ul className="navbar-navcon">
                    <li className="nav-itemcon">
                        <Link to="/" className="nav-link">
                            <FontAwesomeIcon icon={faHouse} className='icon' />
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/demo" className="nav-link">
                            <FontAwesomeIcon icon={faDesktop} className='icon' />
                            Demo
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/traffic-checker" className="nav-link">
                            <FontAwesomeIcon icon={faTrafficLight} className='icon' />
                            Traffic Checker
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/news" className="nav-link">
                            <FontAwesomeIcon icon={faNewspaper} className='icon' />
                            News
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">
                            <FontAwesomeIcon icon={faEnvelope} className='icon' />
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
