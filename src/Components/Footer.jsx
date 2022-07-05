import React from 'react'
import '../StyleSheets/Footer.css'
import '../Global.css'
import contactInfo from "../Data/Contact.json"
import kecLogo from '../Images/Core/kecLogoTransparent.png'
import emailIcon from '../Images/Core/email.png'
import linkedinIcon from '../Images/Core/linkedin.png'
import messageIcon from '../Images/Core/message.png'
import { Link } from 'react-router-dom'

export default function Footer() {

  //start of contact info code
  const contactElement = []
  for (let contactType in contactInfo) {
    let contactList = []
    for (let person of contactInfo[contactType]) {
      contactList.push(
        <a key={person.name} className='ContactLink' href={'tel:' + person.phone} target='_blank' rel="noreferrer" > {person.name} <br />{person.phone} </a>
      )
    }
    contactElement.push(
      <div key={contactType}>
        <div className="RowHead">{contactType}</div>
        {contactList}
      </div>
    )
  }
  //end of contact info code

  return (
    <div className='Footer'>
      <div className="FooterBody">
        <div className="FooterCol">
          <div className="AlignCenter marginPaddingNone"><img className='FooterLogo' src={kecLogo} alt="KEC Logo" /></div>
          <div className="ColHead AlignCenter marginPaddingNone">Krishna Engineering College</div>
          <div className="RowHead AlignCenter marginPaddingNone">Affiliated Through AKTU</div>
          <a className='ContactLink AlignCenter' href="https://www.krishnacollege.ac.in/" target='_blank' rel='noreferrer' >www.krishnacollege.ac.in</a>
        </div>
        <div className="FooterCol">
          <div className="ColHead">Social</div>
          <div className="ColBody">
            <a className='ContactLink animateHover' href="mailto:director@krishnacollege.ac.in" target='_blank' rel='norefrref' >
              <span><img className='RowIcon' src={emailIcon} alt="Email Icon" /></span>
              <span>director@krishnacollege.ac.in</span>
            </a>
            <a className='ContactLink animateHover' href="https://in.linkedin.com/school/krishna-enginering-college-ghaziabad/" target='_blank' rel='norefrref' >
              <span><img className='RowIcon' src={linkedinIcon} alt="LinkedIn Icon" /></span>
              <span>LinkedIn</span>
            </a>
            <Link className='ContactLink animateHover' to='/contact#SendMessage'>
              <span>
                <img className="RowIcon" src={messageIcon} alt="Message Icon" />
              </span>
              <span>Send a Message</span>
            </Link>
          </div>
          <div className="ColHead">Quick Links</div>
          <Link className='ContactLink animateHover' to='/placement' rel="noreferrer">Placement</Link>
          {/* <Link className='ContactLink animateHover' to='/professors' rel="noreferrer">Professors</Link> */}
          <Link className='ContactLink animateHover' to='/alumni' rel="noreferrer">Alumni</Link>
          <Link className='ContactLink animateHover' to='/departments' rel="noreferrer">Departments of KEC</Link>
        </div>
        <div className='FooterCol'>
          <div className="ColHead">Contact</div>
          <div className="ColBody">{contactElement}</div>
        </div>
        <div className='FooterCol'>
          <div className="ColHead">Reach Us</div>
          <div className="ColBody">
            <div className="RowHead">Map</div>
            <div className="RowContent">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d7000.375708189914!2d77.3762902!3d28.6840267!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390cee217dde4bd1%3A0x6df4a357ba3129f4!2sKrishna%20Engineering%20College%2095%2C%20Loni%20Road%2C%20Between%20Mohannagar%20%26%20Hindon%20Air%20Force%20Station%20Ghaziabad%2C%20Uttar%20Pradesh%20201007!3m2!1d28.6840267!2d77.3762902!5e0!3m2!1sen!2sin!4v1654797938114!5m2!1sen!2sin"
                width="300"
                height="150"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className="RowHead">Address</div>
            <div className="RowContent">
              Krishna Engineering College <br /> 95, Loni Road, Between Mohan Nagar <br /> & Air Force Station-Hindon, <br /> Ghaziabad, UP 201007
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
