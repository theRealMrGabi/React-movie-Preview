import styled from 'styled-components';
import { mediaQueries } from '../../GlobalStyles';

const FooterContainer = styled.div`
    background: var(--text);
    color: var(--white);
    position: relative;
    height: auto;
    padding: 1.5rem;

    .footer-text{
        font-weight: bold;
        font-size: 1rem;
        color: var(--mainPink);
    }

    .social-links{
        color: var(--white);
        padding: 1rem;

        a{
            color: var(--white);
            padding: 2rem;
        }
    }

    ${mediaQueries("mobileSmall")`
        .social-links{
            padding: 0.5rem;
        }
    `}

`;

export default FooterContainer ;