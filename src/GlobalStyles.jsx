import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle `

    :root{
        --background: rgb(63, 46, 86);
        ${'' /* --blueShade: rgb(0 , 121, 145); */}
        --blueShade: rgba(0 , 121, 145 , 0.5);
        --white: rgb(242,228,232);
        --ShadeWhite: rgb(95,90,162);
        --ShinyBlue: rgb(87,184,255);

        --mainPink: rgb(255,0,128);
        --pinkHover: rgb(186,44,115);
        --text: rgb(25,29,50);
        --blueHover: rgb(95,75,182);

    }

    body{
        ${'' /* background: var(--background); */}
        color: var(--text);
        margin: 0 !important;
        padding: 0 !important;
    }
`;

export default GlobalStyles ;