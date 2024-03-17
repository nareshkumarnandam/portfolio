import React, { useState } from 'react';
import './../App.css';
import Navbar from './Navbar';
import { TbWorldSearch } from "react-icons/tb";
import { CiMobile3 } from "react-icons/ci";
import { AiOutlineSolution } from "react-icons/ai";

const AboutMe = () => {

   const [extendedText , setExtendedText] = useState('none');
   const [btnValue , setBtnValue] = useState('↓  Show More  ↓');
    
    function clickHandler(){
        if(extendedText != 'none') {
            setExtendedText('none');
            setBtnValue('↓  ShowMore  ↓');
            return;
        }
        setExtendedText('block');
        setBtnValue('↑   Hide Text  ↑ ');
    }
  return (
    
    <div className='aboutSection'>
        <Navbar />
        <div className='aboutDiv'>
            <div className='intro'>
                <h1>
                Hello there! 👋 My name is Naresh Kumar Nandam and I'm from Hyderabad, Telangana, India. As a Full-Stack software developer, I specialize in creating visually appealing websites, apps and mobile games. My passion for graphic design isn't just a hobby, it's a key ingredient in every project I work on.
                <br />
                <div style={{display: extendedText}}>
                    <h1>
                    Growing up bilingual, I developed a love for languages and I currently speak four of them fluently. I believe that this skill has given me a unique perspective and allows me to communicate effectively with clients from all over the world. One of my strengths is adding a personal touch to my projects by adding the client's identity and message into the design, creating meaningful and beautiful end products that are both eye-catching and user-friendly.
                    </h1>
                    <h1>
                    In my free time, I enjoy exploring my other passions, such as photography and music production, which provide me with creative outlets. I am also very passionate about Web3 and everything related to crypto, NFTs and blockchain technology as I believe they have the potential to revolutionize business and online interactions.
                    </h1>
                    <h1>
                    If you have an innovative idea for a project that needs to be developed, I would love to hear from you. Your vision can be turned into a real product. Don't hesitate to reach out and let's start a conversation about your concept. I'm excited to collaborate and help bring your ideas to life.
                    </h1>
                </div>
                <div className='showmoreBtn'>
                    <button onClick={() => clickHandler()}>{btnValue}</button>
                </div>
                </h1>
        
            </div>
            <h1 className='primaryFocus'>
                Primary Focus
            </h1>
            <div className='primaryFocusDiv'>
                <div>
                    <div className='focusicon'>
                        <TbWorldSearch />
                    </div>
                    <div className='primaryFocusDetails'>
                        <h1>Web Design & Development</h1>
                        <p>Creating attractive, easy-to-use websites that work well for businesses and individuals online.</p>
                    </div>
                </div>

                <div>
                    <div className='focusicon'>
                        <CiMobile3 />
                    </div>
                    <div className='primaryFocusDetails'>
                        <h1>Mobile Apps & Games</h1>
                        <p>Creating and developing engaging mobile apps and games for iOS and Android devices.</p>
                        
                    </div>
                </div>

                <div>
                    <div className='focusicon'>
                        <AiOutlineSolution />
                    </div>
                    <div className='primaryFocusDetails'>
                        <h1>Development Solutions</h1>
                        <p>Utilizing JavaScript frameworks like React, Node, Next, Vue and more to build interactive web applications.</p>
                    </div>
                </div>
                    
            </div>
            <h1 className='primaryFocus'>
                Languages
            </h1>
            <div className='languagesDiv'>
                <div className='codingLangs'>
                    <h1>Coding Languages</h1>
                    <ul>
                        <li>JavaScript</li>
                        <li>HTML/CSS</li>
                        <li>React</li>
                        <li>Java</li>
                        <li>Tailwind</li>
                    </ul>
                </div>
                <div className='speakingLangs'>
                    <h1>Human Languages</h1>
                    <ul>
                        <li>English</li>
                        <li>Hindi</li>
                        <li>Telugu</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AboutMe