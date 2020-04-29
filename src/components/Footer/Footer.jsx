import React from 'react';
import FooterContainer from './FooterStyles';

const Footer = () => {
    return (
        <FooterContainer className="center">
            <div className="footer-text">
                <h4>theRealMrGabi &copy;</h4>
            </div>

            <div className="social-links">
                <a href="https://www.github.com/theRealMrGabi" target="_blank" className="links" rel="noopener noreferrer">
                    <i className="fab fa-github fa-3x"></i>
                </a>
                <a href="https://linkedin.com/in/ibrahimadegabi" target="_blank" className="links" rel="noopener noreferrer">
                    <i className="fab fa-linkedin fa-3x"></i>
                </a>
                <a href="https://https://twitter.com/therealmrgabi" target="_blank" className="links" rel="noopener noreferrer"> 
                    <i className="fab fa-twitter fa-3x"></i> 
                </a>
            </div>
        </FooterContainer>
    )
}

export default Footer ;