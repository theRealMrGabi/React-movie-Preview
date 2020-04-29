import styled from 'styled-components';
import { maxMediaQueries } from '../../GlobalStyles';

const DetailsContainer = styled.div`
   
    .poster-image{
        img{
            width: 100% !important;
        }
    }

    .movie-details{
        display: flex;
        margin: 3rem 0;
        padding: 3rem 0;
        width: 100% !important;
        height: 100% !important;

        .preview-image{
            width: 30% !important;
            margin: 0;
            padding: 0 2rem;

            img{
                width: 100%;
            }
        }

        .other-details{
            width: 70% !important;
            margin: 0 1rem;

            .movie-summary{
                margin: 1rem;
            }

            .runtime{
                display: grid;
                gap: 2rem;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                padding: 3rem 2rem;

                .runtime-cover{
                    position: relative;

                    .runtime-details{
                        position: absolute;
                        top: 3rem;
                        left: 5rem;
                        font-size: 1.2rem;
                    }
                }

            }
    }}

    .trailer{
        margin: 2rem 3rem !important;

        .trailer-text{
            font-weight: bold;
        }
    }

    .cast-container{
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 0rem 0rem 2.5rem;
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

        .cast{
            height: 17rem;
            width: 12rem;

            .image > img{
                height: 12rem;
                width: 12rem;
            }

            .cast-name{
                height: 2rem;
            }
        }
    }

    ${maxMediaQueries("mobileLarge")`

        .movie-details{

            .other-details{
                width: 90% !important;
            }
        }

        .cast-container{
            gap: 1rem;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            margin: 0 !important;
            padding: 0 !important;
        }
    `}
`;

export default DetailsContainer ;