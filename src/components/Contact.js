import React from 'react'
import Navbar from './Navbar';
import './../App.css';
import { FaRegCopy } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const mail = "nareshkumarnandam2002@gmail.com";
  return (
    <div className='contactDIv'>
        <Navbar />
        <div className='contactSection'>
          <div className='emailCard'>
            <h1>Email:</h1>
            <div className='mailId'>
              <p>{mail}</p>
              <button alt="copy" onClick={() => {
            navigator.clipboard.writeText(mail);
            // console.log(navigator);
        }}>
                <FaRegCopy />
              </button>
            </div>
          </div>
          <div className='socialCard'>
            <h1>Social:</h1>
            <div className='socialContactCard'>
              <a href="https://github.com/nareshkumarnandam"><FaGithub /></a>
              <a href='https://www.linkedin.com/in/naresh-kumar-nandam-5828ab274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact