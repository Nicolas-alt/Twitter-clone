import React from 'react'
import Search from './search/Search'
import { ReactComponent as Logo } from '../../../assets/Svg/logo.svg'
import './navBar.scss'


const NavBar = () => {
	return (
		<header>
			<Logo style={{ width: 60, height: 60, cursor: 'pointer' }} />
			<Search />
			<div className="div-options-header">
				<img className="img-header" src="https://randomuser.me/api/portraits/thumb/men/1.jpg" alt="asdf" />
				<p className="p-header-name">Federico</p>
				<i className='bx bxs-heart'></i>
				<i className='bx bxs-bell'></i>
				<i className='bx bxs-message-square-dots'></i>
				<i className='bx bxs-down-arrow'></i>
			</div>
		</header>
	)
}

export default NavBar
