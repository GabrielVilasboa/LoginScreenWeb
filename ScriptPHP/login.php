<?php

    include("mysql_connect.php");

    $email = $_POST["user_email"];
    $password = $_POST["user_password"];

    $stmt = $conn->prepare('SELECT `email` , `password` FROM clients WHERE email = ? AND `password` = ?');
    $stmt -> bind_param("ss", $email, $password);
    $stmt -> execute();
    $result = $stmt->get_result();

    if($result->num_rows == 1){

        echo $email;

    } else {
        echo "invalid_email_or_password";
    }
    mysqli_close($conn);



?>