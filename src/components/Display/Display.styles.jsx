import styled from 'styled-components';

const DisplayContainer = styled.div`
  .row{
     width: 100 %

     .col{
        width: 25 %;
        margin: 3px;
        display: flex;
        
         .card{
             width: 40% !important;
             height: 50 % !important;
             margin: 0 5px;

             .card-image{
                 img{
                    width: 100% !important;
                 }
             }
             .card-action{
                 height: 2rem;
             }
         }
     }
 }

 ${'' /* @media (min-width:320px ) and (max-width: 480px){
    .row{

    }
 } 

 @media (min-width:481px ) and (max-width:768px ){
    .row{
        
    }
 }

 @media (min-width:769px ) and (max-width:1024px ){
    .row{
        
    }
 } */}
`;

export default DisplayContainer ;