import React from 'react'
import './style.css'
import Banner from './Group 360323.png'
import To from './To.png'
export default function TextFilling() {
  return (

    <div className='parent_banner'>
    <div className='bannerClass'>
    <img src={Banner} alt='Banner'/>
    <img  className='to' src={To} alt='To' />
    </div>
    </div>
  )
}
