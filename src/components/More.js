import React from 'react'
import Navbar from './Navbar';
import './../App.css';
import loremIpsum from './loremIpsum.png';
import passwordGenerator from './passwordGenerator.png';

const More = () => {
  return (
    <div>
        <Navbar />
        <div className='projectSection'>
            <div className='projectCard'>
                <a href='https://lorem-ipsum-generator-black.vercel.app/'>
                    <div className='project'>
                        <img src={loremIpsum} className='projectImage' />
                        <p>Random Text Generator</p>
                        <p>React JS | CSS</p>
                        <a className='live' href='https://lorem-ipsum-generator-black.vercel.app/'>Go live</a>
                        <a className='repo' href='https://github.com/nareshkumarnandam/lorem-ipsum-generator.git'>Git repo</a>
                    </div>
                </a>
            </div>
            <div className='projectCard'>
                <a href='https://password-generator-rouge-nine.vercel.app/'>
                    <div className='project'>
                        <img src={passwordGenerator} className='projectImage' />
                        <p>Password Generator</p>
                        <p>React JS | CSS</p>
                        <a className='live' href='https://password-generator-rouge-nine.vercel.app/'>Go live</a>
                        <a className='repo' href='https://github.com/nareshkumarnandam/password-generator.git'>Git repo</a>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default More