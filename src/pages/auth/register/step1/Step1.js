import React from 'react'

const Step1 = ({ form, handleInputChange}) => {
	return (
		<>
			<input type="text" name="firstName" value={form.firstName} onChange={handleInputChange} placeholder="First name" />
			<input type="text" name="lastName" value={form.lastName} onChange={handleInputChange} placeholder="Last Name" />
			<input type="email" name="email" value={form.email} onChange={handleInputChange}  placeholder="Email" />
		</>
	)
}

export default Step1
