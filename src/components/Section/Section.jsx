import React from 'react';
import cn from 'classnames';

import PropTypes from 'prop-types';

import { StyledSection } from './Styled';

function Section({ title, img, position = null, children }) {
  return (
    <StyledSection>
      <h2
        className={cn('section-title', {
          'section--right': position !== null,
        })}
      >
        {img && <img src={img} alt={title} />}
        {title}
      </h2>
      <div className="section-content">{children}</div>
    </StyledSection>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
