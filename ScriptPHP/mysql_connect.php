<?php
    $hostname = "localhost";
    $database = "loginpage";
    $user = "root";
    $password = "";

    $conn = new mysqli($hostname, $user, $password, $database);
    
    if ($conn->connect_error) {
        die("Falha na conexão: " . $conn->connect_error);
    }
?>
