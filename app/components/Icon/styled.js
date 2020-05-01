import styled from 'styled-components';

export const IconWrapper = styled.div`
    &:hover{
        transform: rotate(0deg);
        animation:rotate .2s linear infinite;
    }
    @keyframes rotate {
        from {        
            transform: rotate(-10deg);
        }
        to {
            transform: rotate(10deg);
            
        }
      }
`;

export const StyledImg = styled.img`
    width:${({ size }) => size ? `${size}em` : '2em'};
    height:${({ size }) => size ? `${size}em` : '2em'};

`;