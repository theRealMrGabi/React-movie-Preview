import styled from 'styled-components';
import { maxMediaQueries } from '../../GlobalStyles';

const NavWrapper = styled.div `

    position: relative;

    nav{
        background: var(--text);

        .brand-logo{
            color: rgba(255,255,255 , 0.9);
            margin: 0 2rem;
                
                .preview{
                    font-weight: bold;
                    color: var(--mainPink);
                }
        }
    }

    .sidenav{
        padding: 2.5rem 0;
        background: var(--text);
        color: white;

        .close-menu{
            position: absolute;
            cursor: pointer;
            top: 2rem;
            right: 1rem;
        }
    }

    ${maxMediaQueries("tablet")`
        nav{

            .brand-logo{
                font-size: 1.3rem;
                margin: 0 !important;
            }
        }

        #mobile-demo{
            color: white;
        }

        .text-link{
            color: white;
            font-size: 1.1rem;
            font-weight: bold;
        }
    `};

`;

export default NavWrapper ;