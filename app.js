        import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js';
        import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js';
        import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js';
        import { getFirestore, doc, setDoc } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';
        import { getStorage, ref, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-storage.js';

        const firebaseConfig = {
          apiKey: "AIzaSyCK9tcze0I01uSWeNayqUmdY490MiFEVmw",
          authDomain: "pos-system-c06a5.firebaseapp.com",
          projectId: "pos-system-c06a5",
          storageBucket: "pos-system-c06a5.appspot.com",
          messagingSenderId: "509587287340",
          appId: "1:509587287340:web:85353adb426ae469701089",
          measurementId: "G-RD556ECTDR"
      };
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      const db = getFirestore(app);
      const storage = getStorage(app);


// hide all the tab contexts
document.getElementById('customerContext').style.display='block';
document.getElementById('ordersContext').style.display='none';
document.getElementById('productsContext').style.display='none';
document.getElementById('loginWrapper').style.display='none';
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

const register=()=>{
  document.getElementById('successRegisterAlert').style.display='none';
  document.getElementById('errorRegisterAlert').style.display='none';

  let email = document.getElementById('registerUsername').value;
  let password = document.getElementById('registerPassword').value;

  if(!email && !password){ // regex, info@abc.com, abc@gmail.com, /, %, $
    alert('please provide the email and usename');
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredentials)=>{
    console.log(userCredentials);
    document.getElementById('successRegisterAlert').innerText='success!, please close the dialog and log in';
    document.getElementById('successRegisterAlert').style.display='block';
  }).catch((error)=>{
    document.getElementById('errorRegisterAlert').innerText=error.message;
    document.getElementById('errorRegisterAlert').style.display='block';
    console.log(error.message);
  })
}

const login=()=>{
 
  let email = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  if(!email && !password){ // regex, info@abc.com, abc@gmail.com, /, %, $
    alert('please provide the email and usename');
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredentials)=>{
    let user =userCredentials.user;
      console.log(userCredentials);
      document.cookie=`authToken=${user.accessToken}; path=/; max-age=3600`;
      alert('Welcome..'); 
      document.getElementById('loginWrapper').style.display='none';
  }).catch((error)=>{
    alert(error.message); 
  })
}

function getCookie(name){
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if(parts.length===2) return parts.pop().split(';').shift();
  return null;
}

const authToken = getCookie('authToken');
if(authToken){
  document.getElementById('loginWrapper').style.display='none';
}else{
  document.getElementById('loginWrapper').style.display='block';
}


window.register = register;
window.login = login;

//============Register with email & password