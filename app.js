
// hide all the tab contexts
document.getElementById('customerContext').style.display='block';
document.getElementById('ordersContext').style.display='none';
document.getElementById('productsContext').style.display='none';

//========== manage tabs===============

document.getElementById('customerTab').addEventListener('click',function(event){
  event.preventDefault();
  document.getElementById('customerContext').style.display='block';
  document.getElementById('ordersContext').style.display='none';
  document.getElementById('productsContext').style.display='none';

  this.classList.add('active');
  document.getElementById('productsTab').classList.remove('active');
  document.getElementById('ordersTab').classList.remove('active');
});

document.getElementById('productsTab').addEventListener('click',function(event){
  event.preventDefault();
  document.getElementById('customerContext').style.display='none';
  document.getElementById('ordersContext').style.display='none';
  document.getElementById('productsContext').style.display='block';

  this.classList.add('active');
  document.getElementById('customerTab').classList.remove('active');
  document.getElementById('ordersTab').classList.remove('active');
});

document.getElementById('ordersTab').addEventListener('click',function(event){
  event.preventDefault();
  document.getElementById('customerContext').style.display='none';
  document.getElementById('ordersContext').style.display='block';
  document.getElementById('productsContext').style.display='none';

  this.classList.add('active');
  document.getElementById('productsTab').classList.remove('active');
  document.getElementById('productsTab').classList.remove('active');
});
//============Register with email & password
document.getElementById('signupButton').addEventListener('click', function(event){
  document.getElementById('successRegisterAlert').style.display='none';
  document.getElementById('errorRegisterAlert').style.display='none';
});

function register(){
  let email = document.getElementById('registerUsername').value;
  let password = document.getElementById('registerPassword').value;

  if(!email && !password){ // regex, info@abc.com, abc@gmail.com, /, %, $
    alert('please provide the email and usename');
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
  .then((userCredentials)=>{
    console.log(userCredentials);
  }).catch((error)=>{
    console.log(error);
  })
}

//============Register with email & password