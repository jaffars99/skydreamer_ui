import React, { useEffect } from 'react'

export default function FrontPage() {
   
  
    useEffect(()=>{
        let title =  document.getElementById('heading');
        const page = document.getElementById('page')
      let name1 = "WELCOME TO THE CLUB"
      let index = 1;
        function typeWriter () {
            let new_title = name1.slice(0, index);
            title.innerText = new_title;
            if(index > name1.length){
              page.style.opacity = "0";
              document.body.style.overflow = "visible";
              document.getElementById('frnt').style.display = "none"
              setInterval(() => {
                document.getElementById('bird3').style.display = "none"
                page.style.display = "none"
              }, 1500);
             
            }
            else{
              index++;
              document.body.style.overflow = "hidden";
            }
            setTimeout(() => typeWriter(),100)
        }
        typeWriter()
    })
  return (
    <div className='front-parent' id='frnt'>
     <svg id="bird3" width="200" height="200" fill="#FFE489" viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.3695 9.82656C29.2519 9.77606 29.1371 9.7261 29.0252 9.67739C28.8574 9.60434 28.696 9.53411 28.5413 9.4691C28.1038 9.28527 27.703 9.13574 27.2944 9.04722L27.2942 9.04719C26.6109 8.89874 26.109 9.3558 25.6724 10.0522L25.6722 10.0524C25.4142 10.463 25.2064 10.7886 25.0229 11.0133C24.8461 11.2297 24.6435 11.4153 24.3814 11.4356C24.1186 11.4559 23.8912 11.3027 23.6859 11.1164C23.473 10.923 23.222 10.6342 22.9101 10.2712L22.91 10.2712C20.5795 7.55656 17.707 5.47464 14.8029 3.38623C13.7886 2.65682 12.7557 1.95412 11.7032 1.27915C11.7306 1.30753 11.7579 1.33592 11.7853 1.3643C12.9138 2.53575 14.0479 3.71292 15.1107 4.94755L15.1107 4.94757C16.406 6.45259 17.6318 8.03818 18.7279 9.69896L18.728 9.69908C20.169 11.8853 20.2107 14.2392 18.9929 16.5609L18.9928 16.561C17.6208 19.1751 15.4824 21.0761 13.2417 22.8149C10.7773 24.7279 8.15592 26.3804 5.46094 27.9027C6.40758 27.4227 7.35584 26.9473 8.30357 26.4722C11.2185 25.0108 14.1286 23.5518 16.9718 21.9704C18.6959 21.011 20.2973 19.8279 21.9092 18.637C22.2723 18.3687 22.6359 18.1001 23.0016 17.8335C24.9868 16.3863 26.4531 14.5219 27.3509 12.1927L27.351 12.1925C27.685 11.3287 27.9392 10.7946 28.331 10.4221C28.6053 10.1615 28.9361 9.99066 29.3695 9.82656Z" stroke="#FFE489" stroke-width="0.5"/>
            </svg>
    <div className="front_page" id="page">
        <div className="main_heading" id='heading'>
        </div>

    </div>
    </div>
  )
}
