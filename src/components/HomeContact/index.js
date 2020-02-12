import React, { Component } from 'react'

import Call from './CallUs'
import Dropzone from './Dropzone'

import ContactForm from './Style'

class Form extends Component {

  render() {
    return (
        <ContactForm>
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
            <div className="control">
                <input className="input" type="text" placeholder="First and Last name" name="name" required="required" />
            </div>
        </div>
        {/* Email field */}
        <div className="field">
            <div className="control">
                <input className="input" type="email" placeholder="email" name="email" required="required" />
            </div>
        </div>
        {/* Company field */}
        <div className="field">
            <div className="control">
                <input className="input" type="text" placeholder="Company" name="company" required="required" />
            </div>
        </div>
        
        <div className="columns" style={{paddingTop: `1rem`}}>
	        <div className="column">
		        {/* Message textarea */}
		        <div className="field">
		            <div className="control">
		        <textarea className="textarea" placeholder="Type your message here..." name="message" required="required"></textarea>
		            </div>
		        </div>
			</div>
	        <div className="column">
		        <Dropzone />
			</div>
		
		</div>
        
        {/* Submit button */}
        <div className="field">
            <div className="control has-text-centered" style={{paddingTop: `1rem`}}>
                <button type="submit" className="contact-btn button is-medium">Submit</button>
                <Call />
            </div>
        </div>
      </form>
      </ContactForm>
    );
  }
}

export default Form;
