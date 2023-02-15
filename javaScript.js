var buttonRegister = window.document.getElementById('register')
buttonRegister.addEventListener('click', getClient)

function getClient(){
    let name = window.document.getElementById('user_name')
    let email= window.document.getElementById('user_email')
    let password = window.document.getElementById('user_password')
    let confirmPassword = window.document.getElementById('user_password_confirm')

    

    registerUser(password.value, confirmPassword.value, buttonRegister)

}

function registerUser(password, confirmPassword , button){

    if(password != null &&
    confirmPassword != null &&
    password == confirmPassword){
        window.location.href = 'index.html'
    }
}

