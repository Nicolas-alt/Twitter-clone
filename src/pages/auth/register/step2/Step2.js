import React from 'react'

const Step2 = ({ form, handleInputChange }) => {
	return (
		<>
			<input type="text" name="userName" value={form.userName} onChange={handleInputChange} placeholder="User name..." />
			<input type="password" name="password" value={form.password} onChange={handleInputChange} placeholder="Password" />
			<input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleInputChange} placeholder="Confirm Password" />
		</>
	)
}

export default Step2
