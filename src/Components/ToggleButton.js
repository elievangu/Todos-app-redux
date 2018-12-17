//npm import
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import PropTypes from 'prop-types'

//local import

library.add(faCheck);

const ToggleButton = ({ handleToggle }) => {
  return (
    <td className='icon'><button onClick={handleToggle}><FontAwesomeIcon icon='check' size='3x' /></button></td>
  )
}

ToggleButton.propTypes = {
  handleToggle: PropTypes.func.isRequired
};

export default ToggleButton;