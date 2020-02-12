import React, { Component } from 'react'


class ProjectContact extends Component {

  render() {
    return (
        <div>
        <form 
            name="contact" 
            method="POST" 
            data-netlify-honeypot="bot-field" 
            data-netlify="true"
        >
        {/* Netlify hidden field */}
        <input name="form-name" type="hidden" value="contact"/>
        <p hidden><label>Don’t fill this out: <input name="bot-field"/></label></p>    
        {/* Name field */}
        <div className="field">
            <label className="label">Full Name</label>
            <div className="control">
                <input className="input is-medium" 
                	type="text" 
					name="fullname" 
					required="required" />
            </div>
        </div>
        {/* Email field */}
        <div className="field">
            <label className="label">Email Address</label>
            <div className="control">
                <input className="input is-medium" 
                	type="email" 
					name="emailaddress" 
					required="required" />
            </div>
        </div>
        {/* Organisation Name field */}
        <div className="field">
            <label className="label">Organisation Name</label>
            <div className="control">
                <input className="input is-medium" 
                	type="text" 
					name="organisationname" />
            </div>
        </div>
        {/* Message textarea */}
        <div className="field">
            <label className="label">Project Information</label>
            <div className="control">
			<textarea className="textarea is-medium" 
				name="projectmessage" 
				placeholder="Please help us learn more about your project, we will get back to you with the information." 
				required="required">
			</textarea>
            </div>
        </div>
        {/* Submit button */}
        <div className="field">
            <div className="control">
                <button type="submit" className="button is-link is-large">Get In Touch</button>
            </div>
        </div>
      </form>
      </div>
    );
  }
}

export default ProjectContact;
