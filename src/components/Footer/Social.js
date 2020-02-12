import React from 'react'
import userConfig from '../../../config'

import linkedin from '../../img/linkedin.svg'
import twitter from '../../img/twitter.svg'
import facebook from '../../img/facebook.svg'
import instagram from '../../img/instagram.svg'

const Social = () =>{
	return (
		<ul className="social has-text-right">
	        <li><a href={userConfig.social.linkedin} target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="X Trademark linkedin logo" /></a></li>
			<li><a href={userConfig.social.twitter} target="_blank" rel="noopener noreferrer"><img src={twitter} alt="X Trademark twitter logo" /></a></li>
			<li><a href={userConfig.social.facebook} target="_blank" rel="noopener noreferrer"><img src={facebook} alt="X Trademark facebook logo" /></a></li>
			<li><a href={userConfig.social.instagram} target="_blank" rel="noopener noreferrer"><img src={instagram} alt="X Trademark instagram logo" /></a></li>
	    </ul>
	)
}

export default Social