//네비 날짜
function setClock(){
    let dateObject = new Date();
    let year = dateObject.getFullYear();
    let month = dateObject.getMonth()+1;
    let date = dateObject.getDate();
    let hour = addStringZero(dateObject.getHours());
    let min = addStringZero(dateObject.getMinutes());
    document.getElementById("POMOTODO__clock").innerHTML = year + ". " + month + ". " + date + " . " + hour+ " : " + min ; 
}
function addStringZero(time){
    if(parseInt(time)<10)
        return "0"+time;
    else
        return time;
}
window.onload = function(){
    setClock();
    setInterval(setClock,1000);
}
let modalButton = document.getElementById('modal-button-id-check');
let modalWindow = document.getElementById('modal-window-id-check');
let loginButton = document.getElementById('loginButton');
let logoutButton = document.getElementById('logoutButton');
let unregister = document.getElementById('unregister');
let unregisterCheck = document.getElementById('unregister-check');
let unregisterOk = document.getElementById('unregister-ok');
let unregisterNo = document.getElementById('unregister-no');
let signupLoginModal = document.getElementById('signup-login-modal');
let hello = document.getElementById('hello');
let helloUser = document.getElementById('hello-user');
let emailModal = document.querySelector('.modal-overlay');
let loginModalClose = document.querySelector('.modal-close');

modalButton.addEventListener("click", e=>{
    if(modalWindow.style.display == 'flex'){
        modalWindow.style.display = "none"
        loginModalClose.style.display = "none"
    }else{
        loginModalClose.style.display = "inline"
        modalWindow.style.display = "flex"
        if(modalButton.innerText == "log in"){
            loginButton.style.display = "flex"
            signupLoginModal.style.display = "flex"
            hello.style.display="inline-block"
        }
        else{
            logoutButton.style.display = "flex"
            unregister.style.display = "flex"
            helloUser.style.display="inline-block"
        }
    }
})
//개발자 이메일 확인 모달창 구현
let modal = document.getElementById("modal");
let btnModal = document.getElementById("mail-btn");
btnModal.addEventListener("click", e => { // 누르면 모달창 생성, 한번 더 누르면 모달창 종료
    if (modal.style.display == "flex"){
        modal.style.display = "none";
        unregisterCheck.style.display = "none"
    }
    else{
        modal.style.display = "flex";
        unregisterCheck.style.display = "none"
    }
})
window.addEventListener("keyup", e => { //esc키 눌렀을 때 모달창 종료
    if(modal.style.display === "flex" && e.key === "Escape") 
        modal.style.display = "none";
        modalWindow.style.display = "none"
    loginModalClose.style.display = "none"
    emailModal.style.display = "none"
    unregisterCheck.style.display = "none"
})
//모달창 밖을 클릭하면 모달창종료
loginModalClose.addEventListener("click", e=>{
    modalWindow.style.display = "none"
    loginModalClose.style.display = "none"
    emailModal.style.display = "none"
    unregisterCheck.style.display = "none"
    copyrightModal.style.display = 'none'
})

loginButton.addEventListener("click", e=>{
    location.href='/login';
})
logoutButton.addEventListener("click", e=>{
    location.href='/logout';
})

unregister.addEventListener("click", e=>{
    unregisterCheck.style.display = "inline-block"
    emailModal.style.display = "none"
})
unregisterOk.addEventListener("click", e=>{
    location.href='/deleteUser';
})
unregisterNo.addEventListener("click", e=>{
    unregisterCheck.style.display = "none"
})
signupLoginModal.addEventListener("click", e=>{
    location.href='/signup';
})


// 검색창 관련
let query = document.querySelector('.query')
let searchBtn = document.querySelector('.searchBtn')
let searchBarBtn = document.querySelector('.searchBarBtn')
let bodyClass = document.querySelector('.body')

let isShift, isEnter;
document.onkeyup = function(e){
    if(e.which == 16) isShift = false;
    if(e.which == 13) isEnter = false;
}
document.onkeydown = function(e){
    if(e.which == 16) isShift = true;
    if(e.which == 13) isEnter = true;

    console.log(isShift, isEnter)
    if(isShift==true && isEnter == true){
        query.style.display = "inline";
        query.value = "";
        query.focus();
        // searchBarBtn.style.display = "none";
        return false;
    }
}
function search(){
    if(query.value.length>0){
        let url = 'http://www.google.com/search?q='+query.value; 
        window.open(url)
    }
    query.value = "";
    isEnter = false;
    isShift = false;
}
searchBarBtn.onclick = function(){
    query.style.display = "inline";
    query.value = "";
    query.focus();

    // searchBarBtn.style.display = "none";
    isEnter = false;
    isShift = false;
}
query.onblur = function(){
    query.style.display = "none";
    // searchBarBtn.style.display = "inline";
    isEnter = false;
    isShift = false;
}
let copyrightBtn = document.querySelector(".copyright");
let copyrightModal = document.querySelector(".copyright-modal");
copyrightBtn.onclick = function(){
    // copyrightModal.style.display = none;
    console.log(copyrightModal.style.display == 'none');
    if(copyrightModal.style.display == 'none'){
        copyrightModal.style.display = 'inline'
        loginModalClose.style.display = "inline"
    }else{
        copyrightModal.style.display = 'none'
    }
}
