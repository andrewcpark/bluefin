import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai';


import './Hero.css';


const hero = () => {
  return (
    <div className='hero'>
        <div className='content'>
            <h1> Find homes first.</h1>
            <h1> Tour homes fast.</h1>
            <form className='search'>
                    <input type='text' placeholder='City, Address, School, Agent, ZIP' />
                    <button type='submit'><AiOutlineSearch className='icon'/></button>
            </form>
        </div>
    </div>
  )
}

export default hero