function signup(){
    var signupForm = document.signupForm;
    var loginId = signupForm.loginId.value;
    var password = signupForm.password.value;
    var passwordCheck = signupForm.passwordCheck.value;
    var email = signupForm.email.value;
    var number = signupForm.number.value;
    var birthday = signupForm.birthday.value;
    var gender = signupForm.gender.value;    
    if(loginId == '' || password == '' || passwordCheck == '' || email == '' || number == '' || birthday == '' || gender == ''){
        alert("Please enter all fields");
    }else{
        if(isPasswordCheck && isMailCheck && isNumberCheck && isBirthdayCheck){
            signupForm.submit();
        }else{
            if(!isPasswordCheck)
                    alert('check password')
            if(!isMailCheck)
                alert('check e-mail')
            if(!isNumberCheck)
                alert('check number')
            if(!isBirthdayCheck)
                alert('check birthday')
        }
    }
}
let isPasswordCheck;
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
                isPasswordCheck = true;
            }else{
                passwordMessageMatch.style.display = "none";
                passwordMessageUnmatch.style.display = "inline";
                passwordMessageLength.style.display = "none";
                isPasswordCheck = false;
            }
        }else if(password.length < 5){
            passwordMessageMatch.style.display = "none";
            passwordMessageUnmatch.style.display = "none";
            passwordMessageLength.style.display = "inline";
            isPasswordCheck = false
        }
    }
}
let isMailCheck;
function mailCheck() {
    var email = document.getElementById('signupEmail').value;
    let  emailCehckMatch = document.getElementById('email-check-match');
    let  emailCheckUnmatch = document.getElementById('email-check-unmatch');
    console.log(email);
    var regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (regEmail.test(email) === true) {
        emailCehckMatch.style.display = "inline";
        emailCheckUnmatch.style.display = "none";
        isMailCheck = true;
    }else{
        emailCehckMatch.style.display = "none";
        emailCheckUnmatch.style.display = "inline";
        isMailCheck = false;
    }
}
let isNumberCheck;
let numberMessage = document.getElementById('number-message');
let numberMessageCount = document.getElementById('number-message-count');
function onlyNumber1(loc) {
    numberMessageCount.style.display = "none";
    if(/[^0123456789]/g.test(loc.value)) {
        loc.value = "";
        loc.focus();
        numberMessage.style.display = "inline";
        isNumberCheck = false;
    }
}
function numberBlur(e) {
    if(e.value.length>10){
        numberMessageCount.style.display = "inline";
        numberMessage.style.display = "none";
        isNumberCheck = true;
    }else{
        numberMessageCount.style.display = "none";
        numberMessage.style.display = "inline";  
        isNumberCheck = false;
    }
}
let isBirthdayCheck;
let birthdayMessage = document.getElementById('birthday-message');
let birthdayMessageCount = document.getElementById('birthday-message-count');
function onlyNumber2(loc) {
    birthdayMessageCount.style.display = "none";
    if(/[^0123456789]/g.test(loc.value)) {
        loc.value = "";
        loc.focus();
        birthdayMessage.style.display = "inline";
        isBirthdayCheck = false;
    }
}
function numberBlur2(e) {
    if(e.value.length>5){
        birthdayMessageCount.style.display = "inline";
        birthdayMessage.style.display = "none";
        isBirthdayCheck = true;
    }else{
        birthdayMessageCount.style.display = "none";
        birthdayMessage.style.display = "inline";
    
        isBirthdayCheck = false;
    }
}

// id중복체크 ajax요청
let idBlur = document.querySelector("#signupId");
let validatdId = document.querySelector(".validate-id");
idBlur.onblur = function (e) {
    let signupForm = document.signupForm;
    let idValue= signupForm.loginId.value;
    $.ajax({
        method : 'POST',
        url : '/signup-id-check',
        data : {id : idValue},
        success : function(data) {
            if(validatdId.style.display == 'none'){
                validatdId.style.display = 'block';
            }
            $(validatdId).html (data.message)
        },
        error : function(xhr, status, error) {
            // console.log('아이디체크 실패');
        }
    })
}
let inputId = document.querySelector('#signupId');
inputId.addEventListener(onfocus, validate);
function validate(){
    validatdId.style.display = 'none';
}
