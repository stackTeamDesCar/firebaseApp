import styled from 'styled-components';

export const TextWrapper = styled.p`
    color:${({ color }) => color ? color : '#000000'};
    font-size:${({ color }) => color ? `${size}em` : '#000000'};
    font-weight:${({ bold }) => bold ? 'bold' : ''};
    
`;