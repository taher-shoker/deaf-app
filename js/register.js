var  nameInput = document.getElementById('name'),
     phoneInput = document.getElementById('phone'),
     companyName = document.getElementById('company-name');


/******************* function to insert inputs value to local storage***************************/
var user=[]
function register() {
   var name =nameInput.value,
       phone=phoneInput.value,
       company=companyName.value;
user.push(name,phone,company);

localStorage.setItem('user',JSON.stringify(user))
    
  window.location.replace('login.html')
}

$('#register').on('click',function(e){
    register()
    e.preventDefault()
 
  
})
