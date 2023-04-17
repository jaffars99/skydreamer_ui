import React from 'react'
import Logo from '../../images/updatedLogo.png'
import TopButton from '../../images/TopButton.png'
import Services from '../service_section'
import MoneyBack from '../../images/Group 360366.png'
import Contact from '../contact_form'
import Footer from '../footer'
import { navigate } from '../service'
export default function LandingPage() {

 function inVisible(){
  if(window.scrollY >= 174){
     document.getElementById('scr').style.display = "none"
  }
  else{
    document.getElementById('scr').style.display = "block"
  }
}
window.addEventListener('scroll',inVisible)

  //  const[show,setshow] = useState(false)
    // useEffect(()=>{
    //     setTimeout(()=> setshow(true),1000)
    // })
  return (
   
        <>
        <section> 
        <div className="top-button" onClick={()=>{navigate('contact')}}>
            <img  src={TopButton} alt="buton"/>
         </div>
            <img className="logo" src={Logo}  alt="logo"/>
            <div className="scroll" id="scr" onClick={()=>{navigate('service')}}></div>
    </section>
  <Services/>
  <img className="miidle_img" src={MoneyBack} alt='moneyBack'/>
<Contact/>
<Footer/>
  </>
  
   
  )
}
