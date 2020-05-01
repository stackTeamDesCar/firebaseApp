import React from 'react';
import PropTypes from 'prop-types';
import { TextWrapper } from './styled';


function Text({ color, size, bold, children }) {

    return <TextWrapper
        color={color}
        size={size}
        bold={bold}
        color={color}
    >{children}</TextWrapper>;
}

Text.propTypes = {
};

export default Text;
