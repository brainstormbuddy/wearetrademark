import React from 'react'

import AllCases from './AllCases'

import ModalVideo from './XModalVideo'

import WorkStyle from './Wrapper'

const WorkPage = () => {
	return (
		<WorkStyle className="is-fullheight">
			<div className="container is-fluid">
				<div className="columns hero-body" style={{padding: `3rem 0`}}>
					<div className="column hero">
						<div className="hero-body filter-box has-text-centered">
							<a href="#">Filter</a>
						</div>
					</div>
					<div className="column is-three-quarters-desktop is-full-mobile is-full-tablet hero latest-reel">
						<div className="columns hero-body is-vcentered">
							<div className="column is-half-desktop is-full-mobile is-half-tablet">
								<h2 className="has-text-centered">Our latest reel</h2>
							</div>
							<div className="column is-one-quarter-desktop is-full-mobile is-half-tablet"><ModalVideo /></div>
						</div>
					</div>
				</div>
			</div>
			<div className="container is-fluid">
				<AllCases />
			</div>
			
		</WorkStyle>
	)
}

export default WorkPage