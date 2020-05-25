import React from 'react';
import PropTypes from 'prop-types';
import { SectionWrapper, BoxWrapper } from './styled';


function Section({ display, direction, align, justify, width, height, background, hover, children, onClick }) {

    return <SectionWrapper
        display={display}
        direction={direction}
        justify={justify}
        align={align}
        width={width}
        height={height}
        background={background}
        hover={hover}
    ><BoxWrapper onClick={onClick}>{children}</BoxWrapper></SectionWrapper>;
}

Section.propTypes = {
};

export default Section;
