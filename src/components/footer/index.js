import React from 'react'
import Marqueee from '../marquee'
import { sendData } from '../service'
import { useNavigate } from 'react-router-dom'
export default function Footer() {

  const navigate = useNavigate()
  return (
    <div className="footer">
    
    <span className="btn-top">
        <button type="submit" onClick={()=>{sendData()}}>SUBMIT</button>
     </span>
    <h1 style={{fontWeight:"bolder"}}>Our Clients</h1>
    <Marqueee/>
     <span className="line"></span>
    <div className="blog-banner">
        <h2>Sky Dreamers Club, Bombay, INDIA</h2>
        <span className="btn-top2">
            <button>BLOG</button>
         </span>
    </div>
    <span className="line1"></span>
    <p>"Not the Final Website"</p>
    <span className="line1"></span>
    <button style={{width:"200px"}} onClick={()=>{navigate('privacyPolicy')
        window.location.reload();
  }}>Privacy Policy</button>
    <span className="line2"></span>
      
</div>
  )
}
