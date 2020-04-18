import styled from 'styled-components';

const TabbedContainer = styled.div `
    margin: 0 !important;
    padding: 0 !important;

    .custom-container{
        .tabs-content{
        height: 162vh !important;
        }
    }

 @media (min-width:320px ) and (max-width: 480px){
   .custom-container{
        .tabs-content{
            height: 5200px !important;
        }
    }
 }

 ${'' /* @media (min-width:481px ) and (max-width:768px ){
    .row{
        
    }
 }

 @media (min-width:769px ) and (max-width:1024px ){
    .row{
        
    }
 } */}
`;

export default TabbedContainer ;

// color: rgba(238, 110, 115, 0.7);