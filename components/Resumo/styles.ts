import styled from 'styled-components';

export const Container = styled.div`

    p { 
        color: ${({theme}) => theme.secondary};
        font-weight: 300;
        font-size: 1.5rem;        
        text-indent: 4rem;
        line-height: 1.5;
        position: relative;
        top: 1.5rem;
    }
`;
