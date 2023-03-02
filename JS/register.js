var form = document.getElementById('client_form');
form.addEventListener('submit', setClient);

function setClient(event) {
  // Faz com que a página não seja recarregada
  event.preventDefault();

  if (!validateForm()) {
    return;
  }

  // Cria um novo objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // Define a função a ser executada quando a requisição for concluída
  xhr.onreadystatechange = function() {
    // Verifica se a requisição foi concluída com sucesso
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      // Exibe uma mensagem na tela de acordo com a resposta do PHP
      if (this.responseText === "success") {
        window.location.href = "../UI/loginPage.html";
      } else if (this.responseText === "email_already_exists") {
        alert("Este e-mail já está cadastrado. Por favor, insira um e-mail diferente.");
        return false;
      } else if (this.responseText === "cpf_already_exists") {
        alert("Este CPF já está cadastrado. Por favor, insira um CPF diferente.");
        return false;
      } else {
        alert("Erro ao cadastrar o usuário. Por favor, tente novamente.");
        return false;
      }
     }
  }
  var formData = new FormData(form);
  xhr.open("POST", "../ScriptPHP/register.php", true);
  xhr.send(formData);

}
function validateForm() {
  // Obtém os campos do formulário
  let name = document.getElementById("user_name");
  let cpf = document.getElementById("user_cpf");
  let email = document.getElementById("user_email");
  let password = document.getElementById("user_password");

  // Faz a validação dos campos
  if (!name.value || !cpf.value || !email.value || !password.value) {
    alert("Por favor, preencha todos os campos.");
    return false;
  }
  if (!validateEmail(email.value)){
    alert("por favor digite um email válido");
    return false;
  }
  if (!validateCPF(cpf.value)) {
    alert("Por favor, digite um CPF válido.");
    return false;
  }
  return true;
}
function validateCPF(cpf) {

    cpf = cpf.replace(/[^\d]/g, '');

    if (cpf.length !== 11) {
      return false;

    }

    if (/^(\d)\1{10}$/.test(cpf)) {
      return false;
    }

    var sum = 0;
    for (var i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }

    var mod = sum % 11;
    var digit1 = mod < 2 ? 0 : 11 - mod;

    sum = 0;
    for (var i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }

    mod = sum % 11;
    var digit2 = mod < 2 ? 0 : 11 - mod;

    if (digit1 !== parseInt(cpf.charAt(9)) || digit2 !== parseInt(cpf.charAt(10))) {
      return false;
    }

return true; 
}
function validateEmail(email) {
  // Define uma expressão regular para validar o endereço de e-mail
  const expressaoRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Testa se o endereço de e-mail é válido usando a expressão regular
  if (expressaoRegular.test(email)) {
    return true;
  } else {
    return false;
  }
}