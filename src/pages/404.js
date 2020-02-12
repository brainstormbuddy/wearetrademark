import React from 'react'
import Layout from '../components/Layout'

import '../components/all.sass'
import '../global-styles'

const NotFoundPage = () => (
  <Layout>
    <div>
    	<section className="section">
        	<div className="container">
				<article class="message is-medium">
				  <div class="message-header">
				    <p>NOT FOUND</p>
				  </div>
				  <div class="message-body">
				    You just hit a route that doesn&#39;t exist... the sadness.
				  </div>
				</article>
			</div>
		</section>
    </div>
  </Layout>
)

export default NotFoundPage
