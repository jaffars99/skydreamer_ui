import Swal from 'sweetalert2'
var interval ;
function navigate (id) {
    interval = setInterval(scrollVertical,30,id)
}
function scrollVertical (id){
  
    var targetSectionCordinate = document.getElementById(id).getBoundingClientRect()
    if (targetSectionCordinate.top <= 50){
        clearInterval(interval);
        return
    }
    window.scrollBy(0,50)
 }

 function sendData() {
    let data = []
    const InputNumber = document.getElementById('text-number')
      if (InputNumber.value === "" && InputNumber.value.length < 10 ){
        alert("Enter Valid Number")
        return
      }
     const AllInput = document.querySelectorAll('.main input')  
     for (let Input of AllInput){
      data.push(Input.value)
     }
     const myvalue = {
       "name":data[0],
       "websiteUrl":data[1],
       "phone":data[2],
       "bussinesOperatingSince":data[3],
       "email":data[4],
       "bussinessGoal":data[5],
       "brandName":data[6],
       "howDidHear":data[7],
       "monthlyAdvertisngBudget":data[8],
       "anythingElse":data[9],
     }
    const myReq = JSON.stringify( {
      "subject": "SKYDREAMERS",
        "data": myvalue
    })
       console.log(myvalue)
     AllInput.forEach(input => input.value = "")
    const requestOption = {
      method: "POST",
      headers : {
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
      },
      body:myReq,
   }
      fetch('https://lead-management-api.1click.tech/leads',requestOption)
      .then((res) => {res.json()
       console.log(res)
       Swal.fire(
        'Deatils Submitted',
        'We will get touch with you soon',
        'success'
      )
     })
   }

 export {navigate,sendData}