import styled from 'styled-components';

export const Wrapper = styled.div`
    width: ${({ size }) => size ? `${size}px` : '50px'} ;
    height: ${({ size }) => size ? `${size}px` : '50px'} ;
    border-radius: 50%;
    border: ${({ borderSize, borderColor }) => borderSize ? `${borderSize}px solid ${borderColor}` : 'none'} ;
    background: url(${({ url }) => url ? url : 'https://cdn3.iconfinder.com/data/icons/infy-avatar/512/1-512.png'});
    background-position: center center;
    background-size:cover;
`;