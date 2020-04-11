import styled from 'styled-components';

const TabbedContainer = styled.div `
    ${'' /* border: 2px solid yellow; */}
    margin: 0 !important;
    padding: 0 !important;

    .custom-container{
        .tabs-content{
        ${'' /* height: 180vh !important; */}
        height: 162vh !important;
        ${'' /* border: 2px solid blue; */}
        }
    }

 @media (min-width:320px ) and (max-width: 480px){
   .custom-container{
        .tabs-content{
            ${'' /* height: 6000px !important; */}
            height: 5800px !important;
            ${'' /* border: 2px solid blue; */}
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