import React from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'

import FullscreenIcon from './fullscreen.svg'
import '../modal-video.sass'


class MyModalVideo extends React.Component {
 
  constructor () {
    super()
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
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
        <div className="watch-video has-text-left-fullhd has-text-left-widescreen has-text-left-desktop has-text-left-tablet has-text-centered-mobile">
			<a onClick={this.openModal}>Watch Video <img src={FullscreenIcon} 
				alt="FullscreenIcon" width="20" height="20" style={{verticalAlign: `middle`, marginLeft: `15px`}}/></a>
		</div>
      </div>
    )
  }
}

export default MyModalVideo