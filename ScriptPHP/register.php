<?php
    include("mysql_connect.php");

    $name = $_POST["user_name"];
    $email = $_POST["user_email"];
    $cpf = $_POST["user_cpf"];
    $password = $_POST["user_password"];

    $query = "SELECT * FROM clients WHERE email = '$email'";
    $result = mysqli_query($conn, $query);
    $num_rows = mysqli_num_rows($result);

    if ($num_rows > 0) {
        echo "email_already_exists";
        exit;
    } else {

        $query = "SELECT * FROM clients WHERE cpf = '$cpf'";
        $result = mysqli_query($conn, $query);
        $num_rows = mysqli_num_rows($result);

        if ($num_rows > 0) {
            echo "cpf_already_exists";
            exit;
        } else {
            $stmt = $conn->prepare('INSERT INTO clients (`username`, `email`, `password`, `cpf`) VALUES (?, ?, ?, ?)');
            $stmt -> bind_param( "ssss", $name, $email, $password, $cpf);
            $stmt -> execute();
            echo "success";
        }
    }
    mysqli_close($conn);
?>