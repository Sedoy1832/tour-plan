<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];

// Формирование самого письма
$title = "С сайта Best tour plan";

if(!$email){
$body = "Имя пользователя: ${name}, телефон ${phone}, сообщение: ${message}";
} else if (!$name){
  $body = "Подписка. Email: ${email}";
} else {
$body = "Модальное окно. Имя пользователя: ${name}, телефон ${phone}, сообщение: ${message}, email: ${email}";
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'xkayx@bk.ru'; // Логин на почте
    $mail->Password   = 'Sedoy1832'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('xkayx@bk.ru', 'Юрий Демин'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('sedoy1832@gmail.com');  
    // Ещё один, если нужен

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;    

  // Проверяем отравленность сообщения
  if ($mail->send()) {$result = "success";} 
  else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location:thankyou.html');
//echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);