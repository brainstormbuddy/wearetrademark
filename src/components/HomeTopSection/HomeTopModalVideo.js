import React from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'

import FullscreenIcon from './fullscreen.svg'
import '../modal-video.sass'


class HomeTopModalVideo extends React.Component {
 
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }
 
  openModal () {
    this.setState({isOpen: true})
  }
 
  render () {
    return (
      <div>
        <ModalVideo 
        	channel={this.props.source}
        	vimeo={{
				byline: false,
				autoplay: true,
				autopause: true,
				title: false
			}}
			isOpen={this.state.isOpen} 
			videoId={this.props.videoid} 
			onClose={() => this.setState({isOpen: false})} 
        />
	        <div className="columns is-mobile is-centered">
				<div className="column is-half-desktop is-full-mobile is-full-tablet">
			        <div className="watch-video has-text-centered">
						<a onClick={this.openModal}>Watch Video <img src={FullscreenIcon} 
							alt="FullscreenIcon" width="20" height="20" style={{verticalAlign: `middle`, marginLeft: `15px`}}/></a>
							
					</div>
				</div>
			</div>
      </div>
    )
  }
}

export default HomeTopModalVideo