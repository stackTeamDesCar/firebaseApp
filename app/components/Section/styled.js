import styled from 'styled-components';

export const SectionWrapper = styled.div`
    width:${({ width }) => width ? `${width}%` : 'auto'};
    height:${({ height }) => height ? `calc(${height}vh - 8vh)` : '100%'};
    display:${({ display }) => display ? display : 'block'};
    flex-direction: ${({ direction }) => direction ? direction : 'row'};
    justify-content: ${({ justify }) => justify ? justify : 'left'};
    align-items:${({ align }) => align ? align : 'left'};
    background-color: ${({ background }) => background ? background : 'none'};
    &:hover{
        // background-color: ${({ background, hover }) => hover ? `darken(${background})` : 'none'};
        opacity:.7;
    }
    
`;

export const BoxWrapper = styled.div`
    cursor: pointer; 
    display: flex; 
    justify-content: center; 
    align-items: center;
    flex-direction: column;
`;