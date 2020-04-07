import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle `

    :root{
        --background: rgb(63, 46, 86);
        ${'' /* --blueShade: rgb(0 , 121, 145); */}
        --blueShade: rgba(0 , 121, 145 , 0.5);
        --white: rgb(242,228,232);
        --ShadeWhite: rgb(95,90,162);
        --ShinyBlue: rgb(87,184,255);
    }

    body{
        background: var(--background);
        color: var(--white);
    }
`;

export default GlobalStyles ;