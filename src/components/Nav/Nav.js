import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './Nav.scss';

const Nav = () => {
    const handleClick = (url) => {
        window.location.assign(url);
    }
    
    return (
        <div className="nav">
            <Link to="/" className="profile">
                <div className="introduce">
                    <h1>MY Devblog</h1>
                    <p>안녕하세요.</p>
                </div>
            </Link>
            <div className="social-buttons">
                <div className="social-button" onClick={() => handleClick('https://github.com/minyong-jeong')}>
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </div>
                <div className="social-button" onClick={() => handleClick('https://www.linkedin.com/in/%EB%AF%BC%EC%9A%A9-%EC%A0%95-605408147/?locale=en_US')}>
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </div>
                <div className="social-button" onClick={() => handleClick('mailto:jmy3155@gmail.com')}>
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
};

export default Nav;