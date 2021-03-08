import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

const Nav = () => {
    return (
        <Link to="/" className="nav">
            <div className="profile">
                <div className="introduce">
                    <h1>MY Devblog</h1>
                    <p>안녕하세요.</p>
                </div>
            </div>
            <div className="social-buttons">
                <div className="social-button">G</div>
                <div className="social-button">L</div>
                <div className="social-button">M</div>
            </div>
        </Link>
    );
};

export default Nav;