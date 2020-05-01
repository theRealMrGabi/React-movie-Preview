import styled from 'styled-components';

const HeaderContainer = styled.div`

    position: relative;
    color: var(--white);

    .swiper-container{
        
        .swiper-wrapper{
            .swiper-slide{

                img{
                    width: 100% !important;
                    display: flex;
                }

                .navbar-brand{
                    position: absolute;
                    top: 0.5rem;
                    margin: 1rem 5rem;
                    color: rgba(255,255,255 , 0.9);

                    .preview{
                        font-weight: bold;
                        color: var(--mainPink);
                        font-size: 2rem;
                    }
                }

                .movie-title{
                    position: absolute;
                    bottom: 7rem;
                    margin: 1rem 5rem;

                }
                .carousel-caption{
                    position: absolute;
                    bottom: 0.5rem;
                    margin: 1rem 5rem;
                    display: flex;
                }
                .rating{
                    position: absolute;
                    right: 1rem;
                    bottom: 0.5rem;
                    margin: 1rem 3rem;

                }

            }
        }
        .swiper-button-next{
            color: var(--mainPink)
        }
        .swiper-button-prev{
            color: var(--mainPink)
        }
    }
`;

export default HeaderContainer ;