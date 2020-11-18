<?php
    $destinatario = 'rubene250@outlook.com';

    $name = $_POST['name'];
    $mail = $_POST['email'];
    $message = $_POST['message'];

    $messageComplete = $message . "\nAtentamente: " . $name;

    mail($destinatario, $mail, $message);

    echo "<script>alert('correo enviado exitosa mente')</script>";
    echo "<script>setTimeout(\"location.href='index.html'\",10)</script>";

?>