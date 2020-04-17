import styled from 'styled-components';

const DetailsContainer = styled.div`

    .poster-image{
        img{
            width: 100% !important;
        }
    }

    .movie-details{
        display: flex;
        margin: 3rem 0;
        width: 100% !important;
        padding: 0 3rem;

        .preview-image{
            width: 40% !important;

            img{
                width: 100% !important;
            }
        }

        .other-details{
            width: 60% !important;
            margin: 0 10rem;

            .runtime{

            }

            .movie-genre{
                display: flex;
            }
    }}

    .trailer{
        margin: 0 5rem !important;
        ${'' /* padding: 0 2rem 2rem 2rem; */}
        padding: 0 5rem !important;

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
`;

export default DetailsContainer ;