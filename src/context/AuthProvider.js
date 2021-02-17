import React, { createContext, useEffect, useState } from 'react'
import { getUsers } from '../helpers/getUsers'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

	const [user, setuser] = useState([])
	useEffect(() => {
		getUsers().then(setuser);
	}, [])

	return (
		<AuthContext.Provider value={{
			user
		}}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
