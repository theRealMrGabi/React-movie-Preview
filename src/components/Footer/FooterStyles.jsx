import styled from 'styled-components';

const FooterContainer = styled.div`
    background: var(--text);
    color: var(--white);
    position: relative;
    height: 10rem;

    .footer-text{
        font-weight: bold;
        font-size: 1rem;
        color: var(--mainPink);
        position: absolute;
        top: 5%;
        right: 50%;
    }

    .social-links{
        position: absolute;
        top: 50%;
        left: 30%;
        color: var(--white);
        padding: 1rem 5rem;

        a{
            color: var(--white);
            padding: 0 3rem;
        }

        }
    }
`;

export default FooterContainer;