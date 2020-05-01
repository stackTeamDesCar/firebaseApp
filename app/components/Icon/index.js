import React from 'react';
import PropTypes from 'prop-types';
import { IconWrapper, StyledImg } from './styled';


function Icon({ hover, size, icon, onClick }) {

    return <IconWrapper hover={hover} onClick={onClick}>
        <StyledImg size={size} src={icon}></StyledImg>
    </IconWrapper>
}

Icon.propTypes = {
};

export default Icon;
