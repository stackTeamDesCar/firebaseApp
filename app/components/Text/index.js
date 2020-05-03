import React from 'react';
import PropTypes from 'prop-types';
import { TextWrapper } from './styled';



function Text({ color, size, letterSpacing, bold, children }) {

    return <TextWrapper
        color={color}
        size={size}
        bold={bold}
        color={color}
        letterSpacing={letterSpacing}
    >{children}</TextWrapper>;
}

Text.propTypes = {
    letterSpacing: PropTypes.bool,
};

export default Text;
