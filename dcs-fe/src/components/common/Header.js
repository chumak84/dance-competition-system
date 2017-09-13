import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar is-primary">
                <Link className="navbar-item" to="/">Home</Link>
                <Link className="navbar-item" to="/formats">Formats</Link>
                <Link className="navbar-item" to="/about">About</Link>
        </nav>
    );
};

export default Header;