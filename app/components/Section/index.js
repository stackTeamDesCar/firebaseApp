import React from 'react';
import PropTypes from 'prop-types';
import { SectionWrapper } from './styled';


function Section({ display, direction, align, justify, width, height, background,hover, children }) {

    return <SectionWrapper
        display={display}
        direction={direction}
        justify={justify}
        align={align}
        width={width}
        height={height}
        background={background}
        hover={hover}
    >{children}</SectionWrapper>;
}

Section.propTypes = {
};

export default Section;
