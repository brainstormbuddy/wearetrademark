import React from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'

import FullscreenIcon from './img/fullscreen.svg'
import '../modal-video.sass'

class CaseStudyModal extends React.Component {

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
        <ModalVideo channel='vimeo' isOpen={this.state.isOpen} videoId={this.props.idVideo} onClose={() => this.setState({isOpen: false})} />
        <div className="case-meta">
  			<a onClick={this.openModal} className="play-video">Play video <img src={FullscreenIcon} alt="FullscreenIcon" width="20" height="20" style={{verticalAlign: `middle`, marginLeft: `10px`}}/></a><br />
  			<a href={this.props.caseURL}>Case study</a>
  		</div>
      </div>
    )
  }
}

export default CaseStudyModal