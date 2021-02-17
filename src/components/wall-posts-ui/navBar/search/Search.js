import React from 'react'
import './search.scss'

const Search = () => {
	return (
		<form className="form-nav-search">
				<i className='bx bx-search i-form-Search'></i>
				<input type="text" placeholder="Search..." />
		</form>
	)
}

export default Search
