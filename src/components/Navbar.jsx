import React from 'react';
import '../style/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="container">
            <div className="navbar">Into the circus</div>
            <div className="menu">
                <ul className="ul">
                    <Link to="/">
                        <li className="li">Home</li>
                    </Link>
                    <Link to="/Instructions">
                        <li className="li">How to play</li>
                    </Link>
                    <Link to="/Game">
                        <li className="li">The game</li>
                    </Link>
                    <Link to="/Videos">
                        <li className="li">Learn and earn!</li>
                    </Link>
                    <Link to="/Classement">
                        <li className="li">High scores</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;