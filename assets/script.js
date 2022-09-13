// const contactForm = document.querySelector('.contact-form');
    
// let email = document.getElementById('email');
    
// let password =document.getElementById("password");
    
// let rec =document.getElementById("rec");
   
// let subject =document.getElementById("subject");
    
// let mail =document.getElementById("mail")
 
// contactForm.addEventListener('submit',(e)=>{
//     e.preventDefault();

//     let details ={
//         email: email.value,
//         password:password.value,
//         rec:rec.value,
//         subject:subject.value,
//         mail:mail.value
//     }
//     console.log(details)
//     let xhr = new XMLHttpRequest();
//     xhr.open('POST', '/');
//     xhr.setRequestHeader('content-type', 'aplication/json');
//     xhr.onload =function(){
//         console.log(xhr.responseText);
//     if(xhr.responseText == 'success'){
//         alert('Email sent');
//          email.value='';
//         password.value ='';
//         rec.value= '';
//         subject.value='';
//         mail.value='';
//     }else{
//         alert('Email not sent, something went wrong')
//      }
//     }
//     xhr.send(JSON.stringify(details))
// })