import styled from 'styled-components';

const FeaturedMovieContainer = styled.div `
  .row{
     border: 2px solid black;
     width: 100 %

     .col{
         border: 2px solid yellow;
         ${ '' /* max-width: 40%; */ }
         width: 25 %;
         margin: 3px;
         display: flex;
        
         .card{
             border: 2px solid red;
             width: 50 %;
             height: 30 %;
             margin: 0 5px;

             .card-image{
                 img{
                     width: 50%;
                 }
             }
         }
     }
 }
`;

export default FeaturedMovieContainer ;

//  .row{
//     border: 2px solid black;
//     width: 100 %

//     .col{
//         border: 2px solid yellow;
//         ${ '' /* max-width: 40%; */ }
//         width: 25 %;
//         margin: 3px;
//         display: flex;
        
//         .card{
//             border: 2px solid red;
//             width: 50 %;
//             height: 30 %;
//             margin: 0 5px;
//         }
//     }
// }