import React from 'react'
import { Link } from 'react-router-dom'
import './login.scss'

const Login = () => {
	return (
		<section className="section-login">
			<div className="section-div">
				<h2>Join an Exciting Dev Social Experience.</h2>
			</div>
			<form>
				<h2>Login</h2>
				<div>
					<i className='bx bxs-user'></i>
					<input type="text" placeholder="Email or username" />
				</div>
				<div>
					<i className='bx bxs-lock'></i>
					<input type="password" placeholder="Password" autoComplete="on" />
				</div>
				<button>Login</button>
				<Link to="/auth/recover">Forgot password?</Link>
			</form>
		</section>
	)
}

export default Login
