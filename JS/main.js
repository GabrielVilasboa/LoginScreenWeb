
    let data = JSON.parse(localStorage.getItem("user_data"));
    if (!data) {
        alert("Não foi possível recuperar os dados do usuário");
    }else{
        document.getElementById("name").innerHTML = data.username;
        document.getElementById("email").innerHTML = data.email;
        document.getElementById("password").innerHTML = data.password;
        document.getElementById("cpf").innerHTML = data.cpf;
    }