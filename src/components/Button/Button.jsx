import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    cursor: pointer;
    margin: 0.2rem 0.8rem;
    padding: 0.3rem 0.2rem;
    height: 3rem;
    width: auto;
    transition: all 0.5s ease-in-out;
    
    &:focus{
        outline: none;
    }

    ${ props => {
        if(props.color){
            return `
            color: var(--white);
            background: var(--mainPink);
            border: none;

            :hover{
                color: var(--white);
                background: var(--pinkHover);
                border: none;

            } `
        } else {
            return `
                color: var(--white);
                background: transparent;
                border: 1px solid white;

                :hover{
                    color: var(--text);
                    background: var(--white);
                    border: 1px solid white;
                }`
        }
    }}
`;