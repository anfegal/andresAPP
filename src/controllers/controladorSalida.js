import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  import { getAuth, signOut, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js'


  const firebaseConfig = {
    apiKey: "AIzaSyCTug9D0XSxgZerZ5X5gnu-5Bs_lIBkzgo",
    authDomain: "loginsuradualafg.firebaseapp.com",
    projectId: "loginsuradualafg",
    storageBucket: "loginsuradualafg.appspot.com",
    messagingSenderId: "1039957200460",
    appId: "1:1039957200460:web:f52d7c6c92eb453652eee9",
    measurementId: "G-R5NCXZ3MPG"
  };

  const app = initializeApp(firebaseConfig);

  let avatar=document.getElementById("avatar")
  let botonsalida=document.getElementById("botonsalir")

  const auth =getAuth()
  onAuthStateChanged(auth,(user)=>{
     avatar.classList.remove("invisible")
     avatar.textContent=user.email
  })

  botonsalida.addEventListener("click",function(){

    signOut(auth).then(()=>{
    avatar.classList.add("invisible")
    window.location.href=("./views/login.html")

})

})
