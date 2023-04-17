import React from 'react'

export default function Contact() {

  function ValidateNumber(event){
    const phoneNumber = document.getElementById('text-number')
    const number = event.target.value.replace(/\D/g, '')
    console.log(number)
     phoneNumber.value = number
   }
  return (
    <div className="contact" id="contact">
   <div className="head">
   <h1>Contact Us</h1>
   </div>
   <form className="main">
   <input type="text"  placeholder="NAME"/>
   <input type="text" placeholder="WEBSITE URL"/>
   <input type="text"  id="text-number" onKeyUp={(event)=>{ValidateNumber(event)}} maxlength="13" minlength="10" placeholder="PHONE" required />
   <input type="text"  placeholder="BUSINESS OPERATING SINCE"/>
   <input type="email" placeholder="EMAIL"/>
   <input type="text" placeholder="BUSINESS GOALS"/>
   <input type="text" placeholder="BRAND NAME" />
   <input type="text"  placeholder="HOW DID YOU HEAR ABOUT US ?" />
   <input type="text" placeholder="MONTHLY ADVERTISING BUDGET" />
   <input type="text"   placeholder="ANYTHING ELSE WE SHOULD KNOW ?" />
   </form>
   <div className="parent-box">
    <div className="box"></div>
   <span className="line3"></span>
   </div>
</div>

  )
}
