import styled from 'styled-components';

const DisplayContainer = styled.div`
  .row{
     width: 100 %

     .col{
        width: 25 %;
        margin: 3px;
        display: flex;
        
         .card{
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
`;

export default DisplayContainer ;