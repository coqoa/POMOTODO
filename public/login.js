function printName(){
    console.log('printName');
    var loginForm = document.loginForm;
    var loginId = loginForm.loginId.value;
    var password = loginForm.loginPassword.value;
    loginForm.submit();
}
