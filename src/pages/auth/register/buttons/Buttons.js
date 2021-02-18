import React from 'react'
import './buttons.scss'
import PropTypes from 'prop-types'

const Buttons = ({ step, handleNextStep, handleBackStep  }) => {
	return (
		<div className="div-buttons-register">
			{
				step < 3 ? (
					<>
						<span onClick={handleBackStep}>Back</span>
						<span onClick={handleNextStep}>Next</span>
					</>
				) : <button>Register!</button>
			}

		</div>
	)
}

Buttons.propTypes = {
	step: PropTypes.number.isRequired,
}

export default Buttons
