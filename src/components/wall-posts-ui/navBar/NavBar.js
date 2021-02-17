import React from 'react'
import './navBar.scss'
import Search from './search/Search'

const NavBar = () => {
	return (
		<header>
				 <Search />
			<i className='bx bxs-heart'></i>
			<i className='bx bxs-bell'></i>
			<i className='bx bxs-message-square-dots'></i>
			<i className='bx bxs-down-arrow'></i>
		</header>
	)
}

export default NavBar
