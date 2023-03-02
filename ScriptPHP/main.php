<?php
    include("mysql_connect.php");
    
    $email = $_POST['email'];

    $check_table = $conn->query("SELECT * FROM clients WHERE email = '$email'");

    if($check_table->num_rows){
        $rows = $check_table->fetch_assoc();

        $json = json_encode($rows);

        echo $json;
    }else{
        echo 'error';
    }
    mysqli_close($conn);
?>