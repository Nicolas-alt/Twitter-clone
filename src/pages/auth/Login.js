import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
	return (
		<section>
			<div></div>
			<form>
				<input />
				<input />
				<button>Login</button>
				<Link to="/auth/recover">Forgot password?</Link>
			</form>
		</section>
	)
}

export default Login
