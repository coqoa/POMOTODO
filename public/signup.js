function signup(){
    var signupForm = document.signupForm;
    var loginId = signupForm.loginId.value;
    var password = signupForm.password.value;

    var email = signupForm.email.value;
    var number = signupForm.number.value;
    var birthday = signupForm.birthday.value;
    var gender = signupForm.gender.value;
    
    if(!loginId || !password || !email || !number || !birthday || !gender){
        alert("항목을 모두 입력해주세요.")
    }else{
        signupForm.submit();
    }
}