// const e = require("connect-flash");

function signup(){
    var signupForm = document.signupForm;
    var loginId = signupForm.loginId.value;
    var password = signupForm.password.value;
    var passwordCheck = signupForm.passwordCheck.value;
    var email = signupForm.email.value;
    var number = signupForm.number.value;
    var birthday = signupForm.birthday.value;
    var gender = signupForm.gender.value;

    console.log(loginId);
    console.log(password);
    console.log(passwordCheck);
    console.log(email);
    console.log(number);
    console.log(birthday);
    console.log(gender);
    
    if(loginId == '' || password == '' || passwordCheck == '' || email == '' || number == '' || birthday == '' || gender == ''){
        alert("항목을 모두 입력해주세요.");
    }else {
        if(password === passwordCheck){
            signupForm.submit();
        }else{
            alert('비밀번호가 일치하지 않습니다')
        }
    }
}
// 폼 예외처리 나중에
// let idBlur = document.querySelector("#signupId");
// idBlur.onblur = function (e) {
//  // let signupForm = document.signupForm;
//     let idValue= signupForm.loginId.value;
//     $.ajax({
//         method : 'POST',
//         url : '/signup-id-check',
//         data : {id : idValue} 
//     }).done(function(result){
//         console.log('모달')
//     })
// }
let passwordBlur = document.querySelector("#signupPasswordCheck");
let passwordMessageMatch = document.getElementById('password-message-match');
let passwordMessageUnmatch = document.getElementById('password-message-unmatch');
let passwordMessageLength = document.getElementById('password-message-length');
passwordBlur.onblur = function (e) {
    var signupForm = document.signupForm;
    var password = signupForm.password.value;
    var passwordCheck = signupForm.passwordCheck.value;
    if(password !=='' && passwordCheck !== ''){
        if(password.length > 4){
            if(password === passwordCheck){
                passwordMessageMatch.style.display = "inline";
                passwordMessageUnmatch.style.display = "none";
                passwordMessageLength.style.display = "none";
            }else{
                passwordMessageMatch.style.display = "none";
                passwordMessageUnmatch.style.display = "inline";
                passwordMessageLength.style.display = "none";
            }
        }else if(password.length < 5){
            passwordMessageMatch.style.display = "none";
            passwordMessageUnmatch.style.display = "none";
            passwordMessageLength.style.display = "inline";
        }
    }
}
function mailCheck() {
    var email = document.getElementById('signupEmail').value;
    let  emailCehckMatch = document.getElementById('email-check-match');
    let  emailCheckUnmatch = document.getElementById('email-check-unmatch');
    console.log(email);
    var regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (regEmail.test(email) === true) {
        emailCehckMatch.style.display = "inline";
        emailCheckUnmatch.style.display = "none";
    }else{
        emailCehckMatch.style.display = "none";
        emailCheckUnmatch.style.display = "inline";
    }
}
let numberMessage = document.getElementById('number-message');
let numberMessageCount = document.getElementById('number-message-count');
function onlyNumber1(loc) {
    numberMessageCount.style.display = "none";
    if(/[^0123456789]/g.test(loc.value)) {
        loc.value = "";
        loc.focus();
        numberMessage.style.display = "inline";
    }
}
function numberBlur(e) {
    if(e.value.length>10){
        numberMessageCount.style.display = "inline";
        numberMessage.style.display = "none";
    }else{
        numberMessageCount.style.display = "none";
        numberMessage.style.display = "inline";  
    }
}

let birthdayMessage = document.getElementById('birthday-message');
let birthdayMessageCount = document.getElementById('birthday-message-count');
function onlyNumber2(loc) {
    birthdayMessageCount.style.display = "none";
    if(/[^0123456789]/g.test(loc.value)) {
        loc.value = "";
        loc.focus();
        birthdayMessage.style.display = "inline";
    }
}
function numberBlur2(e) {
    if(e.value.length>5){
        birthdayMessageCount.style.display = "inline";
        birthdayMessage.style.display = "none";
    }else{
        birthdayMessageCount.style.display = "none";
        birthdayMessage.style.display = "inline";
    }
}
// 1. 서버에서 id체크해서 있을때 / 없을때 메시지출력하도록
// 2. 유효성검사를 끝내면 서버에 값을 전송하도록 코드 구현해야함