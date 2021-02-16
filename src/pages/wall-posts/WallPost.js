import React from 'react'
import NavBar from '../../components/wall-posts-ui/navBar/NavBar'
import Aside from '../../components/wall-posts-ui/aside/Aside'
import './WallPost.scss'
import Options from '../../components/wall-posts-ui/options-panel-wall/Options'
import PostWrapper from '../../components/wall-posts-ui/post-wrapper/PostWrapper'

const WallPost = () => {
	return (
		<section className="section-wallPost">
			<NavBar />
			<div className="div-wrapper">
				<Aside />
				<PostWrapper />
				<Options />
			</div>
		</section>
	)
}

export default WallPost
