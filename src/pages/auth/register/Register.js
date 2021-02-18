import React, { useState } from 'react'
import Buttons from './buttons/Buttons'
import { ReactComponent as Logo } from './logos/login.svg'
import './register.scss'
import Step1 from './step1/Step1'
import Step2 from './step2/Step2'
import Step3 from './step3/Step3'

const Register = () => {
	const [step, setStep] = useState(1)

	const handleNextStep = () => {
		setStep(step + 1)
	}

	const handleBackStep = () =>{
		setStep(step - 1)
	}

	return (
		<section className="section-register">
			<div className="div-register-logo">
				<Logo style={{ width: '80%' }} className="logo" />
			</div>
			<form className="form-register">
				<h2>Welcome!</h2>
				{step === 1 && <p>Please, enter your data for register.</p>}
				{step === 2 && <p>Enter asdlfj</p>}
				{step === 3 && <p>Hola mundo</p>}
				<h3>Step {step} of 3</h3>
				<div className="div-form-inputs">
					{step === 1 && <Step1 />}
					{step === 2 && <Step2 />}
					{step === 3 && <Step3 />}
					<Buttons
						step={step}
						handleNextStep={handleNextStep}
						handleBackStep={handleBackStep}
						/>
				</div>
			</form>
		</section>
	)
}

export default Register
