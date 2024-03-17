import profilepic from './profilepic.jpg';
import React, {useEffect, useState} from 'react';
import './SideBar.css';
import { FaPager } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { MdMan } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SideBar = () => {
    const [binaryNumber, setBinaryNumber] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [age, setAge] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
        setAge(prevCount => {
        if (prevCount === 22) {
          clearInterval(intervalId);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 100); // set interval time to 100ms to make it count faster

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    let timer;

    const generateBinaryNumber = () => {
      const randomBinaryNumber = Math.floor(Math.random() * 1024).toString(2);
      setBinaryNumber(randomBinaryNumber);
    };

    timer = setInterval(generateBinaryNumber, 100); // generate binary number every 100ms

    const timeout = setTimeout(() => {
      clearInterval(timer);
      setDisplayText('Hello world !!!');
    }, 2000); // stop generating binary numbers and display text after 2000ms (2 seconds)

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div className='sideBar'>
        <div className='personalInfo'>
            <div className='profilepicDiv'>
                <img className='profilePic' src={profilepic} />
            </div>
            <p className='name'>Naresh Kumar Nandam</p>
            <div className='helloWorldText'>
                {displayText ? (
                        <p>{displayText}</p>
                    ) : (
                        <p>
                        {binaryNumber}
                        </p>
                    )}
            </div>
        </div>
        <hr />
        <div className='locationDetails'>
            <div className='age'>
                <div className='ageIcon'>
                <FaPager />
                </div>
                <div className='ageText'>
                    <p className='heading'>AGE</p>
                    <p className='details'>{age}</p>
                </div>
            </div>
            <div className='location'>
                <div className='locationIcon'>
                    <FaLocationCrosshairs />
                </div>
                <div className='locationText'>
                    <p className='heading'>LOCATION</p>
                    <p className='details'>Hyderabad, Telangana, India</p>
                </div>
            </div>
            <div className='personality'>
                <div className='personalityIcon'>
                    <MdMan />
                </div>
                <div className='personalityText'>
                    <p className='heading'>PERSONALITY</p>
                    <p className='details'>INTJ-T</p>
                </div>
            </div>

        </div>
        <div className='socials'>
            <a href="https://github.com/nareshkumarnandam"><FaGithub /></a>
            <a href='https://www.linkedin.com/in/naresh-kumar-nandam-5828ab274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'><FaLinkedinIn /></a>
            <a href='/'><FaInstagram /></a>
        </div>
    </div>
  )
}

export default SideBar