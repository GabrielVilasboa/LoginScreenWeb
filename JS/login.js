
let form = document.getElementById('login_form');
let email = document.getElementById('user_email');
let password = document.getElementById('user_password');
form.addEventListener('submit', getClient);

function getClient(event) {
    event.preventDefault();


    if(!validateEmail(email.value)){
        alert("email invalido");
        return;
    }
    if(password.value == ''){
        alert("digite o password"); 
        return;
    }

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = processLoginResponse;
    let formData = new FormData(form);
    xhr.open("POST", "../ScriptPHP/login.php", true);
    xhr.send(formData);
}

function validateEmail(email) {
    // Define uma expressão regular para validar o endereço de e-mail
    const expressaoRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Testa se o endereço de e-mail é válido usando a expressão regular
    if (expressaoRegular.test(email)) {
      return true;
    } else {
      return false
    }
  }

function processLoginResponse(){
    if(this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        if (this.responseText === email.value){
            writeInMain(this.responseText);
            window.location.href = "../UI/mainPage.html";
        }else if(this.responseText === "invalid_email_or_password"){
            alert("Email ou Senha invalido");
        }else {
            alert("algo deu errado");
        }
    }
}

function writeInMain(email) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            if (this.responseText === "error") {
                alert("erro");
            } else {
                console.log(this.responseText);

                let data = JSON.parse(this.responseText);
                console.log(this.responseText);
                localStorage.setItem("user_data", JSON.stringify(data));
            }
        }
    };
    let formData = new FormData();
    formData.append("email", email);
    xhr.open("POST", "../ScriptPHP/main.php", true);
    xhr.send(formData);
}