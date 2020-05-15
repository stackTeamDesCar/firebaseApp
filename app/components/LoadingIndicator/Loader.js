import React from 'react';
import styled, { keyframes } from 'styled-components';

import svg from '../../assets/svg/loading.svg';

const rotateLoading = keyframes`    
    from{
        transform: rotate(0deg);
    }
`;

const Loader = (props) => {
    const LoadingImg = styled.img`
        transform: rotate(360deg);
        animation: ${rotateLoading} 1.6s infinite linear;
    }
    `;
    return <LoadingImg width="50" src={svg} />;
};

export default Loader;
