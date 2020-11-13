<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
     
    if(!empty($name) && !empty($email)){
 
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){
            echo json_encode('mundo');
        }
    } else {
        //header('Location:index.html');
        echo json_encode('hola gay');
    }