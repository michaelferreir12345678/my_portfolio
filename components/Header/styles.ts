import { lighten } from "polished";
import styled from "styled-components";

interface NavLinkProps {
    isActive: boolean;
}



export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    border-bottom: 1px solid ${({theme}) => theme.backgroundLight};

    ul{
        display: flex;
        gap: 2rem;
        align-items: center;
    } 

    > img {
        width: 8rem;
        // display: flex;
        aligh-items: center;
        // position: relative;
        // left: -35rem;
    }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
    a {
        text-transform: uppercase;
        color: ${props => 
            props.isActive ? props.theme.primary : props.theme.textHighlight};
        transition: 0.5s;

        &:hover {
            color: ${props => 
            props.isActive ? lighten(0.2, props.theme.primary):
            lighten(0.2, props.theme.textHighlight)};
        }
    }

`;