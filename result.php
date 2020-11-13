<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $toMail = 'rubenmavarezb@gmail.com';
    $subject = 'You have a new message from '.$name;
     
    if(!empty($name) && !empty($email)){
 
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){
            mail($toMail, $subject, $message);
        }
    } else {
        //header('Location:index.html');
        echo json_encode('hola gay');
    }
