import React from 'react';
import FooterContainer from './FooterStyles';

const Footer = () => {
    return (
        <FooterContainer>
            <div className="footer-text">
                <h4>theRealMrGabi &copy;</h4>
            </div>

            <div className="social-links">
                <a href="https://www.linkedin.com/in/ibrahimadegabi/" rel="nofollow norefferer noopener" className="links">
                    <i className="fab fa-github fa-3x"></i>
                </a>
                <a href="https://https://twitter.com/therealmrgabi" rel="nofollow norefferer noopener" className="links">
                    <i className="fab fa-twitter fa-3x"></i>
                </a>
            </div>
            {/* <div>
                credit: <a href="https://themoviedb.org" rel="nofollow norefferer noopener">theMovieDb</a>
            </div> */}
        </FooterContainer>
    )
}

export default Footer ;