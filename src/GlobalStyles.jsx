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
        background: var(--white);
        color: var(--text);
        margin: 0 !important;
        padding: 0 !important;
        position: relative;
        box-sizing: border-box;
    }

    .transform{
        font-weight: bold;
        font-size: 1.5rem;
    }

    hr{
        margin: 0 5rem;
        border: 3px solid var(--mainPink);
        border-radius: 2px;
    }
    .spinner{
        position: absolute;
        left: 50%;
        right: 10rem;
    }

    .error{
        color: var(--text);
        background: var(--mainPink);
    }

`;

    export const breakPoints = {
        mobileSmall: 320,
        mobileMedium: 375,
        mobileLarge: 425,
        tablet: 768,
        laptop: 1024,
        laptopLarge: 1440,
        MacLaptop: 2560
    }

    export const mediaQueries = key => {
        return style => `@media(min-width: ${breakPoints[key]}px ){${style}}`
    }

    export const maxMediaQueries = key => {
        return style => `@media(max-width: ${breakPoints[key]}px ){${style}}`
    }

export default GlobalStyles ;