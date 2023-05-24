import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Chip = ({ title, fontSize, fontWeight, padding,bottom }) => {
  const chipStyle = {
    fontSize: fontSize,
    fontWeight: fontWeight,
    padding: padding,
    bottom: bottom
  };

  return (
    <div className={styles.chip} style={chipStyle}>
      {title}
    </div>
  );
};

Chip.propTypes = {
  title: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.number,
  padding: PropTypes.string,
  bottom: PropTypes.number,
  left: PropTypes.string
};

Chip.defaultProps = {
  fontSize: '18px',
  fontWeight: 700,
  padding: '12px 24px',
  bottom: 20,
  left: '50%'
};

export default Chip;