<?php

    $hostname = "localhost";
    $database = "codebank";
    $user = "root";
    $password = "";

    $conn = new mysqli($hostname, $user, $password, $database);

    
    if ($conn->connect_error) {
        die("Falha na conexão: " . $conn->connect_error);
    }

?>