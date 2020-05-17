import styled from 'styled-components';

export const Wrapper = styled.div`
    transform: translateX(0);
    animation: fadeIn .2s ease-in;

    @keyframes fadeIn{
        from{
            transform: translateX(100%);
        }
    }
`;