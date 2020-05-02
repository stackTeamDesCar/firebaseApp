import styled from 'styled-components';

export const TextWrapper = styled.p`
    color:${({ color }) => color ? color : '#000000'};
    font-size:${({ size }) => size ? `${size}em` : '#000000'};
    font-weight:${({ bold }) => bold ? 'bold' : ''};
    letter-spacing:${({ letterSpacing }) => letterSpacing ? '2px' : ''};
    
`;