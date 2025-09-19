import React from 'react'
import './Footer.css' // Assuming you have a CSS file for styling
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <div id="Footer">
        <div className='footer1'>
          <div className='social'>
            <a href="https://www.linkedin.com"><FaLinkedin className='icons linkedin' /></a>
            <a href="https://www.instagram.com"><FaGithub className='icons instagram' /></a>
            <a href="https://x.com"><FaTwitter className='icons twitter' /></a>
            <a href="https://www.facebook.com"><FaFacebook className='icons facebook' /></a>
          </div>
          <div className='sections'>
          <div className='sec1'>
            <h2>Home</h2>
            <p>lorem epsum</p>
            </div>
            <div className='sec1'>
            <h2>About</h2>
            <p className="matter" >"Our tool analyzes customer feedback using AI to reveal sentiment and key insights. It helps businesses improve by understanding customer emotions and trends."</p>
            </div>
            <div className='sec1'>
            <h2>contact us</h2>
            <p className="matter" >Questions or feedback? We'd love to hear from you.
              Reach out to us at <b>support@customersentimentanalysistool.com
                Phone: (000) 123-4567</b> </p></div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default Footer