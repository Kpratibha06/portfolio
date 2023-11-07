import React from 'react';
import './skills.css';
import webDevelopment from '../../assets/webDevelopment.png';
import programmingLanguages from '../../assets/programmingLanguages.png';
import otherTech from '../../assets/otherTech.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>Technical Skills</span>
        <span className='skillDesc'>What All I know</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={webDevelopment} alt='webDevelopment' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Web Development</h2>
                    <p>React, JavaScript, Redux, Tailwind, HTML, CSS, TypeScript</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={programmingLanguages} alt='programmingLanguages' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Programming Languages</h2>
                    <p>JavaScript, C, C++, Python</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={otherTech} alt='otherTech' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Others</h2>
                    <p>Data Structure & Algorithm, Machine Learning, OOPs, DBMS, Unreal Engine5</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills