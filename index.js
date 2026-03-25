// 
// 
// 

function contact(event) { 
    event.preventDefault();
    emailjs
    .sendform( 
      'service_ue28jl5', 
      'template_s3chdi9',
      event.target
      'XunHngXOPqECUnHvJ'
    ).then(() => { 
     console.log('this worked1')   
    })
}