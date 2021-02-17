import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../../../context/AuthProvider'
import './post.scss'

const Post = () => {

	// const { user } = useContext(AuthContext)

	// const { results } = user;
	// const { name: { first, last}, picture: { thumbnail }} = results[0]

	return (
		<article className="article-post">
			<div className="div-imgUser-article">
				<img src="https://randomuser.me/api/portraits/thumb/men/1.jpg" alt="asdf" />
				<div className="div-detailsUser">
					<h3>Federico xd</h3>
					<p>Juy 234 1234 </p>
				</div>
				<i className='bx bx-dots-vertical-rounded'></i>
			</div>
			<p>
				loremasdfsadfsadf sadf
				sa
				dfsadfsafsadf
				sadfsadf
				saf
			</p>
			<div className="div-postContent">
				<img className="img-postContent"
						 src="https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg"
						 alt="sadf" />
				<div>
					<i className='bx bx-comment'></i>
					<i className='bx bx-link-alt'></i>
					<i className='bx bxs-heart'></i>
				</div>
			</div>
		</article>
	)
}

export default Post
