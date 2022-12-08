import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import brandImage from '../../../Asset/whole.png'
import { FaBeer } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-light">
                <div className="container d-flex justify-content-between align-items-center">
                    <Link className="navbar-brand" to="/">
                        <img src={brandImage} alt="Logo" className="d-inline-block align-text-top" />
                    </Link>
                    <div className="input-group rounded w-50">
                        {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                        <input type="search" className="form-control rounded-pill border-0" placeholder="Search for your favourite groups in ATG" aria-label="Search" aria-describedby="search-addon" />
                    </div>
                    <span class="navbar-text">
                        <div class="dropdown">
                            <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Create an account. <span className="text-primary">It's free</span>
                            </a>

                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </span>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;