import styled from 'styled-components';

const HeaderContainer = styled.div`

    position: relative;
    color: var(--white);

    .swiper-container{
        
        .swiper-wrapper{
            .swiper-slide{
            ${'' /* cursor: pointer; */}

                img{
                    width: 100% !important;
                    height: 90vh !important;
                    display: flex;
                }

                .navbar-brand{
                    position: absolute;
                    top: 0.5rem;
                    margin: 1rem 5rem;
                    color: rgba(255,255,255 , 0.9);

                    .preview{
                        font-weight: bold;
                        ${'' /* color: var(--white); */}
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

${'' /* .Hero {
    position: relative;

    .swiper-container{
        z-index: 0;
        .swiper-wrapper {
            .swiper-slide {
                cursor: pointer;
                // position: absolute;
                img {
                    height: 80vh;
                    width: 100%;
                }
                .carousel-caption {
                    z-index: 3;
                    text-align: left;
                    margin-bottom: 1.5em;
                    // margin-left: -9%;
                    position: absolute;
                    // top: 85%;
                    left: 16.4%;
                    // transform: translate(-45%, -20%);
                    // width: 20em;
                    // height: 4em;
                    // background: $blue;
                    font-family: $primary-font;
                    // font-size: 5em;
                    text-shadow: 3px 3px $blue;
                    font-weight: bold;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: $white;
                }
            }
        }
    }
}

@media (min-width: 300px) and (max-width:750px) {
    .Hero {
        .swiper-container {
            .swiper-wrapper {
                .swiper-slide {
                    img {
                        height: 30vh;
                        width: 100%;
                    }
                    .carousel-caption {
                        position: absolute;
                        left: 8%;
                        font-size: 2em;
                    }
                }
            }
        }
    }
}

@media (min-width: 750px) and (max-width:1100px) {
    .Hero {
        position: relative;
        .swiper-container {
            .swiper-wrapper {
                .swiper-slide {
                    img {
                        height: 50vh;
                        width: 100%;
                    }
                    .carousel-caption {
                        position: absolute;
                        left: 6%;
                        font-size: 3em;
                    }
                }
            }
        }
    }
} */}
`;

export default HeaderContainer;