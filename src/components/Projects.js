import React from 'react'
import Navbar from './Navbar';
import pokemonProject from './pokemonProject.png';
import emiCalculator from './emiCalculator.png';

const Projects = () => {
  return (
    <div>
        <Navbar />
        <div className='projectSection'>
            <div className='projectCard'>
                <a href='https://pokemon-project-orpin.vercel.app/'>
                    <div className='project'>
                        <img src={pokemonProject} className='projectImage' />
                        <p>Pokemon Finder</p>
                        <p>JavaScript | CSS</p>
                        <a className='live' href='https://pokemon-project-orpin.vercel.app/'>Go live</a>
                        <a className='repo' href='https://github.com/nareshkumarnandam/pokemon_project.git'>Git repo</a>
                    </div>
                </a>
            </div>
            <div className='projectCard'>
                <a href='https://emi-calculator-app-two.vercel.app/'>
                    <div className='project'>
                        <img src={emiCalculator} className='projectImage' />
                        <p>EMI calculator</p>
                        <p>React JS | CSS</p>
                        <a className='live' href='https://emi-calculator-app-two.vercel.app/'>Go live</a>
                        <a className='repo' href='https://github.com/nareshkumarnandam/emi-calculator-app.git'>Git repo</a>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Projects