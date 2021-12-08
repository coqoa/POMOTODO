// //네비 날짜
// function setClock(){
//     let dateObject = new Date();
//     let year = dateObject.getFullYear();
//     let month = dateObject.getMonth()+1;
//     let date = dateObject.getDate();
//     let hour = addStringZero(dateObject.getHours());
//     let min = addStringZero(dateObject.getMinutes());
//     document.getElementById("POMOTODO__clock").innerHTML = year + ". " + month + ". " + date + "ﾠ " + hour+ " : " + min ; 
// }
// function addStringZero(time){
//     if(parseInt(time)<10)
//         return "0"+time;
//     else
//         return time;
// }
// window.onload = function(){
//     setClock();
//     setInterval(setClock,1000);
// }
// let modalButton = document.getElementById('modal-button-id-check');
// let modalWindow = document.getElementById('modal-window-id-check');
// let loginButton = document.getElementById('loginButton');
// let logoutButton = document.getElementById('logoutButton');
// let unregister = document.getElementById('unregister');
// let unregisterCheck = document.getElementById('unregister-check');
// let unregisterOk = document.getElementById('unregister-ok');
// let unregisterNo = document.getElementById('unregister-no');
// let signupLoginModal = document.getElementById('signup-login-modal');
// let hello = document.getElementById('hello');
// let helloUser = document.getElementById('hello-user');

// modalButton.addEventListener("click", e=>{
//     if(modalWindow.style.display == 'flex')
//         modalWindow.style.display = "none"
//     else
//         modalWindow.style.display = "flex"
//         if(modalButton.innerText == "log in"){
            
//             loginButton.style.display = "flex"
//             signupLoginModal.style.display = "flex"
//             hello.style.display="inline-block"
//             // logoutButton.style.display = "none"
//         }
//         else{
//             logoutButton.style.display = "flex"
//             unregister.style.display = "flex"
//             helloUser.style.display="inline-block"
//             // loginButton.style.display = "none"
//         }
// })

// loginButton.addEventListener("click", e=>{
//     location.href='/login';
//     // testReplace.style.display = "none"
// })
// logoutButton.addEventListener("click", e=>{
//     location.href='/logout';
// })

// unregister.addEventListener("click", e=>{
//     unregisterCheck.style.display = "inline-block"
// })
// unregisterOk.addEventListener("click", e=>{
//     location.href='/deleteUser';
// })
// unregisterNo.addEventListener("click", e=>{
//     unregisterCheck.style.display = "none"
// })
// signupLoginModal.addEventListener("click", e=>{
//     location.href='/signup';
// })