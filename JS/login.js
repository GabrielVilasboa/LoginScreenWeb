
var form = document.getElementById('login_form');
form.addEventListener('submit', getClient);

function getClient(event) {
    event.preventDefault();

    let email = document.getElementById('user_email');
    let password = document.getElementById('user_password');

    if(!validateEmail(email.value)){
        alert("email invalido");
        return;
    }
    if(password.value == ''){
        alert("digite o password");
        return;
    }

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            if (this.responseText === "success") {
                window.location.href = "../UI/index.html";
            }else if(this.responseText === "incorrect_password"){
                alert("Senha incorreta");
                return false;
            }else if(this.responseText === "invalid email"){
                alert("Email não cadastrado");
                return false;
            }else {
                alert("algo deu errado");
                return false;
            }
        }
    }
    var formData = new FormData(form);
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