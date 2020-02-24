const btn = document.querySelector('button');

const validateForm = ()=>{

   const userName = document.querySelector('.uname');
   const nameValue = userName.value;

   const userPass = document.querySelector('.pass');
   const passValue = userPass.value;
  
   if(nameValue === "" ){
        const errDiv = document.querySelector('#firstInput');
        errDiv.setAttribute('style', 'padding: 0px; border: 1px solid red');
    
    const nameErr = document.createElement('p');
          nameErr.textContent = " Please, enter your username";
          nameErr.setAttribute('style', 'color: red; font-size: 12px; padding-left: 6em');
          
    errDiv.append(nameErr);
   }
   else if(passValue === ""){
    const errDiv2 = document.querySelector('#secondInput');
    errDiv2.setAttribute('style', 'padding: 0px; border: 1px solid red');

const nameErr2 = document.createElement('p');
      nameErr2.textContent = " Please, enter your password";
      nameErr2.setAttribute('style', 'color: red; font-size: 12px; padding-left: 6em');
      
errDiv2.append(nameErr2);
}
  
}
btn.addEventListener('click', validateForm);

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

