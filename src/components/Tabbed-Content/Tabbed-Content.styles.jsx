import styled from 'styled-components';
import {  mediaQueries } from '../../GlobalStyles';

const TabbedContainer = styled.div `
    border: 2px solid blue;

    ${mediaQueries("mobileSmall")`
        .tabs-content,.carousel,.carousel-slider{
            height: 4120px;
        }

     `}

    ${mediaQueries("mobileMedium")`
        .tabs-content,.carousel,.carousel-slider{
            height: 4800px;
        }

     `}

    ${mediaQueries("mobileLarge")`
        .tabs-content,.carousel,.carousel-slider{
            height: 5400px;
        }
     `}

    ${mediaQueries("tablet")`
        .tabs-content,.carousel,.carousel-slider{
            height: 2470px;
        }
     `}

    ${mediaQueries("laptop")`
        .tabs-content,.carousel,.carousel-slider{
            height: 850px;
        }
     `}
    
    ${mediaQueries("laptopLarge")`
        .tabs-content,.carousel,.carousel-slider{
            height: 1150px;
        }
     `}

    ${mediaQueries("MacLaptop")`
        .tabs-content,.carousel,.carousel-slider{
            height: 2000px;
        }
     `}

`;

export default TabbedContainer ;