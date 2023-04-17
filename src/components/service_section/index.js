import React from 'react'
import Line1 from '../../images/Vector 235.png'
import service from '../../images/awer.png'
export default function Services() {
  return (
    <div className="service-section" id="service">
    <div className="service-head">
        {/* <p className="ser">OUR</p>
        <p>SERVICES</p> */}
        <img className='img1' src={service} alt='service'/>
        <img className='img2' src={Line1} alt='Serviuce_line'/>
    </div>
 
 <span>Performance Marketing</span>
 <span>3D Artistry</span>
 <span>Search Engine Optimisation SEO</span>
 <span>Content Writing</span>
 <span>Social Media Management</span>
 <span>Influencer Marketing</span>
 <span>Marketing Automation</span>
 <span>Content Creation</span>
 <span>Branding</span>
 <span>App Development</span>
 <span>Web Design and Development Ui Ux</span>
</div>
  )
}
