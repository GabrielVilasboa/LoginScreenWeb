<?php

    include("mysql_connect.php");

    $email = $_POST["user_email"];
    $senha = $_POST["user_password"];

    $stmt = $conn->prepare('SELECT `email` , `password` FROM clients WHERE email = ?');
    $stmt -> bind_param("s", $email);
    $stmt -> execute();
    $result = $stmt->get_result();

    if($result->num_rows == 1){

        $row = $result->fetch_assoc(); 

        if($senha == $row["password"]){
            echo "success";
        }else {
            echo "incorrect_password";
        }
    } else {
        echo "invalid_email";
    }


?>