import React from 'react';
import { Wrapper } from './styled';

const FadeIn = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

export default FadeIn;