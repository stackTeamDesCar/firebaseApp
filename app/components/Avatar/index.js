import React from 'react';
import { Wrapper } from './styled';

const Avatar = (props) => {

    const {
        size,
        borderSize,
        borderColor,
        url
    } = props;

    return (
        <Wrapper
            size={size}
            borderSize={borderSize}
            borderColor={borderColor}
            url={url}
        >
        </Wrapper>
    );
}

export default Avatar;