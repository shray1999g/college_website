import React from 'react'
import linkedinIco from "../Images/ContactImg/linkedin.png"
import emailIco from "../Images/ContactImg/email.png"
import phoneIco from "../Images/ContactImg/phone.png"
import "../StyleSheets/Contact.css"
import "../Global.css"

export default function Contact() {
  return (
    <div className="ContactUs">
        <div className="heading-container" >
            <h1>Contact Us</h1>
            <div className="heading-border"></div>
        </div>
        <div className="ContactsContainer">
            <div className="ContactLinksContainer">
                <div>
                    <a href="tel:" target="blank" rel="noreferrer">
                        <img src={phoneIco} alt="linkedin" />
                    </a>
                    <a href="mailto:director@krishnacollege.ac.in" target="blank" rel="noreferrer">
                        <img src={emailIco} alt="linkedin" />
                    </a>
                    <a href="https://in.linkedin.com/school/krishna-enginering-college-ghaziabad/" target="blank" rel="noreferrer">
                        <img src={linkedinIco} alt="linkedin" />
                    </a>
                </div>
                <div className="MessageFormContainer">
                    <h1 id="SendMessage">
                        Got an enquiry or question? Write to Us.
                    </h1>
                    <form className="MessageForm">
                        <input type="text" placeholder="Your Name" required/>
                        <textarea type="text" placeholder="Brief Your Query" rows={10} required/>
                        <input type="submit" value="Send Message" />
                    </form>
                </div>
            </div>
        </div>
    </div>
);
}