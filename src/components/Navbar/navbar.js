import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/pratibha.jpeg';
import burgermenu from '../../assets/burgerMenu.jpg'
import contactImage from '../../assets/contact.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
        <img src={logo} alt='Logo' className='logo' />
        <div className='portfolioMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='portfolioMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={500} className='portfolioMenuListItem'>Skills</Link>
            <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-70} duration={500} className='portfolioMenuListItem'>Experience</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-60} duration={500} className='portfolioMenuListItem'>Projects</Link>
       
        </div>
        <button className='portfolioMenuBtn' onClick={() => {
            document.getElementById('contact').scrollIntoView({behaviour: 'smooth'});
        }}>
            <img src={contactImage} alt='' className='contactMeImage' />Contact Me
        </button>

        <img src={burgermenu} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
        <div className='navMenu' style={{display: showMenu? 'flex' : 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Skills</Link>
            <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-70} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Experience</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-70} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Projects</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-70} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact Me</Link>
        </div>
    </nav>
  )
}

export default Navbar