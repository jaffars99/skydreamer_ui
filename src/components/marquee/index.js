import React from "react"
import click from '../../images/Asset 12@3x.png'
import jwmarriot from '../../images/qzwxecrvtbynumasdafghjvkesfrdfgh-01.png'
import looksalon from '../../images/Big_Logo.svg'
import dubaioptics from '../../images/dubai.png'
import appolo from '../../images/Apollo-Tyre-Logo-PNG-HD-New 1.png'
import hellopolicy from '../../images/hello-policy-logo.png'
import AZURE  from '../../images/image 82.png'
import BIGcharter from '../../images/image 104.99c2cdf6.png'
import syska from '../../images/syska 1.png'
import unh from '../../images/image_105-removebg-preview.png'
import Marquee from "react-fast-marquee"
import "./style.css"
function Marqueee() {
    return (
        <div className="card1" >   
        <Marquee  direction="right" pauseOnHover="true" speed={80.45}>
            <img src={click} className="marqueeimg2" alt="ZeeBusiness"/>
            <img src={jwmarriot} className="marqueeimg1" alt="NewsTrack"/>
                
            <img src={looksalon} className="marqueeimg3" alt="BWBusinessWorld"/>
        
            <img src={appolo} className="marqueeimg1" alt="Digpu"/>
        
            <img src={hellopolicy} className="marqueeimg5" alt="CFO"/>
        
            <img src={dubaioptics} className="marqueeimg4" alt="HindustanTimes"/>
        
            <img src={syska} className="marqueeimg6" alt="IndiaPress"/>

            <img src={AZURE} className="marqueeimg6" alt="Midday"/>

            <img src={unh} className="marqueeimg6" alt="AniNEws"/>

            <img src={BIGcharter} className="marqueeimg6" alt="tribuneindia"/>

        </Marquee>
        </div>
    )
}

export default Marqueee