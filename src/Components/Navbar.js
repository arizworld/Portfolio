import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const Navbar = () => {
    const [isClicked,setIsClicked] = useState(false)
    return (
        <>
        <nav className={isClicked? 'navbar t-black' : 'navbar'}>
            <div className="brand-title">
                <h3>ArizWorld</h3>
            </div>
            <div className={isClicked? 'bg-nav clicked' : 'bg-nav'}>
            </div>
            <div onClick={()=>setIsClicked(!isClicked)} className="ham-burger">
                <span className={isClicked? 'bar top-bar b-black' : 'bar'}></span>
                <span className={isClicked? 'bar middle-bar b-black' : 'bar'}></span>
                <span className={isClicked? 'bar bottom-bar b-black' : 'bar'}></span>
            </div>
            <div className={isClicked?'nav-links active':'nav-links'}>
                <ul className='links'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
            </div>
        </nav>
        </>    
    )
}

export default Navbar
